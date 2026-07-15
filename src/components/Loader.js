import { motion, useReducedMotion } from "framer-motion";

const checks = ["interface", "projects", "contact"];

export default function Loader() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      aria-live="polite"
      aria-label="Loading Lokesh Sukhwal's portfolio"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : .28 } }}
      className="portfolio-loader fixed inset-0 z-[100] grid place-items-center overflow-hidden"
    >
      <div aria-hidden="true" className="loader-grid absolute inset-0" />
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }} className="relative w-[min(88vw,24rem)]">
        <div className="flex items-center justify-between border-b border-white/[.09] pb-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-200/25 bg-blue-300/[.07] font-mono text-xs font-bold text-blue-200">LS</span>
            <div><p className="font-exo2 text-lg font-bold text-white">Lokesh<span className="text-orange-300">.</span></p><p className="font-mono text-[9px] uppercase tracking-[.2em] text-slate-600">DevOps &amp; Cloud Engineer</p></div>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.55)]" />
        </div>

        <div className="mt-5 font-mono text-xs">
          <p className="text-blue-300"><span className="text-slate-600">$</span> initialize portfolio</p>
          <div className="mt-4 space-y-2.5">
            {checks.map((check, index) => (
              <motion.div key={check} initial={reduceMotion ? false : { opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .12 + index * .1 }} className="flex items-center justify-between text-slate-400"><span>checking {check}</span><span className="text-emerald-400">ready</span></motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/[.06]">
          <motion.div initial={{ width: reduceMotion ? "100%" : "0%" }} animate={{ width: "100%" }} transition={{ duration: reduceMotion ? 0 : .72, ease: "easeOut" }} className="h-full rounded-full bg-blue-400" />
        </div>
        <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[.16em] text-slate-600"><span>System check</span><span>Ready</span></div>
      </motion.div>
      <span className="sr-only">Portfolio ready</span>
    </motion.div>
  );
}
