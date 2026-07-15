import React, { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import FieldNotes from "./components/FieldNotes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import InteractiveResume from "./components/InteractiveResume";
const Playground = lazy(() => import('./components/Playground'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return undefined;
    const timer = setTimeout(() => {
      setLoading(false);
    }, 820);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="app-shell min-h-screen bg-[#0b0b0f] text-slate-100 transition-colors duration-300" aria-busy={loading}>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#0E1218]/90 focus:text-slate-100 focus:px-3 focus:py-2 rounded-md" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <InteractiveResume />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <FieldNotes />
        <Suspense fallback={<div className="py-16"><div className="max-w-4xl mx-auto px-6">Loading playground…</div></div>}>
          <Playground />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
