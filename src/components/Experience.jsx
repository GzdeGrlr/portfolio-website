import { motion } from "framer-motion";
import { experience } from "../data/content";
import { fadeUp } from "../lib/motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Experience</SectionHeading>
      <ol className="relative border-l-2 border-brand-600/30 dark:border-brand-400/30">
        {experience.map((job) => (
          <motion.li key={job.company} variants={fadeUp} className="relative pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-brand-600 dark:border-slate-950 dark:bg-brand-400" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl font-medium text-slate-900 dark:text-white">
                {job.role}
              </h3>
              <span className="text-brand-600 dark:text-brand-400">— {job.company}</span>
            </div>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {job.period} · {job.location}
            </p>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:bg-slate-800 dark:text-brand-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
