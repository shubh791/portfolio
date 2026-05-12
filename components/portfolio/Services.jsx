'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"
import { servicesData } from "@/lib/data/servicesData"

const SERVICE_ACCENTS = [
  { color: "#818cf8", gradient: "from-indigo-500 to-violet-500",  glow: "rgba(129,140,248,0.18)", ring: "rgba(129,140,248,0.35)" },
  { color: "#22d3ee", gradient: "from-cyan-400 to-sky-500",       glow: "rgba(34,211,238,0.18)",  ring: "rgba(34,211,238,0.35)"  },
  { color: "#a78bfa", gradient: "from-violet-500 to-purple-400",  glow: "rgba(167,139,250,0.18)", ring: "rgba(167,139,250,0.35)" },
  { color: "#34d399", gradient: "from-emerald-400 to-teal-500",   glow: "rgba(52,211,153,0.18)",  ring: "rgba(52,211,153,0.35)"  },
  { color: "#f59e0b", gradient: "from-amber-400 to-orange-500",   glow: "rgba(245,158,11,0.18)",  ring: "rgba(245,158,11,0.35)"  },
]

// ── BIG FEATURE CARD (first service, spans full width) ────────────────────────
function FeaturedServiceCard({ service, accent }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative col-span-full rounded-3xl overflow-hidden cursor-default"
      style={{
        background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, ${accent.color}06 100%)`,
        border: `1px solid ${hovered ? accent.ring : "rgba(255,255,255,0.09)"}`,
        boxShadow: hovered ? `0 30px 80px ${accent.glow}, 0 0 0 1px ${accent.ring}` : "0 8px 32px rgba(0,0,0,0.2)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-[3px] bg-gradient-to-r ${accent.gradient}`} />

      {/* Animated bg glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.45 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 60% 80% at 80% 50%, ${accent.color}10, transparent 70%)` }}
      />

      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Icon + number */}
        <div className="flex-shrink-0">
          <motion.div
            animate={{ boxShadow: hovered ? `0 0 40px ${accent.color}50` : "none" }}
            transition={{ duration: 0.4 }}
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl"
            style={{ background: `${accent.color}12`, border: `1px solid ${accent.color}30` }}
          >
            {service.icon}
          </motion.div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs font-bold opacity-50" style={{ color: accent.color }}>
              {service.number}
            </span>
            <span
              className="text-[10px] px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider"
              style={{ background: `${accent.color}15`, color: accent.color, border: `1px solid ${accent.color}30` }}
            >
              Core Service
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-5">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.tech.map(t => (
              <span
                key={t}
                className="text-[11px] px-3 py-1.5 rounded-full font-mono font-medium"
                style={{ background: `${accent.color}0e`, border: `1px solid ${accent.color}28`, color: accent.color }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ x: hovered ? 0 : 8, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full items-center justify-center"
          style={{ background: `${accent.color}15`, border: `1px solid ${accent.color}30` }}
        >
          <ArrowRight size={18} style={{ color: accent.color }} />
        </motion.div>
      </div>
    </motion.div>
  )
}

// ── STANDARD SERVICE CARD ─────────────────────────────────────────────────────
function ServiceCard({ service, accent, index, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden cursor-default flex flex-col"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? accent.ring : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 20px 60px ${accent.glow}, 0 0 0 1px ${accent.ring}` : "none",
        transform: hovered ? "translateY(-5px)" : "none",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Top bar */}
      <div className={`h-[2px] bg-gradient-to-r ${accent.gradient}`} />

      {/* Corner glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none rounded-bl-full"
        style={{ background: `radial-gradient(circle at top right, ${accent.color}14, transparent 65%)` }}
      />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <motion.div
            animate={{ boxShadow: hovered ? `0 0 24px ${accent.color}40` : "none" }}
            transition={{ duration: 0.35 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${accent.color}12`, border: `1px solid ${accent.color}28` }}
          >
            {service.icon}
          </motion.div>
          <span
            className="font-mono text-xs font-bold opacity-40 mt-1"
            style={{ color: accent.color }}
          >
            {service.number}
          </span>
        </div>

        <h3
          className="text-base font-bold text-white mb-2.5 leading-snug transition-colors duration-300"
          style={{ color: hovered ? accent.color : "white" }}
        >
          {service.title}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-4">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {service.tech.map(t => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-1 rounded-full font-mono transition-all duration-300"
              style={{
                background: hovered ? `${accent.color}12` : "rgba(255,255,255,0.04)",
                border: `1px solid ${hovered ? accent.color + "35" : "rgba(255,255,255,0.09)"}`,
                color: hovered ? accent.color : "rgba(148,163,184,0.8)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── SERVICES SECTION ──────────────────────────────────────────────────────────
export default function Services() {
  const [featured, ...rest] = servicesData
  const featuredAccent = SERVICE_ACCENTS[0]

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-violet-700 opacity-[0.07] blur-[160px] rounded-full ambient-blob" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-indigo-600 opacity-[0.07] blur-[160px] rounded-full" style={{ animationDelay: "5s" }} />
        {/* Center radial for drama */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] opacity-10"
          style={{ background: "linear-gradient(90deg, transparent, rgba(129,140,248,0.8), transparent)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6 justify-center mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            What I Deliver
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-[1.08]">
            Solutions I{" "}
            <span className="gradient-text">Provide</span>
            {" "}to Clients
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From stunning frontend interfaces to complete production systems —
            every service is engineered for real-world impact.
          </p>
        </motion.div>

        {/* Grid — featured full-width + 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Featured card — full width */}
          <FeaturedServiceCard service={featured} accent={featuredAccent} />

          {/* Remaining 4 cards */}
          {rest.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              accent={SERVICE_ACCENTS[i + 1] ?? SERVICE_ACCENTS[0]}
              index={i}
              delay={0.08 + i * 0.09}
            />
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "rgba(129,140,248,0.04)",
            border: "1px solid rgba(129,140,248,0.15)",
          }}
        >
          <div>
            <p className="font-bold text-white text-lg">Have a project in mind?</p>
            <p className="text-gray-400 text-sm mt-1">
              Let&apos;s discuss your idea and build something remarkable together.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="https://calendly.com/shubhampanghal-work/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-black btn-glow transition-all"
            >
              <Calendar size={15} />
              Book a Free Call
            </a>
            <a
              href="mailto:shubhampanghal.work@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-300 transition-all hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"
                e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                e.currentTarget.style.background = "transparent"
              }}
            >
              Email Me <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
