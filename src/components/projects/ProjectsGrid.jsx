import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function ProjectsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        items-stretch
        auto-rows-fr
      "
    >
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </motion.div>
  );
}

export default ProjectsGrid;
