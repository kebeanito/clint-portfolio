import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useRef } from "react";

function StatCard({
  icon,
  value,
  title,
  description,
  delay = 0,
  suffix = "",
}) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
    once: true,
    });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-8
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        transition-all
        duration-500
        hover:border-cyan-400/40
        hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
        group
      "
    >
      {/* Shine Effect */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700
          bg-gradient-to-tr
          from-transparent
          via-white/5
          to-transparent
          pointer-events-none
        "
      />

      {/* Floating Glow */}
      <div
        className="
          absolute
          -bottom-10
          -right-10
          w-28
          h-28
          rounded-full
          bg-cyan-400/10
          blur-3xl
          group-hover:scale-150
          transition-transform
          duration-700
        "
      />

      {/* Icon */}
      <motion.div
        whileHover={{
        rotate: 12,
        scale: 1.12,
        }}
        transition={{ duration: 0.6 }}
        className="
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          mb-6
          text-3xl
          text-cyan-300
          bg-gradient-to-br
          from-blue-500/20
          to-cyan-400/20
          border
          border-blue-400/20
          shadow-[0_0_25px_rgba(56,189,248,.25)]
        "
      >
        {icon}
      </motion.div>

      {/* Number */}
      <h2 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {typeof value === "number" ? (
      <AnimatedCounter
      end={value}
      duration={2000}
      suffix={suffix}/>) : (value)}
</h2>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-400">
        {description}
      </p>
    </motion.div>
  );
}

export default StatCard;