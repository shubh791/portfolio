import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiInternetcomputer,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { FaTools } from "react-icons/fa";

export const skillsData = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },

  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST APIs", icon: TbApi },
    ],
  },

  {
    title: "Blockchain & Web3",
    icon: "🔗",
    skills: [
      { name: "Internet Computer", icon: SiInternetcomputer },
      { name: "DFX SDK", icon: FaTools },
      { name: "Smart Contracts", icon: TbApi },
    ],
  },

  {
    title: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
    ],
  },
];