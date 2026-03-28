import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  const hasLive = Boolean(project.live);
  const hasGithub = Boolean(project.github);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative h-full flex flex-col rounded-3xl overflow-hidden glass transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_50px_rgba(99,102,241,0.08)]"
    >

      {/* IMAGE */}
      <div className="relative h-[210px] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-black/20 to-transparent" />

        {/* FEATURED BADGE */}
        {project.featured && (
          <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-wider rounded-full bg-[var(--accent)] text-black font-bold shadow-lg">
            ✦ Featured
          </span>
        )}

        {/* LIVE BADGE */}
        {hasLive && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-wider rounded-full bg-green-500/20 border border-green-500/30 text-green-400 font-semibold backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-lg font-semibold mb-2.5 group-hover:text-indigo-400 transition-colors duration-300 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed flex-1 line-clamp-4">
          {project.description}
        </p>

        {/* TECH PILLS */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 transition-colors hover:border-[var(--accent)]/50"
            >
              {item}
            </span>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-6 flex gap-3">
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium btn-glow transition-all duration-300"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}

          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-slate-400 transition-all duration-300 hover:border-indigo-500/50 hover:text-indigo-400 ${
                hasLive ? "px-4" : "flex-1"
              }`}
            >
              <Github size={14} />
              {!hasLive && "Source Code"}
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;
