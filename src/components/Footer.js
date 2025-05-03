import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-24 border-t border-transparent bg-[#0f172a] relative"
    >
      {/* Gradient border on top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>

      <div className="max-w-6xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-400">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            Lokesh Sukhwal
          </h2>
          <p className="text-sm mt-1">Java Developer • Full Stack Engineer</p>
        </div>

        <nav className="flex gap-8 text-sm">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex gap-5">
          {/* Social icons */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-pink-500 p-2 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-purple-500 p-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue-500 p-2 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <FaTwitter size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center py-4 text-xs text-gray-500 border-t border-gray-800">
        © 2025 Lokesh Sukhwal. Crafted with{" "}
        <span className="text-pink-500">❤️</span> using{" "}
        <span className="hover:underline hover:text-white cursor-pointer transition duration-300">
          React
        </span>{" "}
        &{" "}
        <span className="hover:underline hover:text-white cursor-pointer transition duration-300">
          TailwindCSS
        </span>
        .
      </div>
    </motion.footer>
  );
};

export default Footer;
