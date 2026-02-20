import TerminalPreview from "./TerminalPreview";
import ThemeSwitcher from "./Theme";
import SocialIcons from "./SocialIcons";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        min-h-screen flex items-center
        px-4 sm:px-6 md:px-12
        py-20 md:py-0
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="
        absolute top-[-120px] left-[-120px]
        w-[220px] sm:w-[300px] md:w-[350px]
        h-[220px] sm:h-[300px] md:h-[350px]
        bg-[var(--accent)] opacity-10
        blur-[100px] rounded-full
      " />

      <div className="
        absolute bottom-[-120px] right-[-120px]
        w-[220px] sm:w-[300px] md:w-[350px]
        h-[220px] sm:h-[300px] md:h-[350px]
        bg-purple-500 opacity-10
        blur-[100px] rounded-full
      " />

      <div
        className="
          max-w-7xl mx-auto w-full
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-16
          items-center
          text-center md:text-left
          relative z-10
        "
      >

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* ROLE TAG */}
          <p className="text-[10px] sm:text-xs tracking-widest uppercase opacity-60">
            Full-Stack Developer
          </p>

          {/* HEADLINE */}
          <h1 className="
            text-2xl sm:text-3xl md:text-5xl lg:text-6xl
            font-bold leading-tight
          ">
            Hi, I'm{" "}
            <span className="text-[var(--accent)]">
              Shubham Panghal
            </span>
            <br />
            I Build Scalable Modern Web Applications
          </h1>

          {/* DESCRIPTION */}
          <p className="
            opacity-80
            text-xs sm:text-sm md:text-base
            max-w-xl mx-auto md:mx-0
          ">
            Full-stack developer specializing in React, Node.js,
            and modern web technologies. I focus on building fast,
            scalable, and user-friendly digital products with clean UI
            and optimized backend systems.
          </p>

          {/* LAST UPDATED */}
          <span className="
            inline-block text-[10px] sm:text-xs
            bg-white/10 px-3 py-1
            rounded-full opacity-70
          ">
            Portfolio Updated • 2026
          </span>

          {/* CTA BUTTONS */}
          <div className="
            flex flex-wrap gap-4
            justify-center md:justify-start
          ">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-[var(--accent)]
                text-black
                px-6 sm:px-7 py-2.5 sm:py-3
                text-sm sm:text-base
                rounded-lg font-semibold
                hover:shadow-[0_0_30px_var(--accent)]
                hover:scale-105 transition
              "
            >
              View Resume
            </a>

            <a
              href="#projects"
              className="
                border border-white/20
                px-6 sm:px-7 py-2.5 sm:py-3
                text-sm sm:text-base
                rounded-lg
                hover:bg-white/10 transition
              "
            >
              View Projects
            </a>

          </div>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <TerminalPreview />
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:block">
        <SocialIcons />
      </div>

      {/* THEME SWITCHER */}
      <ThemeSwitcher />

    </section>
  );
}

export default Hero;