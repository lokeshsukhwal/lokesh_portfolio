import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaExclamationTriangle, FaPlay, FaShieldAlt, FaTerminal, FaUndo } from "react-icons/fa";

const gates = [
  { id: "iac", label: "Infrastructure validated", detail: "Terraform configuration and plan reviewed", command: "terraform validate", critical: true },
  { id: "tests", label: "Automated checks passed", detail: "Tests and required CI checks are green", command: "ci checks --required", critical: true },
  { id: "scan", label: "Artifact scanned", detail: "Container has no unresolved critical findings", command: "trivy image --severity CRITICAL", critical: true },
  { id: "rollback", label: "Rollback path defined", detail: "Previous known-good release can be restored", command: "release verify --rollback", critical: true },
  { id: "observe", label: "Observability ready", detail: "Health metrics and actionable alerts are available", command: "slo verify --alerts", critical: false },
];

const scenarios = [
  { name: "Production release", selected: gates.map((gate) => gate.id) },
  { name: "Risky hotfix", selected: ["iac", "scan"] },
  { name: "New service", selected: ["iac", "tests", "scan", "rollback"] },
];

function evaluate(selected) {
  const missing = gates.filter((gate) => !selected.includes(gate.id));
  const critical = missing.filter((gate) => gate.critical);

  if (critical.length) {
    return { tone: "blocked", label: "Release blocked", summary: `${critical.length} critical ${critical.length === 1 ? "gate is" : "gates are"} incomplete. Resolve them before deployment.` };
  }
  if (missing.length) {
    return { tone: "caution", label: "Proceed with caution", summary: "Critical gates pass, but operational visibility is incomplete." };
  }
  return { tone: "ready", label: "Ready to release", summary: "Every configured release gate passes. Continue with the deployment and monitor the rollout." };
}

export default function Playground() {
  const [selected, setSelected] = useState(scenarios[0].selected);
  const [scenario, setScenario] = useState(scenarios[0].name);
  const [result, setResult] = useState(null);
  const readiness = Math.round((selected.length / gates.length) * 100);
  const report = useMemo(() => gates.map((gate) => ({ ...gate, passed: selected.includes(gate.id) })), [selected]);

  function toggleGate(id) {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setResult(null);
    setScenario("Custom review");
  }

  function applyScenario(next) {
    setScenario(next.name);
    setSelected(next.selected);
    setResult(null);
  }

  function reset() {
    applyScenario(scenarios[0]);
  }

  return (
    <section id="playground" className="playground-section site-section relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden="true" className="work-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-orange-300">Interactive lab / Release review</p>
            <h2 className="mt-4 font-exo2 text-4xl font-semibold tracking-[-.035em] text-white sm:text-5xl">Would you ship it?</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">Explore how deployment gates change a release decision. This is a deterministic simulator—not a shell—and every result follows the visible rules below.</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2" aria-label="Deployment scenarios">
          <span className="mr-2 text-xs font-bold uppercase tracking-[.18em] text-slate-500">Scenario</span>
          {scenarios.map((item) => (
            <button key={item.name} type="button" onClick={() => applyScenario(item)} className={`rounded-full border px-4 py-2 text-sm transition ${scenario === item.name ? "border-blue-300/45 bg-blue-300/10 text-blue-200" : "border-white/10 bg-white/[.025] text-slate-400 hover:border-white/20 hover:text-slate-200"}`}>{item.name}</button>
          ))}
          {scenario === "Custom review" && <span className="rounded-full border border-orange-300/25 bg-orange-300/[.07] px-4 py-2 text-sm text-orange-200">Custom review</span>}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[.92fr_1.08fr]">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} className="playground-panel rounded-[1.75rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5 border-b border-white/[.08] pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-slate-500">Release gates</p>
                <h3 className="mt-2 text-xl font-semibold text-white">Configure the review</h3>
              </div>
              <span className="font-mono text-sm text-blue-300">{readiness}%</span>
            </div>

            <div className="mt-5 space-y-3">
              {gates.map((gate) => {
                const active = selected.includes(gate.id);
                return (
                  <button key={gate.id} type="button" role="checkbox" aria-checked={active} onClick={() => toggleGate(gate.id)} className={`release-gate flex w-full items-start gap-4 rounded-2xl border p-4 text-left ${active ? "release-gate-active border-emerald-400/20" : "border-white/[.08]"}`}>
                    <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border text-[10px] ${active ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-300" : "border-white/15 text-transparent"}`}><FaCheck /></span>
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2 font-semibold text-slate-200">{gate.label}{gate.critical && <span className="rounded-full bg-rose-400/[.08] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-rose-300">critical</span>}</span>
                      <span className="mt-1 block text-sm leading-6 text-slate-500">{gate.detail}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={() => setResult(evaluate(selected))} className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-300"><FaPlay className="text-xs" /> Evaluate release</button>
              <button type="button" onClick={reset} className="btn-muted inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-slate-200"><FaUndo className="text-xs" /> Reset</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} className="playground-terminal flex min-h-[38rem] flex-col overflow-hidden rounded-[1.75rem]">
            <div className="flex items-center justify-between border-b border-white/[.08] px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3"><span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-rose-400" /><i className="h-2.5 w-2.5 rounded-full bg-amber-300" /><i className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></span><span className="font-mono text-xs text-slate-500">release-review.log</span></div>
              <FaTerminal className="text-sm text-slate-600" />
            </div>

            <div className="flex-1 p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm">
              <p className="text-blue-300"><span className="text-slate-600">$</span> release-review --scenario &quot;{scenario}&quot;</p>
              <div className="mt-5 space-y-3">
                {report.map((gate) => (
                  <div key={gate.id} className="grid grid-cols-[1rem_1fr] gap-3">
                    <span className={gate.passed ? "text-emerald-400" : "text-rose-400"}>{gate.passed ? "✓" : "×"}</span>
                    <div><p className={gate.passed ? "text-slate-300" : "text-slate-400"}>{gate.command}</p><p className="text-[11px] text-slate-600">{gate.passed ? "PASS" : gate.critical ? "FAIL · required" : "WARN · recommended"}</p></div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/[.08] pt-5">
                {!result ? (
                  <div className="flex gap-3 text-slate-500"><FaShieldAlt className="mt-1 shrink-0" /><p>Select the completed gates, then evaluate the release.</p></div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`release-result release-result-${result.tone} rounded-2xl border p-5 font-sans`}>
                    <div className="flex items-center gap-3">
                      {result.tone === "ready" ? <FaCheck className="text-emerald-300" /> : <FaExclamationTriangle className={result.tone === "blocked" ? "text-rose-300" : "text-amber-300"} />}
                      <h4 className="font-semibold text-white">{result.label}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{result.summary}</p>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="border-t border-white/[.08] px-5 py-4 sm:px-6">
              <div className="h-1.5 overflow-hidden rounded-full bg-white/[.06]"><div className="h-full rounded-full bg-blue-400 transition-all duration-500" style={{ width: `${readiness}%` }} /></div>
              <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-slate-600"><span>Readiness</span><span>{selected.length}/{gates.length} gates</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
