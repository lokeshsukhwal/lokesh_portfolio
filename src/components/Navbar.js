import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Keep theme preference on refresh
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 transition-colors duration-500"> {/*shadow*/}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">Lokesh Sukhwal</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center text-gray-700 dark:text-gray-200">
          <a href="#home" className="hover:text-blue-500 nav-link">Home</a>
          <a href="#projects" className="hover:text-blue-500 nav-link">Projects</a>
          <a href="#skills" className="hover:text-blue-500 nav-link">Skills</a>
          <a href="#contact" className="hover:text-blue-500 nav-link">Contact</a>


          <button
            onClick={toggleDarkMode}
            className="text-xl transition duration-300 transform hover:rotate-180"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 animate-pulse" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300" /> //animate-bounce
            )}
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700 dark:text-gray-200"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pt-4 pb-6 space-y-4 shadow-md animate-slide-down">
          <a href="#home" onClick={handleLinkClick} className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-500">Home</a>
          <a href="#projects" onClick={handleLinkClick} className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-500">Projects</a>
          <a href="#contact" onClick={handleLinkClick} className="block text-lg text-gray-700 dark:text-gray-200 hover:text-blue-500">Contact</a>

          <button
            onClick={toggleDarkMode}
            className="text-xl transition duration-300 transform hover:rotate-180"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <FaSun className="text-yellow-400 animate-pulse" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-gray-300 animate-bounce" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
