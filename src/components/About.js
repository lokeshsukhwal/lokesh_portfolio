import { motion } from "framer-motion";
import { FaArrowRight, FaCodeBranch, FaDownload, FaEye, FaShieldAlt } from "react-icons/fa";
import { resumeUrl } from "../config";

const principles = [
  {
    number: "01",
    title: "Automate the repeatable",
    description: "If a task is predictable, I look for a way to make it versioned, reviewable, and safe to run again.",
    icon: <FaCodeBranch />,
  },
  {
    number: "02",
    title: "Make systems explain themselves",
    description: "Useful logs, metrics, documentation, and clear ownership turn incidents into solvable engineering problems.",
    icon: <FaEye />,
  },
  {
    number: "03",
    title: "Design for the imperfect day",
    description: "Healthy platforms expect change and failure, then provide a clear path to detect, recover, and learn.",
    icon: <FaShieldAlt />,
  },
];

const direction = [
  ["Building", "Production-focused cloud and DevOps projects with public evidence"],
  ["Developing", "Deeper practice in GitOps, observability, and secure delivery"],
  ["Seeking", "A DevOps, cloud, or platform engineering role with strong mentorship"],
];

export default function About() {
  return (
    <section id="about" className="about-section site-section relative overflow-hidden border-y border-white/[.06] py-24 sm:py-28">
      <div aria-hidden="true" className="about-rule absolute inset-x-0 top-0 h-px" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .6 }} className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[.3em] text-orange-300">About / Engineering mindset</p>
            <h2 className="mt-5 max-w-xl font-exo2 text-4xl font-semibold leading-[1.08] tracking-[-.035em] text-white sm:text-5xl">
              I’m interested in the space between <span className="text-slate-500">“it works”</span> and <span className="text-orange-300">“it keeps working.”</span>
            </h2>
            <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-slate-300">
              <p>I’m Lokesh, a DevOps and cloud engineer focused on learning how dependable software is built, delivered, and operated.</p>
              <p className="text-slate-400">My approach is practical: understand the system, remove unnecessary manual work, make health visible, and document the path so another engineer can follow it.</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-blue-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-300">View my work <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></a>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.035] px-5 py-3 font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[.07]"><FaDownload /> Resume</a>
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55 }} className="about-principles overflow-hidden rounded-[1.75rem]">
              <div className="flex items-center justify-between border-b border-white/[.08] px-6 py-5 sm:px-8">
                <h3 className="text-sm font-semibold uppercase tracking-[.22em] text-slate-300">How I approach the work</h3>
                <span className="font-mono text-xs text-slate-600">principles.md</span>
              </div>
              <div>
                {principles.map((principle, index) => (
                  <motion.div key={principle.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ delay: index * .07 }} className="about-principle grid gap-5 border-b border-white/[.07] p-6 last:border-b-0 sm:grid-cols-[auto_1fr] sm:p-8">
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                      <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-300/15 bg-blue-300/[.06] text-blue-300">{principle.icon}</span>
                      <span className="font-mono text-[11px] text-slate-600">{principle.number}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{principle.title}</h4>
                      <p className="mt-3 max-w-xl leading-7 text-slate-400">{principle.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .55, delay: .08 }} className="about-direction mt-5 rounded-[1.75rem] border border-white/[.08] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
                <h3 className="text-sm font-semibold uppercase tracking-[.22em] text-slate-300">Current direction</h3>
              </div>
              <dl className="mt-6 divide-y divide-white/[.07]">
                {direction.map(([label, value]) => (
                  <div key={label} className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-5">
                    <dt className="font-mono text-xs uppercase tracking-[.16em] text-slate-600">{label}</dt>
                    <dd className="text-sm leading-6 text-slate-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
