import React from "react";
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

const TrustedBySection = () => {
  return (
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
  );
};

export default TrustedBySection;
