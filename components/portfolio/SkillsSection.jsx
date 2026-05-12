'use client'

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { skillsData } from "@/lib/data/skillsData"
import SectionHeader from "@/components/ui/SectionHeader"

const CATEGORY_META = [
  {
    gradient: "from-indigo-500 via-violet-500 to-purple-500",
    accentColor: "#818cf8",
    borderColor: "rgba(129,140,248,0.45)",
    glowColor:  "rgba(129,140,248,0.12)",
    bgAccent:   "rgba(129,140,248,0.07)",
    proficiency: "92%",
    label: "Primary Stack",
  },
  {
    gradient: "from-cyan-400 via-sky-500 to-blue-500",
    accentColor: "#22d3ee",
    borderColor: "rgba(34,211,238,0.45)",
    glowColor:  "rgba(34,211,238,0.12)",
    bgAccent:   "rgba(34,211,238,0.07)",
    proficiency: "80%",
    label: "Supporting",
  },
  {
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    accentColor: "#34d399",
    borderColor: "rgba(52,211,153,0.45)",
    glowColor:  "rgba(52,211,153,0.12)",
    bgAccent:   "rgba(52,211,153,0.07)",
    proficiency: "90%",
    label: "Daily Use",
  },
]

// ── SKILL BADGE ───────────────────────────────────────────────────────────────
function SkillBadge({ icon: Icon, name, color, index }) {
  if (!Icon) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.12 }}
      transition2={{ type: "spring", stiffness: 400, damping: 18 }}
      className="flex flex-col items-center gap-2.5 p-3.5 rounded-xl cursor-default group relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}14`
        e.currentTarget.style.borderColor = `${color}50`
        e.currentTarget.style.boxShadow = `0 0 28px ${color}25, 0 8px 24px rgba(0,0,0,0.3)`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)"
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 30%, ${color}18, transparent 70%)` }}
      />
      <Icon
        size={24}
        style={{ color }}
        className="relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]"
      />
      <span className="relative z-10 text-[10px] text-gray-400 group-hover:text-white transition-colors text-center leading-tight font-medium">
        {name}
      </span>
    </motion.div>
  )
}

// ── CATEGORY CARD ─────────────────────────────────────────────────────────────
function CategoryCard({ category, meta, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: `1px solid ${hovered ? meta.borderColor : "rgba(255,255,255,0.08)"}`,
        boxShadow: hovered ? `0 24px 60px ${meta.glowColor}, 0 0 0 1px ${meta.borderColor}` : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Top gradient bar */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${meta.gradient}`} />

      {/* Animated corner glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 right-0 w-48 h-48 pointer-events-none rounded-bl-full"
        style={{ background: `radial-gradient(circle at top right, ${meta.accentColor}18, transparent 65%)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ boxShadow: hovered ? `0 0 20px ${meta.accentColor}40` : "none" }}
              transition={{ duration: 0.35 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              style={{ background: meta.bgAccent, border: `1px solid ${meta.accentColor}30` }}
            >
              {category.icon}
            </motion.div>
            <div>
              <h3 className={`font-bold text-sm bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] text-gray-500">{category.skills.length} skills</span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                  style={{ background: `${meta.accentColor}15`, color: meta.accentColor, border: `1px solid ${meta.accentColor}25` }}
                >
                  {meta.label}
                </span>
              </div>
            </div>
          </div>

          {/* Proficiency bar */}
          <div className="hidden sm:flex flex-col items-end gap-1.5">
            <span className="text-[9px] text-gray-500 uppercase tracking-wider font-medium">Proficiency</span>
            <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: meta.proficiency }}
                transition={{ duration: 1.2, delay: index * 0.12 + 0.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-gradient-to-r ${meta.gradient}`}
              />
            </div>
            <span className={`text-[10px] font-bold bg-gradient-to-r ${meta.gradient} bg-clip-text text-transparent`}>
              {meta.proficiency}
            </span>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {category.skills.map(({ name, icon, color }, i) => (
            <SkillBadge key={name} icon={icon} name={name} color={color} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ── SKILLS SECTION ────────────────────────────────────────────────────────────
export default function SkillsSection() {
  const allSkills = useMemo(() => skillsData.flatMap(c => c.skills), [])

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-indigo-700 opacity-[0.07] blur-[180px] rounded-full pointer-events-none ambient-blob" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-600 opacity-[0.07] blur-[180px] rounded-full pointer-events-none" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">

        <SectionHeader
          badge="Technology Stack"
          title="Skills &"
          highlight="Expertise"
          subtitle="A curated, production-focused stack — pixel-perfect frontends, scalable backends, and the tooling that ties it all together."
        />

        {/* Live stat row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-10 -mt-6 mb-14"
        >
          {skillsData.map((cat, i) => (
            <div key={cat.title} className="text-center">
              <p
                className={`text-2xl font-black bg-gradient-to-r ${CATEGORY_META[i].gradient} bg-clip-text text-transparent`}
              >
                {cat.skills.length}
              </p>
              <p className="text-[10px] text-gray-500 tracking-wider uppercase mt-0.5">
                {cat.title.split(" ")[0]}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Cards — 3-col on large, stacked otherwise */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {skillsData.map((category, i) => (
            <CategoryCard
              key={category.title}
              category={category}
              meta={CATEGORY_META[i]}
              index={i}
            />
          ))}
        </div>

        {/* Marquee-style all pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 text-center"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-5 font-semibold">
            Full Technology Overview — {allSkills.length} Skills
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {allSkills.map(({ name, color }, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-[11px] px-3 py-1.5 rounded-full font-medium cursor-default transition-all duration-200"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}35`,
                  color: color,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${color}22`
                  e.currentTarget.style.borderColor = `${color}65`
                  e.currentTarget.style.boxShadow = `0 0 18px ${color}30`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${color}12`
                  e.currentTarget.style.borderColor = `${color}35`
                  e.currentTarget.style.boxShadow = "none"
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
