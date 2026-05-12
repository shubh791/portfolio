'use client'

import { useState, useCallback } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github, Linkedin, Mail, Calendar, ArrowUpRight,
  MapPin, Clock, Send, CheckCircle, Loader2, User, MessageSquare, Sparkles
} from "lucide-react"

const SOCIALS = [
  { icon: Github,   label: "GitHub",      sub: "@shubh791",                        href: "https://github.com/shubh791",                          color: "#e2e8f0" },
  { icon: Linkedin, label: "LinkedIn",    sub: "shubham-panghal",                  href: "https://linkedin.com/in/shubham-panghal",              color: "#0a66c2" },
  { icon: Mail,     label: "Email",       sub: "shubhampanghal.work@gmail.com",    href: "mailto:shubhampanghal.work@gmail.com",                 color: "#818cf8" },
  { icon: Calendar, label: "Book a Call", sub: "30 min · Free · No commitment",    href: "https://calendly.com/shubhampanghal-work/30min",       color: "#22d3ee" },
]

function SocialChip({ icon: Icon, label, sub, href, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300"
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `${color}0e`
        e.currentTarget.style.borderColor = `${color}45`
        e.currentTarget.style.transform = "translateY(-2px)"
        e.currentTarget.style.boxShadow = `0 12px 32px ${color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.03)"
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110" style={{ background: `${color}12`, border: `1px solid ${color}28` }}>
        <Icon size={15} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-white leading-tight">{label}</p>
        <p className="text-[10px] text-gray-500 truncate mt-0.5">{sub}</p>
      </div>
      <ArrowUpRight size={13} className="text-gray-600 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
    </a>
  )
}

export default function ContactCTA() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [focused, setFocused] = useState("")

  const update = useCallback((field) => (e) => {
    setForm(p => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors(p => ({ ...p, [field]: "" }))
  }, [errors])

  const validate = () => {
    const next = {}
    if (!form.name.trim())    next.name = "Name is required"
    if (!form.email.trim())   next.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email"
    if (!form.message.trim()) next.message = "Message is required"
    else if (form.message.trim().length < 10) next.message = "At least 10 characters"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const send = async () => {
    if (!validate()) return
    setLoading(true)
    try {
      await emailjs.send(
        "service_pahxr4t",
        "template_4dc0j2s",
        { name: form.name, email: form.email, message: form.message, reply_to: form.email },
        "JS_tbNVj5ms5_yXMw"
      )
      setSuccess(true)
      setLoading(false)
      setTimeout(() => { setSuccess(false); setForm({ name: "", email: "", message: "" }) }, 4500)
    } catch {
      setLoading(false)
    }
  }

  const inputStyle = (field) => ({
    background: focused === field ? "rgba(var(--accent-rgb),0.05)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${errors[field] ? "rgba(239,68,68,0.5)" : focused === field ? "rgba(var(--accent-rgb),0.5)" : "rgba(255,255,255,0.1)"}`,
    boxShadow: focused === field ? `0 0 0 3px rgba(var(--accent-rgb),0.08)` : "none",
    color: "white",
    outline: "none",
    transition: "all 0.25s",
  })

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(var(--accent-rgb),0.1), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[160px] opacity-[0.06]" style={{ background: "radial-gradient(circle, rgba(var(--accent-rgb),1), rgba(34,211,238,0.4))" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full blur-[120px] opacity-[0.05] bg-violet-500 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-badge mb-6 justify-center mx-auto w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06] mb-5">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something</span>
            <br />
            <span className="text-white">Extraordinary</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Have a project, an idea, or just want to say hi?
            Drop a message and I&apos;ll get back within 24 hours.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-3xl overflow-hidden h-full"
              style={{
                background: "rgba(6,10,28,0.8)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(28px)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(var(--accent-rgb),0.04)",
              }}
            >
              {/* Top bar */}
              <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, var(--accent), #22d3ee, #a78bfa)" }} />
              {/* Inner glow */}
              <div className="absolute top-0 inset-x-0 h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(var(--accent-rgb),0.07), transparent)" }} />

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-5 p-14 text-center h-full min-h-[460px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", boxShadow: "0 0 40px rgba(34,197,94,0.2)" }}
                    >
                      <CheckCircle size={36} className="text-green-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                        Thanks <span className="text-white font-semibold">{form.name || "there"}</span>!
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full text-xs text-green-400" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Redirecting shortly...
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 md:p-10 relative z-10"
                  >
                    {/* Form header */}
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(var(--accent-rgb),0.1)", border: "1px solid rgba(var(--accent-rgb),0.25)" }}>
                        <MessageSquare size={16} className="text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white">Send a Message</p>
                        <p className="text-[11px] text-gray-500">I respond within 24 hours</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1.5 text-[10px] text-green-400 font-medium" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", padding: "4px 10px", borderRadius: 999 }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Online
                      </div>
                    </div>

                    <div className="space-y-5">
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                            <User size={10} className="text-[var(--accent)]" /> Your Name <span className="text-[var(--accent)]">*</span>
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={update("name")}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused("")}
                            placeholder="John Smith"
                            className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-600"
                            style={inputStyle("name")}
                          />
                          {errors.name && <p className="text-[10px] text-red-400 flex items-center gap-1">⚠ {errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Mail size={10} className="text-[var(--accent)]" /> Email Address <span className="text-[var(--accent)]">*</span>
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={update("email")}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused("")}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-600"
                            style={inputStyle("email")}
                          />
                          {errors.email && <p className="text-[10px] text-red-400 flex items-center gap-1">⚠ {errors.email}</p>}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                          <MessageSquare size={10} className="text-[var(--accent)]" /> Your Message <span className="text-[var(--accent)]">*</span>
                        </label>
                        <textarea
                          value={form.message}
                          onChange={update("message")}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused("")}
                          placeholder="Tell me about your project, idea, or how I can help..."
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl text-sm placeholder-gray-600 resize-none"
                          style={inputStyle("message")}
                        />
                        <div className="flex items-center justify-between">
                          {errors.message ? <p className="text-[10px] text-red-400 flex items-center gap-1">⚠ {errors.message}</p> : <span />}
                          <span className="text-[10px] text-gray-600">{form.message.length} chars</span>
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        onClick={send}
                        disabled={loading}
                        className="group w-full relative overflow-hidden flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-sm text-black btn-glow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ boxShadow: "0 0 24px rgba(var(--accent-rgb),0.4)" }}
                        onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = "0 0 40px rgba(var(--accent-rgb),0.6)" }}
                        onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 24px rgba(var(--accent-rgb),0.4)" }}
                      >
                        <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" />
                        {loading ? (
                          <><Loader2 size={16} className="animate-spin relative z-10" /><span className="relative z-10">Sending...</span></>
                        ) : (
                          <><Send size={15} className="relative z-10" /><span className="relative z-10">Send Message</span></>
                        )}
                      </button>

                      <p className="text-center text-[10px] text-gray-600">
                        🔒 Your information is private and will never be shared.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT — info + socials (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Status card */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.15)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)" }}>
                  <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse block" />
                </div>
                <div>
                  <p className="text-sm font-black text-white">Open to Work</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">Frontend roles · Remote / Hybrid</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-3" style={{ borderTop: "1px solid rgba(34,197,94,0.1)" }}>
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400"><MapPin size={10} className="text-green-400" /> India</span>
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400"><Clock size={10} className="text-green-400" /> Replies in 24h</span>
                <span className="flex items-center gap-1.5 text-[10px] text-gray-400"><Sparkles size={10} className="text-green-400" /> Full-time / Freelance</span>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { num: "20+", label: "Projects",    color: "#818cf8" },
                { num: "24h", label: "Response",    color: "#22d3ee" },
                { num: "1+",  label: "Yr. Exp.",    color: "#a78bfa" },
              ].map(({ num, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-3.5 px-2 rounded-xl text-center"
                  style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-lg font-black tabular-nums" style={{ color }}>{num}</p>
                  <p className="text-[9px] text-gray-500 mt-0.5 font-medium">{label}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="text-[10px] text-gray-600 uppercase tracking-[0.15em]">Or reach via</span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-2 flex-1">
              {SOCIALS.map(s => <SocialChip key={s.label} {...s} />)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
