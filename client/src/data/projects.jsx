import GreenAdmin from "../assets/images/projects/greenlink/admin.png";
import GreenKitchen from "../assets/images/projects/greenlink/kitcheninventory.png";
import GreenLanding from "../assets/images/projects/greenlink/landingpage.png";
import GreenOrder from "../assets/images/projects/greenlink/orderpage.png";
import GreenRoom from "../assets/images/projects/greenlink/roomreser.png";

import WeatherDashboard from "../assets/images/projects/weatherdashboard/WeatherDashboard.png";

import Expense1 from "../assets/images/projects/expensetracker/expensetracker1.png";
import Expense2 from "../assets/images/projects/expensetracker/expensetracker2.png";

import {
  FaReact,
  FaPhp,
  FaHtml5,
  FaCreditCard,
} from "react-icons/fa";

import {
  SiLaravel,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";

import { FcGoogle } from "react-icons/fc";

export const projects = [
  {
    title: "Lola Sayong GreenLink",
    featured: true,

    images: [
      GreenLanding,
      GreenAdmin,
      GreenKitchen,
      GreenOrder,
      GreenRoom,
    ],

    description:
      "A full-featured web application developed for Lola Sayong Resort that streamlines online reservations, food ordering, inventory management, and administrative operations.",

    role: "Full Stack Developer",

    technologies: [
  {
    name: "Laravel",
    icon: <SiLaravel className="text-red-500" />,
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "Google Authentication",
    icon: <FcGoogle />,
  },
  {
    name: "PayMongo",
    icon: <FaCreditCard className="text-emerald-400" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500" />,
  },
],

    features: [
      "Online Room Reservation",
      "Food Ordering System",
      "Kitchen Inventory Management",
      "Admin Dashboard",
      "Google Authentication",
      "PayMongo Online Payments",
    ],

    github: "https://github.com/ManongDeim/greenlink-laravel",
    status: "Capstone Project",
  },

  {
    title: "Weather Dashboard",

    images: [WeatherDashboard],

    description:
      "A responsive weather application using the OpenWeather API with a Spring Boot backend.",

    role: "Full Stack Developer",

    technologies: [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500" />,
  },
  {
    name: "OpenWeather API",
    icon: "🌤️",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
],

    features: [
      "Current Weather",
      "Search City",
      "Responsive Layout",
    ],

    github: "https://github.com/kebeanito/weather-dashboard",
    status: "Personal Project",
  },

  {
    title: "Expense Tracker",

    images: [Expense1, Expense2],

    description:
      "A full-stack expense tracking application with authentication and PostgreSQL database integration.",

    role: "Full Stack Developer",

    technologies: [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
  },
],

    features: [
      "Authentication",
      "Expense Management",
      "Dashboard",
      "CRUD Operations",
    ],

    github: "https://github.com/kebeanito/expensetracker",
    status: "Personal Project",
  },
];