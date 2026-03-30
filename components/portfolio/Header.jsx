'use client'

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
]

export default function Header() {
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy
  useEffect(() => {
    const ids = navItems.map((n) => n.id)
    const observers = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: "-40% 0px -50% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActive(id)
    setMenuOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#04040f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">

        {/* LOGO */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9">
            <Image
              src="/projects/shubham-logo.svg"
              alt="SP Logo"
              fill
              className="object-contain group-hover:drop-shadow-[0_0_10px_var(--accent)] transition-all duration-300"
            />
          </div>
          <span className="text-base md:text-lg font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
            Shubham Panghal
          </span>
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                active === item.id
                  ? "text-[var(--accent)]"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-[var(--accent)]/10 border border-[var(--accent)]/25"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm border border-[var(--accent)]/30 text-[var(--accent)] rounded-lg hover:bg-[var(--accent)]/10 transition-all duration-300 font-medium"
          >
            Resume
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2 text-sm btn-glow rounded-lg font-semibold text-white transition-all duration-300"
          >
            Contact
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-[#050810]/98 border-t border-white/[0.06] backdrop-blur-xl"
          >
            <div className="px-5 py-5 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    active === item.id
                      ? "text-[var(--accent)] bg-[var(--accent)]/10 border border-[var(--accent)]/20"
                      : "text-gray-300 hover:text-[var(--accent)] hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-white/[0.06] flex gap-2 mt-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-[var(--accent)]/40 text-[var(--accent)] py-2.5 rounded-xl text-sm font-medium hover:bg-[var(--accent)]/10 transition-all"
                >
                  Resume
                </a>
                <button
                  onClick={() => scrollTo("contact")}
                  className="flex-1 btn-glow text-white py-2.5 rounded-xl text-sm font-semibold"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
