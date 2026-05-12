'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, ArrowRight, FileText, Sparkles, MousePointer2, Layers, Wand2 } from "lucide-react"
import Image from "next/image"
import dynamic from "next/dynamic"

const SocialIcons = dynamic(() => import("./SocialIcons"), { ssr: false })

// ── DATA ──────────────────────────────────────────────────────────────────────
const ROLES = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "UI/UX Engineer",
  "Component Architect",
  "Interface Craftsman",
]

const TECH = [
  { name: "React.js",      color: "#61DAFB" },
  { name: "Next.js",       color: "#818cf8" },
  { name: "Tailwind CSS",  color: "#06B6D4" },
  { name: "Framer Motion", color: "#a78bfa" },
  { name: "JavaScript",    color: "#F7DF1E" },
  { name: "TypeScript",    color: "#3178C6" },
]

const STATS = [
  { num: "20+", label: "Projects Built",   color: "var(--accent)" },
  { num: "1+",  label: "Years Experience", color: "#22d3ee"       },
  { num: "10+", label: "Technologies",     color: "#a78bfa"       },
]

// Floating chips shown around the image
const FLOAT_CHIPS = [
  { icon: Layers,        label: "Component Architecture", delay: 0    },
  { icon: MousePointer2, label: "Pixel-perfect UI",       delay: 0.15 },
  { icon: Wand2,         label: "Smooth Animations",      delay: 0.3  },
]

