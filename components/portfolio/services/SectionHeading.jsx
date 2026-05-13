'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '4+',   label: 'Service Packages' },
  { value: '48h',  label: 'Fastest Delivery'  },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function SectionHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="text-center mb-14 lg:mb-18"
    >
      <div className="section-badge mb-6 justify-center mx-auto w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        Services &amp; Pricing
      </div>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.07]">
        Premium Frontend{' '}
        <span className="gradient-text">Services</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Transparent pricing, fast delivery, and engineering quality that impresses
        from day one — from landing pages to full-stack systems.
      </p>

      <div
        className="mx-auto mt-8 mb-10 h-px max-w-xs"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(129,140,248,0.45), transparent)',
        }}
      />

      <div className="flex items-center justify-center gap-12 flex-wrap">
        {STATS.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-black gradient-text tabular-nums">{value}</p>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mt-1">{label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
