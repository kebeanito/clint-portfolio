import { motion } from "framer-motion";
import { useState } from "react";
function ContactCard({
  icon,
  title,
  value,
  href,
  download,
}) {
  const [copied, setCopied] = useState(false);
  const handleClick = async (e) => {
  if (title !== "Email") return;

  e.preventDefault();

  await navigator.clipboard.writeText(value);

  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};
  return (
    <motion.a
    href={href}
    download={download}
    onClick={handleClick}
    target={!download && href.startsWith("http") ? "_blank" : undefined}
    rel={!download && href.startsWith("http") ? "noreferrer" : undefined}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
        flex
        items-center
        gap-5
        p-6
        rounded-2xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,.2)]
        transition-all
      "
    >
      <div className="text-3xl text-cyan-400">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
        <p className="text-slate-400 text-sm">
        {value}
        </p>

        {copied && (
        <span className="text-cyan-400 text-xs font-medium">
        ✓ Copied!
        </span>
        )}
        </div>
      </div>
    </motion.a>
  );
}

export default ContactCard;