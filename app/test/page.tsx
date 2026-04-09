"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = {
  paper: "#FDF8F0", // warm off-white like handmade paper
  ink: "#1A1A1A", // soft black
  accent: "#D46A4A", // terracotta - warm and distinctive
  accentLight: "#F0D3C4", // blush
  muted: "#8B7D6B", // warm gray
  highlight: "#E8C468", // mustard seed
};

const LivingArchive = () => {
  const [activeProject, setActiveProject] = useState<
    null | (typeof artifacts)[0]
  >(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeOfDay, setTimeOfDay] = useState("day");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6 || hour > 19) setTimeOfDay("night");
    else setTimeOfDay("day");
  }, []);

  // Projects as "artifacts" with emotional weight, not just titles
  const artifacts = [
    {
      id: 1,
      title: "The Quiet Interface",
      category: "Digital / Speculative",
      year: "2024",
      memory: "A meditation on slowness in a world of infinite scroll.",
      emotion: "calm",
      color: "#2E5E4E",
      image: null, // placeholder for your image
    },
    {
      id: 2,
      title: "Concrete Poetry Machine",
      category: "Generative / Installation",
      year: "2023",
      memory: "A typewriter that only writes in shapes.",
      emotion: "playful",
      color: "#D46A4A",
    },
    {
      id: 3,
      title: "Notes from a Garden",
      category: "Editorial / Photography",
      year: "2024",
      memory: "Documenting decay as a form of preservation.",
      emotion: "melancholic",
      color: "#8B7D6B",
    },
    {
      id: 4,
      title: "Invisible Cities Map",
      category: "Interactive / Narrative",
      year: "2023",
      memory: "A map where every path leads to a different story.",
      emotion: "wonder",
      color: "#E8C468",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: timeOfDay === "day" ? colors.paper : "#1A1620",
        color: timeOfDay === "day" ? colors.ink : "#E8E2D9",
        transition: "background-color 1s ease",
      }}
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      {/* Ambient cursor follower - subtle, not annoying */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          width: "60px",
          height: "60px",
          background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 70%)`,
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transition: "transform 0.1s ease",
        }}
      />

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Hero - unconventional, no "I'm a designer" */}
        <div className="mb-32 md:mb-48">
          <div className="space-y-4 max-w-2xl">
            <div
              className="w-16 h-0.5 mb-8"
              style={{ backgroundColor: colors.accent }}
            />
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
              Making things that
              <span
                className="italic ml-3 relative inline-block"
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                  e.currentTarget.style.textDecorationColor = colors.highlight;
                }}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                linger
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-70 max-w-lg mt-6">
              I'm [Your Name]. I build digital artifacts, design systems, and
              occasionally write about silence in technology.
            </p>
          </div>

          {/* Ambient time indicator */}
          <div className="mt-12 text-sm opacity-40 font-mono">
            {timeOfDay === "day"
              ? "☀️ The studio is awake"
              : "🌙 The studio is dreaming"}
          </div>
        </div>

        {/* The Archive - projects as discoverable objects */}
        <div className="space-y-32">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={artifact.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group cursor-pointer"
              onClick={() =>
                setActiveProject(
                  activeProject?.id === artifact.id ? null : artifact,
                )
              }
            >
              {/* The artifact row - organic, not grid-aligned */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                {/* Year as a ritual */}
                <div
                  className="text-sm font-mono tracking-wider md:w-24 shrink-0"
                  style={{ color: colors.accent }}
                >
                  {artifact.year}
                </div>

                {/* Title - large, confident */}
                <div className="flex-1">
                  <h2
                    className="text-3xl md:text-5xl font-light tracking-tight transition-all duration-300"
                    style={{
                      color: artifact.color,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {artifact.title}
                  </h2>

                  <div className="flex gap-3 mt-2 text-sm opacity-50">
                    <span>{artifact.category}</span>
                    <span>•</span>
                    <span className="italic">{artifact.emotion}</span>
                  </div>

                  {/* Expandable memory - unfolds like a thought */}
                  <AnimatePresence>
                    {activeProject?.id === artifact.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="p-6 rounded-sm"
                          style={{
                            backgroundColor:
                              timeOfDay === "day" ? "white" : "#2A2430",
                            borderLeft: `3px solid ${artifact.color}`,
                          }}
                        >
                          <p className="text-base leading-relaxed max-w-xl">
                            {artifact.memory}
                          </p>
                          <button
                            className="mt-4 text-sm font-mono opacity-60 hover:opacity-100 transition"
                            style={{ color: artifact.color }}
                          >
                            Explore this artifact →
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* A visual "thread" connecting to something */}
                <div className="hidden md:block w-12 h-12 self-center">
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
                    style={{ backgroundColor: artifact.color }}
                  />
                </div>
              </div>

              {/* Subtle divider that animates on hover */}
              <div
                className="h-px w-full mt-8 transition-all duration-500 group-hover:opacity-100"
                style={{
                  backgroundColor:
                    timeOfDay === "day" ? colors.muted : "#3A3440",
                  opacity: 0.3,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* The "About" reimagined - not a bio, a confession */}
        <div
          className="mt-48 pt-20 border-t"
          style={{ borderColor: colors.accent + "40" }}
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div
                className="w-12 h-0.5 mb-8"
                style={{ backgroundColor: colors.accent }}
              />
              <h3 className="text-2xl font-light italic">
                "I don't believe in creative blocks. I believe in not paying
                enough attention."
              </h3>
              <p className="mt-6 opacity-70 leading-relaxed">
                Based somewhere between the physical and the digital. I
                collaborate with people who care about the invisible details.
              </p>
            </div>
            <div className="space-y-4 text-sm opacity-60 leading-relaxed">
              <p>
                Currently exploring: generative textures, slow interfaces, and
                the smell of old books.
              </p>
              <p>
                Previously: [Past work place] · [Another place] · [A project you
                loved]
              </p>
              <p className="pt-4">
                <a
                  href="#"
                  className="underline decoration-1 hover:decoration-2 transition"
                  style={{ textDecorationColor: colors.accent }}
                >
                  Let's make something worth remembering →
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer - quiet, not shouting */}
        <footer className="mt-32 pt-12 text-xs opacity-40 font-mono flex flex-col md:flex-row justify-between gap-4">
          <span>
            © {new Date().getFullYear()} — All artifacts are originals
          </span>
          <span className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition">
              Instagram
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Github
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Email
            </a>
          </span>
        </footer>
      </main>
    </div>
  );
};

export default LivingArchive;
