"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Dialogue } from "@/content/world/dialogues";

// Tweak the look and pace of every dialogue box here.
export const DIALOGUE_CONFIG = {
  width: 600, // px, desktop
  gutter: 16, // px, side margins on small screens
  bottomOffset: 24, // px from the bottom of the viewport
  accent: "#8c5ae7",
  charDelayMs: 20,
};

type Props = {
  dialogue: Dialogue;
  open: boolean;
  onClose: () => void;
};

export default function DialogueBox({ dialogue, open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: 4 }}
          transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed left-1/2 z-50"
          style={{
            bottom: DIALOGUE_CONFIG.bottomOffset,
            width: `min(${DIALOGUE_CONFIG.width}px, calc(100vw - ${DIALOGUE_CONFIG.gutter * 2}px))`,
            x: "-50%",
          }}
        >
          <Conversation dialogue={dialogue} onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

function Conversation({ dialogue, onClose }: { dialogue: Dialogue; onClose: () => void }) {
  const [messageId, setMessageId] = useState(dialogue.start);
  const panelRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<(() => boolean) | null>(null);
  // Messages already shown since this dialogue opened; they skip the typing.
  const readRef = useRef(new Set<string>());
  const labelId = useId();

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-labelledby={labelId}
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.target !== e.currentTarget || (e.key !== "Enter" && e.key !== " ")) return;
        if (skipRef.current?.()) e.preventDefault();
      }}
      className="max-h-[calc(100svh-48px)] overflow-y-auto border border-divider bg-white p-4 text-ink outline-none"
      style={
        {
          "--dialogue-accent": DIALOGUE_CONFIG.accent,
        } as React.CSSProperties
      }
    >
      <div className="flex items-start justify-between gap-4">
        <span id={labelId} className="text-[11px] tracking-[0.12em] text-faint">
          {dialogue.label}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="-mr-2 -mt-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-faint transition-colors duration-150 hover:text-ink focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-ink)]"
        >
          <svg aria-hidden viewBox="0 0 12 12" className="h-3 w-3">
            <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Screen readers get the whole message at once, not each character. */}
      <p className="sr-only" aria-live="polite">
        {dialogue.messages[messageId].text}
      </p>
      <Message
        key={messageId}
        dialogue={dialogue}
        messageId={messageId}
        panelRef={panelRef}
        skipRef={skipRef}
        read={readRef.current}
        onChoose={setMessageId}
        onClose={onClose}
      />
    </div>
  );
}

type MessageProps = {
  dialogue: Dialogue;
  messageId: string;
  panelRef: React.RefObject<HTMLDivElement>;
  skipRef: React.MutableRefObject<(() => boolean) | null>;
  read: Set<string>;
  onChoose: (next: string) => void;
  onClose: () => void;
};

function Message({ dialogue, messageId, panelRef, skipRef, read, onChoose, onClose }: MessageProps) {
  const message = dialogue.messages[messageId];
  const length = message.text.length;
  const reduceMotion = useReducedMotion();

  const [shown, setShown] = useState(() => (reduceMotion || read.has(messageId) ? length : 0));
  const done = shown >= length;
  // Like a game menu: one option is always selected once the text is in.
  const [selected, setSelected] = useState(0);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const count = message.options.length;
    const next = (index + count) % count;
    setSelected(next);
    optionRefs.current[next]?.focus({ preventScroll: true });
  };

  const skip = useCallback(() => {
    if (done) return false;
    setShown(length);
    return true;
  }, [done, length]);

  useEffect(() => {
    skipRef.current = skip;
  }, [skip, skipRef]);

  // Park focus on the panel while a new message types out.
  useEffect(() => {
    panelRef.current?.focus({ preventScroll: true });
  }, [panelRef]);

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setShown((n) => Math.min(n + 1, length));
    }, DIALOGUE_CONFIG.charDelayMs);
    return () => window.clearInterval(id);
  }, [done, length]);

  useEffect(() => {
    if (!done) return;
    read.add(messageId);
    optionRefs.current[0]?.focus({ preventScroll: true });
  }, [done, read, messageId]);

  return (
    <>
      {/* The untyped remainder stays in the layout, invisible, so nothing reflows. */}
      <p
        aria-hidden
        onClick={skip}
        className={`mt-2 whitespace-pre-line text-[15px] leading-[1.65] text-body ${done ? "" : "cursor-pointer"}`}
      >
        {message.text.slice(0, shown)}
        <span className="invisible">{message.text.slice(shown)}</span>
      </p>

      <div
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            select(selected + (e.key === "ArrowDown" ? 1 : -1));
          }
        }}
        className="mt-3 flex flex-col gap-1"
      >
        {message.options.map((option, i) => {
          const active = i === selected;
          return (
            <button
              key={option.label}
              ref={(el) => {
                optionRefs.current[i] = el;
              }}
              type="button"
              disabled={!done}
              onClick={() => {
                if (option.close) onClose();
                else if (option.href === undefined) onChoose(option.next);
                else if (option.href.startsWith("mailto:")) window.location.href = option.href;
                else window.open(option.href, "_blank", "noopener,noreferrer");
              }}
              onFocus={() => setSelected(i)}
              // Only a real pointer movement selects. An option that appears under a
              // resting cursor (after choosing an option) must not steal the selection.
              onPointerMove={(e) => {
                if (done && !active && (e.movementX !== 0 || e.movementY !== 0)) select(i);
              }}
              className={`flex h-8 w-full items-center justify-center gap-1.5 px-3 text-center text-[15px] outline-none transition-colors duration-150 disabled:cursor-default ${
                active ? "bg-[var(--dialogue-accent)] text-white disabled:opacity-50" : "text-ink disabled:text-faint"
              }`}
            >
              <svg
                aria-hidden
                viewBox="0 0 8 10"
                className={`h-2.5 w-2 shrink-0 fill-current ${active ? "opacity-100" : "opacity-0"}`}
              >
                <path d="M0 0 L8 5 L0 10 Z" />
              </svg>
              {option.label}
            </button>
          );
        })}
      </div>
    </>
  );
}
