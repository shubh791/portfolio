import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 md:px-12 overflow-hidden"
    >

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              background: "var(--accent)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          My <span style={{ color: "var(--accent)" }}>Skills</span>
        </h2>

        <p className="opacity-70">
          Technologies and tools I work with regularly
        </p>
      </motion.div>

      {/* GRID */}
      <div className="relative z-10">
        <SkillsGrid />
      </div>

    </section>
  );
}

export default SkillsSection;
