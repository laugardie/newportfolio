"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import DialogueBox, { DIALOGUE_CONFIG } from "@/components/world/DialogueBox";
import { homeDialogue } from "@/content/world/dialogues";

// Matches the viewBox of /world/computer-house.svg so the screen layer lines up.
const VIEWBOX = "40 24 320 352";
// Slightly larger than the hole in the casing; the bezel hides the overlap.
const SCREEN_PATH =
  "M136.2 116 Q136 106 146 106.6 L234 112.4 Q244 113 243.8 123 L242.2 183 Q242 193 232 192.5 L148 188.5 Q138 188 137.8 178 Z";

const SCREEN_OFF = "#d3d4d0";
const SCREEN_ON = DIALOGUE_CONFIG.accent;
const VISITED_KEY = "world:home-visited";

export default function HomeComputer() {
  const [open, setOpen] = useState(false);
  const [visited, setVisited] = useState(false);
  const houseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(VISITED_KEY) === "1") setVisited(true);
    } catch {}
  }, []);

  const openDialogue = () => {
    setOpen(true);
    setVisited(true);
    try {
      sessionStorage.setItem(VISITED_KEY, "1");
    } catch {}
  };

  const close = useCallback(() => {
    setOpen(false);
    houseRef.current?.focus();
  }, []);

  const screenOn = open || visited;

  return (
    <div className="relative w-[min(380px,84vw,46svh)] min-w-[260px]">
      <button
        ref={houseRef}
        type="button"
        aria-label="Home"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => (open ? close() : openDialogue())}
        className="group relative block w-full cursor-pointer rounded-3xl outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-ink)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
        >
          Home
        </span>
        <svg aria-hidden viewBox={VIEWBOX} className="absolute inset-0 h-full w-full">
          <path
            d={SCREEN_PATH}
            style={{ fill: screenOn ? SCREEN_ON : SCREEN_OFF }}
            className="transition-[fill] duration-500 ease-out motion-reduce:transition-none"
          />
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/world/computer-house.svg"
          alt=""
          width={320}
          height={352}
          draggable={false}
          className="relative block h-auto w-full select-none"
        />
      </button>

      <DialogueBox dialogue={homeDialogue} open={open} onClose={close} />
    </div>
  );
}
