import { motion } from "framer-motion";

function SkillBadge({ name }) {
  return (
    <motion.span
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        px-4 py-1.5
        text-xs font-medium
        rounded-full
        bg-gradient-to-r from-white/5 to-white/10
        border border-white/10
        text-gray-300
        backdrop-blur-xl
        overflow-hidden
        transition-all duration-300
        cursor-default
        select-none
      "
    >
      {/* Subtle hover glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[var(--accent)]/10 blur-xl" />

      <span className="relative z-10 group-hover:text-[var(--accent)] transition">
        {name}
      </span>
    </motion.span>
  );
}

export default SkillBadge;