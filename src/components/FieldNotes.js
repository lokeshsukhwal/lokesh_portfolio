import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBookOpen, FaExternalLinkAlt, FaLayerGroup, FaTimes } from "react-icons/fa";

const notes = [
  {
    type: "Lab note",
    title: "Turning a portfolio contact form into a secure submission pipeline",
    summary: "What changed when a browser-only form needed validation, private storage, abuse controls, and a deployment path.",
    meta: "Supabase · Edge Functions · PostgreSQL",
    readTime: "6 min",
    verified: "July 2026",
    lesson: "A contact form is a small production system: the public client should only know a publishable key, privileged writes belong at the edge, and the database should deny direct anonymous access.",
    steps: ["Validate and normalize input before storage", "Keep service credentials inside the Edge Function", "Handle CORS, honeypot checks, and rate limiting", "Verify the deployed endpoint with a real HTTP response and stored row"],
    source: "https://github.com/lokeshsukhwal/lokesh_portfolio/blob/main/content/notes/secure-supabase-contact-pipeline.md",
  },
  {
    type: "Deployment note",
    title: "Why a successful build can still produce a GitHub Pages 404",
    summary: "A short deployment postmortem covering build success, the gh-pages branch, publishing-source configuration, and live verification.",
    meta: "React · GitHub Pages · Deployment",
    readTime: "4 min",
    verified: "July 2026",
    lesson: "Build, publish, and serve are separate stages. A green React build and a populated deployment branch do not prove that GitHub Pages is enabled or serving the expected path.",
    steps: ["Confirm the production homepage base path", "Build and publish the compiled output", "Configure gh-pages and / (root) as the publishing source", "Test the public URL instead of trusting local command output"],
    source: "https://github.com/lokeshsukhwal/lokesh_portfolio/blob/main/content/notes/github-pages-404-runbook.md",
  },
  {
    type: "Engineering note",
    title: "A repeatable DevOps incident troubleshooting method",
    summary: "A vendor-neutral runbook for Linux, networking, Kubernetes, CI/CD, mitigation, and incident documentation.",
    meta: "Linux · Networking · Kubernetes · CI/CD",
    readTime: "9 min",
    verified: "July 2026",
    lesson: "Strong troubleshooting is disciplined uncertainty reduction: define impact, follow the request path, separate evidence from assumptions, mitigate safely, and verify recovery from the user's perspective.",
    steps: ["Define impact, timeline, and the most recent change", "Follow DNS, network, runtime, and dependency boundaries", "Test one falsifiable hypothesis at a time", "Mitigate, verify externally, and record preventive actions"],
    source: "https://github.com/lokeshsukhwal/lokesh_portfolio/blob/main/content/notes/devops-incident-troubleshooting.md",
  },
  {
    type: "Architecture study",
    title: "Production-minded AWS platform design review",
    summary: "An honest, recruiter-ready design exercise covering EKS trade-offs, OIDC, GitOps, SLOs, failure modes, cost, and required implementation evidence.",
    meta: "AWS · EKS · Terraform · GitOps · SRE",
    readTime: "11 min",
    verified: "July 2026",
    lesson: "Architecture credibility comes from explicit goals, rejected alternatives, trust boundaries, failure exercises, cost analysis, and proof requirements—not from placing many cloud logos in a diagram.",
    steps: ["Define measurable reliability, delivery, security, and cost goals", "Record EKS versus simpler-service trade-offs", "Design identity, artifact, network, and observability boundaries", "Specify the evidence required before claiming implementation"],
    source: "https://github.com/lokeshsukhwal/lokesh_portfolio/blob/main/content/articles/aws-platform-design-review.md",
  },
  {
    type: "Security study",
    title: "Secure software supply chain threat model",
    summary: "A control and verification plan connecting reviewed source to build identity, SBOM, signed artifact, admission policy, and observed runtime digest.",
    meta: "OIDC · SBOM · Signing · Provenance · Policy",
    readTime: "10 min",
    verified: "July 2026",
    lesson: "Supply-chain security is a verifiable evidence chain from reviewed commit to deployed digest. Tool count is irrelevant when identity, provenance, policy decisions, and failure tests cannot be demonstrated.",
    steps: ["Map threats at every delivery trust boundary", "Use short-lived identity and immutable artifact digests", "Verify signature and provenance before admission", "Exercise rejection, compromise, and recovery paths"],
    source: "https://github.com/lokeshsukhwal/lokesh_portfolio/blob/main/content/articles/secure-software-supply-chain.md",
  },
];

