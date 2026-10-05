import resume from "../assets/resume/Clint-Kevin-Diesta-Resume.pdf";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";


export const contacts = [
  {
    title: "Email",
    value: "clintkevin.diesta@gmail.com",
    icon: <FaEnvelope />,
    href: "mailto:clintkevin.diesta@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/kebeanito",
    icon: <FaGithub />,
    href: "https://github.com/kebeanito",
  },
  {
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/clint-kevin-diesta-0244b43b5/",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/clint-kevin-diesta-0244b43b5/",
  },
  {
    title: "Resume",
    value: "Download PDF",
    icon: <FaFileAlt />,
    href: resume,
    download: "Clint-Kevin-Diesta-Resume.pdf"
  },
];