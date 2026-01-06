import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Financial Analytics Platform",
    description:
      "A real-time financial data processing system built with Java Spring Boot and Python for analytics pipelines.",
    tags: ["Java", "Spring Boot", "Python", "PostgreSQL"],
    colors: ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100"],
    icon: "📈",
  },
  {
    title: "E-commerce Microservices",
    description:
      "Scalable e-commerce backend with separate services in Java and Python for products, orders, and payments.",
    tags: ["Java", "Spring Cloud", "Python", "MongoDB"],
    colors: ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100"],
    icon: "🛒",
  },
  {
    title: "Authentication Service",
    description:
      "Secure JWT-based authentication service using Java Spring Security and Python-based microservices integration.",
    tags: ["Java", "Spring Security", "Python", "Redis"],
    colors: ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"],
    icon: "🔐",
  },
  {
    title: "Data Processing Pipeline",
    description:
      "High-throughput data ingestion and transformation pipeline built in Python with microservices architecture in Java.",
    tags: ["Python", "Java", "Kafka", "PostgreSQL"],
    colors: ["bg-yellow-100", "bg-blue-100", "bg-purple-100", "bg-green-100"],
    icon: "⚡",
  },
  {
    title: "Cloud Monitoring Dashboard",
    description:
      "Real-time monitoring system for cloud applications using Python scripts and Java Spring Boot backend.",
    tags: ["Python", "Java", "AWS", "Docker"],
    colors: ["bg-yellow-100", "bg-blue-100", "bg-gray-100", "bg-purple-100"],
    icon: "☁️",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 dark:text-white font-orbitron"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-4 sm:p-6 md:p-8 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
                {project.icon}
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white font-exo2">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 font-inter leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs sm:text-sm font-medium px-2 py-1 rounded ${project.colors[idx]} text-gray-800`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Uncomment and update if needed
              <div
                className="flex items-center gap-2 text-sm sm:text-base text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:text-blue-800 dark:hover:text-blue-500 transition-colors"
                aria-label="View project details"
              >
                <span>View Details</span>
                <FaGithub className="text-base sm:text-lg" aria-hidden="true" />
              </div>
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
