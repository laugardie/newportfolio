// The player's illustrated character. The scene only needs PLAYER_ART's size
// and the point where the feet touch the ground.

// Animation strips: equal cells side by side, feet on the same point in every
// cell. `figure` is the head-to-feet height in pixels, so every strip renders
// her at the same height. Side-on art faces right.
type Strip = { src: string; frames: number; cellWidth: number; height: number; feetX: number; feetY: number; figure: number };
const IDLE: Strip = { src: "/world/player-idle.webp", frames: 22, cellWidth: 79, height: 223, feetX: 36, feetY: 219, figure: 216 };
const RUN_SIDE: Strip = { src: "/world/player-run.webp", frames: 6, cellWidth: 150, height: 187, feetX: 86, feetY: 183, figure: 181 };
const RUN_UP: Strip = { src: "/world/player-run-up.webp", frames: 12, cellWidth: 78, height: 220, feetX: 37, feetY: 215, figure: 211 };
const RUN_DOWN: Strip = { src: "/world/player-run-down.webp", frames: 12, cellWidth: 85, height: 231, feetX: 39, feetY: 227, figure: 223 };

const HEIGHT = 72; // world units at scale 1
const k = HEIGHT / IDLE.figure;

// Sized from the standing pose.
export const PLAYER_ART = {
  width: IDLE.cellWidth * k, // world units at scale 1
  height: IDLE.height * k,
  feetX: IDLE.feetX * k, // ground contact point, from the top-left of the artwork
  feetY: IDLE.feetY * k,
};

export type Facing = "left" | "right";
export type Heading = "side" | "up" | "down";

type Props = { scale: number; walking: boolean; heading: Heading; facing: Facing };

export default function Player({ scale, walking, heading, facing }: Props) {
  const feetX = PLAYER_ART.feetX * scale;
  const feetY = PLAYER_ART.feetY * scale;
  const pose = walking ? heading : "idle";

  // Strips stay mounted (hidden when unused) so they're loaded before they're needed.
  const strip = (s: Strip, active: boolean, animation: string) => {
    const z = (HEIGHT / s.figure) * scale;
    return (
      <div
        className={`absolute bg-no-repeat ${active ? `${animation} motion-reduce:animate-none` : "invisible"}`}
        style={{
          left: feetX - s.feetX * z,
          top: feetY - s.feetY * z,
          width: s.cellWidth * z,
          height: s.height * z,
          backgroundImage: `url(${s.src})`,
          backgroundSize: `${s.frames * s.cellWidth * z}px ${s.height * z}px`,
        }}
      />
    );
  };

  return (
    <div
      aria-hidden
      className="relative"
      style={{ width: PLAYER_ART.width * scale, height: PLAYER_ART.height * scale }}
    >
      {/* Ground shadow, centred on the feet. It stays put while she moves. */}
      <span
        className="absolute rounded-full bg-ink opacity-[0.14]"
        style={{ left: feetX - 11 * scale, top: feetY - 3 * scale, width: 22 * scale, height: 6 * scale }}
      />
      {/* Mirroring pivots on the feet so she turns on the spot. */}
      <div
        className="absolute inset-0"
        style={{
          transform: facing === "left" ? "scaleX(-1)" : undefined,
          transformOrigin: `${feetX}px ${feetY}px`,
        }}
      >
        {strip(IDLE, pose === "idle", "animate-idle-cycle")}
        {strip(RUN_SIDE, pose === "side", "animate-run-cycle")}
        {strip(RUN_UP, pose === "up", "animate-run-vertical")}
        {strip(RUN_DOWN, pose === "down", "animate-run-vertical")}
      </div>
    </div>
  );
}
