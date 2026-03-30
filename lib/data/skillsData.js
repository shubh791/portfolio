import {
  SiHtml5, SiJavascript, SiBootstrap, SiTailwindcss,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql,
  SiMongodb, SiGit, SiGithub, SiPostman, SiInternetcomputer,
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { TbApi } from "react-icons/tb"
import { FaTools, FaCss3Alt } from "react-icons/fa"

export const skillsData = [
  {
    title: "Frontend Development",
    icon: "💻",
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "REST APIs", icon: TbApi, color: "#818cf8" },
    ],
  },
  {
    title: "Blockchain & Web3",
    icon: "🔗",
    color: "from-violet-500 to-pink-500",
    skills: [
      { name: "Internet Computer", icon: SiInternetcomputer, color: "#29ABE2" },
      { name: "DFX SDK", icon: FaTools, color: "#818cf8" },
      { name: "Smart Contracts", icon: TbApi, color: "#22d3ee" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
]
