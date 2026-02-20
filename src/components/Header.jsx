import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#050810]/90 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/projects/shubhamlogo.png"
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="text-base md:text-lg font-semibold">
            Shubham Panghal
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">

          {[
            { name: "Projects", id: "projects" },
            { name: "Skills", id: "skills" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition hover:text-[var(--accent)] ${
                active === item.id
                  ? "text-[var(--accent)]"
                  : "text-gray-300"
              }`}
            >
              {item.name}
            </button>
          ))}

        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-4">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm border border-[var(--accent)] text-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-black transition"
          >
            Resume
          </a>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-5 py-2 text-sm bg-[var(--accent)] text-black rounded-lg font-semibold hover:scale-105 transition"
          >
            Contact
          </button>

        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#050810] border-t border-white/10 px-6 py-6 space-y-6">

          {[
            { name: "Projects", id: "projects" },
            { name: "Skills", id: "skills" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-gray-300 hover:text-[var(--accent)]"
            >
              {item.name}
            </button>
          ))}

          <div className="pt-4 border-t border-white/10 space-y-3">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-[var(--accent)] text-[var(--accent)] text-center py-2 rounded-lg"
            >
              Resume
            </a>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full bg-[var(--accent)] text-black py-2 rounded-lg font-semibold"
            >
              Contact Me
            </button>

          </div>

        </div>
      )}
    </header>
  );
}

export default Header;