import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaCodeBranch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects, projectRoadmap } from "./PortfolioSections";

export default function Projects() {
  return (
    <section id="projects" className="site-section work-section relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden="true" className="work-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">Selected work / 02 projects</p>
            <h2 className="mt-4 font-exo2 text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">Proof over promises.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            Real repositories, inspectable decisions, and honest project status. No invented client names or unsupported performance numbers.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .55, delay: index * 0.08 }} className="work-card group overflow-hidden rounded-[1.75rem]">
              <div className="grid lg:grid-cols-[.78fr_1.22fr]">
                <div className="flex flex-col border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-sm text-slate-500">0{index + 1}</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[.07] px-3 py-1.5 text-xs font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />{project.status}</span>
                  </div>
                  <p className="mt-12 text-xs font-bold uppercase tracking-[0.26em] text-blue-300">{project.type}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="site-tag rounded-full px-3 py-1.5 text-xs font-medium text-slate-300">{item}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3 pt-9">
                    <a href={project.repo} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 rounded-full bg-blue-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-blue-300"><FaGithub /> {project.codeLabel}<FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" /></a>
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full btn-muted px-4 py-2.5 text-sm font-semibold text-slate-100">Live project <FaExternalLinkAlt /></a>}
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="border-b border-white/10 pb-7">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">The challenge</p>
                    <p className="mt-3 max-w-3xl leading-7 text-slate-200">{project.challenge}</p>
                  </div>
                  <div className="grid gap-8 pt-7 sm:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Engineering work</h4>
                      <ul className="mt-4 space-y-3 text-sm text-slate-300">
                        {project.engineering.map((item) => <li key={item} className="flex gap-3"><FaCheckCircle className="mt-0.5 shrink-0 text-blue-300" /><span>{item}</span></li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Evidence</h4>
                      <ul className="mt-4 space-y-3 text-sm text-slate-300">
                        {project.proof.map((item) => <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" /><span>{item}</span></li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} className="mt-16 rounded-[1.75rem] border border-dashed border-white/15 bg-white/[.025] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[.18em] text-amber-200"><FaCodeBranch /> Build roadmap</div>
              <h3 className="mt-5 text-2xl font-semibold text-white">The projects that will prove production readiness</h3>
              <p className="mt-4 leading-7 text-slate-400">These are intentionally marked as next builds. Each becomes featured work only when the repository and evidence are public.</p>
            </div>
            <div className="grid gap-3">
              {projectRoadmap.map((project, index) => (
                <div key={project.title} className="roadmap-card rounded-2xl border border-white/[.08] bg-black/10 p-5 sm:p-6">
                  <div className="flex gap-4">
                    <span className="font-mono text-xs text-slate-600">0{index + 1}</span>
                    <div>
                      <h4 className="font-semibold text-slate-100">{project.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="text-xs text-blue-200">#{item.replaceAll(" ", "")}</span>)}</div>
                      <p className="mt-4 border-t border-white/[.07] pt-4 font-mono text-[11px] uppercase tracking-wider text-slate-500">Proof: {project.deliverables}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
