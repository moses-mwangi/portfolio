// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useTheme, themes } from '../../contexts/ThemeContext';

// export default function ThemeToggle() {
//   const { theme, toggleTheme, resolvedTheme } = useTheme();
//   const [isHovered, setIsHovered] = useState(false);

//   const getIcon = () => {
//     if (theme === themes.AUTO) {
//       return resolvedTheme === 'dark' ? '🌙' : '☀️';
//     }
//     if (theme === themes.LIGHT) return '☀️';
//     if (theme === themes.DARK) return '🌙';
//     return '🔄';
//   };

//   const getLabel = () => {
//     if (theme === themes.AUTO) return 'Auto';
//     if (theme === themes.LIGHT) return 'Light';
//     return 'Dark';
//   };

//   return (
//     <div className="relative">
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={toggleTheme}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="relative group px-4 py-2 rounded-full text-sm font-mono tracking-wider transition-all duration-300"
//         style={{
//           backgroundColor: 'var(--bg-secondary)',
//           border: '1px solid var(--border-color)',
//           color: 'var(--text-primary)'
//         }}
//       >
//         <span className="flex items-center gap-2">
//           <span className="text-lg">{getIcon()}</span>
//           <span className="hidden sm:inline">{getLabel()}</span>
//         </span>
//       </motion.button>

//       <AnimatePresence>
//         {isHovered && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 10 }}
//             className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded text-xs whitespace-nowrap z-50"
//             style={{
//               backgroundColor: 'var(--bg-secondary)',
//               border: '1px solid var(--border-color)',
//               color: 'var(--text-primary)'
//             }}
//           >
//             {theme === themes.AUTO && 'Using system preference • Click to change'}
//             {theme === themes.LIGHT && 'Manual light mode • Click for dark'}
//             {theme === themes.DARK && 'Manual dark mode • Click for auto'}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, resolvedTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = () => {
    if (theme === "auto") {
      return resolvedTheme === "dark" ? "🌙" : "☀️";
    }
    if (theme === "light") return "☀️";
    if (theme === "dark") return "🌙";
    return "🔄";
  };

  const getLabel = () => {
    if (theme === "auto") return "Auto";
    if (theme === "light") return "Light";
    return "Dark";
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group px-4 py-2 rounded-full text-sm font-mono tracking-wider transition-all duration-300"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          color: "var(--text-primary)",
        }}
      >
        <span className="flex items-center gap-2">
          <span className="text-lg">{getIcon()}</span>
          <span className="hidden sm:inline">{getLabel()}</span>
        </span>
      </motion.button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded text-xs whitespace-nowrap z-50"
            style={{
              backgroundColor: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            {theme === "auto" && "Using system preference • Click to change"}
            {theme === "light" && "Manual light mode • Click for dark"}
            {theme === "dark" && "Manual dark mode • Click for auto"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
