import { motion } from "framer-motion";
import { skillGroups } from "../data/content";
import { fadeUp } from "../lib/motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <Section id="skills" className="bg-slate-50 dark:bg-slate-900/40">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="font-display text-lg font-medium text-brand-700 dark:text-brand-400">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
