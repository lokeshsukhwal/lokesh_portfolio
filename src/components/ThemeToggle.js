import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
      aria-pressed={isLight}
      title={`Switch to ${isLight ? "dark" : "light"} mode`}
      whileTap={{ scale: 0.94 }}
      className="theme-toggle relative inline-flex h-10 w-20 items-center rounded-full p-1"
    >
      <span className="theme-cloud theme-cloud-one" />
      <span className="theme-cloud theme-cloud-two" />
      <span className="theme-star theme-star-one" />
      <span className="theme-star theme-star-two" />
      <span className="theme-sun absolute left-2 text-xs"><FaSun /></span>
      <span className="theme-moon absolute right-2 text-xs"><FaMoon /></span>
      <motion.span
        key={theme}
        initial={{ x: isLight ? 40 : 0, y: 0, rotate: isLight ? 18 : 0 }}
        animate={{ x: isLight ? 0 : 40, y: [0, -7, 0], rotate: isLight ? 0 : 18 }}
        transition={{ x: { type: "spring", stiffness: 450, damping: 28 }, y: { duration: .42, ease: "easeOut" }, rotate: { duration: .35 } }}
        className="theme-toggle-thumb relative z-10 grid h-8 w-8 place-items-center rounded-full"
      >
        {isLight ? <FaSun className="theme-toggle-thumb-sun" /> : <FaMoon className="theme-toggle-thumb-moon" />}
      </motion.span>
    </motion.button>
  );
}
