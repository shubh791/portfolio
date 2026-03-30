'use client'

import { useState } from "react"
import emailjs from "@emailjs/browser"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle, Loader } from "lucide-react"

export default function ContactCTA() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendMail = async () => {
    setLoading(true)
    try {
      await emailjs.send("service_pahxr4t", "template_4dc0j2s", { name, email }, "JS_tbNVj5ms5_yXMw")
      setSuccess(true)
      setLoading(false)
      setTimeout(() => {
        setStep(1); setName(""); setEmail(""); setSuccess(false)
      }, 3000)
    } catch {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-40 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(var(--accent-rgb),0.15), transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10" style={{ background: "radial-gradient(circle, rgba(var(--accent-rgb),0.8), rgba(var(--accent-2-rgb),0.4))" }} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="section-badge mb-6 justify-center">
          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
          Get In Touch
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Let&apos;s Create{" "}
          <span className="gradient-text">Impact Together</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          className="text-gray-400 mb-12 text-base md:text-lg leading-relaxed">
          Building scalable digital products, modern web experiences, and innovative solutions.
        </motion.p>

        {/* Step indicator */}
        {!success && (
          <div className="flex items-center justify-center gap-3 mb-8">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  step >= s ? "text-black" : "text-gray-400 border border-white/20"
                }`} style={step >= s ? { background: "var(--accent)" } : {}}>
                  {s}
                </div>
                {s < 2 && <div className={`w-10 h-px transition-colors duration-300 ${step >= 2 ? "bg-[var(--accent)]" : "bg-white/20"}`} />}
              </div>
            ))}
          </div>
        )}

        <div className="max-w-lg mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && !success && (
              <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <p className="text-sm text-gray-400 mb-3">Step 1: What&apos;s your name?</p>
                <div className="flex gap-3">
                  <input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && name.trim() && setStep(2)}
                    className="flex-1 px-5 py-4 rounded-2xl text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
                    onFocus={e => e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.5)"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <button onClick={() => name.trim() && setStep(2)}
                    className="px-5 py-4 rounded-2xl font-semibold text-black transition-all hover:scale-105 btn-glow">
                    <Send size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && !success && (
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                <p className="text-sm text-gray-400 mb-3">Step 2: What&apos;s your email, <span className="text-white font-medium">{name}</span>?</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && email.trim() && sendMail()}
                    className="flex-1 px-5 py-4 rounded-2xl text-sm outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white" }}
                    onFocus={e => e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.5)"}
                    onBlur={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <button onClick={() => !loading && email.trim() && sendMail()}
                    disabled={loading}
                    className="px-5 py-4 rounded-2xl font-semibold text-black transition-all hover:scale-105 btn-glow disabled:opacity-60">
                    {loading ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
                  </button>
                </div>
              </motion.div>
            )}

            {success && (
              <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-3 py-8">
                <CheckCircle size={48} className="text-green-400" />
                <p className="text-xl font-semibold text-white">Message Sent 🚀</p>
                <p className="text-gray-400 text-sm">Thanks, {name}! I&apos;ll get back to you soon.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
