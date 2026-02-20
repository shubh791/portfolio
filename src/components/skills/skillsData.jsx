import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { FaLink, FaTools } from "react-icons/fa";

export const skillsData = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "React.js", icon: <SiReact /> },
    ],
  },

  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "REST APIs", icon: <TbApi /> },
    ],
  },

  {
    title: "Blockchain & Web3",
    icon: "🔗",
    skills: [
      { name: "ICP", icon: <FaLink /> },
      { name: "DFX SDK", icon: <FaTools /> },
      { name: "Smart Contracts", icon: <TbApi /> },
    ],
  },

  {
    title: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];