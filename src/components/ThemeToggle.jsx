import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-charcoal dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all border border-transparent dark:border-gray-700 shadow-sm"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon size={18} className="stroke-[1.5]" />
      ) : (
        <Sun size={18} className="stroke-[1.5]" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
