"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import DialogueBox from "@/components/world/DialogueBox";
import HomeComputer from "@/components/world/HomeComputer";
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
import { casita as casitaDefinition, resolveLocation } from "@/content/world/locations";

// Tweak the player here. Distances are in world units.
export const PLAYER_CONFIG = {
  speed: 200, // per second, the same in every direction
  scale: 1, // size of the player artwork
  radius: 9, // collision circle around the feet
  reach: 50, // how close to an interaction point counts as "at the door"
  spawn: { x: 520, y: 640 },
};

// The world is a fixed design area. The camera stays on its centre and scales
// it to fit the viewport (never above 1×); any extra screen space is more ground.
const WORLD = { width: 960, height: 900 };
const EDGE = 8; // keeps the player off the very edge of the screen
const ROUTE_MARGIN = 6; // how wide routes give the footprint corners

const casita = resolveLocation(casitaDefinition);
const locations = [casita];
const blocked = locations.map((l) => inflate(l.world.footprint, PLAYER_CONFIG.radius));
const corners = locations.map((l) =>
  inflate(l.world.footprint, PLAYER_CONFIG.radius + ROUTE_MARGIN),
);

// Layers are sorted by the ground y of the feet / depth anchor. The offset keeps
// z-indexes positive when the player walks above the design area.
const depth = (y: number) => String(10000 + Math.round(y));

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

// Places the player artwork so its feet sit on the given world point.
const playerTransform = ({ x, y }: Vec, viewScale: number) => {
  const s = PLAYER_CONFIG.scale;
  return `translate3d(${(x - PLAYER_ART.feetX * s) * viewScale}px, ${(y - PLAYER_ART.feetY * s) * viewScale}px, 0)`;
};

export default function WorldScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const casitaRef = useRef<HTMLButtonElement>(null);

  const [view, setView] = useState<View | null>(null);
  const viewRef = useRef<View | null>(null);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const [nearby, setNearby] = useState(false);
  const nearbyRef = useRef(false);
  const [hovered, setHovered] = useState(false);
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
  const keys = useRef(new Set<string>());
  const returnFocus = useRef<"scene" | "casita">("scene");

  // Walkable area: whatever part of the world is on screen.
  const clamp = useCallback((p: Vec): Vec => {
    const v = viewRef.current;
    if (!v) return p;
    const halfWidth = v.width / 2 / v.scale;
    const halfHeight = v.height / 2 / v.scale;
    const s = PLAYER_CONFIG.scale;
    const left = WORLD.width / 2 - halfWidth + PLAYER_ART.width * s * 0.5 + EDGE;
    const right = WORLD.width / 2 + halfWidth - PLAYER_ART.width * s * 0.5 - EDGE;
    const top = WORLD.height / 2 - halfHeight + PLAYER_ART.feetY * s + EDGE;
    const bottom = WORLD.height / 2 + halfHeight - (PLAYER_ART.height - PLAYER_ART.feetY) * s - EDGE;
    return {
      x: left > right ? WORLD.width / 2 : Math.min(Math.max(p.x, left), right),
      y: top > bottom ? WORLD.height / 2 : Math.min(Math.max(p.y, top), bottom),
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

  const openDialogue = useCallback((via: "scene" | "casita") => {
    player.current.path = [];
    player.current.pending = null;
    keys.current.clear();
    returnFocus.current = via;
    openRef.current = true;
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    openRef.current = false;
    setOpen(false);
    const target = returnFocus.current === "casita" ? casitaRef.current : sceneRef.current;
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
        scale: Math.min(width / WORLD.width, height / WORLD.height, 1),
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
  }, [view, settle, paint]);

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
            openDialogue("scene");
          }
        }
      }

      const isNearby = distance(state.position, casita.world.interaction) <= PLAYER_CONFIG.reach;
      if (isNearby !== nearbyRef.current) {
        nearbyRef.current = isNearby;
        setNearby(isNearby);
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
  }, [settle, paint, openDialogue]);

  // "E" talks to Casita from the door (or with Casita focused), and closes
  // the conversation again, matching the shortcut shown in the label.
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
      const casitaFocused = document.activeElement === casitaRef.current;
      if (!nearbyRef.current && !casitaFocused) return;
      event.preventDefault();
      openDialogue(casitaFocused ? "casita" : "scene");
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
      x: WORLD.width / 2 + (event.clientX - (rect.left + rect.width / 2)) / v.scale,
      y: WORLD.height / 2 + (event.clientY - (rect.top + rect.height / 2)) / v.scale,
    };
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return;
    const point = toWorld(event);
    if (!point) return;
    const onCasita = insidePolygon(point, casita.world.hitArea);
    if (openRef.current) {
      if (onCasita) close();
      return;
    }
    if (onCasita) walkTo(casita.world.interaction, casita.id);
    else walkTo(point, null);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const point = toWorld(event);
    setHovered(!!point && insidePolygon(point, casita.world.hitArea));
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
        onPointerLeave={() => setHovered(false)}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        className="relative h-[100svh] w-full touch-manipulation select-none overflow-hidden outline-none"
        style={{ cursor: hovered && !open ? "pointer" : undefined }}
      >
        <p id="world-instructions" className="sr-only">
          Walk with the arrow keys or W, A, S and D, or click the ground. Press E at Casita’s door to talk,
          or focus Casita and press Enter.
        </p>

        {view && (
          <div
            className="absolute isolate"
            style={{
              left: view.width / 2 - (WORLD.width / 2) * s,
              top: view.height / 2 - (WORLD.height / 2) * s,
              width: WORLD.width * s,
              height: WORLD.height * s,
            }}
          >
            <div
              className="absolute"
              style={{
                left: casita.position.x * s,
                top: casita.position.y * s,
                width: casita.width * s,
                zIndex: depth(casita.world.depthY),
              }}
            >
              <HomeComputer
                ref={casitaRef}
                open={open}
                highlighted={nearby || (hovered && !open)}
                onClick={(event) => {
                  // Pointer clicks are handled by the scene; this is keyboard and
                  // assistive-technology activation, which opens Casita directly.
                  if (event.detail !== 0) return;
                  if (openRef.current) close();
                  else openDialogue("casita");
                }}
              />
            </div>

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
      <DialogueBox dialogue={casita.dialogue} open={open} onClose={close} />
    </>
  );
}
