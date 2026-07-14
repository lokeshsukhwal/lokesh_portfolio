import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaAws, FaDocker, FaGithub, FaLinkedin, FaDownload, FaCloud } from "react-icons/fa";
import { SiTerraform, SiKubernetes, SiPrometheus, SiGrafana } from "react-icons/si";
import { heroStats } from "./PortfolioSections";

const Home = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setText((prev) => (prev + 1) % 3), 1800);
    return () => clearInterval(interval);
  }, []);

  const rotatingTitles = ["Cloud Engineer", "DevOps Engineer", "Platform Builder"];

  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(129,140,248,0.22),_transparent_25%),linear-gradient(135deg,_#020617,_#0f172a_50%,_#111827)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              Available for impactful DevOps and cloud roles
            </div>

            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              <span className="block text-slate-200">DevOps & Cloud Engineer</span>
              <span className="mt-3 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Building resilient systems at scale.
              </span>
            </h1>

            <div className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl">
              I design reliable automation, cloud-native platforms, and observability-led delivery.
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              From infrastructure automation to CI/CD pipelines and Kubernetes platforms, I focus on creating dependable systems that help teams ship faster and recover faster.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <motion.a whileHover={{ y: -3, scale: 1.02 }} href="#projects" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
                Explore case studies
              </motion.a>
              <motion.a whileHover={{ y: -3, scale: 1.02 }} href="https://github.com/lokeshsukhwal" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-slate-100 backdrop-blur">
                <FaGithub /> GitHub
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/in/lokesh-sukhwal/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="/lokesh_resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <FaDownload /> Resume
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="relative">
            <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-sm text-slate-400">cloud-platform.sh</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 font-mono text-sm leading-8 text-slate-300">
                <div className="text-cyan-400">$ terraform plan</div>
                <div className="text-slate-400">→ provisioning resilient infrastructure</div>
                <div className="text-cyan-400">$ kubectl apply -f clusters/production</div>
                <div className="text-slate-400">→ rolling updates with health checks</div>
                <div className="text-cyan-400">$ prometheus && grafana</div>
                <div className="text-slate-400">→ signal-driven incident response</div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-left">
                    <div className="text-xs uppercase tracking-[0.3em] text-slate-500">{stat.label}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-100">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[<FaCloud />, <FaAws />, <SiTerraform />].map((icon, index) => (
            <motion.div key={index} whileHover={{ y: -6, rotate: -2 }} className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-4xl text-cyan-300">{icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
