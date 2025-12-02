import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 relative"
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow ${
          theme === "dark" ? "translate-x-6" : ""
        }`}
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
