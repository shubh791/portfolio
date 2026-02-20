import { motion } from "framer-motion";
import SkillsGrid from "./SkillsGrid";

function SkillsSection() {
  return (
    <section
      id="skills"
      className="
        relative
        py-32 px-6 md:px-12
        overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#050b17] to-[#020617]
      "
    >
      {/* Premium Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute top-[-150px] left-[-150px]
          w-[400px] h-[400px]
          bg-[var(--accent)]
          opacity-10 blur-[150px]
          rounded-full
        " />

        <div className="
          absolute bottom-[-150px] right-[-150px]
          w-[400px] h-[400px]
          bg-purple-600
          opacity-10 blur-[150px]
          rounded-full
        " />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technology Stack &{" "}
            <span className="text-[var(--accent)]">
              Expertise
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A modern, production-focused technology stack used to build
            scalable applications, secure backend systems, and polished
            user interfaces.
          </p>
        </motion.div>

        {/* Grid */}
        <SkillsGrid />

      </div>
    </section>
  );
}

export default SkillsSection;