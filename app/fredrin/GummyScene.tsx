'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js'
import * as BGU from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import Delaunator from 'delaunator'

type Pt = [number, number]

const BG = '#F2F2ED'
const ASPECT = 7 / 3
// Below this container width the camera zooms in slightly so the row fills more of the frame.
const NARROW = 640

// ---------- procedural surface noise (normal map) ----------
function hash(x: number, y: number) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s) }
function vnoise(x: number, y: number) {
  const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf)
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1)
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v
}
function makeNormalMap(size = 512) {
  const h = new Float32Array(size * size)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let n = 0, amp = 1, f = 6 / size
    for (let o = 0; o < 4; o++) { n += vnoise(x * f, y * f) * amp; amp *= 0.5; f *= 2.1 }
    h[y * size + x] = n
  }
  const cv = document.createElement('canvas'); cv.width = cv.height = size
  const ctx = cv.getContext('2d')!; const img = ctx.createImageData(size, size)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const l = h[y * size + ((x - 1 + size) % size)], r = h[y * size + ((x + 1) % size)]
    const t = h[((y - 1 + size) % size) * size + x], b = h[((y + 1) % size) * size + x]
    const nx = (l - r) * 2.2, ny = (t - b) * 2.2, nz = 1
    const len = Math.hypot(nx, ny, nz); const i = (y * size + x) * 4
    img.data[i] = (nx / len * 0.5 + 0.5) * 255; img.data[i + 1] = (ny / len * 0.5 + 0.5) * 255
    img.data[i + 2] = (nz / len * 0.5 + 0.5) * 255; img.data[i + 3] = 255
  }
  ctx.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(cv); tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  return tex
}

// ---------- material ----------
type GummyOpts = { rough?: number; tr?: number; th?: number; att?: string; ad?: number; glow?: number; iri?: number; vc?: boolean }
function gummy(normalTex: THREE.Texture, hex: string, o: GummyOpts = {}) {
  const c = new THREE.Color(hex)
  return new THREE.MeshPhysicalMaterial({
    color: c,
    roughness: o.rough ?? 0.27,
    transmission: Math.min(0.92, (o.tr ?? 0.62) + 0.18),
    thickness: o.th ?? 1.1,
    ior: 1.36,
    attenuationColor: new THREE.Color(o.att ?? hex),
    attenuationDistance: (o.ad ?? 0.32) * 1.9,
    clearcoat: 0.55, clearcoatRoughness: 0.22,
    specularIntensity: 0.5,
    sheen: 0.35, sheenRoughness: 0.55, sheenColor: c.clone().lerp(new THREE.Color('#fff'), 0.55),
    emissive: c.clone().multiplyScalar(o.glow ?? 0.07),
    iridescence: o.iri ?? 0, iridescenceIOR: 1.3,
    normalMap: normalTex, normalScale: new THREE.Vector2(0.07, 0.07),
    vertexColors: !!o.vc,
  })
}

// ---------- geometry helpers ----------
function resample(pts: Pt[], step: number) {
  const out: Pt[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i], b = pts[(i + 1) % pts.length]
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / step))
    for (let k = 0; k < n; k++) out.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n])
  }
  return out
}
function chaikin(pts: Pt[], it = 3) {
  for (let k = 0; k < it; k++) {
    const out: Pt[] = []
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length]
      out.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75])
    }
    pts = out
  }
  return pts
}
const smooth = (pts: Pt[], step = 0.06, it = 3) => chaikin(resample(pts, step), it)

