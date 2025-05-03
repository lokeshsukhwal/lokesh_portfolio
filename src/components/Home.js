import React from "react";
import TypingIntro from "./TypingIntro";
import { motion } from "framer-motion";
import { FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiSpring, SiPostgresql } from "react-icons/si";

const logos = [
  { id: 1, icon: <FaReact size={50} className="text-cyan-400" /> },
  { id: 2, icon: <SiSpring size={50} className="text-green-400" /> },
  { id: 3, icon: <FaDocker size={50} className="text-blue-400" /> },
  { id: 4, icon: <SiPostgresql size={50} className="text-blue-500" /> },
  { id: 5, icon: <FaAws size={50} className="text-gray-600" /> },
];

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content with fade and slide */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Lokesh Sukhwal</span>
            </h1>

            <TypingIntro />

            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              I build robust, scalable backend systems and enterprise
              applications using Java technologies.
            </p>

            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                View My Work
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Profile image with fade & scale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 rounded-full p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[gradient-rotate_4s_ease-in-out_infinite] bg-[length:400%_400%]">
              <img
                src="https://avatars.githubusercontent.com/u/52657519?v=4 "
                alt="Lokesh Sukhwal"
                // className="rounded-full w-full h-full object-cover border-4 border-[#0f172a]"
              />
            </div>
          </motion.div>
        </div>
        <div className="py-10 text-center ">
          <h2 className="text-2xl font-bold mb-8 text-white-800">Trusted By</h2>
          <div className="flex justify-center gap-10 flex-wrap">
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
                className="p-4 rounded-full cursor-pointer"
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
