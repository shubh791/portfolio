import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function SkillCard({ title, icon, skills = [] }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6 }}
      className="relative group p-8 rounded-3xl glass gradient-border h-full flex flex-col overflow-hidden transition-all duration-300"
    >
      {/* Corner accent glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-7 relative z-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600/20 to-cyan-600/10 border border-indigo-500/20 text-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="text-xs text-slate-500">Core Technology Stack</p>
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-slate-300 transition-all duration-200 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/5 cursor-default"
            >
              {Icon && (
                typeof Icon === "function" ? (
                  <Icon size={16} className="text-[var(--accent)] shrink-0" />
                ) : Icon
              )}
              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SkillCard;
