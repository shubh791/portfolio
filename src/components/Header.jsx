function Header() {

  const scrollToContactCta = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - NAME */}
        <h1 className="text-xl font-bold text-[var(--accent)]">
          Shubham Panghal
        </h1>

        {/* CENTER - NAV */}
        <nav className="hidden md:flex gap-10 text-lg">
          <a href="#projects" className="hover:text-[var(--accent)]">Projects</a>
          <a href="#skills" className="hover:text-[var(--accent)]">Skills</a>
          <a href="#about" className="hover:text-[var(--accent)]">About</a>
        </nav>

        {/* RIGHT - BUTTONS */}
        <div className="flex gap-4">

          {/* RESUME */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-4 py-2 border border-[var(--accent)] text-[var(--accent)] rounded-lg hover:bg-[var(--accent)] hover:text-black transition"
          >
            Resume
          </a>

          {/* CONTACT */}
          <button
            onClick={scrollToContactCta}
            className="px-4 py-2 bg-[var(--accent)] text-black rounded-lg font-semibold hover:scale-105 transition"
          >
            Contact Me
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;