function finish(g: THREE.BufferGeometry, { seed = 1, wobble = 0.01, tess = 0.035, keepColor = false } = {}) {
  for (const k of Object.keys(g.attributes)) if (k !== 'position' && !(keepColor && k === 'color')) g.deleteAttribute(k)
  if (g.index) g = g.toNonIndexed()
  if (tess) g = new TessellateModifier(tess, 8).modify(g)
  for (const k of Object.keys(g.attributes)) if (k !== 'position') g.deleteAttribute(k)
  g = BGU.mergeVertices(g, 1e-4)
  g.computeVertexNormals()
  const pos = g.attributes.position, nor = g.attributes.normal
  const uv = new Float32Array(pos.count * 2)
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i)
    const n = Math.sin(x * 5.3 + seed) * Math.sin(y * 4.7 + seed * 2.1) * Math.sin(z * 6.1 + seed * 0.7)
      + 0.5 * Math.sin(x * 11.2 - seed) * Math.sin(y * 9.4 + seed)
    const d = n * wobble
    pos.setXYZ(i, x + nor.getX(i) * d, y + nor.getY(i) * d, z + nor.getZ(i) * d)
    uv[i * 2] = x * 0.9 + z * 0.4 + seed * 0.37; uv[i * 2 + 1] = y * 0.9 + seed * 0.21
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2))
  g.computeVertexNormals()
  return g
}
const mesh = (g: THREE.BufferGeometry, m: THREE.Material) => { const o = new THREE.Mesh(g, m); o.castShadow = true; return o }

