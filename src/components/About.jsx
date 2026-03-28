import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Backend System Builder",
  "Performance-Focused Engineer",
];

const stats = [
  { target: 15, suffix: "+", label: "Projects Built" },
  { target: 1, suffix: "+ Yr", label: "Hands-on Experience" },
  { target: 10, suffix: "+", label: "Technologies Used" },
];

/* Count-up hook */
function useCountUp(target, inView) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return count;
}

function StatCard({ target, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(target, inView);

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 text-center transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
    >
      <h3 className="text-3xl font-bold mb-2 gradient-text">
        {count}{suffix}
      </h3>
      <p className="text-sm text-gray-400">{label}</p>
    </motion.div>
  );
}

function About() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-32 px-6 md:px-12 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 right-[-150px] w-[420px] h-[420px] rounded-full blur-[150px] opacity-10 bg-indigo-600 pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full blur-[130px] opacity-10 bg-cyan-600 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="space-y-7"
        >

          <div className="section-badge">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Crafting{" "}
            <span className="gradient-text">Digital</span>{" "}
            Experiences
          </h2>

          {/* LIVE ROLE */}
          <motion.p
            key={roleIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-medium text-[var(--accent)]"
          >
            {roles[roleIndex]}
          </motion.p>

          <p className="text-gray-300 leading-relaxed">
            I&apos;m <span className="font-semibold text-white">Shubham Panghal</span>,
            a passionate full-stack developer with{" "}
            <span className="gradient-text font-semibold">1+ year of practical development experience</span>{" "}
            through real-world projects, production deployments, and continuous hands-on learning.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I focus on building scalable web applications, modern UI systems, optimized backend
            architectures, and performance-driven digital products. Clean code, reliability, and
            user experience are always my priorities.
          </p>

          {/* EXPERTISE TAGS */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Full Stack Development",
              "React Ecosystem",
              "Backend APIs",
              "Database Optimization",
              "Production Deployment",
              "Modern UI Systems",
            ].map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-1.5 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

        </motion.div>

        {/* RIGHT — STATS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}

            {/* Learning Mode card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7 text-center transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-3xl font-bold mb-2 gradient-text">∞</h3>
              <p className="text-sm text-gray-400">Learning Mode</p>
            </motion.div>
          </div>

          {/* AVAILABILITY CARD */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent)]/50 transition-colors duration-300 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
            </div>
            <div>
              <p className="font-medium text-sm text-white">Open to Opportunities</p>
              <p className="text-xs text-gray-400 mt-0.5">Full-time roles, freelance & collaborations</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;
