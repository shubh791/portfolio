import { motion } from "framer-motion";

function ServiceCard({ title, description, tech }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-gradient-to-br from-[#0b1220]/90 to-[#020617]/95
        backdrop-blur-xl
        p-8 md:p-10
        transition-all duration-300
        hover:border-[var(--accent)]
        hover:shadow-[0_0_50px_var(--accent)]
      "
    >

      {/* Accent Glow */}
      <div className="
        absolute inset-0 opacity-0
        group-hover:opacity-100
        transition duration-500
        bg-[var(--accent)]/10 blur-2xl
      " />

      {/* HEADER */}
      <div className="relative z-10 mb-6">

        <h3 className="
          text-2xl md:text-3xl font-semibold
          mb-3
          group-hover:text-[var(--accent)]
          transition
        ">
          {title}
        </h3>

        <p className="
          text-gray-400
          leading-relaxed
          max-w-xl
        ">
          {description}
        </p>

      </div>

      {/* TECH STACK */}
      <div className="relative z-10 flex flex-wrap gap-3 mb-8">
        {tech.map((t, i) => (
          <span
            key={i}
            className="
              text-xs
              px-4 py-1.5
              rounded-full
              bg-white/5
              border border-white/10
              text-gray-300
              hover:border-[var(--accent)]
              hover:text-white
              transition
            "
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA BUTTON */}
      <div className="relative z-10">

        <a
          href="https://calendly.com/shubhampanghal-work/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            px-6 py-3
            rounded-xl
            bg-[var(--accent)]
            text-black
            font-semibold
            text-sm
            hover:scale-105
            hover:shadow-[0_0_25px_var(--accent)]
            transition-all duration-300
          "
        >
          📅 Schedule a Free Consultation
        </a>

      </div>

    </motion.div>
  );
}

export default ServiceCard;