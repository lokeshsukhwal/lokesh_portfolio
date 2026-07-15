import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ringRadius = 21;
const circumference = 2 * Math.PI * ringRadius;

export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    let frame;
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
      setProgress(nextProgress);
      setPastHero(window.scrollY > window.innerHeight * .72);
      frame = undefined;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return undefined;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), { threshold: .08 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  function scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }

  const visible = pastHero && !footerVisible;
  const roundedProgress = Math.round(progress);
  const ringOffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12, scale: .9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: .92 }}
          transition={{ duration: .2 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: .94 }}
          className="scroll-top-control fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full sm:bottom-7 sm:right-7"
          aria-label={`Scroll to top. ${roundedProgress}% of page viewed.`}
          title="Back to top"
        >
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 52 52">
            <circle className="scroll-progress-track" cx="26" cy="26" r={ringRadius} fill="none" strokeWidth="1.5" />
            <circle className="scroll-progress-value" cx="26" cy="26" r={ringRadius} fill="none" strokeWidth="1.5" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={ringOffset} />
          </svg>
          <FaArrowUp aria-hidden="true" className="relative text-sm text-slate-200" />
          <span className="sr-only">{roundedProgress}% viewed</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