// inflated, mould-like gummy body: height grows with distance from the outline
function segDist(px: number, py: number, ax: number, ay: number, bx: number, by: number) {
  const dx = bx - ax, dy = by - ay; const l2 = dx * dx + dy * dy || 1e-12
  let t = ((px - ax) * dx + (py - ay) * dy) / l2; t = Math.max(0, Math.min(1, t))
  return Math.hypot(px - ax - dx * t, py - ay - dy * t)
}
function polyDist(px: number, py: number, pts: Pt[], closed = true) {
  let d = Infinity; const n = pts.length
  for (let i = 0; i < (closed ? n : n - 1); i++) { const a = pts[i], b = pts[(i + 1) % n]; d = Math.min(d, segDist(px, py, a[0], a[1], b[0], b[1])) }
  return d
}
type InflateOpts = { T?: number; Rb?: number; dome?: number; back?: number; seed?: number; wobble?: number; tess?: number; extra?: ((x: number, y: number) => number) | null }
function inflate(pts: Pt[], { T = 0.11, Rb = 0.14, dome = 0.035, back = 0.72, seed = 1, wobble = 0.007, tess = 0.009, extra = null }: InflateOpts = {}) {
  let area = 0; for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; area += a[0] * b[1] - b[0] * a[1] }
  if (area < 0) pts = pts.slice().reverse()
  // evenly spaced Delaunay mesh: resampled outline + jittered interior grid
  const ring = resample(pts, tess)
  const xs = ring.map(p => p[0]), ys = ring.map(p => p[1])
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]
  const inside = (x: number, y: number) => { let c = false; for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) { const a = ring[i], b = ring[j]; if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) c = !c } return c }
  const P2: Pt[] = ring.slice()
  // rows parallel to the outline so the rounded rim follows the shape, not the grid
  let area2 = 0; for (let i = 0; i < ring.length; i++) { const p = ring[i], q = ring[(i + 1) % ring.length]; area2 += p[0] * q[1] - q[0] * p[1] }
  const sgn = area2 > 0 ? 1 : -1, ROWS = 5
  for (let k = 1; k <= ROWS; k++) {
    const off = k * tess * 0.8
    for (let i = 0; i < ring.length; i++) {
      const p = ring[(i - 1 + ring.length) % ring.length], q = ring[(i + 1) % ring.length]
      let tx = q[0] - p[0], ty = q[1] - p[1]; const l = Math.hypot(tx, ty) || 1; tx /= l; ty /= l
      const x = ring[i][0] - ty * off * sgn, y = ring[i][1] + tx * off * sgn
      if (!inside(x, y) || Math.abs(polyDist(x, y, ring) - off) > tess * 0.25) continue
      let ok = true; for (let j = ring.length; j < P2.length && ok; j++) if (Math.hypot(P2[j][0] - x, P2[j][1] - y) < tess * 0.55) ok = false
      if (ok) P2.push([x, y])
    }
  }
  const sy = tess * 0.866, lim = (ROWS + 0.6) * tess * 0.8
  for (let r = 0, y = y0; y <= y1; y += sy, r++) for (let x = x0 + (r % 2) * tess / 2; x <= x1; x += tess) {
    if (inside(x, y) && polyDist(x, y, ring) > lim) P2.push([x, y])
  }
  const del = Delaunator.from(P2)
  const tris: number[] = []
  for (let i = 0; i < del.triangles.length; i += 3) {
    const a = P2[del.triangles[i]], b = P2[del.triangles[i + 1]], c = P2[del.triangles[i + 2]]
    if (inside((a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3)) tris.push(del.triangles[i + 2], del.triangles[i + 1], del.triangles[i])
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P2.flatMap(p => [p[0], p[1], 0])), 3))
  g.setIndex(tris)
  pts = ring
  const pos = g.attributes.position, idx = g.index!.array, n = pos.count
  const d = new Float32Array(n); let dmax = 0
  for (let i = 0; i < n; i++) { d[i] = polyDist(pos.getX(i), pos.getY(i), pts); dmax = Math.max(dmax, d[i]) }
  const H = new Float32Array(n)
  for (let i = 0; i < n; i++) {
    const u = Math.min(d[i] / Rb, 1)
    const v = d[i] / dmax
    H[i] = T * Math.pow(Math.max(0, 1 - (1 - u) * (1 - u)), 0.62) + dome * (1 - (1 - v) * (1 - v))
  }
  // relax medial-axis creases into a soft pillow, leaving the rounded rim intact
  const nb = Array.from({ length: n }, () => new Set<number>())
  for (let i = 0; i < idx.length; i += 3) { const a = idx[i], b = idx[i + 1], c = idx[i + 2]; nb[a].add(b).add(c); nb[b].add(a).add(c); nb[c].add(a).add(b) }
  const nbs = nb.map(x => Array.from(x))
  const wgt = Float32Array.from(d, x => THREE.MathUtils.smoothstep(x, Rb * 0.35, Rb * 1.1) * 0.6)
  for (let it = 0; it < 40; it++) {
    const Hn = H.slice()
    for (let i = 0; i < n; i++) { if (!wgt[i]) continue; let s = 0; for (const j of nbs[i]) s += H[j]; Hn[i] = H[i] + (s / nbs[i].length - H[i]) * wgt[i] }
    H.set(Hn)
  }
  const out = new Float32Array(n * 6)
  for (let i = 0; i < n; i++) {
    const x = pos.getX(i), y = pos.getY(i)
    const wob = 1 + wobble * 6 * (Math.sin(x * 5.3 + seed) * Math.sin(y * 4.7 + seed * 2.1) + 0.5 * Math.sin(x * 11.2 - seed) * Math.sin(y * 9.4 + seed))
    const h = H[i] * wob
    let hf = h; if (extra) hf += extra(x, y) * Math.min(1, d[i] / 0.04)
    out.set([x, y, hf], i * 3); out.set([x, y, -h * back], (n + i) * 3)
  }
  const ind: number[] = []
  for (let i = 0; i < idx.length; i += 3) { ind.push(idx[i], idx[i + 1], idx[i + 2]); ind.push(n + idx[i], n + idx[i + 2], n + idx[i + 1]) }
  let geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(out, 3)); geo.setIndex(ind)
  geo = BGU.mergeVertices(geo, 1e-5)
  g.dispose()
  return finish(geo, { seed, wobble: 0, tess: 0 })
}
const circlePts = (rx: number, ry: number, n = 96, cx = 0, cy = 0) => Array.from({ length: n }, (_, i): Pt => { const t = i / n * Math.PI * 2; return [cx + Math.cos(t) * rx, cy + Math.sin(t) * ry] })

type Gummy = (hex: string, o?: GummyOpts) => THREE.MeshPhysicalMaterial

