'use client'

import { useState, useMemo, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { projectsData } from "@/lib/data/projectsData"

const filters = ["All", "Featured", "Full-Stack", "Frontend"]

function ProjectCard({ project, index }) {
  const hasLive = Boolean(project.live)
  const hasGithub = Boolean(project.github)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group relative h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.35)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(var(--accent-rgb),0.06)" }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none" }}
    >
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden flex-shrink-0">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-black/20 to-transparent" />

        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full font-bold"
            style={{ background: "var(--accent)", color: "black" }}>
            ✦ Featured
          </span>
        )}
        {hasLive && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-wider rounded-full font-semibold"
            style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80", backdropFilter: "blur(8px)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold mb-2.5 leading-snug text-white group-hover:text-[var(--accent)] transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((item) => (
            <span key={item} className="text-[10px] px-2.5 py-1 rounded-full"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "rgba(203,213,225,0.7)" }}>
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-2.5 mt-auto">
          {hasLive && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white btn-glow transition-all duration-300">
              <ExternalLink size={13} />Live Demo
            </a>
          )}
          {hasGithub && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white ${hasLive ? "px-4" : "flex-1"}`}
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.color = "var(--accent)" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(203,213,225,1)" }}>
              <Github size={13} />
              {!hasLive && "Source Code"}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const filtered = useMemo(() => {
    if (filter === "All") return projectsData
    if (filter === "Featured") return projectsData.filter(p => p.featured)
    if (filter === "Full-Stack") return projectsData.filter(p => p.tech.some(t => t.includes("Node") || t.includes("PostgreSQL") || t.includes("MongoDB")))
    if (filter === "Frontend") return projectsData.filter(p => !p.tech.some(t => t.includes("Node") || t.includes("Express")))
    return projectsData
  }, [filter])

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 overflow-hidden" style={{ background: "rgba(4,9,18,0.5)" }}>
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "70px 70px" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Featured{" "}<span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A curated collection of real-world applications showcasing full-stack development expertise,
            modern UI engineering, and performance-focused production deployments.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                filter === f ? "bg-[var(--accent)] text-black" : "border border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
              }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
