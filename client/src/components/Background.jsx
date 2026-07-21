import { motion } from "framer-motion";
import { useMemo } from "react";

function Background() {

    const stars = useMemo(() => Array.from({ length: 25 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 5,
    })),
  []
);

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute inset-0 hero-grid"></div>
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-80 h-80 rounded-full
        bg-blue-500/20 blur-[120px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem]
        rounded-full bg-cyan-400/20 blur-[120px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          y: [0, -50, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2
        w-96 h-96 rounded-full
        bg-indigo-500/10 blur-[150px]"
      />
      {stars.map((star, i) => (
      <motion.span
      key={i}
      className="absolute w-1 h-1 rounded-full bg-white"
      style={{
      left: star.left,
      top: star.top,
    }}
      animate={{
      opacity: [0.2, 1, 0.2],
      scale: [1, 1.5, 1],
    }}
      transition={{
      duration: star.duration,
      repeat: Infinity,
      delay: star.delay,
    }}
  />
))}

    </div>
  );
}

export default Background;