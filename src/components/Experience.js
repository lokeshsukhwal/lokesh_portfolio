import { motion } from "framer-motion";
import { FaArrowRight, FaBriefcase, FaCheck, FaGithub } from "react-icons/fa";
import { projects } from "./PortfolioSections";

const experience = projects.map((project, index) => ({
  number: `0${index + 1}`,
  role: index === 0 ? "Frontend & delivery engineering" : "Backend engineering",
  organization: "Independent project experience",
  title: project.title,
  description: project.summary,
  achievements: project.engineering,
  stack: project.stack,
  repo: project.repo,
}));

export default function Experience() {
  return (
    <section id="experience" className="experience-section site-section relative overflow-hidden border-y border-white/[.06] py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-orange-300">Experience / Applied engineering</p>
            <h2 className="mt-4 font-exo2 text-4xl font-semibold tracking-[-.035em] text-white sm:text-5xl">Learning by shipping.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            Hands-on experience built through public projects, documented decisions, and working software. These entries are independent project work—not presented as employment.
          </p>
        </div>

        <div className="relative mt-12 lg:ml-5">
          <div aria-hidden="true" className="experience-line absolute bottom-8 left-[1.35rem] top-8 hidden w-px sm:block" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ duration: .5, delay: index * .08 }}
                className="relative sm:pl-20"
              >
                <span className="experience-marker absolute left-0 top-7 z-10 hidden h-11 w-11 place-items-center rounded-xl font-mono text-xs font-bold sm:grid">{item.number}</span>
                <div className="experience-card rounded-[1.75rem] p-6 sm:p-8 lg:p-10">
                  <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:gap-12">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-blue-300"><FaBriefcase /> {item.organization}</div>
                      <h3 className="mt-5 text-2xl font-semibold text-white">{item.role}</h3>
                      <p className="mt-2 text-base font-medium text-slate-400">{item.title}</p>
                      <p className="mt-5 text-sm leading-7 text-slate-400">{item.description}</p>
                      <a href={item.repo} target="_blank" rel="noreferrer" className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200">
                        <FaGithub /> Inspect the evidence <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>

                    <div className="border-t border-white/[.08] pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                      <p className="text-xs font-bold uppercase tracking-[.22em] text-slate-500">What I implemented</p>
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-3 text-sm leading-6 text-slate-300"><FaCheck className="mt-1 shrink-0 text-[10px] text-emerald-400" /><span>{achievement}</span></li>
                        ))}
                      </ul>
                      <div className="mt-7 flex flex-wrap gap-2 border-t border-white/[.08] pt-6">
                        {item.stack.map((technology) => <span key={technology} className="site-tag rounded-full px-3 py-1.5 text-xs font-medium text-slate-300">{technology}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="experience-note mt-10 rounded-2xl border border-dashed border-white/15 px-5 py-4 text-sm leading-6 text-slate-400 sm:ml-20 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p>Professional employment entries can be added here when confirmed role, company, dates, and outcomes are available.</p>
          <a href="#contact" className="mt-3 inline-flex shrink-0 items-center gap-2 font-semibold text-blue-300 sm:mt-0">Discuss my experience <FaArrowRight className="text-xs" /></a>
        </div>
      </div>
    </section>
  );
}
