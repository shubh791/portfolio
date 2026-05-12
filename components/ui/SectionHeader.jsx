'use client'

import { motion } from "framer-motion"

/**
 * Reusable section header with badge, title, gradient highlight, and subtitle.
 * Usage: <SectionHeader badge="My Work" title="Featured" highlight="Projects" subtitle="..." />
 */
export default function SectionHeader({ badge, title, highlight, subtitle, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      {badge && (
        <div className="section-badge mb-6 justify-center mx-auto w-fit">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          {badge}
        </div>
      )}

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
        {title}{highlight && <> <span className="gradient-text">{highlight}</span></>}
      </h2>

      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
