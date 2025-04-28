import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Core Java</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Deep understanding of Java fundamentals, OOP concepts,
              collections, multithreading, and JVM internals.
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>

          {/* Skill 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Spring Framework</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Expertise in Spring Boot, Spring MVC, Spring Security, Spring
              Data, and Spring Cloud for microservices.
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* Skill 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Database Systems</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Experience with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB)
              databases, query optimization, and ORM tools.
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-purple-600 h-2.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Skill 4 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Microservices</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Designing and implementing scalable microservices architecture
              with Docker, Kubernetes, and cloud platforms.
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-yellow-600 h-2.5 rounded-full"
                style={{ width: "88%" }}
              ></div>
            </div>
          </div>

          {/* Skill 5 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">DevOps</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              CI/CD pipelines, Docker containerization, Kubernetes
              orchestration, and cloud deployment (AWS, Azure).
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-red-600 h-2.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Skill 6 */}
          <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold">Problem Solving</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Strong analytical skills with a track record of solving complex
              technical challenges efficiently.
            </p>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: "92%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
