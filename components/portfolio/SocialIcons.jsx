'use client'

import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/shubh791", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/shubham-panghal", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shubhampanghal.work@gmail.com", label: "Email" },
]

export default function SocialIcons() {
  return (
    <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 flex-col gap-3 z-40">
      {socials.map(({ icon: Icon, href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          aria-label={label}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-250 hover:scale-110"
          style={{ background: "rgba(4,4,17,0.7)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(var(--accent-rgb),0.5)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(var(--accent-rgb),0.3)" }}
          onMouseLeave={e => { e.currentTarget.style.color = ""; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.boxShadow = "none" }}>
          <Icon size={16} />
        </a>
      ))}
      <div className="w-px h-12 mx-auto mt-1 rounded-full"
        style={{ background: "linear-gradient(to bottom, rgba(var(--accent-rgb),0.5), transparent)" }} />
    </div>
  )
}
