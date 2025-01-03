"use client";

// Package Imports
import { createContext, useState, useEffect, ReactNode } from "react";

// Custom Imports
import { ThemeContext as ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("");

  // Update theme based on system preference or localStorage
  useEffect(() => {
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      setTheme(systemPref.matches ? "dark" : "light");
    };

    // Set initial theme
    updateTheme();

    // Listen for changes in system preference
    systemPref.addEventListener("change", updateTheme);

    // Cleanup listener
    return () => {
      systemPref.removeEventListener("change", updateTheme);
    };
  }, []);

  // Apply theme to the document
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
