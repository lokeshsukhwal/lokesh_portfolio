import { motion } from "framer-motion";
import { skillGroups, SectionTitle } from "./PortfolioSections";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950/90 py-24">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(167,139,250,0.16),_transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Skill stack" title="A modern toolchain for cloud-native delivery" description="These are the capabilities I use to ship reliable infrastructure, automation, and platform experiences." />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08, duration: 0.5 }} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-cyan-300">
                <span className="text-xl">{group.icon}</span>
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-sm text-slate-300">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
