"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// The screen mask has the same dimensions as the house image, so the
// screen layer lines up exactly with the grey screen in the artwork.
const SCREEN_MASK = "url(/world/computer-screen-mask.png)";
const SCREEN_ON = "#8c5ae7";
const VISITED_KEY = "world:home-visited";

export default function HomeComputer() {
  const [open, setOpen] = useState(false);
  const [visited, setVisited] = useState(false);
  const reduceMotion = useReducedMotion();
  const houseRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const titleId = useId();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(VISITED_KEY) === "1") setVisited(true);
    } catch {}
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      houseRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // On short screens the panel can sit below the fold; bring it into view.
  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => {
      panelRef.current?.scrollIntoView({
        block: "nearest",
        behavior: reduceMotion ? "auto" : "smooth",
      });
    }, reduceMotion ? 0 : 120);
    return () => window.clearTimeout(id);
  }, [open, reduceMotion]);

  const openPanel = () => {
    setOpen(true);
    setVisited(true);
    try {
      sessionStorage.setItem(VISITED_KEY, "1");
    } catch {}
  };

  const close = () => {
    setOpen(false);
    houseRef.current?.focus();
  };

  const screenOn = open || visited;

  return (
    <div className="relative w-[min(440px,86vw,56svh)] min-w-[260px]">
      <button
        ref={houseRef}
        type="button"
        aria-label="Home"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => (open ? setOpen(false) : openPanel())}
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
        {/* Screen layer: grey in the artwork underneath, purple once on. */}
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
            screenOn ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>

      <div className="absolute inset-x-0 top-full flex justify-center pb-8 pt-6">
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              id={panelId}
              role="region"
              aria-labelledby={titleId}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-[min(420px,calc(100vw-32px))] shrink-0 rounded-xl border border-divider bg-bg px-6 py-5"
            >
              <h1 id={titleId} className="pr-8 text-base text-ink">
                Home, a little online.
              </h1>
              <p className="mt-2 text-[15px] leading-[1.65] text-body">
                I&apos;m Laura, a product designer living in Lagos, Portugal,
                with my husband Daniel and our son Diego. This is where I work,
                make things, and occasionally get interrupted by a very
                important drawing.
              </p>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-faint transition-colors duration-150 hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
              >
                <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
                  <path
                    d="M2 2 L10 10 M10 2 L2 10"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
