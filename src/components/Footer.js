import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold gradient-text">
              Lokesh Sukhwal
            </a>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Java Developer & Software Engineer
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Lokesh Sukhwal. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/lokesh-sukhwal/"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/lokeshsukhwal"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
