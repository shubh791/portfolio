'use client'

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ChevronLeft, ChevronRight, FileText, Sparkles, ArrowRight, Code2, Layers, Zap } from "lucide-react"
import { projectsData } from "@/lib/data/projectsData"

const HIGHLIGHTS = [
  { icon: Code2,   label: "Clean Code",         sub: "Scalable & maintainable",   color: "#818cf8" },
  { icon: Layers,  label: "Component-Driven",    sub: "Reusable architecture",     color: "#22d3ee" },
  { icon: Zap,     label: "Performance First",   sub: "Optimized for production",  color: "#a78bfa" },
  { icon: Sparkles,label: "Pixel Perfect",       sub: "Obsessive attention to UI", color: "#34d399" },
]

// ── PROJECT SHOWCASE CAROUSEL ─────────────────────────────────────────────────
function ProjectShowcase() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef(null)

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setActive(i => (i + 1) % projectsData.length)
    }, 3500)
  }, [])

  useEffect(() => {
    startTimer()
    return () => clearInterval(intervalRef.current)
  }, [startTimer])

  const go = (next) => {
    setDirection(next > active ? 1 : -1)
    setActive(next)
    startTimer()
  }

  const handlePrev = () => go((active - 1 + projectsData.length) % projectsData.length)
  const handleNext = () => go((active + 1) % projectsData.length)

  const project = projectsData[active]

  const variants = {
    enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.97 }),
  }

  return (
    <div className="flex flex-col h-full gap-4">

      {/* Carousel card */}
      <div className="relative rounded-2xl overflow-hidden flex-1" style={{ border: "1px solid rgba(255,255,255,0.09)", minHeight: 480 }}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col"
            style={{ background: "rgba(10,12,30,0.95)" }}
          >
            {/* Top accent */}
            <div className="h-[2px] w-full flex-shrink-0" style={{ background: "linear-gradient(90deg, var(--accent), #22d3ee, #a78bfa)" }} />

            {/* Browser chrome */}
            <div
              className="flex items-center gap-1.5 px-3 flex-shrink-0"
              style={{ height: 34, background: "rgba(5,7,18,0.99)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <div
                className="flex-1 mx-3 h-5 rounded flex items-center px-2"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <span className="text-[9px] text-gray-500 font-mono truncate">{project.live || "github.com/shubh791"}</span>
              </div>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[var(--accent)] transition-colors">
                  <ExternalLink size={10} />
                </a>
              )}
            </div>

            {/* Screenshot */}
            <div className="relative overflow-hidden flex-shrink-0" style={{ height: 240 }}>
              <Image src={project.image} alt={project.title} fill className="object-cover object-top" sizes="700px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060814]/95 via-[#060814]/10 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2 z-10">
                {project.featured && (
                  <span className="px-2.5 py-0.5 text-[9px] uppercase tracking-widest rounded-full font-bold" style={{ background: "var(--accent)", color: "black" }}>✦ Featured</span>
                )}
                {project.live && (
                  <span className="flex items-center gap-1 px-2.5 py-0.5 text-[9px] rounded-full font-semibold" style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                )}
              </div>
              <div className="absolute bottom-3 right-4 z-10 font-mono text-[10px] text-gray-500">
                {String(active + 1).padStart(2, "0")} / {String(projectsData.length).padStart(2, "0")}
              </div>
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-base font-black text-white leading-snug mb-1.5">{project.title}</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-3 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] px-2 py-0.5 rounded-full font-mono" style={{ background: "rgba(129,140,248,0.08)", border: "1px solid rgba(129,140,248,0.2)", color: "rgba(129,140,248,0.85)" }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-black btn-glow transition-all">
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-all ${project.live ? "px-4" : "flex-1"}`}
                    style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.background = "rgba(var(--accent-rgb),0.05)" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "transparent" }}
                  >
                    <Github size={13} /> {!project.live && "Source Code"}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={handlePrev} className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)" }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)" }}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={handleNext} className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }} onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)" }} onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)" }}>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {projectsData.map((_, i) => (
            <button key={i} onClick={() => go(i)} className="transition-all duration-300 rounded-full" style={{ width: i === active ? 20 : 6, height: 6, background: i === active ? "var(--accent)" : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-mono">
          <span className="w-1 h-1 rounded-full bg-[var(--accent)] animate-pulse" />
          Auto 3.5s
        </div>
      </div>

      {/* GitHub CTA */}
      <div
        className="flex items-center justify-between gap-3 p-4 rounded-xl"
        style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div>
          <p className="text-xs font-bold text-white">Want to see more?</p>
          <p className="text-[10px] text-gray-500 mt-0.5">All source code & projects on GitHub</p>
        </div>
        <a
          href="https://github.com/shubh791"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all whitespace-nowrap"
          style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.background = "rgba(var(--accent-rgb),0.08)" }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)" }}
        >
          <Github size={12} />
          GitHub
        </a>
      </div>
    </div>
  )
}

// ── PROJECTS SECTION ──────────────────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden" style={{ background: "rgba(3,7,18,0.6)" }}>
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-indigo-700 opacity-[0.07] blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-violet-700 opacity-[0.06] blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-badge mb-6 justify-center mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-5">
            I bring{" "}
            <span className="gradient-text">Vision</span>
            {" "}into{" "}
            <span className="text-white">Reality</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Every project is a statement — crafted with obsessive attention to detail,
            pixel-perfect precision, and the belief that great interfaces leave a lasting impression.
          </p>
        </motion.div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* LEFT — image with glow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative flex flex-col gap-4"
          >
            {/* Photo */}
            <div
              className="relative rounded-2xl overflow-hidden flex-1"
              style={{
                border: "1px solid rgba(129,140,248,0.28)",
                minHeight: 480,
                boxShadow: "0 0 50px rgba(129,140,248,0.18), 0 0 100px rgba(129,140,248,0.08), inset 0 0 50px rgba(129,140,248,0.04)",
              }}
            >
              <Image src="/images/shubham2.png" alt="Shubham Panghal" fill className="object-cover object-top" priority />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 35% at 50% 0%, rgba(129,140,248,0.14), transparent 55%)" }} />
              <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(3,7,18,0.75), transparent)" }} />
              <div className="absolute right-0 inset-y-0 w-16 pointer-events-none hidden lg:block" style={{ background: "linear-gradient(to left, rgba(3,7,18,0.65), transparent)" }} />
            </div>

            {/* Highlights strip */}
            <div className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map(({ icon: Icon, label, sub, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-white leading-tight">{label}</p>
                    <p className="text-[9px] text-gray-500 mt-0.5 truncate">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="group flex items-center justify-between gap-3 p-4 rounded-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.08), rgba(var(--accent-rgb),0.03))",
                border: "1px solid rgba(var(--accent-rgb),0.28)",
                boxShadow: "0 0 20px rgba(var(--accent-rgb),0.07)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.16), rgba(var(--accent-rgb),0.08))"
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.55)"
                e.currentTarget.style.boxShadow = "0 0 32px rgba(var(--accent-rgb),0.18)"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.08), rgba(var(--accent-rgb),0.03))"
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.28)"
                e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--accent-rgb),0.07)"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(var(--accent-rgb),0.12)", border: "1px solid rgba(var(--accent-rgb),0.3)" }}
                >
                  <FileText size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">View Full Resume</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Experience · Skills · Achievements</p>
                </div>
              </div>
              <ArrowRight size={15} className="text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.a>
          </motion.div>

          {/* RIGHT — carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <ProjectShowcase />
          </motion.div>
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/shubh791"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--accent)] transition-colors font-medium group"
          >
            <Github size={14} />
            View all projects on GitHub
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
