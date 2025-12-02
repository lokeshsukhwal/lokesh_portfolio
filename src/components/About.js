import { motion } from "framer-motion";
import { FaDownload, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        {/* Title Section */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-orbitron text-center mb-8 sm:mb-12 lg:mb-16 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7F56D9] to-[#EB3A84]">
            Me
          </span>
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
          {/* Who am I Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/50 dark:bg-gray-800/30 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-exo2 font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
              Who am I?
            </h3>
            <div className="space-y-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#7F56D9] to-[#EB3A84]">
                  Lokesh Sukhwal
                </span>
                , a full-stack Java Developer with <strong>3+ years</strong> of
                proven expertise in architecting and deploying enterprise-grade
                applications. Passionate about building scalable,
                high-performance systems that solve real-world problems.
              </p>
              <p className="leading-relaxed">
                My technical foundation spans{" "}
                <strong>
                  microservices architecture, RESTful APIs, database
                  optimization, and cloud deployments
                </strong>
                . I've delivered solutions that handle 100K+ daily requests and
                improved system performance by up to 60%. Beyond coding, I'm
                committed to writing clean, maintainable code and mentoring
                junior developers.
              </p>
              <p className="leading-relaxed">
                When I'm not debugging, I'm exploring emerging technologies,
                contributing to open-source projects, and staying updated with
                industry best practices. Let's build something extraordinary
                together! 
              </p>
            </div>
            <motion.a
              href={process.env.PUBLIC_URL + "/lokesh_resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-[#7F56D9] to-[#EB3A84] rounded-lg shadow-lg hover:shadow-[0_0_20px_#9B4DFF99] transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-lg" /> Download CV
            </motion.a>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-exo2 font-bold text-gray-800 dark:text-white">
              My Experience
            </h3>

            <div className="grid gap-4 sm:gap-6">
              {/* Experience Cards */}
              {[
                {
                  role: "Java Developer",
                  company: "Helson Software Solution",
                  description:
                    "Architected and deployed scalable RESTful APIs serving 100K+ daily requests. Implemented CI/CD pipelines reducing deployment time by 60%, and optimized database queries achieving 40% performance improvement across enterprise applications.",
                },
                {
                  role: "Software Engineer",
                  company: "Arcgate",
                  description:
                    "Engineered backend microservices handling 50+ concurrent users, reducing response times by 35%. Optimized complex database queries and implemented caching strategies, improving platform throughput by 3x for high-traffic e-commerce operations.",
                },
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <span className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      <FaBriefcase className="text-lg sm:text-xl" />
                    </span>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-white">
                      {experience.role}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {experience.company}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {experience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