const resources = [
  { type: "Original roadmap", label: "Beginner-to-production learning path", description: "A staged roadmap with projects, proof requirements, and primary sources from Linux through SRE.", href: "https://github.com/lokeshsukhwal/lokesh_portfolio/blob/main/content/resources/devops-cloud-learning-path.md" },
  { type: "Free ebook", label: "Google SRE books", description: "Three official books on reliability, practical SRE, and building secure, reliable systems—free to read online.", href: "https://sre.google/books/" },
  { type: "Official PDF", label: "AWS Well-Architected Framework", description: "Architecture review guidance across operational excellence, security, reliability, performance, cost, and sustainability.", href: "https://pages.awscloud.com/rs/112-TZM-766/images/AWS_Well-Architected_Framework.pdf" },
  { type: "Official PDF", label: "CNCF Cloud Native Survey 2025", description: "Current adoption and organizational findings for cloud native platforms and practices.", href: "https://www.cncf.io/wp-content/uploads/2026/01/CNCF_Annual_Survey_Report_final.pdf" },
  { type: "Research report", label: "DORA 2025 report", description: "Evidence about AI-assisted delivery, organizational systems, and software delivery performance.", href: "https://dora.dev/research/2025/dora-report/" },
  { type: "Maturity model", label: "CNCF Platform Engineering", description: "A people, process, policy, technology, and outcomes model—not merely a tool checklist.", href: "https://tag-app-delivery.cncf.io/whitepapers/platform-eng-maturity-model/" },
  { type: "Reference repo", label: "Kubernetes examples", description: "Official example workloads for learning core Kubernetes objects and behavior.", href: "https://github.com/kubernetes/examples" },
  { type: "Reference repo", label: "Google microservices demo", description: "A realistic cloud-native sample used for deployment, observability, and failure experiments.", href: "https://github.com/GoogleCloudPlatform/microservices-demo" },
  { type: "Reference repo", label: "AWS Security Reference Architecture", description: "AWS-maintained examples supporting security architecture and organizational controls.", href: "https://github.com/aws-samples/aws-security-reference-architecture-examples" },
  { type: "Interactive lab", label: "Killercoda scenarios", description: "Browser-based Linux, Kubernetes, containers, and cloud-native practice environments.", href: "https://killercoda.com/" },
];

const filters = ["All", "Lab note", "Deployment note", "Engineering note", "Architecture study", "Security study"];

export default function FieldNotes() {
  const [filter, setFilter] = useState("All");
  const [activeNote, setActiveNote] = useState(null);
  const visibleNotes = filter === "All" ? notes : notes.filter((note) => note.type === filter);

  useEffect(() => {
    if (!activeNote) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveNote(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeNote]);

  return (
    <section id="notes" className="field-notes-section site-section relative overflow-hidden border-y border-white/[.06] py-24 sm:py-28">
      <div aria-hidden="true" className="notes-grid absolute inset-0 opacity-35" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-blue-300">Engineering field notes</p>
            <h2 className="mt-4 font-exo2 text-4xl font-semibold tracking-[-.035em] text-white sm:text-5xl">Learn. Verify. Share.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">Practical notes from systems I have built and problems I have debugged—written to make the next implementation clearer and safer.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter field notes">
          {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`notes-filter rounded-full border px-4 py-2 text-sm font-medium transition ${filter === item ? "notes-filter-active border-blue-300/35 text-blue-200" : "border-white/10 text-slate-400"}`}>{item}</button>)}
        </div>

        <motion.div layout className="mt-8 grid gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleNotes.map((note, index) => (
              <motion.article layout key={note.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .28, delay: index * .04 }} className="field-note-card flex min-h-[25rem] flex-col rounded-[1.75rem] p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4"><span className="rounded-full bg-blue-300/[.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">{note.type}</span><FaBookOpen className="text-slate-600" /></div>
                <h3 className="mt-7 text-2xl font-semibold leading-8 text-white">{note.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{note.summary}</p>
                <p className="mt-5 font-mono text-[11px] leading-5 text-slate-500">{note.meta}</p>
                <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/[.08] pt-6">
                  <div className="text-[10px] uppercase tracking-[.14em] text-slate-600"><span className="block">{note.readTime} read</span><span className="mt-1 block">Verified {note.verified}</span></div>
                  <button type="button" onClick={() => setActiveNote(note)} className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-300">Read note <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="notes-resources mt-12 rounded-[1.75rem] p-6 sm:p-8">
          <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-orange-300/20 bg-orange-300/[.07] text-orange-300"><FaLayerGroup /></span><div><p className="text-xs font-bold uppercase tracking-[.22em] text-orange-300">Resource shelf</p><h3 className="mt-2 text-2xl font-semibold text-white">Start with the roadmap, then learn from primary sources</h3></div></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {resources.map((resource) => <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="notes-resource group rounded-2xl border border-white/[.08] p-5"><span className="text-[9px] font-bold uppercase tracking-[.18em] text-orange-300">{resource.type}</span><span className="mt-2 flex items-center justify-between gap-3 font-semibold text-slate-200">{resource.label}<FaExternalLinkAlt className="text-xs text-slate-600 transition group-hover:text-blue-300" /></span><span className="mt-2 block text-sm leading-6 text-slate-400">{resource.description}</span></a>)}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeNote && <motion.div className="notes-modal fixed inset-0 z-[70] grid place-items-center bg-black/65 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="note-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveNote(null); }}>
          <motion.article initial={{ opacity: 0, y: 20, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }} className="notes-modal-card max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">{activeNote.type}</p><h3 id="note-title" className="mt-3 text-2xl font-semibold leading-8 text-white sm:text-3xl">{activeNote.title}</h3></div><button type="button" onClick={() => setActiveNote(null)} aria-label="Close note" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-slate-400"><FaTimes /></button></div>
            <div className="mt-7 border-y border-white/[.08] py-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Key lesson</p><p className="mt-3 leading-7 text-slate-300">{activeNote.lesson}</p></div>
            <div className="mt-6"><p className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">Implementation checklist</p><ol className="mt-4 space-y-3">{activeNote.steps.map((step, index) => <li key={step} className="flex gap-4 text-sm leading-6 text-slate-300"><span className="font-mono text-xs text-blue-300">0{index + 1}</span><span>{step}</span></li>)}</ol></div>
            <a href={activeNote.source} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950"><FaBookOpen /> Read the complete illustrated guide <FaExternalLinkAlt className="text-xs" /></a>
          </motion.article>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
