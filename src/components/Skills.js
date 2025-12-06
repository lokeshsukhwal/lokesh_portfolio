import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaJava,
  FaDatabase,
  FaCloud,
  FaTools,
  FaCodeBranch,
  FaBrain,
} from "react-icons/fa";
import { SiSpring } from "react-icons/si";

const skills = [
  {
    title: "Core Java",
    description: "OOP, Collections, Multithreading & JVM internals",
    icon: <FaJava />,
    percent: 90,
    color: "from-blue-500 to-blue-600",
    shadowColor: "shadow-blue-500/50",
  },
  {
    title: "Spring Framework",
    description: "Spring Boot, MVC, Security & Microservices",
    icon: <SiSpring />,
    percent: 85,
    color: "from-green-500 to-emerald-600",
    shadowColor: "shadow-green-500/50",
  },
  {
    title: "Database Systems",
    description: "PostgreSQL, MySQL, MongoDB & Query Optimization",
    icon: <FaDatabase />,
    percent: 80,
    color: "from-orange-500 to-red-600",
    shadowColor: "shadow-orange-500/50",
  },
  {
    title: "Microservices",
    description: "Docker, Kubernetes & Cloud Architecture",
    icon: <FaCodeBranch />,
    percent: 80,
    color: "from-purple-500 to-pink-600",
    shadowColor: "shadow-purple-500/50",
  },
  {
    title: "DevOps",
    description: "CI/CD, Docker, Kubernetes & AWS/Azure",
    icon: <FaTools />,
    percent: 70,
    color: "from-yellow-500 to-orange-600",
    shadowColor: "shadow-yellow-500/50",
  },
  {
    title: "Problem Solving",
    description: "Analytical thinking & Complex challenges",
    icon: <FaBrain />,
    percent: 90,
    color: "from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500/50",
  },
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Glow */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 blur-lg transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
      />

      {/* Card Body */}
      <motion.div
        className="relative h-full rounded-2xl bg-white/50 dark:bg-gray-800/30 p-6 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm overflow-hidden shadow-lg"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Corner Accent */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${skill.color} opacity-10 rounded-bl-full`}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.15 : 0.1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-5">
            <motion.div
              className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg ${skill.shadowColor}`}
              animate={{
                rotate: isHovered ? [0, -10, 10, 0] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl text-white drop-shadow-lg">
                {skill.icon}
              </span>

              {/* Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-xl blur-md -z-10`}
                animate={{ opacity: isHovered ? 0.6 : 0 }}
              />
            </motion.div>

            <div>
              <motion.h3
                className="text-lg font-bold text-gray-900 dark:text-white mb-1.5"
                animate={{ x: isHovered ? 2 : 0 }}
              >
                {skill.title}
              </motion.h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Proficiency
              </span>
              <motion.span
                className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {skill.percent}%
              </motion.span>
            </div>

            <div className="relative h-2 bg-gray-200 dark:bg-gray-800/50 rounded-full overflow-hidden shadow-inner">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm`}
                  animate={{ opacity: isHovered ? 0.8 : 0 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500 overflow-hidden"
    >
      {/* Background Orbs - only in dark mode to match theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-sky-500/25 via-indigo-500/15 to-transparent"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl bg-gradient-to-bl from-pink-500/25 via-purple-500/15 to-transparent"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Container aligned with About */}
      <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron text-gray-800 dark:text-white mb-4">
            Technical{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F56D9] via-[#EB3A84] to-[#7F56D9] animate-gradient">
                Skills
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#7F56D9] via-[#EB3A84] to-[#7F56D9] rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Crafting robust solutions with cutting-edge technologies
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
            <span>Continuously learning & evolving</span>
            <motion.div
              className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>

      {/* Gradient Animation */}
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
