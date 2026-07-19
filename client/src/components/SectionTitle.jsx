import { motion } from "framer-motion";

function SectionTitle({ subtitle, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;