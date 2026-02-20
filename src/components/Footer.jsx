import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer
      className="
        relative
        pt-24 pb-10 px-6 md:px-12
        border-t border-white/10
        bg-gradient-to-b from-[#070b14] to-[#020617]
        overflow-hidden
      "
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[var(--accent)]/10 blur-[140px] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* BRAND MESSAGE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let’s Build Something{" "}
            <span className="text-[var(--accent)]">
              Amazing
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Passionate about building scalable web applications,
            modern UI experiences, and impactful digital products.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* PERSONAL BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-3">

              <img
                src="/projects/shubhamlogo.png"
                alt="Logo"
                className="w-8 h-8 object-contain"
              />

              <h3 className="text-xl font-bold text-[var(--accent)]">
                Shubham Panghal
              </h3>

            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer focused on performance-driven,
              scalable web solutions with modern design and
              optimized backend architecture.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              Explore
            </h4>

            <ul className="space-y-3 text-sm">
              {["home", "about", "skills", "services", "projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="
                      opacity-80
                      hover:text-[var(--accent)]
                      transition duration-300
                      capitalize
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">
              Connect
            </h4>

            <div className="flex gap-5">

              {[{
                icon: <GitHubIcon />,
                link: "https://github.com/shubh791"
              },
              {
                icon: <LinkedInIcon />,
                link: "https://linkedin.com/in/shubham-panghal"
              },
              {
                icon: <EmailIcon />,
                link: "mailto:shubhampanghal.work@gmail.com"
              }].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-3 rounded-full
                    bg-white/5
                    border border-white/10
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                    hover:shadow-[0_0_20px_var(--accent)]
                    transition duration-300
                  "
                >
                  {item.icon}
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-500 border-t border-white/10 pt-6">
          © {new Date().getFullYear()} Shubham Panghal — Crafted with passion.
        </div>

      </div>
    </footer>
  );
}

export default Footer;