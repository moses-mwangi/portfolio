"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function UniqueNav({ isNight, scrolled }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "archive", "about"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "hero") setActiveSection("hero");
            else if (id === "archive") setActiveSection("archive");
            else if (id === "about") setActiveSection("about");
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3 backdrop-blur-md" : "py-6"
      }`}
      style={{
        backgroundColor: scrolled
          ? isNight
            ? "rgba(26, 22, 32, 0.8)"
            : "rgba(253, 248, 240, 0.8)"
          : "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollTo("hero")}
          className="text-sm font-mono tracking-wider hover:opacity-60 transition"
          style={{ color: isNight ? "var(--night-text)" : "var(--ink)" }}
        >
          [LA]
        </button>

        <div className="flex gap-8 text-sm font-light">
          {["hero", "archive", "about"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="relative group"
            >
              <span className="capitalize">{section}</span>
              {activeSection === section && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ backgroundColor: "var(--terracotta)" }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className="text-xs opacity-50 hover:opacity-100 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
    </motion.nav>
  );
}
