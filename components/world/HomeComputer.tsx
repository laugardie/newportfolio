"use client";

import { forwardRef } from "react";

// The screen mask has the same dimensions as the house image, so the
// screen layer lines up exactly with the grey screen in the artwork.
const SCREEN_MASK = "url(/world/computer-screen-mask.png)";
const SCREEN_ON = "#ffffff";

type Props = {
  open: boolean;
  // Shows the label: the player is at the door or the pointer is over Casita.
  highlighted: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// Casita's artwork and its keyboard-focusable control. Pointer input is
// handled by the scene (so the transparent corners of the image stay walkable),
// which is why the button ignores pointer events.
const HomeComputer = forwardRef<HTMLButtonElement, Props>(function HomeComputer(
  { open, highlighted, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label="Casita"
      aria-keyshortcuts="E"
      aria-expanded={open}
      aria-haspopup="dialog"
      onClick={onClick}
      className="group pointer-events-none relative block w-full rounded-3xl outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-9 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-sm bg-black px-1.5 py-1 text-sm leading-none text-white transition-opacity duration-200 group-focus-visible:opacity-100 motion-reduce:transition-none ${
          highlighted ? "opacity-100" : "opacity-0"
        }`}
      >
        <kbd className="rounded-sm border border-white/30 px-1 font-sans text-xs leading-4">
          E
        </kbd>
        Casita
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/world/computer-house.webp"
        alt=""
        width={1000}
        height={864}
        draggable={false}
        className="block h-auto w-full select-none"
      />
      {/* Screen layer: grey in the artwork underneath, white while the dialogue is open. */}
      <span
        aria-hidden
        style={{
          backgroundColor: SCREEN_ON,
          maskImage: SCREEN_MASK,
          WebkitMaskImage: SCREEN_MASK,
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
});

export default HomeComputer;
