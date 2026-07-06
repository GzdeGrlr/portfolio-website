import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { links, site } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-200 px-6 py-16 dark:border-slate-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={stagger}
        className="mx-auto max-w-5xl text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white"
        >
          Let's work together on your next product.
        </motion.h2>
        <motion.a
          variants={fadeUp}
          href={`mailto:${links.email}`}
          className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          <MdEmail /> {links.email}
        </motion.a>
        <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-2xl text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-2xl text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-400"
          >
            <BsLinkedin />
          </motion.a>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-10 text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} {site.name}
        </motion.p>
      </motion.div>
    </footer>
  );
}
