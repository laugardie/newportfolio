"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

// Placeholder copy: the opened content is still to be written.
const LINE = "I love designing and building things.";
const ABOUT = [
  "[Placeholder] A short paragraph about who I am and what I care about as a designer.",
  "[Placeholder] A short paragraph about what I've worked on and how I like to work.",
  "[Placeholder] A short paragraph about why Fredrin.",
];

export default function FredrinPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#111111] px-6 py-24 text-center text-[#ededed] [color-scheme:dark]">
      {/* Black and white until hovered, then colour. Clicking opens the rest. */}
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Hide the rest of About Me" : "Open the rest of About Me"}
        onClick={() => setOpen((o) => !o)}
        className="group h-[min(26rem,48vh)] w-[min(26rem,48vh)] overflow-hidden rounded-[22%] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ededed]/40 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/laura-square.jpg"
          alt="Laura"
          className="h-full w-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0 group-focus-visible:grayscale-0"
        />
      </button>

      <h1 className="mt-14 text-2xl font-normal tracking-tight">Hello, I&apos;m Laura.</h1>
      <p className="mt-3 text-base text-[#8b8b8b]">{LINE}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.section
            id="about"
            key="about"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="w-full max-w-md overflow-hidden"
          >
            <div className="space-y-5 pt-16 text-base leading-relaxed text-[#a3a3a3]">
              {ABOUT.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
