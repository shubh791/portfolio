'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, X } from "lucide-react"

const themes = {
  indigo: { name: "Indigo", accent: "#818cf8", accentRgb: "129,140,248", accent2: "#22d3ee", accent2Rgb: "34,211,238", bg: "#040411", text: "#e2e8f0", icon: "✦", gradient: "from-indigo-500 to-cyan-500" },
  violet: { name: "Violet", accent: "#a78bfa", accentRgb: "167,139,250", accent2: "#c084fc", accent2Rgb: "192,132,252", bg: "#0b0218", text: "#f3e8ff", icon: "⚡", gradient: "from-violet-500 to-purple-400" },
  aqua: { name: "Aqua", accent: "#22d3ee", accentRgb: "34,211,238", accent2: "#818cf8", accent2Rgb: "129,140,248", bg: "#00101a", text: "#ecfeff", icon: "◈", gradient: "from-cyan-400 to-sky-500" },
  emerald: { name: "Emerald", accent: "#10b981", accentRgb: "16,185,129", accent2: "#22d3ee", accent2Rgb: "34,211,238", bg: "#00120e", text: "#ecfdf5", icon: "◉", gradient: "from-emerald-400 to-teal-500" },
  rose: { name: "Rose", accent: "#f43f5e", accentRgb: "244,63,94", accent2: "#fb923c", accent2Rgb: "251,146,60", bg: "#130208", text: "#ffe4e6", icon: "◆", gradient: "from-rose-500 to-pink-400" },
  amber: { name: "Amber", accent: "#f59e0b", accentRgb: "245,158,11", accent2: "#fb923c", accent2Rgb: "251,146,60", bg: "#100900", text: "#fff7ed", icon: "◇", gradient: "from-amber-400 to-orange-500" },
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const applyTheme = (theme) => {
    const r = document.documentElement
    r.style.setProperty("--accent", theme.accent)
    r.style.setProperty("--accent-rgb", theme.accentRgb)
    r.style.setProperty("--accent-2", theme.accent2)
    r.style.setProperty("--accent-2-rgb", theme.accent2Rgb)
    r.style.setProperty("--text", theme.text)
    document.body.style.background = theme.bg
    document.body.style.color = theme.text
  }

  return (
    <>
      <button onClick={() => setOpen(true)}
        className="fixed right-5 top-[45vh] z-50 flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:scale-105"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "var(--accent)", backdropFilter: "blur(12px)" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.4)"; e.currentTarget.style.background = "rgba(var(--accent-rgb),0.08)" }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}>
        <Palette size={15} />
        <span className="hidden sm:inline tracking-wide">Theme</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}>

            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }}
              className="w-full max-w-sm rounded-2xl p-7 shadow-2xl"
              style={{ background: "#08081a", border: "1px solid rgba(255,255,255,0.1)" }}>

              <div className="flex items-center justify-between mb-1">
                <h2 className="text-lg font-semibold text-white">Choose Theme</h2>
                <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <X size={15} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mb-6">Select your preferred color palette</p>

              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {Object.values(themes).map((theme) => (
                  <button key={theme.name} onClick={() => setSelected(theme)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left ${
                      selected?.name === theme.name ? "border-[var(--accent)] bg-white/[0.04]" : "hover:bg-white/[0.03]"
                    }`}
                    style={{ border: `1px solid ${selected?.name === theme.name ? "var(--accent)" : "rgba(255,255,255,0.08)"}` }}>
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${theme.gradient} flex-shrink-0 shadow-sm`} />
                    <span className="text-sm font-medium" style={{ color: "rgba(203,213,225,0.9)" }}>
                      {theme.icon} {theme.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={() => setOpen(false)}
                  className="flex-1 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white transition-all duration-200"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  Cancel
                </button>
                <button
                  onClick={() => { if (selected) applyTheme(selected); setOpen(false) }}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-black btn-glow transition-all">
                  Apply Theme
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
