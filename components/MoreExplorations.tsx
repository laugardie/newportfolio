"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import type { Exploration } from "@/content/explorations";


const slideVariants = { rest: { x: 0 }, hover: { x: 4 } };
const slideTransition = { type: "spring" as const, stiffness: 300, damping: 20 };
const fadeVariants = { rest: { opacity: 0.5 }, hover: { opacity: 0.8 } };
const fadeTransition = { duration: 0.2, ease: "easeOut" as const };

function CursorPreview({ src }: { src: string | null }) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const x = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ x, y }}
      animate={{ opacity: src ? 1 : 0, scale: src ? 1 : 0.95 }}
      transition={{ duration: src ? 0.2 : 0.15, ease: "easeOut" }}
    >
      <div
        className="relative w-[220px] h-[140px] rounded-lg overflow-hidden"
        style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      >
        <AnimatePresence>
          {src && (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function MoreExplorations({ others }: { others: Exploration[] }) {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  if (others.length === 0) return null;

  return (
    <div className="mt-20 pt-16 border-t border-divider">
      <CursorPreview src={previewSrc} />
      <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-muted mb-5">
        More explorations
      </p>
      <div>
        {others.map((e) => (
          <motion.a
            key={e.slug}
            href={`/explorations/${e.slug}`}
            className="row-item flex items-baseline justify-between py-2.5 border-b border-divider -mx-2 px-2 cursor-pointer"
            style={{ textDecoration: "none" }}
            initial="rest"
            whileHover="hover"
            animate="rest"
            onHoverStart={() => setPreviewSrc(e.thumbnail)}
            onHoverEnd={() => setPreviewSrc(null)}
          >
            <motion.div
              className="flex items-baseline justify-between w-full"
              variants={slideVariants}
              transition={slideTransition}
            >
              <div className="flex items-baseline gap-1.5 min-w-0 mr-4">
                <span className="text-[14px] text-ink">{e.name}</span>
                <span className="text-[14px] text-ink/50 flex-shrink-0">
                  · {e.company}
                </span>
              </div>
              <motion.span
                className="text-[12px] text-ink tabular-nums flex-shrink-0"
                variants={fadeVariants}
                transition={fadeTransition}
              >
                {e.year}
              </motion.span>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
