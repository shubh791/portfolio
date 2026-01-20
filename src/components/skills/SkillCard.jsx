import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function SkillCard({ title, icon, skills }) {
  return (
    <motion.div
  variants={cardVariants}
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
  className="
    group
    relative
    p-6
    rounded-xl
    bg-[rgba(15,23,42,0.6)]
    backdrop-blur-xl
    border
    border-white/10
    hover:border-[var(--accent)]
    transition-all
    duration-300
    hover:shadow-[0_0_40px_var(--accent)]
    h-full
    flex
    flex-col
  "
>

      {/* CARD TITLE */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xl">{icon}</span>

        <h3 className="text-lg font-semibold text-[var(--accent)]">
          {title}
        </h3>
      </div>

      {/* BADGES */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} name={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCard;
