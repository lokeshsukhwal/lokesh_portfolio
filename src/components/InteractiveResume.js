import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowRight, FaCheck, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { resumeUrl } from "../config";

const signals = [
  ["IaC", "versioned environments"],
  ["CI/CD", "repeatable delivery"],
  ["SRE", "observable systems"],
];

export default function InteractiveResume() {
  return (
    <section id="home" className="hero-shell relative isolate min-h-screen overflow-hidden pt-20">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="w-full">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="availability mb-7 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
                Available for DevOps &amp; platform engineering roles
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-blue-300 sm:text-sm">Hello, I’m Lokesh</p>
              <h1 className="font-exo2 text-5xl font-bold leading-[.94] tracking-[-0.04em] text-white sm:text-6xl xl:text-7xl">
                I build calm,<br />
                <span className="hero-gradient-text">reliable systems.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                DevOps &amp; Cloud Engineer turning complex infrastructure into dependable, automated platforms that help teams move with confidence.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-blue-400 px-6 py-3.5 font-semibold text-slate-950 transition duration-200 hover:-translate-y-1 hover:bg-blue-300 hover:shadow-[0_16px_40px_rgba(82,118,232,.3)]">
                  Explore my work <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[.045] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-200/50 hover:bg-white/[.09]">
                  <FaDownload /> Resume
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
                <span className="font-medium text-slate-300">Find me on</span>
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/lokesh-sukhwal/" target="_blank" rel="noreferrer" className="social-link"><FaLinkedinIn className="text-[#0A66C2]" /> LinkedIn</a>
                <a aria-label="GitHub" href="https://github.com/lokeshsukhwal" target="_blank" rel="noreferrer" className="social-link"><FaGithub className="brand-github" /> GitHub</a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.16, duration: 0.75, ease: "easeOut" }}
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="terminal-card overflow-hidden rounded-[1.75rem] p-1">
                <div className="terminal-inner hero-terminal-glass rounded-[1.55rem] p-5 sm:p-7">
                  <div className="mb-7 flex items-center justify-between border-b border-white/[.09] pb-5">
                    <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-300" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
                    <span className="terminal-file-badge rounded-full px-3 py-1.5 font-mono text-xs text-slate-400">platform-status.yml</span>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">online</span>
                  </div>

                  <div className="font-mono text-sm leading-7 sm:text-[15px]">
                    <p className="text-blue-300"><span className="text-slate-500">$</span> deploy --production</p>
                    <p className="pl-4 text-slate-400">✓ validated infrastructure</p>
                    <p className="pl-4 text-slate-400">✓ rolled out safely</p>
                    <p className="pl-4 text-slate-400">✓ monitoring active</p>
                    <p className="mt-4 text-blue-300"><span className="text-slate-500">$</span> status</p>
                    <p className="pl-4 text-emerald-300">All systems operational<span className="cursor-blink">_</span></p>
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2.5 border-t border-white/[.09] pt-5 sm:gap-3">
                    {signals.map(([value, label]) => (
                      <div key={label} className="metric-card rounded-xl p-3 text-center sm:p-4">
                        <div className="text-lg font-bold text-white sm:text-xl">{value}</div>
                        <div className="mt-1 text-[10px] font-medium leading-4 text-slate-400 sm:text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="production-badge absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 shadow-xl backdrop-blur md:flex">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-300/15 text-blue-200"><FaCheck /></span>
                <span className="text-sm font-medium text-slate-200">Production-minded</span>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 flex items-center gap-4 text-sm text-slate-500">
            <span className="h-px w-12 bg-slate-700" /> Scroll to explore <FaArrowDown className="animate-bounce text-blue-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
