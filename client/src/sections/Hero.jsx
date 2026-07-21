import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/images/profile.jpg";
import resume from "../assets/resume/Clint-Kevin-Diesta-Resume.pdf";
import Background from "../components/Background";


function Hero() {
  const [copied, setCopied] = useState(false);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("clintkevin.diesta@gmail.com");

    setCopied(true);

    setTimeout(() => {setCopied(false);}, 1800);
  } catch (err) {
    console.error("Failed to copy email:", err);
  }
};
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <Background />
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-slate-400 mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Clint Kevin
            <span className="text-blue-400"> Diesta</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-cyan-400 h-12 mb-6">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "IT Graduate",
                2000,
                "Open to Opportunities",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8">
            I enjoy building modern, responsive web applications and transforming ideas into practical 
            solutions using React, Laravel, Spring Boot, PHP, and other modern technologies, with a strong focus on clean design 
            and user experience.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
            >
              View Projects
            </a>

            <a
            href={resume}
            download="Clint-Kevin-Diesta-Resume.pdf"
            className="px-6 py-3 border border-slate-600 hover:border-blue-400 rounded-lg transition">
            Download Resume
            </a>
          </div>

          <div className="flex gap-6 text-2xl">

            <a href="https://github.com/kebeanito"
            title="Github"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
            >
        <FaGithub />
      </a>

            <a href="https://www.linkedin.com/in/clint-kevin-diesta/"
            title="LinkedIn"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
              >
        <FaLinkedin />
      </a>

            <div className="relative">
        <button
        onClick={copyEmail}
        className="hover:text-blue-400 transition cursor-pointer"
        aria-label="Copy email address"
        title="Copy email"
      >
    <FaEnvelope />
  </button>

  <AnimatePresence>
    {copied && (
      <motion.div
        initial={{ opacity: 0, y: 8, scale: 0.9 }}
        animate={{ opacity: 1, y: -10, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.25 }}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-10
          whitespace-nowrap
          rounded-lg
          bg-slate-900/95
          border
          border-cyan-400/30
          px-3
          py-1
          text-xs
          text-cyan-300
          shadow-lg
        "
      >
        ✓ Email copied!
      </motion.div>
    )}
  </AnimatePresence>
</div>
          </div>
        </motion.div>

        {/* Right Side */}
          <motion.div
           initial={{ opacity: 0, x: 80 }}
           animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
            >

              <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 "></div>

              {/* Profile */}
           <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full p-[5px]
            bg-gradient-to-r
          from-blue-500
          via-cyan-400
          to-blue-500
            shadow-[0_0_70px_rgba(59,130,246,.45)]">

            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">

              <img
              src={profile}
              draggable={false}
              loading="eager"
              alt="Clint Kevin Diesta"
              className="w-full h-full object-cover object-top"
              />

            </div>

          </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;