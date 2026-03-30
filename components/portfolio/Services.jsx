'use client'

import { motion } from "framer-motion"
import { servicesData } from "@/lib/data/servicesData"

function ServiceCard({ number, title, description, tech, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl p-7 transition-all duration-300 cursor-default overflow-hidden"
      style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.35)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(var(--accent-rgb),0.07)" }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none" }}
    >
      {/* Glow corner */}
      <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"
        style={{ background: "radial-gradient(circle at top right, rgba(var(--accent-rgb),0.1), transparent 70%)" }} />

      <div className="flex items-start gap-5">
        {/* Number + Icon */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{ background: "rgba(var(--accent-rgb),0.08)", border: "1px solid rgba(var(--accent-rgb),0.2)" }}>
            {icon}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)] opacity-60">{number}</span>
            <h3 className="text-lg font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-300">
              {title}
            </h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="text-[11px] px-3 py-1 rounded-full font-mono"
                style={{ background: "rgba(var(--accent-rgb),0.06)", border: "1px solid rgba(var(--accent-rgb),0.18)", color: "var(--accent)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-violet-700 opacity-10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-600 opacity-10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Solutions I{" "}<span className="gradient-text">Provide</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From modern frontend interfaces to scalable backend systems,
            I deliver production-ready web solutions focused on performance,
            reliability, and long-term maintainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="mt-16 text-center">
          <p className="text-gray-400 mb-6 text-sm">Have a project idea or need a modern website?</p>
          <a href="https://calendly.com/shubhampanghal-work/30min" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
            style={{ background: "var(--accent)", color: "black" }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(var(--accent-rgb),0.5)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
            📅 Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
