import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Clint Kevin Diesta
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Designed &amp; Built with React, Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;