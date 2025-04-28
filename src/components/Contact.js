import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mr-4">
                  <i className="fas fa-envelope text-blue-600 dark:text-blue-300 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Email Me</h4>
                  <a
                    href="mailto:lokesh.sukhwal@example.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    techlokesh@yahoo.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-lg p-3 mr-4">
                  <i className="fas fa-phone-alt text-green-600 dark:text-green-300 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Call Me</h4>
                  <a
                    href="tel:+919983580715"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +91 9983580715
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
                  <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-300 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Udaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/lokesh-sukhwal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://github.com/lokeshsukhwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://x.com/LokeshSukhwal15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
