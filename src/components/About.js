import { motion } from "framer-motion";
import { FaDownload, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="relative bg-gray-50 dark:bg-gray-900 py-20 px-6 md:px-24">
      <motion.h2 
        className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Who am I */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Who am I?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm <span className="font-semibold">Lokesh Sukhwal</span>, a passionate Java Developer with over <strong>3+ years</strong> of experience in building enterprise-level applications.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            My journey began when I wrote my first <strong>"Hello World"</strong> program in Java during my college days.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            <FaDownload /> Download CV
          </a>
        </motion.div>

        {/* Experience */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Experience</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 dark:text-white">
                <FaBriefcase className="text-blue-500" />
                Java Developer
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Helson Software Solution</p>
              <p className="text-gray-600 dark:text-gray-300">Developed RESTful APIs and CI/CD pipelines for enterprise applications.</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-lg font-semibold text-gray-700 dark:text-white">
                <FaBriefcase className="text-blue-500" />
                Software Engineer
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Arcgate</p>
              <p className="text-gray-600 dark:text-gray-300">Worked on backend development and database optimization for e-commerce platforms.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
