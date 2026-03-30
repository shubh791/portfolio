'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react"

const navLinks = ["home", "about", "skills", "services", "projects", "contact"]
const socials = [
  { icon: Github, href: "https://github.com/shubh791", label: "GitHub", username: "@shubh791" },
  { icon: Linkedin, href: "https://linkedin.com/in/shubham-panghal", label: "LinkedIn", username: "shubham-panghal" },
  { icon: Mail, href: "mailto:shubhampanghal.work@gmail.com", label: "Email", username: "shubhampanghal.work" },
]

// Custom SP Brand Mark SVG
function SPBrandMark({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sp-g1" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="sp-g2" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {/* Outer rounded square */}
      <rect x="2" y="2" width="52" height="52" rx="14" fill="url(#sp-g2)" stroke="url(#sp-g1)" strokeWidth="1.5" />
      {/* Inner accent lines */}
      <rect x="7" y="7" width="42" height="42" rx="10" fill="none" stroke="url(#sp-g1)" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* SP Letters */}
      <text x="8" y="38" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" fill="url(#sp-g1)" letterSpacing="-1">SP</text>
      {/* Dot accent */}
      <circle cx="48" cy="9" r="3" fill="#22d3ee" opacity="0.8" />
    </svg>
  )
}

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

      {/* Radial glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, rgba(129,140,248,0.12) 0%, transparent 70%)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ── BIG CTA TOP ── */}
        <div className="py-20 text-center border-b border-white/[0.05]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-4 font-medium">Ready to Build Together?</p>
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white btn-glow transition-all hover:scale-105 text-sm"
              >
                <Mail size={16} />
                Start a Project
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm transition-all hover:scale-105 hover:bg-white/10 text-gray-300"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                View Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid md:grid-cols-12 gap-10 py-16 border-b border-white/[0.05]">

          {/* Brand col — 5 cols */}
          <div className="md:col-span-5 space-y-6">
            {/* Logo + name */}
            <div className="flex items-center gap-4">
              <SPBrandMark size={52} />
              <div>
                <p className="text-xl font-black tracking-tight gradient-text">Shubham Panghal</p>
                <p className="text-[11px] text-gray-500 tracking-[0.18em] uppercase mt-0.5">Full-Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering high-performance web applications with clean code, modern architecture,
              and exceptional user experiences — from frontend to backend.
            </p>

            {/* Specialty tags */}
            <div className="flex flex-wrap gap-2">
              {["React & Next.js", "Node.js", "PostgreSQL", "REST APIs"].map(t => (
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

            {/* Location + status */}
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

          {/* Nav col — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[var(--accent)]" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-300"
                      style={{ background: "var(--accent)" }}
                    />
                    <span className="capitalize">{item}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect col — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[var(--accent)]" />
              Connect
            </h4>
            <div className="space-y-3">
              {socials.map(({ icon: Icon, href, label, username }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(129,140,248,0.07)"
                    e.currentTarget.style.borderColor = "rgba(129,140,248,0.3)"
                    e.currentTarget.style.transform = "translateX(4px)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)"
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.transform = "translateX(0)"
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(129,140,248,0.1)", border: "1px solid rgba(129,140,248,0.15)" }}
                  >
                    <Icon size={15} className="text-[var(--accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white group-hover:text-[var(--accent)] transition-colors">{label}</p>
                    <p className="text-[11px] text-gray-500 truncate">{username}</p>
                  </div>
                  <ArrowUpRight size={13} className="text-gray-600 group-hover:text-[var(--accent)] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BRANDING BAR ── */}
        <div className="py-7 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Left: mini brand */}
          <div className="flex items-center gap-3">
            <SPBrandMark size={28} />
            <div>
              <p className="text-xs font-bold text-white tracking-wide">SHUBHAM PANGHAL</p>
              <p className="text-[10px] text-gray-600">Full-Stack Developer Portfolio</p>
            </div>
          </div>

          {/* Center: copyright */}
          <div className="text-center">
            <p className="text-[11px] text-gray-500">
              <span className="text-gray-400 font-semibold">© 2026 Shubham Panghal.</span>{" "}
              All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 mt-0.5 tracking-wider italic">
              Designed &amp; Developed with passion &amp; precision.
            </p>
          </div>

          {/* Right: status */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400 font-medium tracking-wide">All systems live</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