// ---------- 1. daisy ----------
function daisy(gm: Gummy) {
  const grp = new THREE.Group()
  const pts: Pt[] = []
  for (let i = 0; i < 400; i++) {
    const t = i / 400 * Math.PI * 2 + Math.PI / 2
    const lobe = Math.pow(0.5 + 0.5 * Math.cos(5 * (t - Math.PI / 2)), 0.42)
    const irr = 1 + 0.03 * Math.sin(3 * t + 1.2) + 0.02 * Math.sin(7 * t)
    const r = (0.17 + 0.32 * lobe) * irr
    pts.push([Math.cos(t) * r, Math.sin(t) * r])
  }
  const body = inflate(pts, { T: 0.085, Rb: 0.1, dome: 0.03, seed: 3, wobble: 0.006, tess: 0.009 })
  grp.add(mesh(body, gm('#fbf7f1', { tr: 0.55, att: '#f7ede3', ad: 1.2, rough: 0.24, iri: 0.4, glow: 0.015 })))
  const c = inflate(circlePts(0.15, 0.145), { T: 0.07, Rb: 0.15, dome: 0.0, seed: 9, wobble: 0.006, tess: 0.009 })
  const center = mesh(c, gm('#f9c414', { att: '#f0a800', ad: 0.3, tr: 0.55 }))
  center.position.z = 0.085
  grp.add(center)
  grp.scale.setScalar(1.14)
  return grp
}

// ---------- 2. building block ----------
function brick(gm: Gummy) {
  const grp = new THREE.Group()
  const m = gm('#2358e8', { att: '#1f4be0', ad: 0.36, tr: 0.7, glow: 0.06 })
  const bw = 1.0, bh = 0.56, bd = 0.74
  const body = mesh(finish(new RoundedBoxGeometry(bw, bh, bd, 8, 0.12), { seed: 4, wobble: 0.01, tess: 0.04 }), m)
  body.position.y = bh / 2
  grp.add(body)
  const r = 0.155, h = 0.15
  const prof = [new THREE.Vector2(0.0001, h)]
  for (let i = 0; i <= 10; i++) { const t = i / 10 * Math.PI / 2; prof.push(new THREE.Vector2(r - 0.05 + Math.sin(t) * 0.05, h - 0.05 + Math.cos(t) * 0.05)) }
  prof.push(new THREE.Vector2(r + 0.004, 0.02)); prof.push(new THREE.Vector2(r + 0.03, -0.03))
  let k = 0
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const s = mesh(finish(new THREE.LatheGeometry(prof, 40), { seed: 10 + k++, wobble: 0.004, tess: 0 }), m)
    s.position.set(sx * 0.235, bh - 0.02, sz * 0.18)
    grp.add(s)
  }
  return grp
}

// ---------- 3. cursor ----------
function cursor(gm: Gummy) {
  const raw: Pt[] = [[0, 0.54], [-0.01, -0.33], [0.2, -0.16], [0.3, -0.47], [0.53, -0.38], [0.42, -0.09], [0.66, -0.09]]
  const pts = smooth(raw, 0.13, 4).map((p): Pt => [p[0] - 0.32, p[1]])
  const g = inflate(pts, { T: 0.115, Rb: 0.13, dome: 0.03, seed: 5 })
  const o = mesh(g, gm('#9ae02c', { att: '#86d11a', ad: 0.42, tr: 0.66 }))
  o.rotation.z = 0.06
  const grp = new THREE.Group(); grp.add(o); return grp
}

// ---------- 4. Gumroad G ----------
function letterG(gm: Gummy) {
  const R = 0.5, r = 0.235, a0 = 38 * Math.PI / 180
  const pts: Pt[] = []
  for (let i = 0; i <= 40; i++) { const t = a0 + (Math.PI * 2 - a0) * i / 40; pts.push([Math.cos(t) * R, Math.sin(t) * R]) }
  const bt = 0.07, bb = -0.15, bl = 0.0
  pts.push([R, bt], [bl, bt], [bl, bb])
  const ia = Math.atan2(bb, Math.sqrt(r * r - bb * bb))
  const iStart = Math.PI * 2 + ia
  for (let i = 0; i <= 30; i++) { const t = iStart + (a0 - iStart) * i / 30; pts.push([Math.cos(t) * r, Math.sin(t) * r]) }
  const g = inflate(smooth(pts, 0.07, 4), { T: 0.11, Rb: 0.12, dome: 0.02, seed: 6 })
  const grp = new THREE.Group(); grp.add(mesh(g, gm('#e8327c', { att: '#d81b66', ad: 0.3, tr: 0.7 }))); return grp
}

