import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setSending(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/techlokesh@yahoo.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await response.json();

      if (data.success === "true") {
        setSuccessMessage("Message delivered. I’ll be in touch shortly.");
        form.reset();
      } else {
        setErrorMessage("The form could not be sent. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please try again.");
    }

    setSending(false);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950/95 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let’s talk about resilient platforms and ambitious delivery.</h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-white">Reach out</h3>
            <p className="mt-4 text-lg leading-8 text-slate-400">I’m interested in roles and partnerships where reliability, automation, and thoughtful engineering matter.</p>
            <div className="mt-8 space-y-4">
              <a href="mailto:techlokesh@yahoo.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-300">
                <FaEnvelope className="text-cyan-300" /> techlokesh@yahoo.com
              </a>
              <a href="https://www.linkedin.com/in/lokesh-sukhwal/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-300">
                <FaLinkedin className="text-cyan-300" /> LinkedIn
              </a>
              <a href="https://github.com/lokeshsukhwal" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-300">
                <FaGithub className="text-cyan-300" /> GitHub
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-slate-300">
                <FaMapMarkerAlt className="text-cyan-300" /> Hyderabad, India
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-cyan-500/10">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Contact" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300" htmlFor="name">Name</label>
                <input id="name" name="name" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" />
              </div>
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm text-slate-300" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none ring-0" />
            </div>
            {successMessage ? <p className="mt-5 text-sm text-emerald-400">{successMessage}</p> : null}
            {errorMessage ? <p className="mt-5 text-sm text-rose-400">{errorMessage}</p> : null}
            <button type="submit" disabled={sending} className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-slate-950 disabled:opacity-70">
              {sending ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
