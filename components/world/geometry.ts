// Small 2D helpers for /world: collision against convex footprints and
// routing around them. Everything here works in world units.

export type Vec = { x: number; y: number };
export type Polygon = Vec[];

const EPSILON = 0.01;

export const distance = (a: Vec, b: Vec) => Math.hypot(b.x - a.x, b.y - a.y);

function signedArea(poly: Polygon) {
  let area = 0;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    area += a.x * b.y - b.x * a.y;
  }
  return area / 2;
}

// Convex polygons are stored with a consistent winding so edge normals
// always point outwards.
function normalized(poly: Polygon): Polygon {
  return signedArea(poly) > 0 ? poly : [...poly].reverse();
}

function edges(poly: Polygon) {
  return poly.map((a, i) => {
    const b = poly[(i + 1) % poly.length];
    const length = Math.hypot(b.x - a.x, b.y - a.y);
    return { a, normal: { x: (b.y - a.y) / length, y: -(b.x - a.x) / length } };
  });
}

// Grows a convex polygon by `amount`. Corners are rounded with short segments
// that stay outside the true rounded shape, so the result is conservative.
export function inflate(poly: Polygon, amount: number): Polygon {
  const shape = normalized(poly);
  const sides = edges(shape);
  const result: Polygon = [];
  shape.forEach((vertex, i) => {
    const before = sides[(i - 1 + sides.length) % sides.length].normal;
    const after = sides[i].normal;
    const start = Math.atan2(before.y, before.x);
    let turn = Math.atan2(after.y, after.x) - start;
    while (turn <= -Math.PI) turn += Math.PI * 2;
    while (turn > Math.PI) turn -= Math.PI * 2;
    const steps = Math.max(1, Math.ceil(Math.abs(turn) / (Math.PI / 4)));
    const reach = amount / Math.cos(turn / steps / 2);
    for (let s = 0; s < steps; s++) {
      const angle = start + (turn * (s + 0.5)) / steps;
      result.push({ x: vertex.x + Math.cos(angle) * reach, y: vertex.y + Math.sin(angle) * reach });
    }
  });
  return result;
}

// Strictly inside a convex polygon (points on the edge are outside).
export function insideConvex(p: Vec, poly: Polygon) {
  return edges(normalized(poly)).every(
    ({ a, normal }) => normal.x * (p.x - a.x) + normal.y * (p.y - a.y) < 0,
  );
}

// Moves a point inside a convex polygon to just outside its nearest edge.
export function pushOut(p: Vec, poly: Polygon, margin = EPSILON): Vec {
  if (!insideConvex(p, poly)) return p;
  let best = { depth: Infinity, normal: { x: 0, y: 0 } };
  for (const { a, normal } of edges(normalized(poly))) {
    const depth = -(normal.x * (p.x - a.x) + normal.y * (p.y - a.y));
    if (depth < best.depth) best = { depth, normal };
  }
  const push = best.depth + margin;
  return { x: p.x + best.normal.x * push, y: p.y + best.normal.y * push };
}

// Any polygon, convex or not (used for pointer hit areas).
export function insidePolygon(p: Vec, poly: Polygon) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i];
    const b = poly[j];
    if (a.y > p.y !== b.y > p.y && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) {
      inside = !inside;
    }
  }
  return inside;
}

// Whether the segment a→b passes through the interior of a convex polygon.
// Sliding along an edge or touching a corner does not count.
function crosses(a: Vec, b: Vec, poly: Polygon) {
  let enter = 0;
  let exit = 1;
  for (const { a: v, normal } of edges(normalized(poly))) {
    const start = normal.x * (a.x - v.x) + normal.y * (a.y - v.y);
    const along = normal.x * (b.x - a.x) + normal.y * (b.y - a.y);
    if (Math.abs(along) < 1e-9) {
      if (start >= -1e-6) return false;
      continue;
    }
    const t = -start / along;
    if (along < 0) enter = Math.max(enter, t);
    else exit = Math.min(exit, t);
    if (enter >= exit - 1e-6) return false;
  }
  return true;
}

// Shortest route from start to goal that avoids the blocked polygons, using
// the corners of slightly larger polygons as waypoints. Returns the points to
// walk through, ending with the goal.
export function findPath(start: Vec, goal: Vec, blocked: Polygon[], corners: Polygon[]): Vec[] {
  const clear = (a: Vec, b: Vec) => blocked.every((poly) => !crosses(a, b, poly));
  if (clear(start, goal)) return [goal];

  const nodes = [start, goal, ...corners.flat()];
  const cost = nodes.map(() => Infinity);
  const previous = nodes.map(() => -1);
  const done = nodes.map(() => false);
  cost[0] = 0;

  for (;;) {
    let current = -1;
    for (let i = 0; i < nodes.length; i++) {
      if (!done[i] && cost[i] < Infinity && (current === -1 || cost[i] < cost[current])) current = i;
    }
    if (current === -1 || current === 1) break;
    done[current] = true;
    for (let next = 0; next < nodes.length; next++) {
      if (done[next] || !clear(nodes[current], nodes[next])) continue;
      const total = cost[current] + distance(nodes[current], nodes[next]);
      if (total < cost[next]) {
        cost[next] = total;
        previous[next] = current;
      }
    }
  }

  if (previous[1] === -1) return [goal];
  const path: Vec[] = [];
  for (let i = 1; i !== 0; i = previous[i]) path.unshift(nodes[i]);
  return path;
}
