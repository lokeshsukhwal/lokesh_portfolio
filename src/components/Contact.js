import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Let's talk about your project
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-start"
              >
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
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-start"
              >
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
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-start"
              >
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mr-4">
                  <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-300 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/lokesh-sukhwal/",
                    icon: "fab fa-linkedin-in",
                    color: "hover:bg-blue-600",
                  },
                  {
                    href: "https://github.com/lokeshsukhwal",
                    icon: "fab fa-github",
                    color: "hover:bg-gray-800",
                  },
                  {
                    href: "https://x.com/LokeshSukhwal15",
                    icon: "fab fa-twitter",
                    color: "hover:bg-blue-400",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${social.color} hover:text-white transition-colors`}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6">
              {/* Form Fields */}
              {[
                { label: "Your Name", id: "name", type: "text" },
                { label: "Email Address", id: "email", type: "email" },
                { label: "Subject", id: "subject", type: "text" },
              ].map((field, index) => (
                <div className="mb-6" key={index}>
                  <label
                    htmlFor={field.id}
                    className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 transition"
                  />
                </div>
              ))}

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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
