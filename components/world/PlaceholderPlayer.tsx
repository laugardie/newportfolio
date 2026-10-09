// Temporary player artwork. Swap this file for a real character: the scene
// only needs PLAYER_ART's size and the point where the feet touch the ground.

export const PLAYER_ART = {
  width: 30, // world units at scale 1
  height: 56,
  feetX: 15, // ground contact point, from the top-left of the artwork
  feetY: 52,
};

export default function PlaceholderPlayer({ scale }: { scale: number }) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${PLAYER_ART.width} ${PLAYER_ART.height}`}
      width={PLAYER_ART.width * scale}
      height={PLAYER_ART.height * scale}
      className="block overflow-visible"
    >
      {/* Ground shadow, centred on the feet. */}
      <ellipse cx={15} cy={52} rx={10} ry={3.5} className="fill-ink" opacity={0.18} />
      <rect
        x={8}
        y={21}
        width={14}
        height={31}
        rx={7}
        fill="#ffffff"
        stroke="var(--color-ink)"
        strokeWidth={1.25}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx={15}
        cy={12}
        r={7}
        fill="#ffffff"
        stroke="var(--color-ink)"
        strokeWidth={1.25}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
