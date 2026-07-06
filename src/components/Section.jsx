import { motion } from "framer-motion";
import { stagger, viewportOnce } from "../lib/motion";

export default function Section({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger}
      className={`scroll-mt-24 px-6 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </motion.section>
  );
}
