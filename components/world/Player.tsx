// The player's illustrated character, cut out of the /world mockup. The scene
// only needs PLAYER_ART's size and the point where the feet touch the ground.

const SOURCE = { src: "/world/player.webp", width: 103, height: 287, feetX: 62, feetY: 283 };
const HEIGHT = 72; // world units at scale 1
const k = HEIGHT / SOURCE.height;

export const PLAYER_ART = {
  width: SOURCE.width * k, // world units at scale 1
  height: HEIGHT,
  feetX: SOURCE.feetX * k, // ground contact point, from the top-left of the artwork
  feetY: SOURCE.feetY * k,
};

export type Facing = "left" | "right";

type Props = { scale: number; walking: boolean; facing: Facing };

export default function Player({ scale, walking, facing }: Props) {
  const feetX = PLAYER_ART.feetX * scale;
  const feetY = PLAYER_ART.feetY * scale;
  return (
    <div
      aria-hidden
      className="relative"
      style={{ width: PLAYER_ART.width * scale, height: PLAYER_ART.height * scale }}
    >
      {/* Ground shadow, centred on the feet. It stays put while she bobs. */}
      <span
        className="absolute rounded-full bg-ink opacity-[0.14]"
        style={{ left: feetX - 11 * scale, top: feetY - 3 * scale, width: 22 * scale, height: 6 * scale }}
      />
      <div className={walking ? "animate-walk-bob motion-reduce:animate-none" : undefined}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SOURCE.src}
          alt=""
          draggable={false}
          width={PLAYER_ART.width * scale}
          height={PLAYER_ART.height * scale}
          className="relative block max-w-none"
          // The artwork faces right; mirroring pivots on the feet so she turns on the spot.
          style={{
            transform: facing === "left" ? "scaleX(-1)" : undefined,
            transformOrigin: `${feetX}px ${feetY}px`,
          }}
        />
      </div>
    </div>
  );
}
