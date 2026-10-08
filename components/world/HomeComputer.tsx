"use client";

import { useCallback, useRef, useState } from "react";
import DialogueBox, { DIALOGUE_CONFIG } from "@/components/world/DialogueBox";
import { homeDialogue } from "@/content/world/dialogues";

// The screen mask has the same dimensions as the house image, so the
// screen layer lines up exactly with the grey screen in the artwork.
const SCREEN_MASK = "url(/world/computer-screen-mask.png)";
const SCREEN_ON = DIALOGUE_CONFIG.accent;

export default function HomeComputer() {
  const [open, setOpen] = useState(false);
  const houseRef = useRef<HTMLButtonElement>(null);

  const openDialogue = () => setOpen(true);

  const close = useCallback(() => {
    setOpen(false);
    houseRef.current?.focus();
  }, []);

  return (
    <div className="relative w-[min(440px,86vw,56svh)] min-w-[260px]">
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/world/computer-house.webp"
          alt=""
          width={1000}
          height={864}
          draggable={false}
          className="block h-auto w-full select-none"
        />
        {/* Screen layer: grey in the artwork underneath, purple while the dialogue is open. */}
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

      <DialogueBox dialogue={homeDialogue} open={open} onClose={close} />
    </div>
  );
}
