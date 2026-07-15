import { motion } from "framer-motion";
import { FaArrowUp, FaDownload, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { resumeUrl } from "../config";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Selected work", href: "#projects" },
  { label: "Release lab", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", handle: "lokesh-sukhwal", icon: <FaLinkedinIn className="text-[#0A66C2]" />, href: "https://www.linkedin.com/in/lokesh-sukhwal/" },
  { label: "GitHub", handle: "lokeshsukhwal", icon: <FaGithub className="brand-github" />, href: "https://github.com/lokeshsukhwal" },
  { label: "X", handle: "@LokeshSukhwal15", icon: <FaTwitter className="brand-x" />, href: "https://x.com/LokeshSukhwal15" },
];

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .65 }} className="footer-shell site-section relative overflow-hidden border-t border-white/[.07]">
      <div aria-hidden="true" className="footer-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_.75fr_1fr] lg:gap-16">
          <div>
            <a href="#home" className="group inline-flex items-center gap-3 text-white" aria-label="Lokesh Sukhwal — back to home">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-blue-200/25 bg-blue-300/[.07] font-mono text-sm font-bold text-blue-200 transition group-hover:rotate-6 group-hover:border-blue-200/45">LS</span>
              <span className="font-exo2 text-2xl font-bold tracking-tight">Lokesh<span className="text-orange-300">.</span></span>
            </a>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-400">DevOps and Cloud Engineer focused on automation, observable systems, and dependable software delivery.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[.05] px-3 py-1.5 text-xs font-medium text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Open to relevant opportunities</div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-bold uppercase tracking-[.24em] text-slate-500">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm lg:grid-cols-1">
              {navigation.map((item) => <li key={item.href}><a href={item.href} className="footer-link text-slate-400 transition hover:text-white">{item.label}</a></li>)}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[.24em] text-slate-500">Elsewhere</h2>
            <div className="mt-5 space-y-3">
              {socialLinks.map((social) => (
                <a key={social.label} aria-label={`${social.label}: ${social.handle}`} href={social.href} target="_blank" rel="noreferrer" className="footer-social group flex items-center gap-3 rounded-xl border border-white/[.07] bg-white/[.018] px-4 py-3">
                  <span className="grid h-8 w-8 place-items-center text-base">{social.icon}</span>
                  <span className="min-w-0"><span className="block text-xs font-semibold text-slate-300">{social.label}</span><span className="mt-0.5 block truncate font-mono text-[10px] text-slate-600">{social.handle}</span></span>
                </a>
              ))}
            </div>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"><FaDownload className="text-xs" /> Download resume</a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/[.08] pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lokesh Sukhwal. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[.14em]">Designed and built with care</p>
          <a href="#home" className="group inline-flex w-fit items-center gap-2 font-semibold uppercase tracking-[.14em] text-slate-500 transition hover:text-blue-300">Back to top <span className="grid h-7 w-7 place-items-center rounded-full border border-white/10 transition group-hover:-translate-y-1 group-hover:border-blue-300/30"><FaArrowUp className="text-[10px]" /></span></a>
        </div>
      </div>
    </motion.footer>
  );
}
