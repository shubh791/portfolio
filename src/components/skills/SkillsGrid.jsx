import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function SkillsGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
      "
    >
      {skillsData.map((group, index) => (
        <SkillCard
          key={index}
          title={group.title}
          icon={group.icon}
          skills={group.skills}
        />
      ))}
    </motion.div>
  );
}

export default SkillsGrid;
