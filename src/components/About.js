import { motion } from "framer-motion";
import { FaDownload, FaCloud, FaDocker, FaRocket, FaShieldAlt } from "react-icons/fa";
import { SiKubernetes, SiTerraform } from "react-icons/si";

const pillars = [
  { title: "Infrastructure Automation", icon: <FaRocket /> },
  { title: "Cloud Engineering", icon: <FaCloud /> },
  { title: "CI/CD & Delivery", icon: <FaDocker /> },
  { title: "Reliability & Security", icon: <FaShieldAlt /> },
];

export default function About() {
  return (
    <section id="about" className="relative border-y border-white/10 bg-slate-900/70 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">About me</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">I build systems that are dependable, observable, and easy to scale.</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">I bring a pragmatic DevOps mindset to modern engineering teams: strong automation habits, deep cloud familiarity, and a focus on creating infrastructure that feels calm under pressure.</p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Engineering focus</h3>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              My work sits at the intersection of automation and reliability. I enjoy translating complex operational needs into clear, maintainable solutions using Kubernetes, Docker, Terraform, Linux, cloud platforms, and CI/CD workflows.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-cyan-300">{pillar.icon}</div>
                  <div className="mt-3 font-semibold text-white">{pillar.title}</div>
                </div>
              ))}
            </div>
            <a href="/lokesh_resume.pdf" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-slate-950">
              <FaDownload /> Download resume
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/70 p-8">
            <h3 className="text-2xl font-semibold text-white">What I bring</h3>
            <div className="mt-6 space-y-4 text-slate-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3 text-white"><SiTerraform className="text-cyan-300" /> Infrastructure as Code</div>
                <p className="mt-2 text-sm leading-7">Treating environments as versioned, repeatable, and reviewable systems.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3 text-white"><SiKubernetes className="text-cyan-300" /> Container platforms</div>
                <p className="mt-2 text-sm leading-7">Designing deployments that are resilient, observable, and easy to operate.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3 text-white"><FaDocker className="text-cyan-300" /> Delivery automation</div>
                <p className="mt-2 text-sm leading-7">Connecting code, testing, release, and monitoring into a dependable flow.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
