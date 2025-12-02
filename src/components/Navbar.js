import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon } from "react-icons/fa";
import { WiDaySunny } from "react-icons/wi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleLinkClick = (section) => {
    setActive(section);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gray-100/90 dark:bg-[#0a0f1c]/90 transition-all duration-500">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#home"
              onClick={() => handleLinkClick("home")}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#7F56D9] to-[#EB3A84] text-transparent bg-clip-text animate-text font-orbitron cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              Lokesh Sukhwal
            </a>
          </motion.div>

          {/* Desktop Links */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name.toLowerCase())}
                className={`relative text-sm lg:text-base font-medium transition-all duration-300
                  ${
                    active === link.name.toLowerCase()
                      ? "text-[#7F56D9] dark:text-[#EB3A84]"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#7F56D9] dark:hover:text-[#EB3A84]"
                  }
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
                  after:bg-gradient-to-r after:from-[#7F56D9] after:to-[#EB3A84] 
                  after:transition-all hover:after:w-full
                  ${active === link.name.toLowerCase() ? "after:w-full" : ""}`}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className={`relative w-14 sm:w-16 h-7 sm:h-8 flex items-center rounded-full cursor-pointer transition-all duration-1000 overflow-hidden
                ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900"
                    : "bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300"
                }`}
            >
              {/* Sun/Moon Circle */}
              <div
                className={`absolute w-7 h-7 rounded-full top-0.5 flex items-center justify-center transition-all duration-1000 ${
                  isDark
                    ? "right-0 bg-gray-200 shadow-[0_0_15px_#fff]"
                    : "left-0 bg-yellow-400 shadow-[0_0_15px_#FFD700] rotate-12"
                }`}
              >
                {isDark ? (
                  <FaMoon className="text-gray-700" />
                ) : (
                  <WiDaySunny className="text-white w-5 h-5 animate-spin-slow" />
                )}
              </div>

              {/* Clouds in day mode */}
              {!isDark && (
                <>
                  <div className="absolute w-3 h-1 bg-white rounded-full top-2 left-1 animate-cloud"></div>
                  <div className="absolute w-2 h-1 bg-white rounded-full top-1 left-6 animate-cloud delay-300"></div>
                  <div className="absolute w-4 h-1 bg-white rounded-full top-3 left-10 animate-cloud delay-600"></div>
                </>
              )}

              {/* Stars in night mode */}
              {isDark && (
                <>
                  <div className="absolute w-1 h-1 bg-white rounded-full top-2 left-3 animate-pulse"></div>
                  <div className="absolute w-1 h-1 bg-white rounded-full top-1 left-7 animate-pulse delay-200"></div>
                  <div className="absolute w-1 h-1 bg-white rounded-full top-4 left-10 animate-pulse delay-400"></div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-200 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg
          ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name.toLowerCase())}
              whileHover={{ x: 10 }}
              className={`block text-base sm:text-lg font-medium transition-colors duration-300
                ${
                  active === link.name.toLowerCase()
                    ? "text-[#7F56D9] dark:text-[#EB3A84]"
                    : "text-gray-700 dark:text-gray-200"
                }`}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Mobile Theme Toggle */}
          <div className="pt-2 sm:pt-3">
            <div
              onClick={toggleDarkMode}
              className={`relative w-16 h-8 flex items-center rounded-full cursor-pointer transition-all duration-1000 overflow-hidden
                ${
                  isDark
                    ? "bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900"
                    : "bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300"
                }`}
            >
              <div
                className={`absolute w-7 h-7 rounded-full top-0.5 flex items-center justify-center transition-all duration-1000 ${
                  isDark
                    ? "right-0 bg-gray-200 shadow-[0_0_15px_#fff]"
                    : "left-0 bg-yellow-400 shadow-[0_0_15px_#FFD700] rotate-12"
                }`}
              >
                {isDark ? (
                  <FaMoon className="text-gray-700" />
                ) : (
                  <WiDaySunny className="text-white w-5 h-5 animate-spin-slow" />
                )}
              </div>

              {!isDark && (
                <>
                  <div className="absolute w-3 h-1 bg-white rounded-full top-2 left-1 animate-cloud"></div>
                  <div className="absolute w-2 h-1 bg-white rounded-full top-1 left-6 animate-cloud delay-300"></div>
                  <div className="absolute w-4 h-1 bg-white rounded-full top-3 left-10 animate-cloud delay-600"></div>
                </>
              )}

              {isDark && (
                <>
                  <div className="absolute w-1 h-1 bg-white rounded-full top-2 left-3 animate-pulse"></div>
                  <div className="absolute w-1 h-1 bg-white rounded-full top-1 left-7 animate-pulse delay-200"></div>
                  <div className="absolute w-1 h-1 bg-white rounded-full top-4 left-10 animate-pulse delay-400"></div>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes cloudMove {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-cloud {
          animation: cloudMove 4s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 5s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