// ---------- 5. mountain (one gummy, two colours) ----------
function mountain(gm: Gummy) {
  const pts = smooth([[-0.62, -0.46], [0, 0.5], [0.62, -0.46]], 0.16, 4)
  const g = inflate(pts, { T: 0.12, Rb: 0.2, dome: 0.04, seed: 7, tess: 0.009 })
  const pos = g.attributes.position; const col = new Float32Array(pos.count * 3)
  const mint = new THREE.Color('#4fd3a0'), snow = new THREE.Color('#fbf8ef')
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i)
    const line = 0.13 + 0.04 * Math.sin(x * 21 + 0.6) + 0.012 * Math.sin(x * 47)
    const t = THREE.MathUtils.smoothstep(y, line - 0.012, line + 0.012)
    const c = mint.clone().lerp(snow, t)
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3))
  const m = gm('#ffffff', { att: '#b5eed8', ad: 0.7, tr: 0.55, vc: true, glow: 0.0 })
  m.emissive = new THREE.Color('#4fd3a0').multiplyScalar(0.03)
  const grp = new THREE.Group(); grp.add(mesh(g, m)); return grp
}

// ---------- 6. envelope ----------
function envelope(gm: Gummy) {
  const w = 0.56, h = 0.37, rr = 0.11
  const raw: Pt[] = []
  const corners = [[w - rr, h - rr, 0], [-w + rr, h - rr, 1], [-w + rr, -h + rr, 2], [w - rr, -h + rr, 3]]
  for (const [cx, cy, q] of corners) for (let i = 0; i <= 12; i++) {
    const t = q * Math.PI / 2 + i / 12 * Math.PI / 2; raw.push([cx + Math.cos(t) * rr, cy + Math.sin(t) * rr])
  }
  const flap: Pt[] = [[-0.5, 0.31], [0, -0.03], [0.5, 0.31]]
  const low: Pt[][] = [[[-0.5, -0.31], [-0.14, -0.0]], [[0.5, -0.31], [0.14, -0.0]]]
  const extra = (x: number, y: number) => {
    const f = polyDist(x, y, flap, false), l = Math.min(polyDist(x, y, low[0], false), polyDist(x, y, low[1], false))
    return 0.022 * Math.exp(-((f / 0.028) ** 2)) + 0.014 * Math.exp(-((l / 0.024) ** 2)) - 0.008 * Math.exp(-(((f - 0.05) / 0.025) ** 2))
  }
  const g = inflate(raw, { T: 0.1, Rb: 0.13, dome: 0.03, seed: 8, tess: 0.009, extra })
  const grp = new THREE.Group(); grp.add(mesh(g, gm('#ff8a1e', { att: '#f26a00', ad: 0.32, tr: 0.68 }))); return grp
}

// ---------- contact shadow blobs ----------
function makeBlobTex() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const ctx = cv.getContext('2d')!
  const gr = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  gr.addColorStop(0, 'rgba(60,48,36,0.55)'); gr.addColorStop(0.45, 'rgba(60,48,36,0.22)'); gr.addColorStop(1, 'rgba(60,48,36,0)')
  ctx.fillStyle = gr; ctx.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(cv)
}

