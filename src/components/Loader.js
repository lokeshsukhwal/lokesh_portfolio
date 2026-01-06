import React from "react";
import { motion } from "framer-motion";

const Loader = ({ name = "Lokesh Sukhwal" }) => {
  const letters = name.split("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#05060f] overflow-hidden">
      {/* Soft animated background glow */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)]"
      />

      {/* Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute w-[360px] h-[360px] rounded-full border border-blue-500/20"
      />

      {/* Progress Arc */}
      <svg width="420" height="420" className="absolute" viewBox="0 0 420 420">
        <motion.circle
          cx="210"
          cy="210"
          r="170"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1069"
          animate={{ strokeDashoffset: [1069, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="grad" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Content */}
      <div className="relative z-10 text-center">
        {/* Name Animation */}
        <motion.h1
          className="flex justify-center text-4xl md:text-6xl font-extrabold tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-xs tracking-[0.3em] text-gray-400 uppercase"
        >
          Crafting Digital Experiences
        </motion.p>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/40 blur-sm"
          initial={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            opacity: 0,
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
