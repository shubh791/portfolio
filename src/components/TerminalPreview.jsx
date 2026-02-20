import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const techStack = [
  "React Frontend",
  "Node Backend",
  "PostgreSQL DB",
  "Cloud Deployment",
  "Real-Time APIs",
];

function SystemPanel() {
  const [uptime, setUptime] = useState(0);
  const [metric, setMetric] = useState(98);
  const [stackIndex, setStackIndex] = useState(0);

  /* Uptime counter */
  useEffect(() => {
    const timer = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  /* Metric auto-update */
  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetric(95 + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(metricTimer);
  }, []);

  /* Tech stack cycle */
  useEffect(() => {
    const stackTimer = setInterval(() => {
      setStackIndex((prev) => (prev + 1) % techStack.length);
    }, 2500);
    return () => clearInterval(stackTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        w-full max-w-[520px]
        mx-auto
        p-6 sm:p-8
        rounded-3xl
        bg-[#0b1220]/80
        border border-white/10
        backdrop-blur-2xl
        shadow-2xl
        relative overflow-hidden
      "
    >

      {/* Accent glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)] opacity-10 blur-3xl rounded-full" />

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-xs uppercase tracking-widest opacity-60">
          Production System
        </p>

        {/* Heartbeat */}
        <span className="flex items-center gap-2 text-green-400 text-xs">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
          System Healthy
        </span>
      </div>

      {/* CYBERGRAM PROJECT */}
      <div className="mb-6">
        <p className="text-xs opacity-60 mb-1">Live Project</p>

        <a
          href="https://cybergram.in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-[var(--accent)] hover:underline"
        >
          Cybergram Platform →
        </a>

        <p className="text-xs text-gray-400">
          Full-stack cybersecurity awareness platform
        </p>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-2 gap-4 text-sm mb-6">

        <Metric title="Performance" value={`${metric}%`} />
        <Metric title="Uptime" value={`${uptime}s`} />
        <Metric title="Tech Stack" value={techStack[stackIndex]} />
        <Metric title="Deployment" value="Production" />

      </div>

      {/* API Simulation */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs font-mono">
        <span className="opacity-60">API:</span>{" "}
        <span className="text-green-400 animate-pulse">
          GET /cybergram/status → 200 OK
        </span>
      </div>

      {/* Subtle graph animation */}
      <div className="mt-6 flex items-end gap-1 h-10">
        {[10, 18, 12, 20, 15, 22, 16].map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: `${h}px` }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "mirror" }}
            className="w-2 bg-[var(--accent)] rounded-sm opacity-70"
          />
        ))}
      </div>

    </motion.div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
      <p className="opacity-60 text-xs mb-1">{title}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

export default SystemPanel;