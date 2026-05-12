'use client'

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, FileText } from "lucide-react"
import Image from "next/image"
import { useScrollSpy } from "@/hooks/useScrollSpy"

const NAV_ITEMS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

const NAV_IDS = NAV_ITEMS.map((n) => n.id)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useScrollSpy(NAV_IDS)

  // Scroll progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#04040f]/92 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2.5 group"
            aria-label="Go to top"
          >
            <div className="relative w-9 h-9">
              <Image
                src="/projects/shubham-logo.svg"
                alt="SP Logo"
                fill
                className="object-contain group-hover:drop-shadow-[0_0_12px_var(--accent)] transition-all duration-300"
              />
            </div>
            <span className="text-base md:text-lg font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
              Shubham Panghal
            </span>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 font-medium group ${
                  active === item.id ? "text-[var(--accent)]" : "text-gray-400"
                }`}
                onMouseEnter={e => {
                  if (active !== item.id) {
                    e.currentTarget.style.color = "white"
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)"
                  }
                }}
                onMouseLeave={e => {
                  if (active !== item.id) {
                    e.currentTarget.style.color = ""
                    e.currentTarget.style.background = ""
                  }
                }}
              >
                {item.name}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(var(--accent-rgb),0.1)", border: "1px solid rgba(var(--accent-rgb),0.28)", boxShadow: "0 0 12px rgba(var(--accent-rgb),0.1)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ width: active === item.id ? 0 : "60%", background: "var(--accent)" }}
                />
              </button>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.1), rgba(var(--accent-rgb),0.05))",
                border: "1px solid rgba(var(--accent-rgb),0.35)",
                color: "var(--accent)",
                boxShadow: "0 0 14px rgba(var(--accent-rgb),0.08)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.18), rgba(var(--accent-rgb),0.1))"
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.6)"
                e.currentTarget.style.boxShadow = "0 0 22px rgba(var(--accent-rgb),0.2)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(var(--accent-rgb),0.1), rgba(var(--accent-rgb),0.05))"
                e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.35)"
                e.currentTarget.style.boxShadow = "0 0 14px rgba(var(--accent-rgb),0.08)"
              }}
            >
              <FileText size={13} />
              Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-5 py-2 text-sm btn-glow rounded-lg font-semibold text-white transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-[#050810]/98 border-t border-white/[0.06] backdrop-blur-2xl"
            >
              <nav className="px-5 py-5 space-y-1" role="navigation" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active === item.id
                        ? "text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                        : "text-gray-300 hover:text-[var(--accent)] hover:bg-white/5"
                    }`}
                  >
                    {active === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    )}
                    {item.name}
                  </motion.button>
                ))}

                <div className="pt-3 border-t border-white/[0.06] flex gap-2 mt-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                    style={{ background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.12), rgba(var(--accent-rgb),0.06))", border: "1px solid rgba(var(--accent-rgb),0.4)", color: "var(--accent)" }}
                  >
                    <FileText size={13} />
                    Resume
                  </a>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="flex-1 btn-glow text-white py-2.5 rounded-xl text-sm font-semibold"
                  >
                    Hire Me
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
