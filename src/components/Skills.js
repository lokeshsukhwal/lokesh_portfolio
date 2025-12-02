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

const skills = [
  {
    title: "Core Java",
    description:
      "Deep understanding of Java fundamentals, OOP, collections, multithreading, and JVM internals.",
    icon: <FaJava />,
    percent: "90%",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Spring Framework",
    description:
      "Expertise in Spring Boot, Spring MVC, Spring Security, Spring Cloud, and microservices.",
    icon: <FaCloud />,
    percent: "85%",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Database Systems",
    description:
      "Experience with PostgreSQL, MySQL, MongoDB, query optimization, and ORM tools.",
    icon: <FaDatabase />,
    percent: "80%",
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Microservices",
    description:
      "Scalable microservices architecture with Docker, Kubernetes, and cloud platforms.",
    icon: <FaCodeBranch />,
    percent: "80%",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "DevOps",
    description:
      "CI/CD pipelines, Docker, Kubernetes orchestration, and cloud deployment (AWS, Azure).",
    icon: <FaTools />,
    percent: "70%",
    color: "from-yellow-500 to-orange-600",
  },
  {
    title: "Problem Solving",
    description:
      "Strong analytical skills with a track record of solving complex challenges efficiently.",
    icon: <FaBrain />,
    percent: "90%",
    color: "from-cyan-500 to-blue-600",
  },
];

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full min-h-[380px]"
    >
      {/* Animated Background Glow */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 blur-xl transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />

      {/* Premium Card Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 dark:from-white/5 dark:to-transparent p-[1.5px]">
        <div className="absolute inset-0 rounded-2xl bg-white dark:bg-[#0F1729]" />
      </div>

      {/* Card Content */}
      <motion.div
        className="relative rounded-2xl bg-gradient-to-br from-white/95 to-gray-50 dark:from-[#1A2842] dark:to-[#0F1729] p-6 sm:p-7 lg:p-8 h-full backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col"
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Icon Section */}
        <motion.div
          className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}
          animate={{ rotate: isHovered ? 12 : 0 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-2xl sm:text-3xl text-white drop-shadow-lg">
            {skill.icon}
          </span>
        </motion.div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-exo2 font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#7F56D9] group-hover:to-[#EB3A84] transition-all duration-300 flex-shrink-0">
          {skill.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed font-inter line-clamp-3 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-300 flex-grow">
          {skill.description}
        </p>

        {/* Progress Section */}
        <div className="space-y-3 flex-shrink-0">
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Proficiency
            </span>
            <motion.span
              className={`text-sm sm:text-base font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
              animate={{ scale: isHovered ? 1.15 : 1 }}
            >
              {skill.percent}
            </motion.span>
          </div>

          {/* Enhanced Progress Bar */}
          <div className="relative w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-[0_0_12px_rgba(0,0,0,0.3)]`}
              initial={{ width: 0 }}
              whileInView={{ width: skill.percent }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            />
            {/* Shimmer Effect */}
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ["0%", "300%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
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
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 w-72 h-72 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        > 

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-gray-900 dark:text-white mt-6 mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F56D9] via-[#EB3A84] to-[#7F56D9]">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 xl:gap-10">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
