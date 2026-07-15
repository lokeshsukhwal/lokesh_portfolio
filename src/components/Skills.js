import { motion } from "framer-motion";
import { FaArrowRight, FaAws, FaCheck, FaGitAlt, FaMicrosoft } from "react-icons/fa";
import {
  SiAnsible, SiDocker, SiElasticsearch, SiGithubactions, SiGitlab, SiGnubash,
  SiGooglecloud, SiGrafana, SiHelm, SiJenkins, SiKubernetes, SiLinux,
  SiPrometheus, SiPython, SiTerraform, SiUbuntu,
} from "react-icons/si";
import { skillGroups, workflowSteps } from "./PortfolioSections";

const brandIcons = {
  AWS: { icon: FaAws, color: "#FF9900" },
  Azure: { icon: FaMicrosoft, color: "#0078D4" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  Terraform: { icon: SiTerraform, color: "#844FBA" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Helm: { icon: SiHelm, color: "#0F1689" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  "GitLab CI": { icon: SiGitlab, color: "#FC6D26" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  "ELK Stack": { icon: SiElasticsearch, color: "#FEC514" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Ubuntu: { icon: SiUbuntu, color: "#E95420" },
  Bash: { icon: SiGnubash, color: "#4EAA25" },
  Python: { icon: SiPython, color: "#3776AB" },
  Git: { icon: FaGitAlt, color: "#F05032" },
};

function TechBadge({ name }) {
  const brand = brandIcons[name];
  const Icon = brand?.icon;

  return (
    <span className="tech-brand-chip site-tag inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-slate-300">
      {Icon ? <Icon aria-hidden="true" className="shrink-0 text-[14px]" style={{ color: brand.color }} /> : <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-500" />}
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="site-section skills-section relative overflow-hidden py-24 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-300">Capabilities / Toolchain</p>
            <h2 className="mt-4 max-w-lg font-exo2 text-4xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">Tools matter.<br /><span className="text-slate-500">How they connect matters more.</span></h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">I work across the delivery path—from infrastructure and pipelines to runtime visibility—using automation to make each handoff more predictable.</p>

            <div className="mt-9 border-l border-white/10 pl-5">
              <p className="text-xs font-bold uppercase tracking-[.24em] text-slate-500">Delivery path</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-300">{step}</span>
                    {index < workflowSteps.length - 1 && <FaArrowRight className="text-[9px] text-slate-600" />}
                  </div>
                ))}
              </div>
            </div>

            <a href="#projects" className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-blue-300 transition hover:text-blue-200">See these skills in projects <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: index * 0.07, duration: 0.5 }} className="skill-capability-card flex min-h-[25rem] flex-col rounded-[1.75rem] p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-300/15 bg-blue-300/[.07] text-xl text-blue-300">{group.icon}</span>
                  <span className="font-mono text-xs text-slate-600">{group.number}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{group.title}</h3>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">{group.description}</p>

                <ul className="mt-6 space-y-2.5 border-y border-white/[.08] py-5">
                  {group.practices.map((practice) => (
                    <li key={practice} className="flex items-center gap-3 text-sm text-slate-300"><FaCheck className="text-[10px] text-emerald-400" />{practice}</li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {group.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Skills are grouped by the work they enable—not by arbitrary percentage scores.</p>
          <p className="font-mono text-xs uppercase tracking-[.16em] text-slate-600">Learn · build · document · improve</p>
        </div>
      </div>
    </section>
  );
}
