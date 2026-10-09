// The player's illustrated character. The scene only needs PLAYER_ART's size
// and the point where the feet touch the ground.

// Walking up and down: seen from behind, cut out of the /world mockup.
const SOURCE = { src: "/world/player.webp", width: 103, height: 287, feetX: 62, feetY: 283 };

// Animation strips: equal cells side by side, facing right, feet on the same
// point in every cell. `figure` is the head-to-feet height in pixels.
type Strip = { src: string; frames: number; cellWidth: number; height: number; feetX: number; feetY: number; figure: number };
const IDLE: Strip = { src: "/world/player-idle.webp", frames: 22, cellWidth: 79, height: 223, feetX: 36, feetY: 219, figure: 216 };
const RUN: Strip = { src: "/world/player-run.webp", frames: 6, cellWidth: 150, height: 187, feetX: 86, feetY: 183, figure: 181 };

const HEIGHT = 72; // world units at scale 1
const k = HEIGHT / SOURCE.height;

export const PLAYER_ART = {
  width: SOURCE.width * k, // world units at scale 1
  height: HEIGHT,
  feetX: SOURCE.feetX * k, // ground contact point, from the top-left of the artwork
  feetY: SOURCE.feetY * k,
};

export type Facing = "left" | "right";

type Props = { scale: number; walking: boolean; side: boolean; facing: Facing };

export default function Player({ scale, walking, side, facing }: Props) {
  const feetX = PLAYER_ART.feetX * scale;
  const feetY = PLAYER_ART.feetY * scale;
  const pose = !walking ? "idle" : side ? "run" : "back";

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
      {/* The artwork faces right; mirroring pivots on the feet so she turns on the spot. */}
      <div
        className="absolute inset-0"
        style={{
          transform: facing === "left" ? "scaleX(-1)" : undefined,
          transformOrigin: `${feetX}px ${feetY}px`,
        }}
      >
        <div className={pose === "back" ? "animate-walk-bob motion-reduce:animate-none" : "invisible"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SOURCE.src}
            alt=""
            draggable={false}
            width={PLAYER_ART.width * scale}
            height={PLAYER_ART.height * scale}
            className="relative block max-w-none"
          />
        </div>
        {strip(IDLE, pose === "idle", "animate-idle-cycle")}
        {strip(RUN, pose === "run", "animate-run-cycle")}
      </div>
    </div>
  );
}
