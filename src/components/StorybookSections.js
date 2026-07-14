import React from 'react';

export function SectionShell({ id, children, className = '' }) {
    return (
        <section id={id} className={`py-16 md:py-28 ${className}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}

export function SectionTitle({ title, subtitle }) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-orbitron">{title}</h2>
            {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
        </div>
    );
}

export default SectionShell;
