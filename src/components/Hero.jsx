import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { links, site } from "../data/content";
import { fadeUp, stagger } from "../lib/motion";

export default function Hero() {
  return (
    <section id="intro" className="scroll-mt-24 px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between"
      >
        <div className="max-w-xl text-center md:text-left">
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400"
          >
            Hello there, I'm
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 font-display text-4xl font-semibold text-slate-900 sm:text-6xl dark:text-white"
          >
            {site.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg font-medium text-slate-700 dark:text-slate-200"
          >
            {site.tagline}
            <span className="mt-1 block text-base font-normal text-slate-500 dark:text-slate-400">
              {site.taglineAreas.join(" · ")}
            </span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {site.summary}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
            >
              <BsGithub /> GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
              <BsLinkedin /> LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${links.email}`}
              className="flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400"
            >
              <MdEmail /> Get in touch
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-600/30 to-brand-300/30 blur-2xl" />
          <img
            src={site.photo}
            alt={site.name}
            className="relative h-56 w-56 rounded-full object-cover ring-4 ring-brand-600/20 sm:h-72 sm:w-72"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
