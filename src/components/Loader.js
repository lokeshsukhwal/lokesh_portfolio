import React from "react";
import { motion } from "framer-motion";

const Loader = ({ name = "Lokesh Sukhwal" }) => {
  const letters = name.split("");

  // Blocks animation variants
  const blockVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 0.8, repeat: Infinity, repeatType: "mirror" },
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f1c]">
      {/* ---------------- Animated Blocks Grid ---------------- */}
      <div className="relative w-48 h-48 grid grid-cols-3 gap-3">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg shadow-lg"
            variants={blockVariants}
            animate="animate"
            transition={{ delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* ---------------- Central Name ---------------- */}
      <div className="absolute text-center">
        <motion.h1
          className="flex justify-center text-3xl sm:text-4xl md:text-5xl font-orbitron tracking-wide text-white"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* ---------------- Tagline ---------------- */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-3 text-xs sm:text-sm tracking-widest text-gray-400 font-exo2 uppercase"
        >
          Architecting Code, Delivering Excellence
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
