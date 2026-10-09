"use client";

import { forwardRef } from "react";
import type { Location } from "@/content/world/locations";

const OPEN_COLOR = "#ffffff";

type Props = {
  location: Location;
  open: boolean;
  // Shows the label: the player is close by or the pointer is over the location.
  highlighted: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// A location's artwork and its keyboard-focusable control. Pointer input is
// handled by the scene (so the transparent parts of the image stay walkable),
// which is why the button ignores pointer events.
const LocationView = forwardRef<HTMLButtonElement, Props>(function LocationView(
  { location, open, highlighted, onClick },
  ref,
) {
  const { art, control, openMask } = location;
  const percent = (value: number, total: number) => `${(value / total) * 100}%`;
  return (
    <div className="relative">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={art.src}
        alt=""
        width={art.width}
        height={art.height}
        draggable={false}
        className="block h-auto w-full select-none"
      />
      {/* The mask matches the artwork's dimensions, so this layer lines up exactly:
          the artwork shows underneath, white while the dialogue is open. */}
      {openMask && (
        <span
          aria-hidden
          style={{
            backgroundColor: OPEN_COLOR,
            maskImage: `url(${openMask})`,
            WebkitMaskImage: `url(${openMask})`,
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <button
        ref={ref}
        type="button"
        aria-label={location.name}
        aria-keyshortcuts="E"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={onClick}
        style={
          control && {
            left: percent(control.x, art.width),
            top: percent(control.y, art.height),
            width: percent(control.width, art.width),
            height: percent(control.height, art.height),
          }
        }
        className={`group pointer-events-none absolute rounded-3xl outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)] ${
          control ? "" : "inset-0"
        }`}
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
          {location.name}
        </span>
      </button>
    </div>
  );
});

export default LocationView;
