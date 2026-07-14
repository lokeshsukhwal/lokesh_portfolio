import React from 'react';
import { motion } from 'framer-motion';

export default function Timeline({ items = [] }) {
  return (
    <div className="timeline">
      {items.map((it, idx) => (
        <motion.div key={idx} className="timeline-item" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: idx * 0.08 }}>
          <div className="flex items-start gap-4">
            <div className="timeline-point mt-1" />
            <div>
              <h4 className="font-orbitron text-sm">{it.title}</h4>
              <p className="text-muted mt-1">{it.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
