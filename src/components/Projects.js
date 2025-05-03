import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Financial Analytics Platform",
    description:
      "A real-time financial data processing system built with Spring Boot and Kafka.",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL"],
    colors: ["bg-blue-100", "bg-green-100", "bg-purple-100", "bg-yellow-100"],
    icon: "📈",
  },
  {
    title: "E-commerce Microservices",
    description:
      "Scalable e-commerce platform with separate services for products, orders, and payments.",
    tags: ["Java", "Spring Cloud", "Docker", "MongoDB"],
    colors: ["bg-blue-100", "bg-green-100", "bg-red-100", "bg-orange-100"],
    icon: "🛒",
  },
  {
    title: "Authentication Service",
    description:
      "Secure JWT-based authentication and authorization service with OAuth2 support.",
    tags: ["Java", "Spring Security", "JWT", "Redis"],
    colors: ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"],
    icon: "🔐",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
          Projects
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-white dark:bg-gray-800 shadow-md p-6 transition transform hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className="text-5xl mb-4">{project.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-sm font-medium px-2 py-1 rounded ${project.colors[idx]} text-gray-800`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium cursor-pointer">
              <span>View Details</span>
              <FaGithub className="text-lg" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
