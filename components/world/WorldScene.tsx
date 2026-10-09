"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import DialogueBox from "@/components/world/DialogueBox";
import LocationView from "@/components/world/LocationView";
import Player, { PLAYER_ART, type Facing, type Heading } from "@/components/world/Player";
import {
  distance,
  findPath,
  inflate,
  insideConvex,
  insidePolygon,
  pushOut,
  type Vec,
} from "@/components/world/geometry";
import { locations as definitions, resolveLocation, type Location } from "@/content/world/locations";

// Tweak the player here. Distances are in world units.
export const PLAYER_CONFIG = {
  speed: 200, // per second, the same in every direction
  scale: 1, // size of the player artwork
  radius: 9, // collision circle around the feet
  reach: 50, // how close to an interaction point counts as "at the door"
  spawn: { x: 520, y: 640 },
};

// The world is a fixed design area the player can walk around in. The camera
// follows the player, so the world moves past as they walk.
const WORLD = { width: 960, height: 900 };
const EDGE = 8; // keeps the player off the very edge of the world
export const CAMERA_CONFIG = {
  // World units per screen pixel: 1× on wide screens, down to 0.6× on phones.
  scale: (viewportWidth: number) => Math.min(1, Math.max(0.6, viewportWidth / 1100)),
  follow: 6, // how quickly the camera catches up (higher is snappier)
  // Points the camera at the player's middle rather than their feet.
  lookUp: 36,
};
const ROUTE_MARGIN = 6; // how wide routes give the footprint corners

const locations = definitions.map(resolveLocation);
const blocked = locations.map((l) => inflate(l.world.footprint, PLAYER_CONFIG.radius));
const corners = locations.map((l) =>
  inflate(l.world.footprint, PLAYER_CONFIG.radius + ROUTE_MARGIN),
);

// Layers are sorted by the ground y of the feet / depth anchor. The offset keeps
// z-indexes positive when the player walks above the design area.
const depth = (y: number) => String(10000 + Math.round(y));

// The closest location whose interaction point is within reach.
const nearbyLocation = (p: Vec): Location | null => {
  let best: Location | null = null;
  for (const location of locations) {
    const gap = distance(p, location.world.interaction);
    if (gap <= PLAYER_CONFIG.reach && (!best || gap < distance(p, best.world.interaction))) best = location;
  }
  return best;
};

// Where hit areas overlap, the frontmost location wins.
const locationAt = (p: Vec): Location | null =>
  locations
    .filter((l) => insidePolygon(p, l.world.hitArea))
    .sort((a, b) => b.world.depthY - a.world.depthY)[0] ?? null;

const MOVE_KEYS: Record<string, Vec> = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  KeyW: { x: 0, y: -1 },
  KeyS: { x: 0, y: 1 },
  KeyA: { x: -1, y: 0 },
  KeyD: { x: 1, y: 0 },
};

type View = { width: number; height: number; scale: number };

const cameraTarget = ({ x, y }: Vec): Vec => ({ x, y: y - CAMERA_CONFIG.lookUp });

// Moves the world so the camera point sits in the middle of the screen.
const worldTransform = (camera: Vec, v: View) =>
  `translate3d(${v.width / 2 - camera.x * v.scale}px, ${v.height / 2 - camera.y * v.scale}px, 0)`;

// Places the player artwork so its feet sit on the given world point.
const playerTransform = ({ x, y }: Vec, viewScale: number) => {
  const s = PLAYER_CONFIG.scale;
  return `translate3d(${(x - PLAYER_ART.feetX * s) * viewScale}px, ${(y - PLAYER_ART.feetY * s) * viewScale}px, 0)`;
};

