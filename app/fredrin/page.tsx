"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINE = "I love designing and building things.";

// `path` is a short career path, shown in order when the card is opened.
type Step = { role: string; detail: string };
type Card = { title: string; body: string; image: string; path?: Step[] };

const CARDS: Card[] = [
  {
    title: "From Seville to Lagos",
    body: "Born and raised in Seville, Spain. Now calling Lagos, Portugal home.",
    image: "/assets/resend-seville.jpg",
  },
  {
    title: "Sometimes upside down",
    body: "CrossFit, running, kettlebells, yoga… It’s how I feel good.",
    image: "/assets/resend-yoga.jpg",
  },
  {
    title: "Happiest in the kitchen",
    body: "Trying new recipes is my favorite way to switch off.",
    image: "/assets/resend-cooking.jpg",
  },
  {
    title: "I love DIY",
    body: "My latest project was an astronaut helmet for my son.",
    image: "/assets/resend-astronaut.jpg",
  },
  {
    title: "From teaching to design",
    body: "Before getting into design, I was a primary school teacher for four years.",
    image: "/assets/resend-liferay.jpg",
    path: [
      { role: "Primary school teacher", detail: "Four years" },
      { role: "Design System Designer", detail: "Liferay" },
    ],
  },
  {
    title: "Lexicon",
    body: "My first job as a designer was at Liferay, working on Lexicon, their design system.",
    image: "/assets/resend-lexicon.jpg",
  },
  {
    title: "Beezy",
    body: "Shipping features, and helping with their design system.",
    image: "/assets/resend-beezy.jpg",
  },
  {
    title: "Gumroad",
    body: "Designing the tools creators use to sell their work online.",
    image: "/assets/resend-gumroad.jpg",
  },
  {
    title: "Flexile",
    body: "A product to pay contractors and manage equity.",
    image: "/assets/resend-flexile.jpg",
  },
  {
    title: "More from Gumroad",
    body: "A quick mix of other things I worked on.",
    image: "/assets/resend-gumroad-more.jpg",
  },
  {
    title: "Personal projects",
    body: "Things I make on my own, for fun.",
    image: "/assets/resend-personal.png",
  },
  {
    title: "Q&A",
    body: "Thank you! Happy to answer any questions.",
    image: "/assets/resend-qa-2.png",
  },
];

const EASE = [0.215, 0.61, 0.355, 1] as const;
const PHOTO = "h-[min(26rem,48vh)] w-[min(26rem,48vh)]";
const CARD = "h-[min(22rem,58vw)] w-[min(22rem,58vw)]";

// Where a card sits relative to the active one, wrapping round so the carousel loops: 0 is the
// centre, negative to the left, positive to the right.
function offsetOf(i: number, active: number) {
  const n = CARDS.length;
  const half = Math.floor(n / 2);
  return ((i - active + half + n) % n) - half;
}

// Matches CARD: min(22rem, 58vw).
function cardSize(vw: number) {
  return Math.min(352, vw * 0.58);
}

// The centre card is large and flat. Each step out, a card gets smaller, turns further toward the
// centre and blurs more. Three show on each side; the rest wait, hidden, past the edges.
const STEPS = [
  { scale: 1, rotate: 0, blur: 0, opacity: 1 },
  { scale: 0.78, rotate: 34, blur: 2, opacity: 0.85 },
  { scale: 0.62, rotate: 48, blur: 5, opacity: 0.6 },
  { scale: 0.5, rotate: 58, blur: 9, opacity: 0.35 },
];

function placement(offset: number, vw: number) {
  const d = Math.abs(offset);
  const side = Math.sign(offset);
  const card = cardSize(vw);
  // Each step moves out by a share of the card that shrinks with it, so the cards overlap a little.
  const spread = [0, 0.72, 1.22, 1.6];
  if (d >= STEPS.length) {
    const last = STEPS[STEPS.length - 1];
    return {
      x: side * card * 2,
      scale: last.scale * 0.8,
      rotateY: side * -last.rotate,
      opacity: 0,
      filter: `blur(${last.blur + 3}px)`,
      zIndex: 0,
    };
  }
  const s = STEPS[d];
  return {
    x: side * card * spread[d],
    scale: s.scale,
    rotateY: side * -s.rotate,
    opacity: s.opacity,
    filter: `blur(${s.blur}px)`,
    zIndex: STEPS.length - d,
  };
}

function RoundButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] text-[#ededed] transition-colors duration-200 hover:bg-white/[0.16] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
    >
      {children}
    </button>
  );
}

