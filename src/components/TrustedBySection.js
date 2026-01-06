import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaDocker, FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiSpring,
  SiPostgresql,
  SiFastapi,
  SiKubernetes,
} from "react-icons/si";

const logos = [
  {
    id: 1,
    icon: <FaReact size={50} className="text-cyan-400" />,
    name: "React",
  },
  {
    id: 2,
    icon: <SiSpring size={50} className="text-green-400" />,
    name: "Spring Boot",
  },
  {
    id: 3,
    icon: <FaDocker size={50} className="text-blue-400" />,
    name: "Docker",
  },
  {
    id: 4,
    icon: <SiPostgresql size={50} className="text-blue-500" />,
    name: "PostgreSQL",
  },
  { id: 5, icon: <FaAws size={50} className="text-yellow-500" />, name: "AWS" },
  {
    id: 6,
    icon: <FaPython size={50} className="text-blue-600" />,
    name: "Python",
  },
  {
    id: 7,
    icon: <SiFastapi size={50} className="text-green-600" />,
    name: "FastAPI",
  },
  {
    id: 8,
    icon: <SiKubernetes size={50} className="text-purple-500" />,
    name: "Kubernetes",
  },
  { id: 9, icon: <FaJava size={50} className="text-red-500" />, name: "Java" },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted By / Tech Stack
        </motion.h2>

        <div className="flex justify-center gap-10 flex-wrap">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              whileHover={{
                scale: 1.3,
                rotate: 10,
                y: -5,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center p-4 rounded-xl cursor-pointer bg-white/20 dark:bg-gray-800/20 backdrop-blur-md hover:shadow-lg"
            >
              {logo.icon}
              <span className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
