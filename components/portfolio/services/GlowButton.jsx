'use client'

import { ArrowRight } from 'lucide-react'

export default function GlowButton({ accent, label = 'Start Project' }) {
  return (
    <a
      href="#contact"
      className="group relative inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-sm font-bold overflow-hidden transition-all duration-300 focus-visible:outline-none"
      style={{
        background: `linear-gradient(135deg, ${accent.color}28, ${accent.color}12)`,
        border: `1px solid ${accent.color}45`,
        color: accent.color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${accent.color}40, ${accent.color}22)`
        e.currentTarget.style.boxShadow = `0 0 32px ${accent.color}35, 0 0 0 1px ${accent.color}40`
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = `linear-gradient(135deg, ${accent.color}28, ${accent.color}12)`
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.transform = 'none'
      }}
    >
      <span>{label}</span>
      <ArrowRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
      />
    </a>
  )
}
