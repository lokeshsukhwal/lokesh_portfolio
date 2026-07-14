import React from 'react';
import { motion } from 'framer-motion';
import { SectionShell, SectionTitle } from './StorybookSections';

export default function CaseStudy({ title, subtitle, role, bullets, outcome }) {
  return (
    <SectionShell className="glass-card" id={title.replace(/\s+/g, '-').toLowerCase()}>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-2/5">
          <SectionTitle title={title} subtitle={subtitle} />
          <p className="text-muted">Role: {role}</p>
          <ul className="mt-4 list-disc list-inside text-muted">
            {bullets.map((b, i) => (
              <li key={i} className="mt-2">{b}</li>
            ))}
          </ul>
        </div>

        <motion.div className="md:w-3/5" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="p-6 rounded-md bg-gradient-to-br from-[#071025]/30 to-[#0b1220]/30 border border-white/3">
            <h3 className="font-orbitron text-xl">Outcome</h3>
            <p className="mt-2 text-muted">{outcome}</p>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
