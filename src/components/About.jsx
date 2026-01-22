import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span style={{ color: "var(--accent)" }}>Me</span>
          </h2>

        <p className="opacity-75 leading-relaxed">
  I'm <span className="font-semibold">Shubham Panghal</span>, a Full Stack Developer passionate about building high-performance, scalable, and modern web applications. I enjoy transforming complex problems into clean, efficient, and user-friendly solutions.
</p>

<p className="mt-4 opacity-70 leading-relaxed">
  Currently focused on backend systems, database optimization, API development, and exploring decentralized application development alongside modern frontend design practices.
</p>

        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >

          <StatCard number="15+" label="Projects Built" />
          <StatCard number="1+" label="Years Learning" />
          <StatCard number="10+" label="Technologies" />
          <StatCard number="100%" label="Dedication" />

        </motion.div>

      </div>

    </section>
  );
}

export default About;

/* ---------------- STAT CARD ---------------- */

function StatCard({ number, label }) {
  return (
    <div
      className="
      bg-[rgba(15,23,42,0.6)]
      backdrop-blur-xl
      border
      border-white/10
      rounded-xl
      p-6
      text-center
      hover:border-[var(--accent)]
      transition-all
      duration-300
      hover:shadow-[0_0_25px_var(--accent)]
      "
    >
      <h3
        className="text-3xl font-bold"
        style={{ color: "var(--accent)" }}
      >
        {number}
      </h3>

      <p className="text-sm opacity-70 mt-1">
        {label}
      </p>
    </div>
  );
}
