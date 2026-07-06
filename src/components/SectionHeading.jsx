import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export default function SectionHeading({ children }) {
  return (
    <motion.div variants={fadeUp} className="mb-10">
      <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
        {children}
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-brand-600 to-brand-300" />
    </motion.div>
  );
}
