import React from "react";
import { motion } from "framer-motion";

const themes = {
  neon: {
    gradient: "from-teal-400 via-cyan-400 to-emerald-400",
    glow: "bg-cyan-400",
    secondary: "bg-teal-300",
    textShadow: "drop-shadow-[0_0_25px_rgba(34,211,238,0.8)]",
  },
  sunset: {
    gradient: "from-orange-400 via-pink-500 to-red-500",
    glow: "bg-pink-400",
    secondary: "bg-orange-300",
    textShadow: "drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]",
  },
  pastel: {
    gradient: "from-pink-300 via-purple-300 to-blue-300",
    glow: "bg-purple-200",
    secondary: "bg-pink-200",
    textShadow: "drop-shadow-[0_0_25px_rgba(216,180,254,0.7)]",
  },
  galaxy: {
    gradient: "from-indigo-500 via-purple-500 to-fuchsia-500",
    glow: "bg-purple-500",
    secondary: "bg-indigo-400",
    textShadow: "drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]",
  },
};

const Loader = ({ name = "Lokesh Sukhwal", theme = "galaxy" }) => {
  const current = themes[theme] || themes.galaxy;
  const letters = name.split("");

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50 bg-white dark:bg-gray-950">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

      {/* Multiple expanding rings */}
      {[0, 0.3, 0.6].map((delay, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.3, opacity: 0.6 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay,
            ease: "easeOut",
          }}
          className={`absolute w-96 h-96 rounded-full ${current.glow} blur-3xl`}
        />
      ))}

      {/* Rotating orbital rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px]"
      >
        {[0, 60, 120].map((rotation, i) => (
          <motion.div
            key={i}
            initial={{ rotate: rotation }}
            className="absolute inset-0"
          >
            <div
              className={`absolute top-0 left-1/2 w-2 h-2 ${current.secondary} rounded-full blur-sm`}
            />
            <div
              className={`absolute bottom-0 left-1/2 w-2 h-2 ${current.glow} rounded-full blur-sm`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* 3D Rotating circle */}
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-dashed ${current.glow} opacity-20`}
        />
      </motion.div>

      {/* Main content container with perspective */}
      <div className="relative z-10" style={{ perspective: "1000px" }}>
        {/* Animated Name with letter animation */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`relative text-5xl md:text-7xl lg:text-8xl font-extrabold ${current.textShadow}`}
        >
          <motion.div
            animate={{ rotateX: [0, 5, 0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex"
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                  repeatType: "reverse",
                }}
                className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Shimmer effect overlay */}
          <motion.div
            animate={{ x: ["-200%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ clipPath: "inset(0)" }}
          />
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5,
          }}
          className={`h-1 mt-4 bg-gradient-to-r ${current.gradient} rounded-full`}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* Enhanced floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0 ? "w-4 h-4" : i % 3 === 1 ? "w-3 h-3" : "w-2 h-2"
          } ${i % 2 === 0 ? current.glow : current.secondary} blur-md`}
          initial={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
          }}
          animate={{
            x: [
              Math.random() * 200 - 100,
              Math.random() * 400 - 200,
              Math.random() * 200 - 100,
            ],
            y: [
              Math.random() * 200 - 100,
              Math.random() * 400 - 200,
              Math.random() * 200 - 100,
            ],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulse circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className={`absolute w-32 h-32 rounded-full border-2 ${current.glow}`}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Loading bar */}
      <motion.div className="absolute bottom-20 w-64 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`h-full w-1/2 bg-gradient-to-r ${current.gradient} rounded-full`}
        />
      </motion.div>

      {/* Enhanced tagline */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 text-sm md:text-base text-gray-400 dark:text-gray-500 tracking-widest font-medium"
      >
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="inline-block mr-2"
        >
          ⚡
        </motion.span>
        Creating Digital Magic...
      </motion.div>

      {/* Corner accents */}
      {["top-left", "top-right", "bottom-left", "bottom-right"].map(
        (position, i) => (
          <motion.div
            key={position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className={`absolute ${
              position.includes("top") ? "top-8" : "bottom-8"
            } ${
              position.includes("left") ? "left-8" : "right-8"
            } w-12 h-12 border-2 ${current.glow} ${
              position === "top-left"
                ? "border-r-0 border-b-0"
                : position === "top-right"
                ? "border-l-0 border-b-0"
                : position === "bottom-left"
                ? "border-r-0 border-t-0"
                : "border-l-0 border-t-0"
            } opacity-30`}
          />
        )
      )}
    </div>
  );
};

export default Loader;
