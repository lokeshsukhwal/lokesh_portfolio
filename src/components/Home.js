import React from "react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Lokesh Sukhwal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
              Java Developer & Software Engineer
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              I build robust, scalable backend systems and enterprise
              applications using Java technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="fade-in delay-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl"></div>
              <img
                src="/images/profile.png"
                alt="Lokesh Sukhwal"
                className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-100 shadow-xl bounce-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-20 fade-in delay-2">
          <h3 className="text-xl font-semibold mb-6 text-center">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
                alt: "React",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1280px-Spring_Framework_Logo_2018.svg.png",
                alt: "Spring",
              },
              {
                src: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png",
                alt: "Docker",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png",
                alt: "PostgreSQL",
              },
              {
                src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png",
                alt: "AWS",
              },
            ].map((item, idx) => (
              <img
                key={idx}
                src={item.src}
                alt={item.alt}
                className="h-12"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
