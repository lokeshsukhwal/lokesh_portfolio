import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CinematicHero from "./components/CinematicHero";
import CaseStudies from "./components/CaseStudies";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300">
          <Navbar />
          <main>
            <CinematicHero />
            <About />
            <Skills />
            <Projects />
            <CaseStudies />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;