// ── IMAGE PANEL ───────────────────────────────────────────────────────────────
function ImagePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex justify-center md:justify-end"
    >
      {/* Ambient glow behind photo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(var(--accent-rgb),0.22) 0%, rgba(34,211,238,0.10) 60%, transparent 100%)" }}
      />

      {/* Decorative ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(var(--accent-rgb),0.12)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ border: "1px dashed rgba(var(--accent-rgb),0.07)" }}
      />

      <div className="relative w-[320px] sm:w-[360px] md:w-[380px] lg:w-[420px]">

        {/* "Open to Work" badge — top right */}
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute -top-5 -right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full text-[11px] font-semibold shadow-xl"
          style={{
            background: "rgba(6,10,28,0.92)",
            border: "1px solid rgba(34,197,94,0.35)",
            color: "#4ade80",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 24px rgba(34,197,94,0.15)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Open to Work
        </motion.div>

        {/* Main image container */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            border: "1px solid rgba(var(--accent-rgb),0.25)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 40px 80px rgba(0,0,0,0.55), 0 0 60px rgba(var(--accent-rgb),0.12)",
          }}
        >
          {/* Gradient overlay at bottom of image for smooth fade */}
          <div
            className="absolute bottom-0 inset-x-0 h-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(4,4,17,0.6), transparent)" }}
          />

          <Image
            src="/images/shubham.png"
            alt="Shubham Panghal — Frontend Developer"
            width={420}
            height={520}
            className="w-full object-cover object-top"
            priority
          />
        </div>

        {/* Experience card — bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -16, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="absolute -bottom-5 -left-4 z-20 px-4 py-3 rounded-2xl shadow-xl"
          style={{
            background: "rgba(6,10,28,0.92)",
            border: "1px solid rgba(var(--accent-rgb),0.25)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 30px rgba(var(--accent-rgb),0.1)",
          }}
        >
          <p className="text-[9px] uppercase tracking-widest text-gray-500 mb-1 font-mono">Experience</p>
          <p className="text-sm font-bold text-white leading-tight">1+ Year</p>
          <p className="text-[10px] text-[var(--accent)] font-medium">Frontend Engineering</p>
        </motion.div>

        {/* Floating tech chips — right side */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-20">
          {FLOAT_CHIPS.map(({ icon: Icon, label, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.9 + delay }}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] font-medium whitespace-nowrap"
              style={{
                background: "rgba(6,10,28,0.88)",
                border: "1px solid rgba(var(--accent-rgb),0.18)",
                color: "var(--accent)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <Icon size={11} />
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── HERO ──────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [displayed, setDisplayed] = useState("")
  const [strIdx,    setStrIdx]    = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const target = ROLES[strIdx]
    let t
    if (!deleting && charIdx < target.length) {
      t = setTimeout(() => { setDisplayed(target.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 70)
    } else if (!deleting && charIdx === target.length) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => { setDisplayed(target.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 38)
    } else if (deleting && charIdx === 0) {
      setDeleting(false); setStrIdx(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t)
  }, [charIdx, deleting, strIdx])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-28 md:py-0"
    >
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Ambient glows */}
      <div className="absolute top-[-180px] left-[-180px] w-[650px] h-[650px] bg-indigo-600  opacity-[0.08] blur-[180px] rounded-full pointer-events-none ambient-blob" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[550px] h-[550px] bg-cyan-500  opacity-[0.06] blur-[160px] rounded-full pointer-events-none" style={{ animationDelay: "4s" }} />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2           w-[700px] h-[400px] bg-violet-900 opacity-[0.05] blur-[200px] rounded-full pointer-events-none" style={{ animationDelay: "8s" }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* ── LEFT ─────────────────────────────────────────────────────────── */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 justify-center md:justify-start flex-wrap"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#4ade80" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Actively Seeking Frontend Roles
            </div>
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px]"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(148,163,184,0.8)" }}
            >
              <Sparkles size={11} className="text-[var(--accent)]" />
              Full-time &amp; Freelance
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm text-white/40 font-medium mb-2 tracking-wide">Hello, I&apos;m</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="gradient-text hero-name-glow">Shubham</span>
              <br />
              <span className="text-white">Panghal</span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-2 justify-center md:justify-start min-h-[2rem]"
          >
            <span className="w-1 h-6 rounded-full bg-[var(--accent)]" />
            <span className="text-lg sm:text-xl font-semibold text-gray-200 font-mono">{displayed}</span>
            <span className="inline-block w-0.5 h-6 bg-[var(--accent)] animate-blink" />
          </motion.div>

          {/* Description — frontend-focused */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="text-gray-400 text-sm md:text-[15px] max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I specialise in building{" "}
            <span className="text-white font-semibold">pixel-perfect, high-performance interfaces</span>{" "}
            using React & Next.js — from responsive layouts and{" "}
            <span className="text-white font-semibold">cinematic Framer Motion animations</span>{" "}
            to accessible, production-ready component systems.
            I also architect full-stack solutions when the project demands it.
          </motion.p>

          {/* Tech badges — frontend first */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {TECH.map(({ name, color }) => (
              <span
                key={name}
                className="text-[11px] px-3 py-1.5 rounded-lg font-mono font-medium cursor-default transition-all duration-200"
                style={{ background: `${color}0a`, border: `1px solid ${color}28`, color }}
                onMouseEnter={e => { e.currentTarget.style.background = `${color}18`; e.currentTarget.style.borderColor = `${color}55` }}
                onMouseLeave={e => { e.currentTarget.style.background = `${color}0a`; e.currentTarget.style.borderColor = `${color}28` }}
              >
                {name}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
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
              className="group relative overflow-hidden btn-glow px-7 py-3.5 rounded-xl font-bold text-sm text-black flex items-center gap-2.5 shadow-lg"
              style={{ boxShadow: "0 0 24px rgba(var(--accent-rgb),0.4), 0 4px 16px rgba(0,0,0,0.3)" }}
            >
              <span className="relative z-10 flex items-center gap-2.5">
                <FileText size={14} />
                View Resume
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
            </a>
            <button
              onClick={() => scrollTo("projects")}
              className="group relative overflow-hidden px-7 py-3.5 rounded-xl text-sm font-bold text-black flex items-center gap-2.5 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #a78bfa, #818cf8)",
                boxShadow: "0 0 22px rgba(167,139,250,0.4), 0 4px 16px rgba(0,0,0,0.25)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 0 36px rgba(167,139,250,0.6), 0 8px 24px rgba(0,0,0,0.3)"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "0 0 22px rgba(167,139,250,0.4), 0 4px 16px rgba(0,0,0,0.25)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
              <span className="relative z-10 flex items-center gap-2.5">
                <Layers size={14} />
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="flex gap-8 justify-center md:justify-start pt-1 border-t border-white/[0.06]"
          >
            {STATS.map(({ num, label, color }) => (
              <div key={label} className="text-center md:text-left pt-4">
                <p className="text-2xl font-black tabular-nums" style={{ color }}>{num}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — IMAGE ────────────────────────────────────────────────── */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <ImagePanel />
        </div>
      </div>

      <SocialIcons />

      {/* Scroll cue */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 hover:text-[var(--accent)] transition-colors z-10 group"
        aria-label="Scroll to about"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </button>
    </section>
  )
}
