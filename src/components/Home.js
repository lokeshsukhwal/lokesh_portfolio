import React from "react";
import TypingIntro from "./TypingIntro";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiSpring, SiPostgresql } from "react-icons/si";

const logos = [
  {
    id: 1,
    icon: (
      <FaJava
        size={30}
        className="text-red-500 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      />
    ),
  },
  {
    id: 2,
    icon: (
      <FaPython
        size={30}
        className="text-yellow-400 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      />
    ),
  },
  {
    id: 3,
    icon: (
      <SiSpring
        size={30}
        className="text-green-400 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      />
    ),
  },
  {
    id: 4,
    icon: (
      <SiPostgresql
        size={30}
        className="text-blue-500 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      />
    ),
  },
  {
    id: 5,
    icon: (
      <FaAws
        size={30}
        className="text-gray-600 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      />
    ),
  },
  {
    id: 6,
    icon: (
      <FaDocker
        size={30}
        className="text-blue-400 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
      />
    ),
  },
];

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-exo2 font-bold mb-4 sm:mb-6 animated-gradient">
              Hi, I'm <span className="font-orbitron">Lokesh Sukhwal</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <TypingIntro className="text-xl sm:text-2xl md:text-3xl font-exo2 font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-wide" />
            </motion.div>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 font-exo2 font-semibold tracking-wide mb-6 sm:mb-8 leading-loose">
              I build robust, scalable backend systems and enterprise-grade
              applications that process millions of transactions daily. My
              expertise includes microservices architecture, RESTful APIs, and
              cloud-native engineering using Java, Python, Spring Boot, and
              modern technologies to power business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-exo2 font-bold transition-transform shadow-lg hover:shadow-2xl text-sm sm:text-base"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-exo2 font-semibold transition-colors text-sm sm:text-base"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[gradient-rotate_4s_ease-in-out_infinite] bg-[length:400%_400%]">
              <img
                src="https://avatars.githubusercontent.com/u/52657519?v=4"
                alt="Lokesh Sukhwal"
                className="rounded-full w-full h-full object-cover border-1 border-transparent dark:border-[#0f172a]"
              />
            </div>
          </motion.div>
        </div>

        {/* Trusted logos */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-gray-800 dark:text-gray-100">
            Trusted By
          </h2>
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap">
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  y: -5,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 sm:p-4 md:p-5 rounded-full cursor-pointer bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                {logo.icon}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
