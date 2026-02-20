import { motion } from "framer-motion";

function ProjectCard({ project }) {
  const isLiveProject = Boolean(project.live);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        h-full
        flex flex-col
        rounded-3xl
        overflow-hidden
        bg-gradient-to-br from-[#0b1220]/95 to-[#020617]/95
        border border-white/10
        backdrop-blur-xl
        transition-all duration-300
        hover:border-[var(--accent)]
        hover:shadow-xl
      "
    >

      {/* IMAGE */}
      <div className="relative h-[210px] overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="
            w-full h-full object-cover
            transition duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {project.featured && (
          <span className="
            absolute top-4 left-4
            px-3 py-1 text-[10px]
            uppercase tracking-wider
            rounded-full
            bg-[var(--accent)]
            text-black font-semibold
          ">
            Featured
          </span>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-7 flex flex-col flex-1">

        <h3 className="
          text-xl font-semibold mb-3
          group-hover:text-[var(--accent)]
          transition
        ">
          {project.title}
        </h3>

        <p className="
          text-sm text-gray-400
          leading-relaxed
          flex-1
          line-clamp-4
        ">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((item, index) => (
            <span
              key={index}
              className="
                text-[11px]
                px-3 py-1
                rounded-full
                bg-white/5
                border border-white/10
                text-gray-300
                transition
                hover:border-[var(--accent)]
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-8">
          <a
            href={isLiveProject ? project.live : project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block text-center
              py-3 rounded-xl
              font-medium text-sm
              border border-[var(--accent)]
              text-[var(--accent)]
              transition-all duration-300
              hover:bg-[var(--accent)]
              hover:text-black
            "
          >
            {isLiveProject ? "View Live Project" : "View Source Code"}
          </a>
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;