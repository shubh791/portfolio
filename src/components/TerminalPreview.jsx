import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  "React Frontend",
  "Node Backend",
  "PostgreSQL DB",
  "Cloud Deployment",
  "Real-Time APIs",
];

const barHeights = [10, 18, 12, 22, 15, 24, 17, 20, 13, 21];

function SystemPanel() {
  const [uptime, setUptime] = useState(0);
  const [metric, setMetric] = useState(98);
  const [stackIndex, setStackIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setUptime((p) => p + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setMetric(95 + Math.floor(Math.random() * 5)), 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setStackIndex((p) => (p + 1) % techStack.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-[520px] mx-auto p-6 sm:p-8 rounded-3xl bg-[#080f1f]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
    >

      {/* Accent corner glow */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-[var(--accent)] opacity-15 blur-2xl rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-600 opacity-10 blur-2xl rounded-full" />

      {/* HEADER ROW */}
      <div className="flex justify-between items-center mb-6">
        {/* Mac-style dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        <span className="flex items-center gap-2 text-green-400 text-xs">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
          System Healthy
        </span>
      </div>

      {/* LIVE PROJECT — PrepZena */}
      <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--accent)] transition-colors duration-300">
        <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">
          Latest Live Project
        </p>
        <a
          href="https://prepzena.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-[var(--accent)] hover:underline underline-offset-2 block"
        >
          PrepZena — Learn To Code Smarter  →
        </a>
        <p className="text-xs text-gray-400 mt-1">
          AI-powered mock interview platform with real-time feedback
        </p>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-2 gap-3 text-sm mb-6">
        <Metric title="Performance" value={`${metric}%`} glow />
        <Metric title="Uptime" value={`${uptime}s`} />
        <Metric title="Tech Stack" value={techStack[stackIndex]} />
        <Metric title="Status" value="Production" />
      </div>

      {/* API STATUS */}
      <div className="bg-black/30 border border-white/10 rounded-xl p-3 text-xs font-mono mb-5">
        <span className="opacity-50">API:</span>{" "}
        <span className="text-green-400 animate-pulse">
          GET /prepzena/status → 200 OK
        </span>
      </div>

      {/* ACTIVITY BARS */}
      <div className="flex items-end gap-1 h-12">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [`${h}px`, `${h + 6}px`, `${h}px`] }}
            transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
            className="flex-1 bg-[var(--accent)] rounded-sm opacity-70"
            style={{ minWidth: "6px" }}
          />
        ))}
      </div>

    </motion.div>
  );
}

function Metric({ title, value, glow }) {
  return (
    <div className={`bg-white/5 border rounded-xl p-3 transition-colors duration-200 ${glow ? "border-[var(--accent)]/30" : "border-white/10"}`}>
      <p className="opacity-50 text-[10px] uppercase tracking-wider mb-1">{title}</p>
      <p className={`font-semibold text-sm ${glow ? "text-[var(--accent)]" : ""}`}>{value}</p>
    </div>
  );
}

export default SystemPanel;
