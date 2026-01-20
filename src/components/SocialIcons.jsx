import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function SocialIcons() {
  return (
    <div
      className="
        hidden
        md:flex
        fixed
        left-5
        top-1/2
        -translate-y-1/2
        flex-col
        gap-4
        z-[999]
      "
    >

      <a
        href="https://github.com/shubh791"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <GitHubIcon fontSize="small" />
      </a>

      <a
        href="https://linkedin.com/in/shubham-panghal"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <LinkedInIcon fontSize="small" />
      </a>

      <a
        href="mailto:shubhampanghal.work@gmail.com"
        className="social-icon"
      >
        <EmailIcon fontSize="small" />
      </a>

    </div>
  );
}

export default SocialIcons;
