'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowRight, Sparkles, Code2, Database, Layers } from "lucide-react"
import dynamic from "next/dynamic"

const ThemeSwitcher = dynamic(() => import("./ThemeSwitcher"), { ssr: false })
const SocialIcons = dynamic(() => import("./SocialIcons"), { ssr: false })

const typewriterTexts = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Node.js Backend Architect",
  "UI/UX Craftsman",
  "Performance-Driven Builder",
]

const techBadges = [
  { label: "React", icon: Code2, color: "#61DAFB" },
  { label: "Next.js", icon: Layers, color: "#818cf8" },
  { label: "Node.js", icon: Code2, color: "#4ade80" },
  { label: "PostgreSQL", icon: Database, color: "#22d3ee" },
]

// ── TERMINAL PANEL ────────────────────────────────────────────────────────────
function TerminalPanel() {
  const [uptime, setUptime] = useState(0)
  const [score, setScore] = useState(98)
  const [activeStack, setActiveStack] = useState(0)
  const [logLine, setLogLine] = useState(0)

  const stackItems = [
    { label: "Frontend", value: "React · Next.js · Tailwind" },
    { label: "Backend", value: "Node.js · Express.js" },
    { label: "Database", value: "PostgreSQL · MongoDB" },
    { label: "Deployment", value: "Vercel · REST APIs" },
  ]

  const logs = [
    "✓ PrepZena deployed to production",
    "✓ Cybergram API response: 200ms",
    "✓ Database query optimised: −40%",
    "✓ Factory Flow KPIs rendered",
    "✓ Auth middleware validated",
  ]

  const barHeights = [8, 16, 11, 20, 14, 22, 16, 19, 12, 20, 9, 18]

  useEffect(() => {
    const t1 = setInterval(() => setUptime(p => p + 1), 1000)
    const t2 = setInterval(() => setScore(95 + Math.floor(Math.random() * 5)), 4000)
    const t3 = setInterval(() => setActiveStack(p => (p + 1) % stackItems.length), 2200)
    const t4 = setInterval(() => setLogLine(p => (p + 1) % logs.length), 2800)
    return () => { clearInterval(t1); clearInterval(t2); clearInterval(t3); clearInterval(t4) }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: "rgba(6,10,24,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
      }}
    >
      {/* macOS title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]"
        style={{ background: "rgba(255,255,255,0.025)" }}
      >
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="flex-1 text-center text-[11px] text-white/25 font-mono tracking-wide">
          shubham@panghal — dev-dashboard
        </span>
        <span className="flex items-center gap-1.5 text-green-400 text-[10px] font-mono">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
          LIVE
        </span>
      </div>

      <div className="p-5 space-y-3.5">

        {/* Featured project */}
        <a
          href="https://prepzena.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 rounded-xl transition-all duration-300"
          style={{
            background: "rgba(129,140,248,0.06)",
            border: "1px solid rgba(129,140,248,0.15)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(129,140,248,0.4)"
            e.currentTarget.style.background = "rgba(129,140,248,0.1)"
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(129,140,248,0.15)"
            e.currentTarget.style.background = "rgba(129,140,248,0.06)"
          }}
        >
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-mono">Featured Project</p>
            <span
              className="flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          </div>
          <p className="text-sm font-bold text-white group-hover:text-[var(--accent)] transition-colors">
            PrepZena — AI Mock Interview Platform
          </p>
          <p className="text-[11px] text-white/40 mt-1">AI-powered interview prep with real-time feedback</p>
        </a>

        {/* Metrics 2×2 */}
        <div className="grid grid-cols-2 gap-2.5">
          <div
            className="rounded-xl p-3.5"
            style={{ background: "rgba(129,140,248,0.06)", border: "1px solid rgba(129,140,248,0.15)" }}
          >
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-mono mb-1">Performance</p>
            <p className="text-lg font-bold font-mono text-[var(--accent)]">{score}%</p>
            <div className="mt-1.5 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #818cf8, #22d3ee)", width: `${score}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <div
            className="rounded-xl p-3.5"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-mono mb-1">Session</p>
            <p className="text-lg font-bold font-mono text-white/70">{uptime}<span className="text-xs text-white/30">s</span></p>
            <p className="text-[10px] text-white/30 mt-1">Online now</p>
          </div>

          {/* Cycling stack */}
          <div
            className="rounded-xl p-3.5 col-span-2"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="text-[9px] uppercase tracking-widest text-white/30 font-mono mb-1.5">Current Stack</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStack}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between"
              >
                <span className="text-[11px] text-white/40 font-mono">{stackItems[activeStack].label}</span>
                <span className="text-[11px] font-semibold font-mono text-[var(--accent)]">{stackItems[activeStack].value}</span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Live log */}
        <div
          className="rounded-xl px-4 py-2.5 font-mono text-[11px] overflow-hidden"
          style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-white/20">$ </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={logLine}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-green-400"
            >
              {logs[logLine]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Activity bars */}
        <div className="flex items-end gap-1 h-9 px-1">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h}px`, `${h + 7}px`, `${h}px`] }}
              transition={{ duration: 1.4 + i * 0.12, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
              className="flex-1 rounded-sm"
              style={{
                minWidth: "4px",
                background: `linear-gradient(to top, var(--accent), rgba(34,211,238,0.6))`,
                opacity: 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── HERO ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [displayed, setDisplayed] = useState("")
  const [strIdx, setStrIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = typewriterTexts[strIdx]
    let timeout
    if (!deleting && charIdx < target.length) {
      timeout = setTimeout(() => { setDisplayed(target.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 75)
    } else if (!deleting && charIdx === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(target.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 38)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setStrIdx(i => (i + 1) % typewriterTexts.length)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, strIdx])

  const scrollToAbout = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const scrollToProjects = useCallback(() => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-24 md:py-0"
    >
      {/* Grid bg */}
      <div className="hero-grid-bg" />

      {/* Ambient glows */}
      <div className="absolute top-[-180px] left-[-180px] w-[600px] h-[600px] bg-indigo-600 opacity-[0.09] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-cyan-500 opacity-[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-violet-900 opacity-[0.04] blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">

        {/* ── LEFT COLUMN ── */}
        <div className="space-y-7 text-center md:text-left">

          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 justify-center md:justify-start"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider uppercase"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)",
                color: "#4ade80",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </div>
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px]"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(148,163,184,0.8)",
              }}
            >
              <Sparkles size={11} className="text-[var(--accent)]" />
              Open to full-time &amp; freelance
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm text-white/40 font-medium mb-2 tracking-wide">Hello, I&apos;m</p>
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              <span className="gradient-text" style={{ filter: "drop-shadow(0 0 40px rgba(129,140,248,0.4))" }}>
                Shubham
              </span>
              <br />
              <span className="text-white">Panghal</span>
            </h1>
          </motion.div>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-2 justify-center md:justify-start"
          >
            <span className="w-1 h-6 rounded-full bg-[var(--accent)]" />
            <span className="text-lg sm:text-xl font-semibold text-gray-200 font-mono">
              {displayed}
            </span>
            <span
              className="inline-block w-0.5 h-6 bg-[var(--accent)] animate-blink"
            />
          </motion.div>

          {/* Professional description — NO Web3/ICP */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="text-gray-400 text-sm md:text-[15px] max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I build <span className="text-white font-semibold">production-grade digital products</span> — from pixel-perfect React & Next.js frontends to scalable{" "}
            <span className="text-white font-semibold">Node.js APIs</span> backed by{" "}
            <span className="text-white font-semibold">PostgreSQL & MongoDB</span>. Fast, clean, and engineered to scale.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {[
              { name: "React.js", color: "#61DAFB" },
              { name: "Next.js", color: "#818cf8" },
              { name: "Node.js", color: "#4ade80" },
              { name: "PostgreSQL", color: "#22d3ee" },
              { name: "MongoDB", color: "#4ade80" },
              { name: "Tailwind CSS", color: "#818cf8" },
            ].map(({ name, color }) => (
              <span
                key={name}
                className="text-[11px] px-3 py-1.5 rounded-lg font-mono font-medium"
                style={{
                  background: `${color}08`,
                  border: `1px solid ${color}25`,
                  color: `${color}`,
                }}
              >
                {name}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden btn-glow px-7 py-3.5 rounded-xl font-semibold text-sm text-white flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Resume
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 text-gray-200 hover:text-white flex items-center gap-2"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.45)"
                e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                e.currentTarget.style.background = "transparent"
              }}
            >
              View Projects
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex gap-8 justify-center md:justify-start pt-1 border-t border-white/[0.06]"
          >
            {[
              { num: "15+", label: "Projects Built", color: "var(--accent)" },
              { num: "1+", label: "Years Exp.", color: "#22d3ee" },
              { num: "10+", label: "Technologies", color: "#a78bfa" },
            ].map(({ num, label, color }) => (
              <div key={label} className="text-center md:text-left pt-4">
                <p className="text-2xl font-black" style={{ color }}>{num}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <TerminalPanel />
        </div>
      </div>

      <SocialIcons />
      <ThemeSwitcher />

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 hover:text-[var(--accent)] transition-colors z-10 group"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-mono group-hover:text-[var(--accent)] transition-colors">
          Scroll Down
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  )
}
