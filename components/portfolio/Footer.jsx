'use client'

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight, MapPin, FileText } from "lucide-react"

const NAV_LINKS = ["home", "about", "skills", "services", "projects", "contact"]
const SOCIALS = [
  { icon: Github, href: "https://github.com/shubh791", label: "GitHub", username: "@shubh791" },
  { icon: Linkedin, href: "https://linkedin.com/in/shubham-panghal", label: "LinkedIn", username: "shubham-panghal" },
  { icon: Mail, href: "mailto:shubhampanghal.work@gmail.com", label: "Email", username: "shubhampanghal.work" },
]
const SPECIALTY_TAGS = ["React & Next.js", "Tailwind CSS", "Framer Motion", "UI Engineering"]

// ── BRAND MARK SVG ────────────────────────────────────────────────────────────
function SPBrandMark({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SP Logo">
      <defs>
        <linearGradient id="sp-g1-footer" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="sp-g2-footer" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="52" height="52" rx="14" fill="url(#sp-g2-footer)" stroke="url(#sp-g1-footer)" strokeWidth="1.5" />
      <rect x="7" y="7" width="42" height="42" rx="10" fill="none" stroke="url(#sp-g1-footer)" strokeWidth="0.5" strokeOpacity="0.3" />
      <text x="8" y="38" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="url(#sp-g1-footer)" letterSpacing="-1">SP</text>
      <circle cx="48" cy="9" r="3" fill="#22d3ee" opacity="0.8" />
    </svg>
  )
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #070b14 0%, #02061a 60%, #000510 100%)" }}
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(129,140,248,0.6) 25%, rgba(167,139,250,0.5) 50%, rgba(34,211,238,0.4) 75%, transparent 100%)" }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(129,140,248,0.1) 0%, transparent 70%)" }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ── BIG CTA ───────────────────────────────────────────────────────── */}
        <div className="py-20 text-center border-b border-white/[0.05]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 font-medium">
              Ready to Build Together?
            </p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
              Let&apos;s Create{" "}
              <span className="gradient-text">Something</span>
              <br />
              <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
              From concept to production — I build scalable, performant, and beautifully
              crafted digital products that drive real impact.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-black btn-glow transition-all text-sm"
                style={{ boxShadow: "0 0 28px rgba(var(--accent-rgb),0.45), 0 4px 20px rgba(0,0,0,0.3)" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 0 44px rgba(var(--accent-rgb),0.65), 0 8px 28px rgba(0,0,0,0.35)"; e.currentTarget.style.transform = "scale(1.04)" }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 28px rgba(var(--accent-rgb),0.45), 0 4px 20px rgba(0,0,0,0.3)"; e.currentTarget.style.transform = "scale(1)" }}
              >
                <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl" />
                <Mail size={16} className="relative z-10" />
                <span className="relative z-10">Start a Project</span>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.1), rgba(var(--accent-rgb),0.04))",
                  border: "1px solid rgba(var(--accent-rgb),0.35)",
                  color: "var(--accent)",
                  boxShadow: "0 0 20px rgba(var(--accent-rgb),0.1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.18), rgba(var(--accent-rgb),0.1))"
                  e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.6)"
                  e.currentTarget.style.boxShadow = "0 0 32px rgba(var(--accent-rgb),0.22)"
                  e.currentTarget.style.transform = "scale(1.03)"
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.1), rgba(var(--accent-rgb),0.04))"
                  e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.35)"
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--accent-rgb),0.1)"
                  e.currentTarget.style.transform = "scale(1)"
                }}
              >
                <FileText size={15} />
                View Resume
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── MAIN GRID ─────────────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-12 gap-10 py-16 border-b border-white/[0.05]">

          {/* Brand — 5 cols */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <SPBrandMark size={52} />
              <div>
                <p className="text-xl font-black tracking-tight gradient-text">Shubham Panghal</p>
                <p className="text-[11px] text-gray-500 tracking-[0.18em] uppercase mt-0.5">Frontend Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering high-performance web applications with clean code, modern architecture,
              and exceptional user experiences — from frontend to backend.
            </p>

            <div className="flex flex-wrap gap-2">
              {SPECIALTY_TAGS.map((t) => (
                <span
                  key={t}
                  className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(129,140,248,0.08)",
                    border: "1px solid rgba(129,140,248,0.2)",
                    color: "rgba(129,140,248,0.9)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={12} className="text-[var(--accent)]" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Navigation — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[var(--accent)]" />
              Navigation
            </h4>
            <ul className="space-y-1.5" role="list">
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="group flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm text-gray-400 transition-all duration-200"
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "white"
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                      e.currentTarget.style.paddingLeft = "14px"
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = ""
                      e.currentTarget.style.background = ""
                      e.currentTarget.style.paddingLeft = "12px"
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "var(--accent)" }}
                    />
                    <span className="capitalize font-medium">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[var(--accent)]" />
              Connect
            </h4>
            <div className="space-y-2.5">
              {SOCIALS.map(({ icon: Icon, href, label, username }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(var(--accent-rgb),0.08)"
                    e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.35)"
                    e.currentTarget.style.transform = "translateX(5px)"
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(var(--accent-rgb),0.1)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.transform = "translateX(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "rgba(var(--accent-rgb),0.1)", border: "1px solid rgba(var(--accent-rgb),0.2)" }}
                  >
                    <Icon size={15} className="text-[var(--accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white group-hover:text-[var(--accent)] transition-colors duration-200">{label}</p>
                    <p className="text-[11px] text-gray-500 truncate mt-0.5">{username}</p>
                  </div>
                  <ArrowUpRight size={13} className="text-gray-600 group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────────────────── */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <SPBrandMark size={28} />
            <div>
              <p className="text-xs font-bold text-white tracking-wide">SHUBHAM PANGHAL</p>
              <p className="text-[10px] text-gray-600">Frontend Developer Portfolio</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[11px] text-gray-500">
              <span className="text-gray-400 font-semibold">© 2026 Shubham Panghal.</span>{" "}
              All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 mt-0.5 tracking-wider italic">
              Designed &amp; Developed with passion &amp; precision.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400 font-medium tracking-wide">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
