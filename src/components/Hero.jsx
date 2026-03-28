import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TerminalPreview from "./TerminalPreview";
import ThemeSwitcher from "./Theme";
import SocialIcons from "./SocialIcons";

const typewriterTexts = [
  "Full-Stack Developer",
  "React & Next.js Specialist",
  "Node.js Backend Engineer",
  "UI/UX Craftsman",
  "Web3 & ICP Developer",
];

function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterTexts[textIndex];
    let timeout;

    if (!isDeleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typewriterTexts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 md:px-12 py-20 md:py-0"
    >

      {/* GRID BACKGROUND */}
      <div className="hero-grid-bg" />

      {/* AMBIENT GLOWS */}
      <div className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-600 opacity-10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-cyan-500 opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-900 opacity-[0.08] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center text-center md:text-left relative z-10">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* AVAILABLE BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-badge"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Work
          </motion.div>

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text hero-name-glow">
              Shubham Panghal
            </span>
          </motion.h1>

          {/* TYPEWRITER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center md:justify-start gap-0 text-xl sm:text-2xl font-semibold text-gray-300 h-9"
          >
            <span>{displayed}</span>
            <span className="border-r-2 border-[var(--accent)] ml-0.5 h-7 inline-block animate-blink" />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="opacity-75 text-sm md:text-base max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Full-stack developer specializing in React, Next.js, and Node.js — crafting
            fast, scalable digital products with polished Tailwind UI, robust REST APIs,
            MongoDB &amp; PostgreSQL databases, and Web3 integrations on the Internet Computer.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden btn-glow px-7 py-3 rounded-xl font-semibold text-sm"
            >
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#projects"
              className="border border-white/20 px-7 py-3 rounded-xl text-sm hover:bg-white/10 hover:border-[var(--accent)] transition-all duration-300 backdrop-blur-sm"
            >
              View Projects
            </a>
          </motion.div>

          {/* QUICK STATS */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-8 justify-center md:justify-start pt-1"
          >
            {[["15+", "Projects Built"], ["1+", "Years Exp"], ["10+", "Technologies"]].map(([num, label]) => (
              <div key={label} className="text-center md:text-left">
                <p className="text-2xl font-bold gradient-text">{num}</p>
                <p className="text-[11px] text-gray-400 tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT TERMINAL PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <TerminalPreview />
        </motion.div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:block">
        <SocialIcons />
      </div>

      {/* THEME SWITCHER */}
      <ThemeSwitcher />

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-[var(--accent)] transition-colors z-10"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </motion.a>

    </section>
  );
}

export default Hero;
