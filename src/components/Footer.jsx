import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer
      className="
      relative
      mt-28
      pt-20
      pb-8
      px-6
      md:px-12
      border-t
      border-white/10
      bg-[rgba(2,6,23,0.9)]
      backdrop-blur-xl
      "
    >

      {/* TOP CONTENT */}
      <div
        className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
        mb-12
        "
      >

        {/* BRAND */}
        <div>
          <h3
            className="text-2xl font-bold mb-3 tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            Shubham Panghal
          </h3>

          <p className="text-sm md:text-base opacity-75 leading-relaxed max-w-sm">
            Full Stack Web Developer building modern, scalable and user-friendly
            digital experiences.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4 text-lg tracking-wide">
            Quick Links
          </h4>

          <ul className="space-y-3 text-base">

            <li>
              <a
                href="#home"
                className="
                opacity-80
                hover:text-[var(--accent)]
                hover:translate-x-1
                transition-all
                duration-300
                inline-block
                "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="
                opacity-80
                hover:text-[var(--accent)]
                hover:translate-x-1
                transition-all
                duration-300
                inline-block
                "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                className="
                opacity-80
                hover:text-[var(--accent)]
                hover:translate-x-1
                transition-all
                duration-300
                inline-block
                "
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="
                opacity-80
                hover:text-[var(--accent)]
                hover:translate-x-1
                transition-all
                duration-300
                inline-block
                "
              >
                Projects
              </a>
            </li>

          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4 text-lg tracking-wide">
            Connect With Me
          </h4>

          <div className="flex gap-5">

            <a
              className="
              p-3
              rounded-full
              border
              border-white/10
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              transition-all
              duration-300
              hover:shadow-[0_0_18px_var(--accent)]
              hover:scale-110
              "
            >
              <GitHubIcon />
            </a>

            <a
              className="
              p-3
              rounded-full
              border
              border-white/10
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              transition-all
              duration-300
              hover:shadow-[0_0_18px_var(--accent)]
              hover:scale-110
              "
            >
              <LinkedInIcon />
            </a>

            <a
              className="
              p-3
              rounded-full
              border
              border-white/10
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
              transition-all
              duration-300
              hover:shadow-[0_0_18px_var(--accent)]
              hover:scale-110
              "
            >
              <EmailIcon />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div
        className="
        text-center
        text-sm
        opacity-60
        border-t
        border-white/10
        pt-5
        tracking-wide
        "
      >
        © {new Date().getFullYear()} Shubham Panghal — All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