// Builds the still scene inside `container` and returns a cleanup function.
function mountGummies(container: HTMLElement) {
  const narrowAtStart = container.clientWidth < NARROW

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.NeutralToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.VSMShadowMap
  renderer.transmissionResolutionScale = 1
  renderer.domElement.style.display = 'block'
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  container.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(BG)
  const pmrem = new THREE.PMREMGenerator(renderer)
  const room = new RoomEnvironment()
  const envRT = pmrem.fromScene(room, 0.03)
  scene.environment = envRT.texture
  scene.environmentIntensity = 0.85

  const camera = new THREE.PerspectiveCamera(17.5, ASPECT, 0.1, 100)
  camera.position.set(0, 2.9, 17.2)
  camera.lookAt(0, 0.46, 0)

  // ---------- lights ----------
  const key = new THREE.DirectionalLight('#fff6ec', 2.4)
  key.position.set(-3.5, 9, 6.5)
  key.castShadow = true
  // Phones get half the shadow map; the blur radius is in texels, so halve it too to keep the same softness.
  const shadowScale = narrowAtStart ? 0.5 : 1
  key.shadow.mapSize.set(4096 * shadowScale, 4096 * shadowScale)
  Object.assign(key.shadow.camera, { left: -7, right: 7, top: 4, bottom: -4, near: 1, far: 30 })
  key.shadow.radius = 18 * shadowScale; key.shadow.blurSamples = 25; key.shadow.bias = -0.0004
  scene.add(key)
  const rim = new THREE.DirectionalLight('#ffffff', 1.6); rim.position.set(2, 5, -8); scene.add(rim)
  const fill = new THREE.DirectionalLight('#fff', 0.5); fill.position.set(6, 2, 8); scene.add(fill)
  scene.add(new THREE.HemisphereLight('#ffffff', '#efe6d8', 0.35))

  const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 30),
    new THREE.ShadowMaterial({ color: '#5a4c3e', opacity: 0.13 }))
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground)

  const normalTex = makeNormalMap()
  const gm: Gummy = (hex, o) => gummy(normalTex, hex, o)
  const blobTex = makeBlobTex()

  const makers = [daisy, brick, cursor, letterG, mountain, envelope]
  const gap = 1.78
  makers.forEach((fn, i) => {
    const g = fn(gm)
    const holder = new THREE.Group(); holder.add(g)
    g.rotation.y = i === 1 ? -0.55 : -0.3
    g.rotation.x = i === 1 ? 0 : -0.06
    holder.position.x = (i - 2.5) * gap
    scene.add(holder)
    holder.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(holder)
    holder.position.y -= box.min.y - 0.002
    holder.updateMatrixWorld(true)
    const b2 = new THREE.Box3().setFromObject(holder)
    const sx = (b2.max.x - b2.min.x) * 0.95, sz = Math.max(0.35, (b2.max.z - b2.min.z) * 1.4)
    const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, opacity: i === 1 ? 0.75 : 0.85, toneMapped: false }))
    blob.rotation.x = -Math.PI / 2; blob.scale.set(sx, sz, 1)
    blob.position.set((b2.min.x + b2.max.x) / 2, 0.003, (b2.min.z + b2.max.z) / 2)
    scene.add(blob)
  })

  // Still image: render only when the size or pixel ratio changes (or the GL context comes back).
  let lastWidth = 0
  let lastDpr = 0
  let frame = 0
  const draw = () => {
    frame = 0
    const width = container.clientWidth
    const dpr = Math.min(window.devicePixelRatio, 2)
    if (!width || (width === lastWidth && dpr === lastDpr)) return
    lastWidth = width
    lastDpr = dpr
    camera.zoom = width < NARROW ? 1.1 : 1
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(dpr)
    renderer.setSize(width, Math.round(width / ASPECT), false)
    renderer.render(scene, camera)
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(draw) }
  const observer = new ResizeObserver(schedule)
  observer.observe(container)
  // A window resize also fires when the page moves to a screen with a different pixel ratio.
  window.addEventListener('resize', schedule)
  const onRestored = () => { lastWidth = 0; schedule() }
  renderer.domElement.addEventListener('webglcontextrestored', onRestored)
  draw()

  return () => {
    observer.disconnect()
    window.removeEventListener('resize', schedule)
    renderer.domElement.removeEventListener('webglcontextrestored', onRestored)
    if (frame) cancelAnimationFrame(frame)
    const materials = new Set<THREE.Material>()
    scene.traverse(obj => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose()
        materials.add(obj.material as THREE.Material)
      }
    })
    materials.forEach(m => m.dispose())
    normalTex.dispose()
    blobTex.dispose()
    key.shadow.dispose()
    envRT.dispose()
    room.dispose()
    pmrem.dispose()
    renderer.dispose()
    renderer.forceContextLoss()
    renderer.domElement.remove()
  }
}

export default function GummyScene() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return mountGummies(ref.current)
  }, [])

  return <div ref={ref} aria-hidden className="w-full" style={{ aspectRatio: '7 / 3', background: BG }} />
}
