import { motion } from "framer-motion";
import { BsChevronDoubleRight, BsGithub } from "react-icons/bs";
import { projects } from "../data/content";
import { fadeUp } from "../lib/motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand-600/10 dark:border-slate-800 dark:bg-slate-900"
          >
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="aspect-video w-full object-cover object-top"
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-medium text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-brand-600/30 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-400/30 dark:text-brand-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-5 text-sm font-medium">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                  >
                    <BsGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    {project.liveLabel ?? "Live app"} <BsChevronDoubleRight />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
