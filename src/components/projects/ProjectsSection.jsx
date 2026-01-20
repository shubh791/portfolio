import { motion } from "framer-motion";
import ProjectsGrid from "./ProjectsGrid";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12"
    >

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          My <span style={{ color: "var(--accent)" }}>Projects</span>
        </h2>

        <p className="opacity-70">
          Some of the projects I have built recently
        </p>
      </motion.div>

      {/* GRID */}
      <ProjectsGrid />

    </section>
  );
}

export default ProjectsSection;
