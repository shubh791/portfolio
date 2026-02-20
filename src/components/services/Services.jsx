import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

function Services() {
  return (
    <section
      id="services"
      className="
        relative
        py-36 px-6 md:px-12
        overflow-hidden
        bg-gradient-to-b from-[#020617] via-[#050b17] to-[#020617]
      "
    >

      {/* PREMIUM BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="
          absolute top-[-150px] left-[-150px]
          w-[400px] h-[400px]
          bg-[var(--accent)]
          opacity-10 blur-[150px]
          rounded-full
        " />

        <div className="
          absolute bottom-[-150px] right-[-150px]
          w-[400px] h-[400px]
          bg-purple-600
          opacity-10 blur-[150px]
          rounded-full
        " />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Solutions I{" "}
            <span className="text-[var(--accent)]">
              Provide
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From modern frontend interfaces to scalable backend systems,
            I deliver production-ready web solutions focused on performance,
            reliability, and long-term maintainability.
          </p>
        </motion.div>

        {/* SERVICE GRID */}
        <div className="grid gap-12">

          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}

        </div>

        {/* BOTTOM CTA BLOCK */}
        <div className="mt-24 text-center">

          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Have a project idea or need a modern website?
          </p>

          <a
            href="https://calendly.com/shubhampanghal-work/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              px-8 py-4
              rounded-2xl
              bg-[var(--accent)]
              text-black
              font-semibold
              hover:scale-105
              hover:shadow-[0_0_30px_var(--accent)]
              transition-all duration-300
            "
          >
            📅 Schedule a Free Consultation
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;