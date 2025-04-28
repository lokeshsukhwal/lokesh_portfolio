import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <i className="fas fa-chart-line text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Financial Analytics Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                A real-time financial data processing system built with Spring
                Boot and Kafka.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Java
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                  Spring Boot
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">
                  Kafka
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                  PostgreSQL
                </span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <i className="fas fa-shopping-cart text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                E-commerce Microservices
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Scalable e-commerce platform with separate services for
                products, orders, and payments.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Java
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                  Spring Cloud
                </span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs px-2 py-1 rounded">
                  Docker
                </span>
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <i className="fas fa-lock text-white text-6xl"></i>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Authentication Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Secure JWT-based authentication and authorization service with
                OAuth2 support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                  Java
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">
                  Spring Security
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs px-2 py-1 rounded">
                  JWT
                </span>
                <span className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                  Redis
                </span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Details <i className="fas fa-arrow-right ml-1"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Add more projects as needed */}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors"
          >
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
