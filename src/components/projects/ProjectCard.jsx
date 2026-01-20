import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="
        h-full
        min-h-[460px]
        flex
        flex-col
        rounded-2xl
        bg-[rgba(15,23,42,0.65)]
        backdrop-blur-xl
        border
        border-white/10
        hover:border-[var(--accent)]
        hover:shadow-[0_0_35px_var(--accent)]
        overflow-hidden
        transition-all
        duration-300
      "
    >

      {/* IMAGE PREVIEW */}
      <div className="relative h-[180px] bg-black overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
            hover:scale-110
          "
        />

        {/* FEATURED BADGE */}
        {project.featured && (
          <span
            className="
              absolute
              top-3
              left-3
              px-3
              py-1
              text-xs
              rounded-full
              bg-[var(--accent)]
              text-black
              font-semibold
              shadow-lg
              tracking-wide
            "
          >
            FEATURED
          </span>
        )}

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">

        <h3 className="text-lg font-semibold text-[var(--accent)]">
          {project.title}
        </h3>

        <p className="text-sm opacity-75 mt-2 leading-relaxed flex-1 line-clamp-4">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">

          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                text-xs
                rounded-full
                bg-black/40
                border
                border-white/10
                hover:border-[var(--accent)]
                transition
              "
            >
              {item}
            </span>
          ))}

        </div>

        {/* GITHUB BUTTON */}
        <div className="mt-auto pt-5">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              text-center
              py-2.5
              rounded-lg
              border
              border-[var(--accent)]
              text-[var(--accent)]
              hover:bg-[var(--accent)]
              hover:text-black
              transition-all
              duration-300
              text-sm
              font-medium
            "
          >
            View on GitHub
          </a>

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;
