'use client'

import { useMemo } from "react"
import { motion } from "framer-motion"
import { skillsData } from "@/lib/data/skillsData"

const categoryMeta = [
  {
    gradient: "from-indigo-500 to-violet-500",
    borderColor: "rgba(129,140,248,0.35)",
    glowColor: "rgba(129,140,248,0.08)",
    accentColor: "#818cf8",
    bgAccent: "rgba(129,140,248,0.06)",
  },
  {
    gradient: "from-cyan-400 to-sky-500",
    borderColor: "rgba(34,211,238,0.35)",
    glowColor: "rgba(34,211,238,0.08)",
    accentColor: "#22d3ee",
    bgAccent: "rgba(34,211,238,0.06)",
  },
  {
    gradient: "from-violet-500 to-pink-500",
    borderColor: "rgba(167,139,250,0.35)",
    glowColor: "rgba(167,139,250,0.08)",
    accentColor: "#a78bfa",
    bgAccent: "rgba(167,139,250,0.06)",
  },
  {
    gradient: "from-emerald-400 to-teal-500",
    borderColor: "rgba(52,211,153,0.35)",
    glowColor: "rgba(52,211,153,0.08)",
    accentColor: "#34d399",
    bgAccent: "rgba(52,211,153,0.06)",
  },
]

function SkillBadge({ icon: Icon, name, color }) {
  if (!Icon) return null
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex flex-col items-center gap-2 p-3 rounded-xl cursor-default group relative"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}12`
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.boxShadow = `0 0 20px ${color}20`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)"
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <Icon size={24} style={{ color }} className="transition-all duration-300" />
      <span className="text-[10px] text-gray-400 group-hover:text-white transition-colors text-center leading-tight font-medium">{name}</span>
    </motion.div>
  )
}

function CategoryCard({ category, meta, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = meta.borderColor
        e.currentTarget.style.boxShadow = `0 20px 60px ${meta.glowColor}, 0 0 0 1px ${meta.borderColor}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${meta.gradient}`} />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 pointer-events-none rounded-bl-full opacity-0 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at top right, ${meta.accentColor}15, transparent 70%)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: meta.bgAccent, border: `1px solid ${meta.accentColor}25` }}
            >
              {category.icon}
            </div>
            <div>
              <h3
                className={`font-bold text-sm bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <p className="text-[10px] text-gray-500 mt-0.5">{category.skills.length} technologies</p>
            </div>
          </div>
          {/* Proficiency bar */}
          <div className="hidden sm:flex flex-col items-end gap-1">
            <span className="text-[9px] text-gray-500 uppercase tracking-wider">Proficiency</span>
            <div className="w-20 h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: index === 0 ? "92%" : index === 1 ? "88%" : index === 2 ? "75%" : "90%" }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-gradient-to-r ${meta.gradient}`}
              />
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {category.skills.map(({ name, icon, color }) => (
            <SkillBadge key={name} icon={icon} name={name} color={color} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function SkillsSection() {
  const allSkills = useMemo(() => skillsData.flatMap(c => c.skills), [])

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-indigo-700 opacity-[0.08] blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-600 opacity-[0.08] blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6 justify-center">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Skills &{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A battle-tested, production-focused technology stack — from pixel-perfect frontends to
            scalable backend systems and optimised deployment workflows.
          </p>

          {/* Quick count row */}
          <div className="flex justify-center gap-6 mt-8">
            {[
              { label: "Frontend", count: skillsData[0]?.skills.length },
              { label: "Backend", count: skillsData[1]?.skills.length },
              { label: "Blockchain", count: skillsData[2]?.skills.length },
              { label: "DevTools", count: skillsData[3]?.skills.length },
            ].map(({ label, count }) => (
              <div key={label} className="text-center">
                <p className="text-lg font-bold gradient-text">{count}</p>
                <p className="text-[10px] text-gray-500 tracking-wider uppercase">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* All category cards — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {skillsData.map((category, i) => (
            <CategoryCard
              key={category.title}
              category={category}
              meta={categoryMeta[i]}
              index={i}
            />
          ))}
        </div>

        {/* All tech pills marquee-style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 text-center"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 font-medium">
            Complete Technology Overview
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {allSkills.map(({ name }, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="text-[11px] px-3 py-1 rounded-full font-medium cursor-default transition-all duration-200 text-gray-400 hover:text-[var(--accent)]"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"
                  e.currentTarget.style.background = "rgba(var(--accent-rgb),0.06)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
