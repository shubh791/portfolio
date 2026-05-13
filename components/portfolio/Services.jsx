'use client'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import { servicesData } from '@/lib/data/servicesData'
import SectionHeading from './services/SectionHeading'
import ServiceCard from './services/ServiceCard'
import { containerVariants } from './services/animationVariants'

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      {/* ── Background ───────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(129,140,248,0.026) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129,140,248,0.026) 1px, transparent 1px)
            `,
            backgroundSize: '52px 52px',
            maskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 15%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 85% at 50% 50%, black 15%, transparent 100%)',
          }}
        />

        {/* Orb top-left */}
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(129,140,248,1) 0%, transparent 70%)',
            opacity: 0.05,
            filter: 'blur(100px)',
          }}
        />
        {/* Orb bottom-right */}
        <div
          className="absolute -bottom-20 -right-20 w-[440px] h-[440px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)',
            opacity: 0.04,
            filter: 'blur(90px)',
          }}
        />
        {/* Center orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(167,139,250,1) 0%, transparent 70%)',
            opacity: 0.03,
            filter: 'blur(90px)',
          }}
        />

        {/* Horizontal separator line */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px opacity-[0.06]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(129,140,248,1) 30%, rgba(34,211,238,1) 70%, transparent)',
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto">

        <SectionHeading />

        {/* ── 2×2 card grid — equal heights via CSS grid stretch ─────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 items-stretch"
        >
          {servicesData.map((service, i) => (
            <ServiceCard key={service.id} service={service} accentIndex={i} />
          ))}
        </motion.div>

        {/* ── CTA strip ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative mt-10 rounded-2xl p-7 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(129,140,248,0.06) 0%, rgba(167,139,250,0.04) 100%)',
            border: '1px solid rgba(129,140,248,0.16)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 55% 100% at 0% 50%, rgba(129,140,248,0.07), transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <p className="font-bold text-white text-lg">Have a project in mind?</p>
            <p className="text-gray-400 text-sm mt-1">
              Let&apos;s discuss your idea and build something remarkable together.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
            <a
              href="https://calendly.com/shubhampanghal-work/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm btn-glow transition-all"
            >
              <Calendar size={14} />
              Book a Free Call
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-gray-300 btn-outline transition-all hover:text-white"
            >
              Email Me <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
