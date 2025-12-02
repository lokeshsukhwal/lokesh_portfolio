import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn size={18} />,
      href: "#",
      bgLight: "from-blue-400 to-blue-600",
      bgDark: "from-blue-500 to-cyan-400",
    },
    {
      icon: <FaGithub size={18} />,
      href: "#",
      bgLight: "from-gray-400 to-gray-600",
      bgDark: "from-gray-500 to-gray-300",
    },
    {
      icon: <FaTwitter size={18} />,
      href: "#",
      bgLight: "from-sky-400 to-blue-500",
      bgDark: "from-sky-400 to-blue-500",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500"
    >
      {/* Animated Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-[gradient_4s_linear_infinite]" />

      {/* Main Content */}
      <div className="w-full max-w-[1920px] mx-auto py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 text-gray-700 dark:text-gray-500 transition-colors duration-500">
        {/* Left - Name + Role */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent animate-[gradient_6s_linear_infinite] bg-[length:200%_auto] font-orbitron">
            Lokesh Sukhwal
          </h2>
          <p className="text-xs sm:text-sm mt-1 tracking-wide dark:text-gray-400 text-gray-600 font-exo2">
            Full Stack Engineer
          </p>
        </motion.div>

        {/* Center - Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm font-inter"
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (link, idx) => (
              <a
                key={idx}
                href={`#${link.toLowerCase()}`}
                className="relative group hover:text-black dark:hover:text-white transition duration-300 px-1"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}
        </motion.nav>

        {/* Social Icons */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-${
                index === 0 ? "pink" : index === 1 ? "purple" : "blue"
              }-500 p-1.5 sm:p-2 rounded-full hover:bg-${
                index === 0 ? "pink" : index === 1 ? "purple" : "blue"
              }-500 hover:text-white transition-all duration-300`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-3 sm:py-4 md:py-5 text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-500 font-inter px-4">
        <div className="w-full max-w-[1920px] mx-auto flex flex-wrap justify-center items-center gap-1 px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-medium text-gray-800 dark:text-gray-300">
            Lokesh Sukhwal
          </span>
          <span>. Crafted with</span>
          <span className="text-pink-500 animate-pulse">❤️</span>
          <span>using</span>
          <span className="hover:text-black dark:hover:text-white hover:underline transition duration-300">
            React
          </span>
          <span>&</span>
          <span className="hover:text-black dark:hover:text-white hover:underline transition duration-300">
            TailwindCSS
          </span>
          <span>.</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
