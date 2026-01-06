import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setSending(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/techlokesh@yahoo.com",
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      const data = await res.json();
      if (res.ok) {
        setSuccessMessage("Message sent! I will get back to you soon.");
        form.reset();
      } else {
        setErrorMessage(
          data.message || "Failed to send message. Please try again later."
        );
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again.");
    }

    setSending(false);
  };
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gray-100 dark:bg-[#0a0f1c] transition-colors duration-500"
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 font-orbitron text-gray-800 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center w-full max-w-2xl lg:max-w-none mx-auto"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 font-exo2 text-gray-800 dark:text-white">
              Let's talk about your project
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 font-inter leading-relaxed">
              Have a project in mind or want to discuss potential opportunities?
              Feel free to reach out. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 rounded-lg p-2 sm:p-3">
                  <i className="fas fa-envelope text-lg sm:text-xl text-blue-600 dark:text-blue-300"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium font-exo2">
                    Email Me
                  </h4>
                  <a
                    href="mailto:techlokesh@yahoo.com"
                    className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline font-inter"
                  >
                    techlokesh@yahoo.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 rounded-lg p-2 sm:p-3">
                  <i className="fas fa-phone-alt text-lg sm:text-xl text-green-600 dark:text-green-300"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium font-exo2">
                    Call Me
                  </h4>
                  <a
                    href="tel:+919983580715"
                    className="text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline font-inter"
                  >
                    +91 9983580715
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-start space-x-3 sm:space-x-4"
              >
                <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 rounded-lg p-2 sm:p-3">
                  <i className="fas fa-map-marker-alt text-lg sm:text-xl text-purple-600 dark:text-purple-300"></i>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium font-exo2">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-inter">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 font-exo2">
                Follow Me
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
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
            className="flex justify-center lg:justify-end w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-6 sm:p-8 w-full max-w-2xl lg:max-w-none transform transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Formsubmit hidden inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New contact request from portfolio"
              />
              {/* Form Fields */}
              {[
                { label: "Your Name", id: "name", type: "text" },
                { label: "Email Address", id: "email", type: "email" },
                { label: "Subject", id: "subject", type: "text" },
              ].map((field, index) => (
                <div className="mb-4 sm:mb-6" key={index}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium mb-2 font-exo2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 transition"
                  />
                </div>
              ))}

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium mb-2 font-exo2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-900 transition"
                ></textarea>
                <div className="mb-4 sm:mb-6">
                  <label
                    htmlFor="attachment"
                    className="block text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium mb-2 font-exo2"
                  >
                    Attachment (optional)
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    className="w-full text-sm sm:text-base text-gray-700 dark:text-gray-300
               file:mr-4 file:py-2 file:px-4
               file:rounded-lg file:border-0
               file:text-sm file:font-medium
               file:bg-blue-600 file:text-white
               hover:file:bg-blue-700
               transition"
                  />
                </div>
              </div>

              {/* Status Messages */}
              {successMessage && (
                <div className="mb-4 text-sm sm:text-base text-green-600 font-medium">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mb-4 text-sm sm:text-base text-red-600 font-medium">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors font-inter disabled:opacity-60"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <i className="fas fa-paper-plane ml-2"></i>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
