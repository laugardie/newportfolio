// The player's illustrated character. The scene only needs PLAYER_ART's size
// and the point where the feet touch the ground.

// Standing / walking up and down: seen from behind, cut out of the /world mockup.
const SOURCE = { src: "/world/player.webp", width: 103, height: 287, feetX: 62, feetY: 283 };
// Running sideways: a strip of equal cells, facing right, feet on the same point in each.
const RUN = { src: "/world/player-run.webp", frames: 6, cellWidth: 150, height: 187, feetX: 86, feetY: 183 };

const HEIGHT = 72; // world units at scale 1
const k = HEIGHT / SOURCE.height;
const runK = HEIGHT / 181; // the run frames' head-to-feet height in pixels

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
  const running = walking && side;
  const run = runK * scale;
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
        <div
          className={running ? "invisible" : walking ? "animate-walk-bob motion-reduce:animate-none" : undefined}
        >
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
        {/* Always mounted (hidden when unused) so the strip is loaded before she first runs. */}
        <div
          className={`absolute bg-no-repeat ${running ? "animate-run-cycle motion-reduce:animate-none" : "invisible"}`}
          style={{
            left: feetX - RUN.feetX * run,
            top: feetY - RUN.feetY * run,
            width: RUN.cellWidth * run,
            height: RUN.height * run,
            backgroundImage: `url(${RUN.src})`,
            backgroundSize: `${RUN.frames * RUN.cellWidth * run}px ${RUN.height * run}px`,
          }}
        />
      </div>
    </div>
  );
}
