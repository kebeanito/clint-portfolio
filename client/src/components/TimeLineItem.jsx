import { motion } from "framer-motion";

function TimelineItem({
  year,
  icon,
  title,
  company,
  description,
  index,
  isLast,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      className="group relative pl-20 pb-20"
    >
      {/* Timeline line */}
      {!isLast && (
      <div className="bg-gradient-to-b from-cyan-400/30 via-white/10 to-transparent" />
      )}
      {/* Icon */}
      <div
  className="absolute left-0 top-0 h-12 w-12 rounded-full border border-cyan-400/30 bg-slate-900 flex items-center justify-center text-cyan-400 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,.45)]">
        {icon}
      </div>

      {/* Year */}
      <p className="text-cyan-400 text-sm font-semibold">
        {year}
      </p>

      {/* Title */}
      <h3 className="mt-2 text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Company */}
      <p className="text-slate-400 mt-1">
        {company}
      </p>

      {/* Description */}
      <p className="mt-5 text-slate-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default TimelineItem;