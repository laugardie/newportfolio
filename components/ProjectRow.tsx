"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  index: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export default function ProjectRow({
  project,
  index,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Link href={`/${project.slug}`} prefetch={false}>
        <div
          className="group flex items-baseline gap-5 md:gap-8 py-6 md:py-8 border-b border-divider hover:border-sand/60 transition-colors cursor-pointer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Number */}
          <span className="font-dm-sans text-xs text-secondary/60 w-7 shrink-0 tabular-nums select-none">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <span
            className="font-fraunces font-black text-ink group-hover:text-sand transition-colors duration-200 leading-none tracking-tight flex-1 min-w-0"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.6rem)" }}
          >
            {project.title}
          </span>

          {/* Category + year */}
          <div className="hidden md:flex flex-col items-end gap-0.5 shrink-0 ml-auto">
            <span className="font-dm-sans text-sm text-secondary">
              {project.company}
            </span>
            <span className="font-dm-sans text-xs text-secondary/50">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
