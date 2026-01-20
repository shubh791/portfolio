import TerminalPreview from "./TerminalPreview";
import ThemeSwitcher from "./Theme";
import SocialIcons from "./SocialIcons";

function Hero() {
  return (
   <section
  id="home"
  className="
    h-screen
    flex
    items-center
    px-4
    md:px-12
    relative
    overflow-hidden
  "
>


      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[var(--accent)] opacity-10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500 opacity-10 blur-[120px] rounded-full"></div>

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
          items-center
          text-center
          md:text-left
          relative
          z-10
        "
      >

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span style={{ color: "var(--accent)" }}>
              Shubham Panghal
            </span>
          </h1>

          <p className="mt-4 opacity-80 text-sm md:text-base">
            Full Stack Web Developer | Building Modern Web Experiences
          </p>

          {/* RESUME CTA */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-6
              bg-[var(--accent)]
              text-black
              px-7
              py-3
              rounded-lg
              font-semibold
              hover:shadow-[0_0_30px_var(--accent)]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View Resume
          </a>

        </div>

        {/* RIGHT TERMINAL PREVIEW */}
        <div className="flex justify-center">
          <TerminalPreview />
        </div>

      </div>

      {/* SOCIAL ICONS (STICKY) */}
      <div className="hidden md:block">
        <SocialIcons />
      </div>

      {/* THEME PANEL (STICKY) */}
      <div>
        <ThemeSwitcher />
      </div>

    </section>
  );
}

export default Hero;
