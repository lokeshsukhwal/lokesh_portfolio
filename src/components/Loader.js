import React from "react";
import { motion } from "framer-motion";

const themes = {
  neon: {
    gradient: "from-teal-400 via-cyan-400 to-emerald-400",
    glow: "bg-cyan-400",
    textShadow: "shadow-[0_0_25px_rgba(34,211,238,0.6)]",
  },
  sunset: {
    gradient: "from-orange-400 via-pink-500 to-red-500",
    glow: "bg-pink-400",
    textShadow: "shadow-[0_0_25px_rgba(249,115,22,0.6)]",
  },
  pastel: {
    gradient: "from-pink-300 via-purple-300 to-blue-300",
    glow: "bg-purple-200",
    textShadow: "shadow-[0_0_25px_rgba(216,180,254,0.5)]",
  },
  galaxy: {
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
    glow: "bg-purple-500",
    textShadow: "shadow-[0_0_25px_rgba(168,85,247,0.6)]",
  },
};

const Loader = ({ name = "Lokesh Sukhwal", theme = "galaxy" }) => {
  const current = themes[theme] || themes.galaxy;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50 bg-white dark:bg-gray-950">
      {/* Expanding blurred glow ring */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0.4 }}
        animate={{ scale: 1.4, opacity: 0 }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        className={`absolute w-80 h-80 rounded-full ${current.glow} blur-3xl opacity-30`}
      />

      {/* Animated Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        className={`relative text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${current.gradient} ${current.textShadow} tracking-wide`}
      >
        {name}
        <span className="absolute inset-0 text-current/10 blur-sm">{name}</span>
      </motion.h1>

      {/* Pulse underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 100 }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1.2,
        }}
        className={`absolute bottom-1/4 h-[3px] bg-gradient-to-r ${current.gradient} rounded-full`}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 2 === 0 ? "w-3 h-3" : "w-2 h-2"
          } ${current.glow} blur-md opacity-60`}
          animate={{
            x: [0, Math.sin(i * 2) * 120, 0],
            y: [0, Math.cos(i * 3) * 100, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tagline */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 text-sm md:text-base text-gray-400 dark:text-gray-500 tracking-widest"
      >
        ⚡ Creating Digital Magic...
      </motion.div>
    </div>
  );
};

export default Loader;
