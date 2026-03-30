'use client'

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Server, Zap, Trophy, ArrowRight } from "lucide-react"

const roles = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Backend Architect",
  "UI/UX Craftsman",
  "Performance-Driven Builder",
]

const stats = [
  { target: 15, suffix: "+", label: "Projects Delivered", icon: "🚀" },
  { target: 1, suffix: "+ Yr", label: "Professional Experience", icon: "⚡" },
  { target: 10, suffix: "+", label: "Technologies Mastered", icon: "🔧" },
]

const highlights = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    desc: "Pixel-perfect, responsive interfaces built with React & Next.js using Tailwind CSS and Framer Motion animations.",
    color: "rgba(129,140,248,1)",
    glow: "rgba(129,140,248,0.07)",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Scalable REST APIs, JWT authentication, PostgreSQL & MongoDB — engineered for reliability and production performance.",
    color: "rgba(34,211,238,1)",
    glow: "rgba(34,211,238,0.07)",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimised code splitting, lazy loading, database indexing and deployment pipelines that ship fast and scale further.",
    color: "rgba(167,139,250,1)",
    glow: "rgba(167,139,250,0.07)",
  },
]

const tags = [
  "React & Next.js",
  "Node.js & Express",
  "PostgreSQL & MongoDB",
  "REST API Design",
  "Performance Optimization",
  "Production Deployment",
  "Modern UI Systems",
  "Clean Code Principles",
]

function useCountUp(target, inView) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 28)
    return () => clearInterval(timer)
  }, [inView, target])
  return count
}

function StatCard({ target, suffix, label, icon }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const count = useCountUp(target, inView)
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, y: -2 }}
      className="relative rounded-2xl p-5 text-center overflow-hidden group cursor-default"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: "radial-gradient(circle at 50% 0%, rgba(var(--accent-rgb),0.14), transparent 70%)" }} />
      <div className="text-xl mb-1">{icon}</div>
      <h3 className="text-2xl font-bold gradient-text">{count}{suffix}</h3>
      <p className="text-xs text-gray-400 mt-0.5">{label}</p>
    </motion.div>
  )
}

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(p => (p + 1) % roles.length), 2800)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute -top-40 right-[-150px] w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.07] bg-indigo-500 pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.07] bg-cyan-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start relative z-10">

        {/* ── LEFT: TEXT ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <div className="section-badge">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-[1.15]">
            Engineering <span className="gradient-text">Digital Products</span> That Matter
          </h2>

          <motion.div
            key={roleIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-1 h-5 rounded-full bg-[var(--accent)]" />
            <span className="text-base font-semibold text-[var(--accent)]">{roles[roleIndex]}</span>
          </motion.div>

          <p className="text-gray-200 leading-relaxed text-[15px]">
            I&apos;m{" "}
            <span className="font-bold text-white">Shubham Panghal</span> — a full-stack developer who transforms complex requirements into{" "}
            <span className="gradient-text font-semibold">clean, scalable, production-grade applications</span>. With hands-on experience across the entire development stack, I build solutions that are fast, reliable, and visually compelling.
          </p>

          <p className="text-gray-400 leading-relaxed text-[14px]">
            From crafting{" "}
            <span className="text-white font-medium">pixel-perfect React interfaces</span> to designing{" "}
            <span className="text-white font-medium">robust Node.js backend systems</span>{" "}
            with PostgreSQL and MongoDB — every line of code I write prioritises{" "}
            <span className="text-[var(--accent)]">performance</span>,{" "}
            <span className="text-[var(--accent)]">maintainability</span>, and{" "}
            <span className="text-[var(--accent)]">exceptional user experience</span>.
          </p>

          <p className="text-gray-500 leading-relaxed text-[13px] border-l-2 pl-4"
            style={{ borderColor: "rgba(var(--accent-rgb),0.4)" }}>
            I don&apos;t just write code — I engineer products. Whether it&apos;s a high-traffic platform, an AI-powered application, or a real-time data system, I bring both{" "}
            <em className="text-gray-300 not-italic font-medium">technical depth</em> and{" "}
            <em className="text-gray-300 not-italic font-medium">product-level thinking</em> to every project.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
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

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline underline-offset-4 transition-all"
          >
            View Full Resume <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* ── RIGHT: STATS + HIGHLIGHTS ── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="grid grid-cols-3 gap-3">
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>

          <div className="space-y-3">
            {highlights.map(({ icon: Icon, title, desc, color, glow }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                className="flex gap-4 p-5 rounded-2xl transition-all duration-300 cursor-default"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = glow
                  e.currentTarget.style.borderColor = `${color}28`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)"
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="font-semibold text-sm text-white mb-1">{title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-4 rounded-2xl flex items-center gap-3"
            style={{ background: "rgba(34,197,94,0.05)", border: "1px solid rgba(34,197,94,0.15)" }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(34,197,94,0.1)" }}>
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse block" />
            </div>
            <div>
              <p className="font-semibold text-sm text-white">Currently Open to Work</p>
              <p className="text-xs text-gray-400 mt-0.5">Full-time roles · Freelance · Collaborations</p>
            </div>
            <Trophy size={16} className="ml-auto text-green-400/50" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
