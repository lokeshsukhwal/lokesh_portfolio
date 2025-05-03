import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50 overflow-hidden">
      {/* Floating gradient blob */}
      <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>

      {/* Loader Text */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
      >
         Lokesh Sukhwal
      </motion.h1>
    </div>
  );
};

export default Loader;
