// import React, { createContext, useState, useEffect, useContext } from 'react';

// const ThemeContext = createContext({});

// export const themes = {
//   LIGHT: 'light',
//   DARK: 'dark',
//   AUTO: 'auto'
// };

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState(themes.AUTO);
//   const [resolvedTheme, setResolvedTheme] = useState('light');
//   const [mounted, setMounted] = useState(false);

//   // Get system preference
//   const getSystemTheme = () => {
//     if (typeof window === 'undefined') return 'light';
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   };

//   // Resolve actual theme based on setting
//   const resolveTheme = () => {
//     if (theme === themes.AUTO) {
//       return getSystemTheme();
//     }
//     return theme;
//   };

//   // Apply theme to DOM
//   const applyTheme = (newResolvedTheme) => {
//     const root = document.documentElement;
//     if (newResolvedTheme === 'dark') {
//       root.classList.add('dark');
//       root.style.setProperty('--bg-primary', '#1A1620');
//       root.style.setProperty('--text-primary', '#E8E2D9');
//       root.style.setProperty('--bg-secondary', '#2A2430');
//       root.style.setProperty('--border-color', '#3A3440');
//     } else {
//       root.classList.remove('dark');
//       root.style.setProperty('--bg-primary', '#FDF8F0');
//       root.style.setProperty('--text-primary', '#1A1A1A');
//       root.style.setProperty('--bg-secondary', '#FFFFFF');
//       root.style.setProperty('--border-color', '#E5E0D8');
//     }
//   };

//   // Listen to system changes when in AUTO mode
//   useEffect(() => {
//     if (!mounted) return;

//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     const handleChange = () => {
//       if (theme === themes.AUTO) {
//         const newResolved = getSystemTheme();
//         setResolvedTheme(newResolved);
//         applyTheme(newResolved);
//       }
//     };

//     mediaQuery.addEventListener('change', handleChange);
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, [theme, mounted]);

//   // Initial mount and theme changes
//   useEffect(() => {
//     setMounted(true);
//     const savedTheme = localStorage.getItem('theme') || themes.AUTO;
//     setTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     if (!mounted) return;
    
//     const newResolved = resolveTheme();
//     setResolvedTheme(newResolved);
//     applyTheme(newResolved);
//     localStorage.setItem('theme', theme);
//   }, [theme, mounted]);

//   const toggleTheme = () => {
//     setTheme(current => {
//       if (current === themes.LIGHT) return themes.DARK;
//       if (current === themes.DARK) return themes.AUTO;
//       return themes.LIGHT;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, resolvedTheme, toggleTheme, themes }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error('useTheme must be used within ThemeProvider');
//   return context;
// };s

"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

import { ThemeContextType } from "@/types";

const ThemeContext =
  createContext<ThemeContextType | undefined>(
    undefined
  );

export const themes = {
  LIGHT: "light" as const,
  DARK: "dark" as const,
  AUTO: "auto" as const,
};

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<
    "light" | "dark" | "auto"
  >("auto");

  const [resolvedTheme, setResolvedTheme] =
    useState<"light" | "dark">("light");

  const [mounted, setMounted] =
    useState(false);

  /* ================= SYSTEM THEME ================= */

  const getSystemTheme =
    (): "light" | "dark" => {
      if (typeof window === "undefined")
        return "light";

      return window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
        ? "dark"
        : "light";
    };

  const resolveTheme =
    (): "light" | "dark" => {
      if (theme === "auto") {
        return getSystemTheme();
      }
      return theme;
    };

  /* ================= APPLY THEME ================= */

  const applyTheme = (
    newResolvedTheme: "light" | "dark"
  ) => {
    if (typeof document === "undefined")
      return;

    const root =
      document.documentElement;

    if (newResolvedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  /* ================= LISTEN TO SYSTEM CHANGES ================= */

  useEffect(() => {
    if (typeof window === "undefined")
      return;

    const mediaQuery =
      window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

    const handleChange = () => {
      if (theme === "auto") {
        const newResolved =
          getSystemTheme();

        setResolvedTheme(
          newResolved
        );

        applyTheme(
          newResolved
        );
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () =>
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
  }, [theme]);

  /* ================= INITIAL LOAD ================= */

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined")
      return;

    const savedTheme =
      localStorage.getItem(
        "theme"
      ) as
        | "light"
        | "dark"
        | "auto"
        | null;

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  /* ================= UPDATE THEME ================= */

  useEffect(() => {
    if (!mounted) return;

    const newResolved =
      resolveTheme();

    setResolvedTheme(
      newResolved
    );

    applyTheme(newResolved);

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme, mounted]);

  /* ================= TOGGLE ================= */

  const toggleTheme = () => {
    setTheme((current) => {
      if (current === "light")
        return "dark";

      if (current === "dark")
        return "auto";

      return "light";
    });
  };

  /* ================= PROVIDER ================= */

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        toggleTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/* ================= HOOK ================= */

export const useTheme = () => {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used within ThemeProvider"
    );
  }

  return context;
};