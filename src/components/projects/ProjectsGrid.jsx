import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.8, 0.25, 1],
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
        max-w-7xl mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-12
      "
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            rotateX: 2,
            rotateY: -2,
            scale: 1.02,
          }}
          transition={{ type: "spring", stiffness: 140 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProjectsGrid;