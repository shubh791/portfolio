import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
];

function Header() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#04040f]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <img
            src="/projects/shubham-logo.svg"
            alt="SP Logo"
            className="w-8 h-8 md:w-9 md:h-9 group-hover:drop-shadow-[0_0_10px_var(--accent)] transition-all duration-300"
          />
          <span className="text-base md:text-lg font-semibold group-hover:text-[var(--accent)] transition-colors duration-300">
            Shubham Panghal
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative transition-colors duration-200 hover:text-[var(--accent)] ${
                active === item.id ? "text-[var(--accent)]" : "text-gray-300"
              }`}
            >
              {item.name}
              {active === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent)] rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm border border-indigo-500/50 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
          >
            Resume
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 text-sm btn-glow rounded-lg font-semibold transition-all duration-300"
          >
            Contact
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-1 hover:text-[var(--accent)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#050810]/98 border-t border-white/10 backdrop-blur-xl"
          >
            <div className="px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-[var(--accent)] transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-[var(--accent)] text-[var(--accent)] text-center py-2.5 rounded-lg font-medium hover:bg-[var(--accent)] hover:text-black transition-all"
                >
                  Resume
                </a>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full bg-[var(--accent)] text-black py-2.5 rounded-lg font-semibold hover:scale-[1.02] transition-transform"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
