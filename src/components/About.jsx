import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Specialist",
  "Backend System Builder",
  "Performance-Focused Engineer"
];

function About() {
  const [roleIndex, setRoleIndex] = useState(0);

  /* ROLE CYCLING */
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div
        className="absolute -top-32 right-[-150px] w-[420px] h-[420px] rounded-full blur-[150px] opacity-20"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-7"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span style={{ color: "var(--accent)" }}>
              Me
            </span>
          </h2>

          {/* LIVE ROLE */}
          <p className="text-lg font-medium text-[var(--accent)] transition-all">
            {roles[roleIndex]}
          </p>

          <p className="text-gray-300 leading-relaxed">
            I'm <span className="font-semibold">Shubham Panghal</span>,
            a passionate full-stack developer with{" "}
            <span style={{ color: "var(--accent)" }}>
              1+ year practical development experience
            </span>{" "}
            through real-world projects, production deployments,
            and continuous hands-on learning.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I focus on building scalable web applications,
            modern UI systems, optimized backend architectures,
            and performance-driven digital products.
            Clean code, reliability, and user experience
            are always my priorities.
          </p>

          {/* EXPERTISE TAGS */}
          <div className="flex flex-wrap gap-3 pt-3">
            {[
              "Full Stack Development",
              "React Ecosystem",
              "Backend APIs",
              "Database Optimization",
              "Production Deployment",
              "Modern UI Systems"
            ].map((tag, i) => (
              <span
                key={i}
                className="
                  px-4 py-1 text-xs
                  bg-white/10
                  border border-white/10
                  rounded-full
                  text-gray-300
                  hover:border-[var(--accent)]
                  transition
                "
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT VISUAL EXPERIENCE PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          <StatCard number="15+" label="Projects Built" />
          <StatCard number="1+ Yr" label="Hands-on Experience" />
          <StatCard number="10+" label="Technologies Used" />
          <StatCard number="∞" label="Learning Mode" />

        </motion.div>

      </div>
    </section>
  );
}

export default About;


/* ---------- STAT CARD ---------- */

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="
        bg-white/5
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-7
        text-center
        transition-all duration-300
        hover:border-[var(--accent)]
        hover:shadow-[0_0_35px_var(--accent)]
      "
    >
      <h3
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--accent)" }}
      >
        {number}
      </h3>

      <p className="text-sm text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}