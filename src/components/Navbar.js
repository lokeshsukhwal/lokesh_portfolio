import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const links = [
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Work", href: "#projects", id: "projects" },
  { name: "Notes", href: "#notes", id: "notes" },
  { name: "Lab", href: "#playground", id: "playground" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -58%", threshold: [0, .15, .35, .6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-navbar pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav className={`navbar-surface pointer-events-auto mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-3 transition duration-300 sm:px-4 lg:px-5 ${scrolled ? "navbar-surface-scrolled" : ""}`} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3 text-white" aria-label="Lokesh Sukhwal — Home" aria-current={activeSection === "home" ? "page" : undefined}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-blue-200/25 bg-blue-300/[.07] font-mono text-xs font-bold text-blue-200 transition group-hover:rotate-6 group-hover:border-blue-200/45">LS</span>
          <span className="hidden font-exo2 text-xl font-bold tracking-tight sm:block">Lokesh<span className="text-orange-300">.</span></span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = activeSection === link.id;
            return <a key={link.id} href={link.href} aria-current={active ? "page" : undefined} className={`navbar-link rounded-full px-4 py-2 text-sm font-medium transition ${active ? "navbar-link-active text-white" : "text-slate-400 hover:text-white"}`}>{link.name}</a>;
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block"><ThemeToggle /></div>
          <a href="#contact" className={`group hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition sm:inline-flex ${activeSection === "contact" ? "bg-blue-300 text-slate-950" : "border border-blue-200/25 bg-blue-300/[.07] text-blue-100 hover:-translate-y-0.5 hover:bg-blue-300 hover:text-slate-950"}`} aria-current={activeSection === "contact" ? "page" : undefined}>Let’s talk <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" /></a>
          <button type="button" className="navbar-menu-button grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[.04] text-slate-100 md:hidden" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation menu" : "Open navigation menu"}>{open ? <FaTimes /> : <FaBars />}</button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" initial={{ opacity: 0, y: -10, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .2 }} className="site-mobile-menu pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 p-3 backdrop-blur-2xl md:hidden">
            <div className="grid gap-1">
              <a onClick={closeMenu} className={`mobile-nav-link rounded-xl px-4 py-3 font-medium ${activeSection === "home" ? "bg-blue-300/[.09] text-blue-200" : "text-slate-300"}`} href="#home">Home</a>
              {links.map((link) => <a onClick={closeMenu} aria-current={activeSection === link.id ? "page" : undefined} className={`mobile-nav-link rounded-xl px-4 py-3 font-medium ${activeSection === link.id ? "bg-blue-300/[.09] text-blue-200" : "text-slate-300"}`} key={link.id} href={link.href}>{link.name}</a>)}
              <a onClick={closeMenu} href="#contact" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-300 px-4 py-3 font-semibold text-slate-950">Let’s talk <FaArrowRight className="text-xs" /></a>
              <div className="mt-2 flex items-center justify-between border-t border-white/[.08] px-3 pt-3 text-sm text-slate-400"><span>Appearance</span><ThemeToggle /></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
