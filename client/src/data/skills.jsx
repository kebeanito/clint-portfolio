import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiVercel,
  SiRailway,
  SiXampp,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const frontendSkills = [
  {
    name: "React",
    icon: <FaReact />,
    description: "Building modern user interfaces.",
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    description: "ES6+ development.",
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Responsive UI styling.",
    color: "text-sky-400",
  },
];

export const backendSkills = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    description: "Backend JavaScript runtime.",
    color: "text-green-500",
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
    description: "Java backend framework.",
    color: "text-green-400",
  },
];

export const databaseSkills = [
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    description: "Relational database.",
    color: "text-blue-400",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    description: "Database management.",
    color: "text-orange-400",
  },
];

export const toolSkills = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    description: "Version Control",
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    description: "Source Code Hosting",
    color: "text-white",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    description: "Code Editor",
    color: "text-blue-400",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    description: "API Testing",
    color: "text-orange-400",
  },
  {
    name: "XAMPP",
    icon: <SiXampp />,
    description: "Apache • PHP • MySQL",
    color: "text-orange-500",
  },
  {
    name: "Railway",
    icon: <SiRailway />,
    description: "Backend Deployment",
    color: "text-purple-400",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    description: "Frontend Deployment",
    color: "text-white",
  },
];