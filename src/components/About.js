import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm Lokesh Sukhwal, a passionate Java Developer with over 3+ years
              of experience in building enterprise-level applications.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My journey in software development began when I wrote my first
              "Hello World" program in Java during my college days.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Download CV <i className="fas fa-download ml-2"></i>
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">My Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium">Java Developer</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Helson Software Solution
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Developed RESTful APIs and implemented CI/CD pipelines for
                  enterprise applications.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Software Engineer</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Arcgagte
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  Contributed to backend development and database optimization
                  for e-commerce platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
