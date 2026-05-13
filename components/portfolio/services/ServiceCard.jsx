'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, RefreshCw, Zap } from 'lucide-react'
import { cardVariants } from './animationVariants'
import GlowButton from './GlowButton'

const ACCENTS = [
  {
    color: '#818cf8',
    gradient: 'from-indigo-500 via-violet-500 to-purple-600',
    glow: 'rgba(129,140,248,0.20)',
    ring: 'rgba(129,140,248,0.45)',
  },
  {
    color: '#22d3ee',
    gradient: 'from-cyan-400 via-sky-400 to-blue-500',
    glow: 'rgba(34,211,238,0.18)',
    ring: 'rgba(34,211,238,0.40)',
  },
  {
    color: '#a78bfa',
    gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
    glow: 'rgba(167,139,250,0.22)',
    ring: 'rgba(167,139,250,0.50)',
  },
  {
    color: '#34d399',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-500',
    glow: 'rgba(52,211,153,0.18)',
    ring: 'rgba(52,211,153,0.40)',
  },
]

export default function ServiceCard({ service, accentIndex }) {
  const accent = ACCENTS[accentIndex % ACCENTS.length]
  const isPopular = service.popular
  const [hovered, setHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  function handleMouseMove(e) {
    if (!cardRef.current) return
    const r = cardRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - r.left, y: e.clientY - r.top })
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: isPopular
          ? `linear-gradient(150deg, ${accent.color}08 0%, rgba(10,10,30,0.9) 60%)`
          : 'rgba(255,255,255,0.022)',
        border: `1px solid ${hovered ? accent.ring : isPopular ? `${accent.color}30` : 'rgba(255,255,255,0.07)'}`,
        boxShadow: hovered
          ? `0 24px 64px ${accent.glow}, 0 0 0 1px ${accent.ring}`
          : isPopular
          ? `0 8px 48px ${accent.glow}`
          : '0 2px 16px rgba(0,0,0,0.18)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.38s cubic-bezier(0.22,1,0.36,1)',
      }}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          width: 320,
          height: 320,
          background: `radial-gradient(circle, ${accent.color}18 0%, transparent 65%)`,
          left: mousePos.x - 160,
          top: mousePos.y - 160,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-52 h-52 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle at top right, ${accent.color}12, transparent 65%)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.38s ease',
        }}
      />

      {/* Top accent bar */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${accent.gradient} flex-shrink-0 relative z-10`} />

      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest"
          style={{
            background: `linear-gradient(135deg, ${accent.color}30, ${accent.color}12)`,
            border: `1px solid ${accent.color}55`,
            color: accent.color,
            boxShadow: `0 0 24px ${accent.color}28`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Most Popular
        </div>
      )}

      {/* ── Card body ────────────────────────────────── */}
      <div className="relative z-10 flex flex-col flex-1 p-6 lg:p-7">

        {/* Header row — icon + number */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            animate={{ boxShadow: hovered ? `0 0 28px ${accent.color}55` : 'none' }}
            transition={{ duration: 0.32 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{
              background: `${accent.color}14`,
              border: `1px solid ${accent.color}32`,
            }}
          >
            {service.icon}
          </motion.div>
          <span className="font-mono text-xs font-bold opacity-25 mt-1" style={{ color: accent.color }}>
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[1.05rem] font-extrabold text-white leading-snug mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Price */}
        <div
          className="flex items-baseline gap-2 px-4 py-3 rounded-xl mb-5 w-fit"
          style={{
            background: `${accent.color}0d`,
            border: `1px solid ${accent.color}28`,
          }}
        >
          <span className="text-[11px] text-gray-500 font-medium">Starting from</span>
          <span className="text-[1.35rem] font-black leading-none" style={{ color: accent.color }}>
            {service.startingPrice}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.055)' }} />

        {/* Feature list */}
        <ul className="flex flex-col gap-2.5 mb-5">
          {service.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-300">
              <CheckCircle2 size={14} className="flex-shrink-0" style={{ color: accent.color }} />
              {feat}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-px mb-5" style={{ background: 'rgba(255,255,255,0.055)' }} />

        {/* Meta row — delivery | revisions | fast delivery */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div
            className="flex flex-col items-center justify-center py-3 px-2 rounded-xl text-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Clock size={11} className="mb-1.5 opacity-50" style={{ color: accent.color }} />
            <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Delivery</p>
            <p className="text-white text-[10px] font-bold leading-tight">{service.delivery}</p>
          </div>
          <div
            className="flex flex-col items-center justify-center py-3 px-2 rounded-xl text-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <RefreshCw size={11} className="mb-1.5 opacity-50" style={{ color: accent.color }} />
            <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Revisions</p>
            <p className="text-white text-[10px] font-bold leading-tight">{service.revisions}</p>
          </div>
          <div
            className="flex flex-col items-center justify-center py-3 px-2 rounded-xl text-center"
            style={{ background: `${accent.color}09`, border: `1px solid ${accent.color}20` }}
          >
            <Zap size={11} className="mb-1.5" style={{ color: accent.color }} />
            <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Rush</p>
            <p className="text-[10px] font-bold leading-tight" style={{ color: accent.color }}>
              {service.fastDelivery}
            </p>
          </div>
        </div>

        {/* CTA — pinned to bottom via mt-auto */}
        <div className="mt-auto">
          <GlowButton accent={accent} />
        </div>
      </div>
    </motion.div>
  )
}
