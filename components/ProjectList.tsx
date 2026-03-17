'use client'

import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/content/projects'
import ProjectRow from './ProjectRow'

export default function ProjectList() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Motion values updated directly on mousemove — no re-renders
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Springy lag gives the floating preview its organic feel
  const x = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.6 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX + 28)
      rawY.set(e.clientY - 110)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [rawX, rawY])

  return (
    <section id="work" className="px-6 md:px-10 max-w-5xl mx-auto py-16 md:py-24">
      {/* Section label */}
      <p className="font-dm-sans text-xs text-secondary/60 tracking-[0.15em] uppercase mb-12 md:mb-16">
        selected work
      </p>

      {/* Project rows */}
      {projects.map((project, i) => (
        <ProjectRow
          key={project.slug}
          project={project}
          index={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}

      {/* Floating thumbnail — follows cursor with spring lag */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            className="fixed pointer-events-none z-40 overflow-hidden rounded-xl shadow-2xl hidden md:block"
            style={{
              x,
              y,
              top: 0,
              left: 0,
              width: 280,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={projects[hoveredIndex].cover}
              alt={projects[hoveredIndex].title}
              width={280}
              height={175}
              className="w-full aspect-[16/10] object-cover"
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