export default function WorldScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const locationRefs = useRef(new Map<string, HTMLButtonElement>());

  const [view, setView] = useState<View | null>(null);
  const viewRef = useRef<View | null>(null);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  // The location whose dialogue is open (kept after closing so it can animate out).
  const [active, setActive] = useState<Location>(locations[0]);
  const activeRef = useRef<Location>(locations[0]);
  const [nearby, setNearby] = useState<string | null>(null);
  const nearbyRef = useRef<Location | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [walking, setWalking] = useState(false);
  const walkingRef = useRef(false);
  const [facing, setFacing] = useState<Facing>("right");
  const facingRef = useRef<Facing>("right");
  // Moving mostly sideways shows the side-on run, otherwise the up or down run.
  const [heading, setHeading] = useState<Heading>("side");
  const headingRef = useRef<Heading>("side");

  const player = useRef({
    position: { ...PLAYER_CONFIG.spawn },
    path: [] as Vec[],
    // Location to talk to once the current path ends.
    pending: null as string | null,
  });
  const camera = useRef(cameraTarget(PLAYER_CONFIG.spawn));
  const reduceMotion = useReducedMotion();
  const reduceMotionRef = useRef(reduceMotion);
  reduceMotionRef.current = reduceMotion;
  const keys = useRef(new Set<string>());
  // Where focus goes when the dialogue closes: the scene, or the location's control.
  const returnFocus = useRef<"scene" | "location">("scene");

  // Walkable area: the world, so the player's artwork stays inside it.
  const clamp = useCallback((p: Vec): Vec => {
    const s = PLAYER_CONFIG.scale;
    const left = PLAYER_ART.width * s * 0.5 + EDGE;
    const right = WORLD.width - PLAYER_ART.width * s * 0.5 - EDGE;
    const top = PLAYER_ART.feetY * s + EDGE;
    const bottom = WORLD.height - (PLAYER_ART.height - PLAYER_ART.feetY) * s - EDGE;
    return {
      x: Math.min(Math.max(p.x, left), right),
      y: Math.min(Math.max(p.y, top), bottom),
    };
  }, []);

  // Keeps a point inside the screen and out of every footprint.
  const settle = useCallback(
    (p: Vec, margin?: number) => clamp(blocked.reduce((q, poly) => pushOut(q, poly, margin), clamp(p))),
    [clamp],
  );

  const paint = useCallback(() => {
    const el = playerRef.current;
    const v = viewRef.current;
    if (!el || !v) return;
    const { position } = player.current;
    el.style.transform = playerTransform(position, v.scale);
    el.style.zIndex = depth(position.y);
  }, []);

  // Eases the camera towards the player (or jumps there with reduced motion).
  const follow = useCallback((dt: number | null) => {
    const world = worldRef.current;
    const v = viewRef.current;
    if (!world || !v) return;
    const target = cameraTarget(player.current.position);
    const current = camera.current;
    const t = dt === null || reduceMotionRef.current ? 1 : 1 - Math.exp(-CAMERA_CONFIG.follow * dt);
    const next = { x: current.x + (target.x - current.x) * t, y: current.y + (target.y - current.y) * t };
    // Close enough: settle exactly so the world stops repainting.
    camera.current = distance(next, target) < 0.05 ? target : next;
    if (current.x !== camera.current.x || current.y !== camera.current.y || dt === null) {
      world.style.transform = worldTransform(camera.current, v);
    }
  }, []);

  const openDialogue = useCallback((location: Location, via: "scene" | "location") => {
    player.current.path = [];
    player.current.pending = null;
    keys.current.clear();
    returnFocus.current = via;
    activeRef.current = location;
    setActive(location);
    openRef.current = true;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    openRef.current = false;
    setOpen(false);
    const target =
      returnFocus.current === "location" ? locationRefs.current.get(activeRef.current.id) : sceneRef.current;
    target?.focus({ preventScroll: true });
  }, []);

  const walkTo = useCallback(
    (goal: Vec, pending: string | null) => {
      const { position } = player.current;
      // A blocked destination becomes the nearest reachable point beside it.
      const target = settle(goal, 2);
      player.current.path = findPath(position, target, blocked, corners).map((p) => clamp(p));
      player.current.pending = pending;
    },
    [settle, clamp],
  );

  // Measure the viewport and fit the world into it.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const measure = () => {
      const { width, height } = scene.getBoundingClientRect();
      if (!width || !height) return;
      setView({
        width,
        height,
        scale: CAMERA_CONFIG.scale(width),
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    viewRef.current = view;
    if (!view) return;
    player.current.position = settle(player.current.position);
    paint();
    follow(null);
  }, [view, settle, paint, follow]);

  useEffect(() => {
    sceneRef.current?.focus({ preventScroll: true });
  }, []);

  // Movement loop.
  useEffect(() => {
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      // Capped so a background tab doesn't teleport the player on return.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const state = player.current;
      follow(dt);
      if (openRef.current || !viewRef.current) return;

      const step = PLAYER_CONFIG.speed * dt;
      let dx = 0;
      let dy = 0;
      keys.current.forEach((code) => {
        dx += MOVE_KEYS[code].x;
        dy += MOVE_KEYS[code].y;
      });

      const before = state.position;
      if (dx || dy) {
        // Keyboard input takes over from any click-to-walk route.
        state.path = [];
        state.pending = null;
        const length = Math.hypot(dx, dy);
        state.position = settle({ x: before.x + (dx / length) * step, y: before.y + (dy / length) * step });
      } else if (state.path.length) {
        let remaining = step;
        let position = before;
        while (remaining > 0 && state.path.length) {
          const target = state.path[0];
          const gap = distance(position, target);
          if (gap <= remaining) {
            position = target;
            remaining -= gap;
            state.path.shift();
          } else {
            position = {
              x: position.x + ((target.x - position.x) / gap) * remaining,
              y: position.y + ((target.y - position.y) / gap) * remaining,
            };
            remaining = 0;
          }
        }
        state.position = settle(position);
        // Pinned against something the route didn't expect: stop here.
        if (state.path.length && distance(before, state.position) < step * 0.1) state.path = [];

        if (!state.path.length && state.pending) {
          const location = locations.find((l) => l.id === state.pending);
          state.pending = null;
          if (location && distance(state.position, location.world.interaction) <= PLAYER_CONFIG.reach) {
            openDialogue(location, "scene");
          }
        }
      }

      const isNearby = nearbyLocation(state.position);
      if (isNearby !== nearbyRef.current) {
        nearbyRef.current = isNearby;
        setNearby(isNearby?.id ?? null);
      }
      const moved = state.position.x - before.x;
      const movedY = state.position.y - before.y;
      const isWalking = distance(before, state.position) > step * 0.1;
      if (isWalking !== walkingRef.current) {
        walkingRef.current = isWalking;
        setWalking(isWalking);
      }
      const isFacing: Facing = moved < -0.01 ? "left" : moved > 0.01 ? "right" : facingRef.current;
      if (isFacing !== facingRef.current) {
        facingRef.current = isFacing;
        setFacing(isFacing);
      }
      const isHeading: Heading =
        Math.abs(moved) >= Math.abs(movedY) * 0.5 ? "side" : movedY < 0 ? "up" : "down";
      if (isWalking && isHeading !== headingRef.current) {
        headingRef.current = isHeading;
        setHeading(isHeading);
      }
      if (state.position !== before) paint();
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [settle, paint, follow, openDialogue]);

  // "E" talks to the nearby location (or the focused one), and closes the
  // conversation again, matching the shortcut shown in the label.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== "e") return;
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("input, textarea, select, [contenteditable='true']")) return;
      if (openRef.current) {
        event.preventDefault();
        close();
        return;
      }
      const focused = locations.find((l) => locationRefs.current.get(l.id) === document.activeElement);
      const location = focused ?? nearbyRef.current;
      if (!location) return;
      event.preventDefault();
      openDialogue(location, focused ? "location" : "scene");
    };
    const onWindowBlur = () => keys.current.clear();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("blur", onWindowBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("blur", onWindowBlur);
    };
  }, [close, openDialogue]);

  const toWorld = (event: React.PointerEvent): Vec | null => {
    const v = viewRef.current;
    const scene = sceneRef.current;
    if (!v || !scene) return null;
    const rect = scene.getBoundingClientRect();
    return {
      x: camera.current.x + (event.clientX - (rect.left + rect.width / 2)) / v.scale,
      y: camera.current.y + (event.clientY - (rect.top + rect.height / 2)) / v.scale,
    };
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    const point = toWorld(event);
    if (!point) return;
    const location = locationAt(point);
    if (openRef.current) {
      if (location === activeRef.current) close();
      return;
    }
    if (location) walkTo(location.world.interaction, location.id);
    else walkTo(point, null);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const point = toWorld(event);
    setHovered((point && locationAt(point)?.id) ?? null);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.metaKey || event.ctrlKey || event.altKey || openRef.current) return;
    if (!MOVE_KEYS[event.code]) return;
    event.preventDefault();
    keys.current.add(event.code);
  };

  const onKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    keys.current.delete(event.code);
  };

  const onBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) keys.current.clear();
  };

  const s = view?.scale ?? 1;

  return (
    <>
      <div
        ref={sceneRef}
        tabIndex={0}
        role="application"
        aria-label="Casita’s world"
        aria-describedby="world-instructions"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerLeave={() => setHovered(null)}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        className="relative h-[100svh] w-full touch-manipulation select-none overflow-hidden outline-none"
        style={{ cursor: hovered && !open ? "pointer" : undefined }}
      >
        <p id="world-instructions" className="sr-only">
          Walk with the arrow keys or W, A, S and D, or click the ground. Press E next to Casita’s door or
          Boardie on the beach to talk, or focus either one and press Enter.
        </p>

        {view && (
          <div
            ref={worldRef}
            className="absolute left-0 top-0 isolate will-change-transform"
            style={{
              transform: worldTransform(camera.current, view),
              width: WORLD.width * s,
              height: WORLD.height * s,
            }}
          >
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute"
                style={{
                  left: location.position.x * s,
                  top: location.position.y * s,
                  width: location.width * s,
                  zIndex: depth(location.world.depthY),
                }}
              >
                <LocationView
                  ref={(el) => {
                    if (el) locationRefs.current.set(location.id, el);
                    else locationRefs.current.delete(location.id);
                  }}
                  location={location}
                  open={open && active.id === location.id}
                  highlighted={nearby === location.id || (hovered === location.id && !open)}
                  onClick={(event) => {
                    // Pointer clicks are handled by the scene; this is keyboard and
                    // assistive-technology activation, which opens the location directly.
                    if (event.detail !== 0) return;
                    if (openRef.current && activeRef.current === location) close();
                    else openDialogue(location, "location");
                  }}
                />
              </div>
            ))}

            <div
              ref={playerRef}
              className="pointer-events-none absolute left-0 top-0"
              style={{
                transform: playerTransform(player.current.position, s),
                zIndex: depth(player.current.position.y),
              }}
            >
              <Player scale={PLAYER_CONFIG.scale * s} walking={walking && !open} heading={heading} facing={facing} />
            </div>
          </div>
        )}
      </div>

      {/* Outside the scene so dialogue clicks and keys never reach the scene handlers. */}
      <DialogueBox key={active.id} dialogue={active.dialogue} open={open} onClose={close} />
    </>
  );
}
