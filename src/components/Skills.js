import { motion } from "framer-motion";
import { FaJava, FaDatabase, FaCloud, FaTools, FaCodeBranch, FaBrain } from "react-icons/fa";

const skills = [
  { title: "Core Java", description: "Deep understanding of Java fundamentals, OOP, collections, multithreading, and JVM internals.", icon: <FaJava />, color: "bg-blue-600", percent: "90%" },
  { title: "Spring Framework", description: "Expertise in Spring Boot, Spring MVC, Spring Security, Spring Cloud, and microservices.", icon: <FaCloud />, color: "bg-green-600", percent: "85%" },
  { title: "Database Systems", description: "Experience with PostgreSQL, MySQL, MongoDB, query optimization, and ORM tools.", icon: <FaDatabase />, color: "bg-purple-600", percent: "80%" },
  { title: "Microservices", description: "Scalable microservices architecture with Docker, Kubernetes, and cloud platforms.", icon: <FaCodeBranch />, color: "bg-yellow-600", percent: "80%" },
  { title: "DevOps", description: "CI/CD pipelines, Docker, Kubernetes orchestration, and cloud deployment (AWS, Azure).", icon: <FaTools />, color: "bg-red-600", percent: "70%" },
  { title: "Problem Solving", description: "Strong analytical skills with a track record of solving complex challenges efficiently.", icon: <FaBrain />, color: "bg-blue-800", percent: "90%" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-gray-50 dark:bg-gray-900 px-6 md:px-20">
      <motion.h2 
        className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Skills</span>
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="flex items-center gap-3 text-2xl mb-4 text-gray-800 dark:text-white">
              {skill.icon}
              <span className="font-semibold">{skill.title}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full ${skill.color}`} style={{ width: skill.percent }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
