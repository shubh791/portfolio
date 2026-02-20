import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import ProjectsGrid from "./ProjectsGrid";

function ProjectsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="projects"
      className="relative py-40 px-6 md:px-12 overflow-hidden bg-[#040912]"
    >

      {/* Moving Gradient Background */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="
          absolute inset-0
          bg-[linear-gradient(-45deg,#0f172a,#020617,#0b1220,#050912)]
          bg-[length:400%_400%]
          opacity-70
        "
      />

      {/* Cursor Spotlight */}
      <motion.div
        style={{
          background: `radial-gradient(circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.08), transparent 300px)`,
        }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Tech Grid Overlay */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:70px_70px]
          opacity-20
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Featured{" "}
            <span className="text-[var(--accent)]">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            A curated collection of real-world applications showcasing
            full-stack development expertise, modern UI engineering,
            scalable backend systems, and performance-focused
            production deployments.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <ProjectsGrid />

      </div>
    </section>
  );
}

export default ProjectsSection;