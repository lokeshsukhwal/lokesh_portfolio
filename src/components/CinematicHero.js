import React from 'react';
import { motion } from 'framer-motion';

const heading = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.7 } })
};

export default function CinematicHero() {
    return (
        <section id="cinematic-hero" className="min-h-screen flex items-center glass-card p-8 md:p-16">
            <div className="max-w-4xl mx-auto">
                <motion.h1 initial="hidden" animate="visible" custom={1} variants={heading} className="text-4xl md:text-6xl font-orbitron leading-tight">
                    <span className="text-accent">Cinematic Storybook</span>
                    <br /> where code meets craft
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }} className="mt-6 text-muted max-w-2xl">
                    I design resilient infrastructure and delightful developer experiences. This site is a narrative showcase — each project is a short case study revealing decisions, tradeoffs, and measurable outcomes.
                </motion.p>

                <motion.div className="mt-8 flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <a href="#projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-accent-start to-accent-end text-white shadow-glow-md">Explore Projects</a>
                    <a href="#contact" className="px-5 py-3 rounded-md border border-white/6 text-muted">Contact</a>
                </motion.div>
            </div>
        </section>
    );
}
