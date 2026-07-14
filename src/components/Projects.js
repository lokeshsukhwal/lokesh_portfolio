import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects, SectionTitle } from "./PortfolioSections";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-900/70 py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Selected work" title="Case studies shaped by reliability and scale" description="Each project focuses on making operations simpler, releases safer, and systems easier to run in production." />

        <div className="mt-10 grid gap-8">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-cyan-500/10">
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">{index + 1}. Platform initiative</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-lg leading-8 text-slate-400">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">{item}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 font-semibold text-slate-950">Live demo <FaExternalLinkAlt /></a>
                    <a href="https://github.com/lokeshsukhwal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-slate-100"><FaGithub /> Repository</a>
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Key features</h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-400">
                        {project.features.map((feature) => <li key={feature}>• {feature}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Outcome</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
