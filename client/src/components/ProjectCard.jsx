import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function ProjectCard({
  title,
  description,
  role,
  images,
  technologies,
  features,
  github,
  status,
  featured,
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [images, isPaused]);

  return (
    <motion.div  
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-xl
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,.2)]
        transition-all
      "
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>

        <div className="ml-4 text-xs text-slate-400 truncate">
        {title}
        </div>
    </div>
        <div className="relative w-full overflow-hidden" 
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}>
            <motion.img
            
            key={currentImage}
            src={images[currentImage]}
            alt={title}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.6,
            ease: "easeOut",
            }}
            className="w-full h-[500px] object-contain bg-[#0f172a] transition-transform duration-700 group-hover:scale-105"
            />
            {images.length > 1 && (
  <>
    {/* Previous */}
    <button
      onClick={() =>
        setCurrentImage((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        )
      }
      className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        w-11
        h-11
        rounded-full
        bg-slate-900/70
        backdrop-blur-md
        border
        border-white/10
        text-white
        flex
        items-center
        justify-center
        opacity-0
        group-hover:opacity-100
        hover:bg-cyan-500
        transition-all
      "
    >
      <FaChevronLeft />
    </button>

    {/* Next */}
    <button
      onClick={() =>
        setCurrentImage((prev) =>
          (prev + 1) % images.length
        )
      }
      className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        w-11
        h-11
        rounded-full
        bg-slate-900/70
        backdrop-blur-md
        border
        border-white/10
        text-white
        flex
        items-center
        justify-center
        opacity-0
        group-hover:opacity-100
        hover:bg-cyan-500
        transition-all
      "
    >
      <FaChevronRight />
    </button>
  </>
)}
     </div>
    

       <div
  className="
    absolute
    top-4
    right-4
    px-4
    py-1.5
    rounded-full
    text-xs
    font-medium
    bg-slate-900/70
    backdrop-blur-md
    border
    border-cyan-400/20
    text-cyan-300
  "
>
  {status}
</div>

{images.length > 1 && (
  <div
    className="
      absolute
      bottom-4
      right-4
      px-3
      py-1
      rounded-full
      bg-slate-900/70
      backdrop-blur-md
      border
      border-white/10
      text-xs
      text-white
      font-medium
    "
  >
    {currentImage + 1} / {images.length}
  </div>
)}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all ${
                currentImage === index
                ? "w-6 bg-cyan-400"
                : "w-2 bg-white/40 hover:bg-white"
                }`}
            />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-3">{title}</h3>

        <p className="text-slate-400 leading-7 mb-6">
          {description}
        </p>

        <p className="text-cyan-300 font-medium mb-6">
          {role}
        </p>

        {/* Technologies */}
<div className="flex flex-wrap items-center gap-5 mb-8">

  {technologies.map((tech, index) => (

    <div
      key={index}
      className="relative group/tech"
    >

      <motion.div
        whileHover={{
          scale: 1.25,
          rotate: 6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          text-4xl
          cursor-pointer
          transition-all
        "
      >
        {tech.icon}
      </motion.div>

      {/* Tooltip */}

      <div
        className="
          absolute
          left-1/2
          -translate-x-1/2
          -top-12
          opacity-0
          group-hover/tech:opacity-100
          transition-all
          duration-300
          pointer-events-none
          whitespace-nowrap
          px-3
          py-2
          rounded-xl
          bg-slate-900/90
          backdrop-blur-md
          border
          border-cyan-400/30
          text-sm
          shadow-xl
        "
      >
        {tech.name}
                </div>
            </div>
             ))}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
        {features.map((feature) => (
        <li
         key={feature}
        className="flex items-center gap-3 text-slate-300"
         >
        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>

        <span>{feature}</span>
        </li>
         ))}
    </ul>

        {/* Buttons */}
        <div className="flex gap-4">
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300"
            >
              <FaGithub />
              View Source
            </a>
          ) : (
            <button
              disabled
              className="px-5 py-3 rounded-xl bg-white/5 text-slate-500 cursor-not-allowed"
            >
              GitHub Private
            </button>
          )}

        
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;