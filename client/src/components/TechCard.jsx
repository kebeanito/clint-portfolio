import { motion } from "framer-motion";

function TechCard({
  icon,
  name,
  description,
  color = "text-cyan-400",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        p-6
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_20px_50px_rgba(34,211,238,.20)]
      "
    >
      <div className={`text-5xl mb-5 ${color}`}>
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
        {name}
      </h3>

      <p className="text-slate-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
}

export default TechCard;