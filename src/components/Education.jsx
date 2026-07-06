import { motion } from "framer-motion";
import { education } from "../data/content";
import { fadeUp } from "../lib/motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <Section id="education" className="bg-slate-50 dark:bg-slate-900/40">
      <SectionHeading>Education</SectionHeading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {education.map((item) => (
          <motion.div
            key={item.school}
            variants={fadeUp}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="font-display text-lg font-medium text-slate-900 dark:text-white">
              {item.school}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.degree}</p>
            <p className="mt-3 text-sm font-medium text-brand-600 dark:text-brand-400">
              {item.period}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
