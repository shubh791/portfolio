function SkillBadge({ name }) {
  return (
    <span
      className="
        inline-flex
        items-center
        justify-center
        px-3
        py-1.5
        text-xs
        font-medium
        rounded-full

        bg-white/5
        backdrop-blur-md

        border
        border-white/10

        text-gray-300

        transition-all
        duration-300
        ease-out

        hover:text-[var(--accent)]
        hover:border-[var(--accent)]
        hover:bg-[rgba(255,255,255,0.08)]
        hover:shadow-[0_0_15px_var(--accent)]

        cursor-default
        select-none
      "
    >
      {name}
    </span>
  );
}

export default SkillBadge;
