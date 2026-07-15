import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { contactFunctionUrl, supabaseAnonKey } from "../config";

const contactLinks = [
  { label: "Email", value: "techlokesh@yahoo.com", href: "mailto:techlokesh@yahoo.com", icon: <FaEnvelope className="text-[#7B61FF]" /> },
  { label: "LinkedIn", value: "lokesh-sukhwal", href: "https://www.linkedin.com/in/lokesh-sukhwal/", icon: <FaLinkedin className="text-[#0A66C2]" /> },
  { label: "GitHub", value: "lokeshsukhwal", href: "https://github.com/lokeshsukhwal", icon: <FaGithub className="brand-github" /> },
];

const messageGuide = [
  ["01", "The role or project you have in mind"],
  ["02", "The platform or delivery challenge your team is solving"],
  ["03", "A useful next step—interview, call, or technical discussion"],
];

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "sending", message: "Sending your message…" });

    const form = event.currentTarget;

    try {
      if (!contactFunctionUrl || !supabaseAnonKey) throw new Error("Contact service is not configured");

      const formData = new FormData(form);
      const response = await fetch(contactFunctionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apikey: supabaseAnonKey,
          Authorization: `Bearer ${supabaseAnonKey}`,
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          website: formData.get("website"),
          source: window.location.href,
        }),
      });
      const data = await response.json();

      if (!response.ok || data.success !== true) throw new Error(data.error || "Submission rejected");

      form.reset();
      setStatus({ type: "success", message: "Message delivered. Thank you—I’ll respond as soon as I can." });
    } catch (error) {
      setStatus({ type: "error", message: "The form could not send your message. Please email me directly instead." });
    }
  }

  const sending = status.type === "sending";

  return (
    <section id="contact" className="contact-section site-section relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden="true" className="contact-glow absolute -bottom-64 -right-64 h-[34rem] w-[34rem] rounded-full" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-orange-300">Contact / Start a conversation</p>
            <h2 className="mt-4 max-w-xl font-exo2 text-4xl font-semibold leading-tight tracking-[-.035em] text-white sm:text-5xl">Have a role where reliability matters?</h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-lg leading-8 text-slate-300">I’m looking for DevOps, cloud, and platform engineering opportunities where I can contribute, learn from experienced engineers, and help make delivery more dependable.</p>
            <div className="mt-5 inline-flex items-center gap-3 text-sm text-emerald-300"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-45" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>Available for relevant opportunities</div>
          </div>
        </div>

        <div className="contact-shell mt-10 overflow-hidden rounded-[2rem]">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} className="p-6 sm:p-8 lg:border-r lg:border-white/[.08] lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[.22em] text-slate-500">Direct channels</p>
              <div className="mt-5 divide-y divide-white/[.07] border-y border-white/[.07]">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="contact-link group flex items-center gap-4 py-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[.08] bg-white/[.035]">{link.icon}</span>
                    <span className="min-w-0 flex-1"><span className="block text-xs uppercase tracking-[.16em] text-slate-600">{link.label}</span><span className="mt-1 block truncate text-sm text-slate-300">{link.value}</span></span>
                    <FaArrowRight className="text-xs text-slate-600 transition-transform group-hover:translate-x-1 group-hover:text-blue-300" />
                  </a>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 text-sm text-slate-400"><FaMapMarkerAlt className="text-blue-300" /><span>Hyderabad, India · Open to remote opportunities</span></div>

              <div className="mt-10">
                <p className="text-xs font-bold uppercase tracking-[.22em] text-slate-500">A helpful message includes</p>
                <ol className="mt-5 space-y-4">
                  {messageGuide.map(([number, item]) => (
                    <li key={number} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-6 text-slate-400"><span className="font-mono text-xs text-slate-600">{number}</span><span>{item}</span></li>
                  ))}
                </ol>
              </div>
            </motion.div>

            <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} onSubmit={handleSubmit} className="contact-form p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-3 border-b border-white/[.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-xs font-bold uppercase tracking-[.22em] text-blue-300">Message</p><h3 className="mt-2 text-2xl font-semibold text-white">Tell me about the opportunity</h3></div>
                <p className="text-xs text-slate-600">All fields are required</p>
              </div>

              <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input id="contact-website" name="website" type="text" tabIndex="-1" autoComplete="off" />
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="contact-name">Your name</label>
                  <input id="contact-name" name="name" autoComplete="name" required placeholder="Jane Smith" className="contact-field w-full rounded-xl px-4 py-3.5 text-slate-100 outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="contact-email">Work email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="jane@company.com" className="contact-field w-full rounded-xl px-4 py-3.5 text-slate-100 outline-none" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-300" htmlFor="contact-subject">What would you like to discuss?</label>
                <input id="contact-subject" name="subject" required placeholder="DevOps Engineer opportunity" className="contact-field w-full rounded-xl px-4 py-3.5 text-slate-100 outline-none" />
              </div>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-3"><label className="block text-sm font-medium text-slate-300" htmlFor="contact-message">Message</label><span className="text-xs text-slate-600">Minimum 20 characters</span></div>
                <textarea id="contact-message" name="message" rows="6" minLength="20" required placeholder="Share a little about the role, team, and what success would look like…" className="contact-field w-full resize-y rounded-xl px-4 py-3.5 text-slate-100 outline-none" />
              </div>

              <div aria-live="polite" aria-atomic="true" className="min-h-[2.75rem]">
                {status.message && <p className={`mt-4 rounded-xl border px-4 py-3 text-sm ${status.type === "success" ? "border-emerald-400/20 bg-emerald-400/[.06] text-emerald-300" : status.type === "error" ? "border-rose-400/20 bg-rose-400/[.06] text-rose-300" : "border-blue-300/15 bg-blue-300/[.05] text-blue-200"}`}>{status.message}</p>}
              </div>

              <button type="submit" disabled={sending} className="group mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-blue-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-300 disabled:cursor-wait disabled:opacity-70">
                {sending ? "Sending…" : <>Send message <FaPaperPlane className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /></>}
              </button>
              <p className="mt-4 text-center text-xs leading-5 text-slate-600">Prefer email? Write directly to <a className="text-slate-400 underline decoration-white/15 underline-offset-4 hover:text-blue-300" href="mailto:techlokesh@yahoo.com">techlokesh@yahoo.com</a>.</p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
