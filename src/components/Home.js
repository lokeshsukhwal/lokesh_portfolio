import React, { useEffect, useState } from "react";
import TypingIntro from "./TypingIntro";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { SiSpring, SiPostgresql } from "react-icons/si";

/* -------------------- Logos -------------------- */
const logos = [
  { id: 1, icon: <FaJava className="text-red-500" /> },
  { id: 2, icon: <FaPython className="text-yellow-400" /> },
  { id: 3, icon: <SiSpring className="text-green-400" /> },
  { id: 4, icon: <SiPostgresql className="text-blue-500" /> },
  { id: 5, icon: <FaAws className="text-gray-600" /> },
  { id: 6, icon: <FaDocker className="text-blue-400" /> },
];

/* -------------------- Terminal Code -------------------- */
const codeLines = [
  "const fullStackEngineer = {",
  '  name: "Lokesh Sukhwal",',
  '  role: "Full Stack Engineer",',
  '  backend: ["Java", "Spring Boot", "Python"],',
  '  frontend: ["React", "Tailwind CSS"],',
  '  databases: ["PostgreSQL", "MySQL"],',
  '  cloud: ["AWS", "Docker"],',
  '  build: () => "Scalable Web Applications"',
  "};",
];

const Home = () => {
  /* -------- Terminal typing state -------- */
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;

    const currentLine = codeLines[lineIndex];
    const timer = setTimeout(() => {
      setDisplayedCode((prev) => prev + currentLine[charIndex]);

      if (charIndex + 1 < currentLine.length) {
        setCharIndex((prev) => prev + 1);
      } else {
        setDisplayedCode((prev) => prev + "\n");
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }
    }, 35);

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* ---------------- Main Grid ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* ---------------- Left Content ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <span className="px-4 py-2 rounded-full glass text-sm font-medium text-primary border border-primary/30">
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 20, -20, 20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                👋
              </motion.span>{" "}
              Available for new opportunities
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-exo2 font-bold mb-4 mt-4 sm:mb-6 animated-gradient">
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
              I design and build scalable full-stack applications using Java,
              Python, Spring Boot, and modern frontend technologies. Passionate
              about clean architecture, performance, and cloud-native systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-lg font-exo2 font-bold shadow-lg hover:shadow-2xl text-sm sm:text-base"
              >
                View My Work
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3 sm:px-8 sm:py-4 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-exo2 font-semibold text-sm sm:text-base"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* ---------------- Right Terminal ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-2xl glass rounded-2xl overflow-hidden border border-primary/20">
              {/* Header */}
              <div className="bg-navy-light px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-400 ml-4 font-mono">
                  fullstack.js
                </span>
              </div>

              {/* Body */}
              <div className="p-6 font-mono text-sm min-h-[320px]">
                <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {displayedCode.split("\n").map((line, idx) => (
                    <div key={idx}>
                      <span className="text-gray-600 select-none mr-4">
                        {idx + 1}
                      </span>

                      <span
                        className={
                          line.includes("const") || line.includes("build")
                            ? "text-secondary"
                            : line.includes('"')
                              ? "text-accent-cyan"
                              : line.includes(":")
                                ? "text-primary"
                                : "text-gray-300"
                        }
                      >
                        {line}
                      </span>
                    </div>
                  ))}

                  {lineIndex < codeLines.length && (
                    <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-pulse align-middle" />
                  )}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------- Trusted Logos ---------------- */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-gray-800 dark:text-gray-100">
            Technologies I Work With
          </h2>

          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap">
            {logos.map(({ id, icon }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 sm:p-4 md:p-5 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {icon}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
