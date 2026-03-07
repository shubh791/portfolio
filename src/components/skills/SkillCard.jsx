import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function SkillCard({ title, icon, skills = [] }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6 }}
      className="
        relative group
        p-8 rounded-3xl
        bg-gradient-to-br from-[#0b1220]/95 to-[#020617]/95
        border border-white/10
        backdrop-blur-xl
        transition-all duration-300
        hover:border-[var(--accent)]
        h-full flex flex-col overflow-hidden
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-5 mb-8 relative z-10">
        <div
          className="
            w-14 h-14 flex items-center justify-center
            rounded-2xl bg-white/5 border border-white/10
            text-2xl text-[var(--accent)]
          "
        >
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-gray-400">
            Core Technology Stack
          </p>
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
                flex items-center gap-3
                px-4 py-3 rounded-xl
                bg-white/5 border border-white/10
                text-sm text-gray-300
                transition-all duration-300
                hover:border-[var(--accent)]
                hover:text-white
                hover:bg-white/10
              "
            >
              {Icon &&
                (typeof Icon === "function" ? (
                  <Icon
                    size={18}
                    className="text-[var(--accent)] shrink-0"
                  />
                ) : (
                  Icon
                ))}

              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SkillCard;