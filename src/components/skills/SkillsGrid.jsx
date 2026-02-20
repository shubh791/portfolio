import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {skillsData.map((group, index) => (
        <SkillCard
          key={index}
          title={group.title}
          icon={group.icon}
          skills={group.skills}
        />
      ))}
    </div>
  );
}

export default SkillsGrid;