export default function FredrinPage() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<number | null>(null);
  const [vw, setVw] = useState(1280);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const step = useCallback((delta: number) => setActive((a) => (a + delta + CARDS.length) % CARDS.length), []);

  const openCard = useCallback((i: number) => {
    setActive(i);
    setOpened(i);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (opened !== null) {
        if (e.key === "Escape") setOpened(null);
        return;
      }
      if (!open) return;
      if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Escape") setOpen(false);
      else if (e.key === "Enter") {
        // A focused button handles its own Enter; anywhere else, Enter opens the card in the centre.
        if (e.target instanceof HTMLElement && e.target.closest("button")) return;
        e.preventDefault();
        openCard(active);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, opened, active, step, openCard]);

  const t = (duration: number, delay = 0) => (reduce ? { duration: 0 } : { duration, delay, ease: EASE });

  return (
    <main className="relative flex h-[100dvh] flex-col items-center justify-center overflow-hidden bg-[#111111] px-6 text-center text-[#ededed] [color-scheme:dark] select-none">
      {/* The photo opens the carousel, then waits in the corner as the way back. */}
      <motion.div
        layout
        transition={t(0.6)}
        className={`z-20 flex items-center ${open ? "fixed left-6 top-6" : "relative flex-col"}`}
      >
        <motion.button
          layout
          type="button"
          aria-label={open ? "Back" : "Open"}
          onClick={() => setOpen((o) => !o)}
          transition={t(0.6)}
          style={{ borderRadius: open ? "50%" : "22%" }}
          className={`group shrink-0 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60 ${open ? "h-10 w-10" : PHOTO}`}
        >
          {/* Black and white until hovered, then colour. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/laura-square.jpg"
            alt="Laura"
            className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
          />
        </motion.button>
        <AnimatePresence initial={false}>
          {!open && (
            <motion.div
              key="hello"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0, transition: t(0.3, 0.3) }}
              exit={{ opacity: 0, transition: t(0.12) }}
            >
              <h1 className="mt-14 text-2xl font-normal tracking-tight">Hello, I&apos;m Laura.</h1>
              <p className="mt-3 text-base text-[#8b8b8b]">{LINE}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="carousel"
            exit={{ opacity: 0, transition: t(0.25) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full">
              <div
                role="region"
                aria-roledescription="carousel"
                aria-label="About me"
                className={`relative mx-auto ${CARD} [perspective:1600px]`}
              >
                {CARDS.map((c, i) => {
                  const offset = offsetOf(i, active);
                  const { zIndex, ...target } = placement(offset, vw);
                  const centre = offset === 0;
                  return (
                    <motion.button
                      key={c.title}
                      type="button"
                      aria-label={`Open ${c.title}`}
                      aria-current={centre ? "true" : undefined}
                      tabIndex={centre ? 0 : -1}
                      onClick={() => openCard(i)}
                      initial={{ ...target, opacity: 0, y: 40 }}
                      animate={{ ...target, y: 0 }}
                      transition={t(0.6, 0)}
                      style={{ zIndex, pointerEvents: Math.abs(offset) < STEPS.length ? "auto" : "none" }}
                      className={`absolute inset-0 ${CARD} cursor-pointer overflow-hidden rounded-[22%] bg-[#1c1c1c] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt="" className="h-full w-full object-cover" draggable={false} />
                    </motion.button>
                  );
                })}
              </div>

              {/* Hangs below the stage so the cards stay centred on the page. */}
              <div className="absolute inset-x-0 top-full mt-10 flex flex-col items-center gap-7">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: t(0.5, 0.4) }}
                  aria-live="polite"
                  className="h-20 px-4"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0, transition: t(0.3) }}
                      exit={{ opacity: 0, y: -4, transition: t(0.18) }}
                      className="flex max-w-sm flex-col gap-2 text-center"
                    >
                      <p className="text-base">{CARDS[active].title}</p>
                      <p className="text-base leading-relaxed text-[#8b8b8b] [text-wrap:balance]">
                        {CARDS[active].body}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: t(0.5, 0.5) }}
                  className="flex items-center gap-5"
                >
                  <RoundButton label="Previous" onClick={() => step(-1)}>
                    <span aria-hidden>←</span>
                  </RoundButton>
                  <RoundButton label="Next" onClick={() => step(1)}>
                    <span aria-hidden>→</span>
                  </RoundButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* An opened card: the image large, with its title and line. */}
      <AnimatePresence>
        {opened !== null && (
          <motion.div
            key="opened"
            role="dialog"
            aria-modal="true"
            aria-label={CARDS[opened].title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: t(0.25) }}
            exit={{ opacity: 0, transition: t(0.2) }}
            onClick={() => setOpened(null)}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#111111]/90 px-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: t(0.45) }}
              exit={{ scale: 0.95, opacity: 0, transition: t(0.2) }}
              onClick={(e) => e.stopPropagation()}
              className="h-[min(34rem,70vw,62vh)] w-[min(34rem,70vw,62vh)] overflow-hidden rounded-[22%] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={CARDS[opened].image} alt="" className="h-full w-full object-cover" draggable={false} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: t(0.35, 0.15) }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-w-sm flex-col gap-2 text-center select-text"
            >
              <p className="text-lg">{CARDS[opened].title}</p>
              <p className="text-base leading-relaxed text-[#8b8b8b] [text-wrap:balance]">{CARDS[opened].body}</p>
              {CARDS[opened].path && (
                <ol className="mt-4 flex items-center justify-center gap-4 text-sm">
                  {CARDS[opened].path!.map((s, i) => (
                    <li key={s.role} className="flex items-center gap-4">
                      {i > 0 && (
                        <span aria-hidden className="text-[#5a5a5a]">
                          →
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span>{s.role}</span>
                        <span className="text-[#8b8b8b]">{s.detail}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </motion.div>
            <button
              type="button"
              aria-label="Close"
              autoFocus
              onClick={() => setOpened(null)}
              className="fixed right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full text-[#ededed] transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
            >
              <span aria-hidden>✕</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
