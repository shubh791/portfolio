'use client'

import { useEffect, useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Code2, Server, Zap, Trophy, ArrowRight, Sparkles, Star } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"

const ROLES = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "UI/UX Engineer",
  "Component Architect",
  "Interface Craftsman",
]

const STATS = [
  { target: 20, suffix: "+", label: "Projects Delivered",     icon: "🚀", color: "#818cf8" },
  { target: 1,  suffix: "+ Yr", label: "Freelance Experience", icon: "⚡", color: "#22d3ee" },
  { target: 10, suffix: "+", label: "Technologies",           icon: "🔧", color: "#a78bfa" },
]

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Pixel-Perfect Interfaces",
    desc: "Component-driven, responsive UIs built with React & Next.js — obsessive attention to every layout, spacing, and interaction detail.",
    color: "#818cf8",
    bg: "rgba(129,140,248,0.06)",
    border: "rgba(129,140,248,0.25)",
  },
  {
    icon: Zap,
    title: "Cinematic Animations",
    desc: "Scroll-triggered reveals, stagger effects, and silky page transitions with Framer Motion — motion that elevates, not distracts.",
    color: "#22d3ee",
    bg: "rgba(34,211,238,0.06)",
    border: "rgba(34,211,238,0.25)",
  },
  {
    icon: Server,
    title: "Full-Stack Capability",
    desc: "Node.js, PostgreSQL & MongoDB when needed — I own the entire stack end-to-end when the project demands it.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.25)",
  },
]

const TAGS = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "HTML/CSS",
  "JavaScript",
  "Component Systems",
  "Responsive Design",
  "Performance",
  "Accessibility",
]

// ── STAT CARD ─────────────────────────────────────────────────────────────────
function StatCard({ target, suffix, label, icon, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const count = useCountUp(target, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="relative rounded-2xl p-5 text-center overflow-hidden group cursor-default"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${color}45`
        e.currentTarget.style.boxShadow = `0 8px 32px ${color}18`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}18, transparent 70%)` }}
      />
      <div className="relative z-10 space-y-1.5">
        <div className="text-2xl">{icon}</div>
        <p className="text-3xl font-black tabular-nums" style={{ color }}>
          {count}{suffix}
        </p>
        <p className="text-[11px] text-gray-500 leading-tight font-medium">{label}</p>
      </div>
    </motion.div>
  )
}

// ── HIGHLIGHT CARD ────────────────────────────────────────────────────────────
function HighlightCard({ icon: Icon, title, desc, color, bg, border, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="relative flex gap-4 p-5 rounded-2xl group cursor-default transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
      onMouseEnter={e => {
        e.currentTarget.style.background = bg
        e.currentTarget.style.borderColor = border
        e.currentTarget.style.transform = "translateX(4px)"
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.02)"
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"
        e.currentTarget.style.transform = "translateX(0)"
      }}
    >
      {/* Left accent line */}
      <div
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: color }}
      />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
        style={{ background: `${color}12`, border: `1px solid ${color}25` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-white mb-1.5">{title}</p>
        <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  )
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
export default function About() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRoleIndex(p => (p + 1) % ROLES.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute -top-40 right-[-150px] w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.07] bg-indigo-500 pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.06] bg-cyan-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-24 items-start relative z-10">

        {/* ── LEFT ──────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          {/* Badge */}
          <div className="section-badge">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            About Me
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-[2.75rem] lg:text-5xl font-black leading-[1.1] tracking-tight">
              Crafting{" "}
              <span className="gradient-text">Interfaces</span>
            </h2>
            <h2 className="text-4xl md:text-[2.75rem] lg:text-5xl font-black leading-[1.1] tracking-tight text-white/90">
              That Leave an Impression
            </h2>
          </div>

          {/* Cycling role badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="flex items-center gap-2.5"
            >
              <span className="w-1 h-5 rounded-full bg-[var(--accent)]" />
              <span className="text-sm font-semibold tracking-wide" style={{ color: "var(--accent)" }}>
                {ROLES[roleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main copy */}
          <div className="space-y-4">
            <p className="text-gray-200 leading-[1.8] text-[15px]">
              I&apos;m{" "}
              <span className="font-bold text-white">Shubham Panghal</span>
              {" "}— a frontend developer who turns complex requirements into{" "}
              <span className="gradient-text font-semibold">fast, immersive, production-ready experiences</span>.
              I specialise in the frontend layer — React, Next.js, animations, and
              component architecture — built to delight users and scale with confidence.
            </p>

            <p className="text-gray-400 leading-[1.8] text-sm">
              I obsess over{" "}
              <span className="text-gray-200 font-medium">pixel-perfect layouts</span>,{" "}
              <span className="text-gray-200 font-medium">smooth micro-interactions</span>, and{" "}
              <span className="text-gray-200 font-medium">accessible, reusable components</span>{" "}
              — every detail crafted for{" "}
              <span className="text-[var(--accent)]">visual clarity</span>,{" "}
              <span className="text-[var(--accent)]">performance</span>, and{" "}
              <span className="text-[var(--accent)]">exceptional UX</span>.
            </p>
          </div>

          {/* Quote stripe */}
          <div
            className="flex gap-3 p-4 rounded-xl"
            style={{ background: "rgba(var(--accent-rgb),0.05)", borderLeft: "3px solid rgba(var(--accent-rgb),0.5)" }}
          >
            <Sparkles size={14} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
            <p className="text-gray-400 text-[13px] leading-relaxed">
              Actively seeking{" "}
              <span className="text-white font-semibold">frontend engineering roles</span>{" "}
              — full-time, hybrid, or remote — where I can ship polished, impactful products
              and bring full-stack capability when the team needs it.
            </p>
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.035 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06 }}
                className="px-3.5 py-1.5 text-[11px] font-medium rounded-full cursor-default transition-all duration-200"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(203,213,225,0.75)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.5)"
                  e.currentTarget.style.color = "var(--accent)"
                  e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"
                  e.currentTarget.style.color = "rgba(203,213,225,0.75)"
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Resume CTA */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.12), rgba(var(--accent-rgb),0.06))",
              border: "1px solid rgba(var(--accent-rgb),0.3)",
              color: "var(--accent)",
              boxShadow: "0 0 20px rgba(var(--accent-rgb),0.08)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.2), rgba(var(--accent-rgb),0.1))"
              e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.55)"
              e.currentTarget.style.boxShadow = "0 0 30px rgba(var(--accent-rgb),0.18)"
              e.currentTarget.style.transform = "translateY(-1px)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.12), rgba(var(--accent-rgb),0.06))"
              e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.3)"
              e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--accent-rgb),0.08)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* ── RIGHT ─────────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            <Star size={12} className="text-[var(--accent)] opacity-50" />
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          {/* Highlight cards */}
          <div className="space-y-3">
            {HIGHLIGHTS.map((h, i) => (
              <HighlightCard key={h.title} {...h} index={i} />
            ))}
          </div>

          {/* Open to work banner */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-5 rounded-2xl"
            style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.18)" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse block" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm text-white leading-tight">Currently Open to Work</p>
              <p className="text-xs text-gray-400 mt-1">
                Frontend roles · Full-time · Remote / Hybrid · Freelance
              </p>
            </div>
            <Trophy size={18} className="text-green-400/40 flex-shrink-0" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
