import { Suspense, lazy, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const SkillsSection = lazy(() => import("./components/skills/SkillsSection"));
const Services = lazy(() => import("./components/services/Services"));
const ProjectsSection = lazy(() => import("./components/projects/ProjectsSection"));
const ContactCTA = lazy(() => import("./components/ContactCTA"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return (
    <div className="flex justify-center items-center py-32">
      <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
    </div>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Header />
      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactCTA />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[var(--accent)] text-black shadow-lg hover:shadow-[0_0_20px_var(--accent)] hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
