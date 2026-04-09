// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { artifacts, aboutData } from "../data/artifacts";
// import AmbientCursor from "../components/AmbientCursor";
// import UniqueNav from "../app/components/UniqueNav";
// import ProjectDrawer from "../app/components/ProjectDrawer";

// export default function LivingArchive() {
//   const [activeProject, setActiveProject] = useState(null);
//   const [timeOfDay, setTimeOfDay] = useState("day");
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrolled, setScrolled] = useState(false);
//   const [randomArtifact, setRandomArtifact] = useState(null);
//   const mainRef = useRef(null);

//   // Time-based mood
//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 6 || hour > 19) setTimeOfDay("night");
//     else setTimeOfDay("day");
//   }, []);

//   // Scroll listener for nav
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Random artifact Easter egg
//   const showRandomArtifact = () => {
//     const random = artifacts[Math.floor(Math.random() * artifacts.length)];
//     setRandomArtifact(random);
//     setTimeout(() => setRandomArtifact(null), 5000);
//   };

//   const isNight = timeOfDay === "night";

//   return (
//     <>
//       <div
//         className="min-h-screen transition-colors duration-1000"
//         style={{
//           backgroundColor: isNight ? "var(--night-bg)" : "var(--paper)",
//           color: isNight ? "var(--night-text)" : "var(--ink)",
//         }}
//       >
//         {/* Ambient cursor */}
//         <AmbientCursor />

//         {/* Unique navigation */}
//         <UniqueNav isNight={isNight} scrolled={scrolled} />

//         {/* Random artifact toast */}
//         <AnimatePresence>
//           {/* {randomArtifact && ( */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             className="fixed bottom-6 right-6 z-50 p-4 rounded-lg shadow-xl max-w-sm"
//             style={{ backgroundColor: randomArtifact?.color, color: "white" }}
//           >
//             <p className="text-sm font-medium">✨ Random Artifact</p>
//             <p className="text-lg font-light">
//               {randomArtifact?.title ?? "Moses"}
//             </p>
//             <p className="text-lg font-light">{randomArtifact?.title}</p>
//             <p className="text-xs opacity-90 mt-1">{randomArtifact?.memory}</p>
//           </motion.div>
//           {/* // )} */}
//         </AnimatePresence>

//         <main ref={mainRef} className="max-w-6xl mx-auto px-6 py-12 md:py-20">
//           {/* Hero Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="mb-32 md:mb-48"
//           >
//             <div className="space-y-6 max-w-3xl">
//               <div
//                 className="w-16 h-0.5 mb-8 animate-glow"
//                 style={{ backgroundColor: "var(--terracotta)" }}
//               />
//               <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]">
//                 Making things that
//                 <span
//                   className="italic ml-3 relative inline-block group cursor-pointer"
//                   onClick={showRandomArtifact}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.textDecoration = "underline";
//                     e.currentTarget.style.textDecorationColor =
//                       "var(--mustard)";
//                   }}
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.textDecoration = "none")
//                   }
//                 >
//                   linger
//                   <span className="absolute -bottom-6 left-0 text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//                     (click me)
//                   </span>
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl opacity-70 max-w-lg mt-6 leading-relaxed">
//                 I'm <span className="font-medium">[Your Name]</span>. I build
//                 digital artifacts, design systems that breathe, and occasionally
//                 write about silence in technology.
//               </p>
//             </div>

//             {/* Time indicator */}
//             <div className="mt-16 flex items-center gap-3 text-sm opacity-50 font-mono">
//               <span
//                 className="inline-block w-2 h-2 rounded-full"
//                 style={{ backgroundColor: "var(--terracotta)" }}
//               />
//               {isNight ? "🌙 The studio is dreaming" : "☀️ The studio is awake"}
//             </div>
//           </motion.div>

//           {/* The Archive - Projects Section */}
//           <div className="space-y-32">
//             {artifacts.map((artifact, index) => (
//               <motion.div
//                 key={artifact.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 className="relative group cursor-pointer"
//                 onClick={() => setActiveProject(artifact)}
//               >
//                 <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
//                   {/* Year */}
//                   <div
//                     className="text-sm font-mono tracking-wider md:w-24 shrink-0"
//                     style={{ color: "var(--terracotta)" }}
//                   >
//                     {artifact.year}
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <h2
//                       className="text-3xl md:text-5xl font-light tracking-tight transition-all duration-300 hover:translate-x-2"
//                       style={{
//                         color: artifact.color,
//                         letterSpacing: "-0.02em",
//                       }}
//                     >
//                       {artifact.title}
//                     </h2>

//                     <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-sm opacity-60">
//                       <span>{artifact.category}</span>
//                       <span>•</span>
//                       <span className="italic">{artifact.emotion}</span>
//                       <span>•</span>
//                       <span>{artifact.role}</span>
//                     </div>

//                     {/* Preview memory */}
//                     <p className="mt-4 text-base opacity-70 leading-relaxed max-w-xl">
//                       {artifact.memory}
//                     </p>

//                     {/* Expand indicator */}
//                     <div className="mt-4 flex items-center gap-2 text-xs opacity-40 group-hover:opacity-100 transition">
//                       <span>Click to explore</span>
//                       <span>→</span>
//                     </div>
//                   </div>

//                   {/* Visual marker */}
//                   <div className="hidden md:block w-12 h-12 self-center">
//                     <div
//                       className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"
//                       style={{ backgroundColor: artifact.color, opacity: 0.5 }}
//                     />
//                   </div>
//                 </div>

//                 {/* Divider */}
//                 <div
//                   className="h-px w-full mt-8 transition-all duration-500 group-hover:opacity-100"
//                   style={{
//                     backgroundColor: isNight ? "#3A3440" : "var(--muted)",
//                     opacity: 0.2,
//                   }}
//                 />
//               </motion.div>
//             ))}
//           </div>

//           {/* About Section - Reimagined */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="mt-48 pt-20 border-t"
//             style={{ borderColor: "var(--terracotta)40" }}
//           >
//             <div className="grid md:grid-cols-2 gap-16">
//               <div>
//                 <div
//                   className="w-12 h-0.5 mb-8"
//                   style={{ backgroundColor: "var(--terracotta)" }}
//                 />
//                 <h3 className="text-2xl md:text-3xl font-light italic leading-relaxed">
//                   "{aboutData.manifesto}"
//                 </h3>
//                 <p className="mt-6 opacity-80 leading-relaxed">
//                   {aboutData.longBio}
//                 </p>
//               </div>
//               <div className="space-y-6">
//                 <div>
//                   <h4 className="text-xs font-mono tracking-wider opacity-50 mb-3">
//                     CURRENTLY EXPLORING
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {aboutData.currentExplorations.map((item, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 text-sm rounded-full"
//                         style={{
//                           backgroundColor: isNight ? "#2A2430" : "var(--blush)",
//                           opacity: 0.8,
//                         }}
//                       >
//                         {item}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-xs font-mono tracking-wider opacity-50 mb-3">
//                     PREVIOUSLY
//                   </h4>
//                   <div className="space-y-2">
//                     {aboutData.pastWork.map((work, i) => (
//                       <div key={i} className="flex justify-between text-sm">
//                         <span className="opacity-80">{work.role}</span>
//                         <span className="opacity-50 font-mono text-xs">
//                           {work.company}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="pt-4">
//                   <a
//                     href={`mailto:${aboutData.contactEmail}`}
//                     className="inline-flex items-center gap-2 text-sm underline decoration-1 hover:decoration-2 transition"
//                     style={{ textDecorationColor: "var(--terracotta)" }}
//                   >
//                     Let's make something worth remembering
//                     <span>→</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Footer */}
//           <footer className="mt-32 pt-12 text-xs opacity-40 font-mono flex flex-col md:flex-row justify-between gap-4">
//             <span>
//               © {new Date().getFullYear()} — All artifacts are originals
//             </span>
//             <div className="flex gap-6">
//               <a
//                 href={aboutData.social.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-100 transition"
//               >
//                 Instagram
//               </a>
//               <a
//                 href={aboutData.social.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-100 transition"
//               >
//                 Github
//               </a>
//               <a
//                 href={aboutData.social.twitter}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:opacity-100 transition"
//               >
//                 Twitter
//               </a>
//             </div>
//           </footer>
//         </main>

//         {/* Project Drawer */}
//         <ProjectDrawer
//           project={activeProject}
//           isOpen={!!activeProject}
//           onClose={() => setActiveProject(null)}
//           isNight={isNight}
//         />
//       </div>
//     </>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { artifacts, aboutData } from "@/data/artifacts";
import { Artifact } from "@/types";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmbientCursor from "@/components/AmbientCursor";

export default function HomePage() {
  const [activeProject, setActiveProject] = useState<Artifact | null>(null);
  const [timeOfDay, setTimeOfDay] = useState<"day" | "night">("day");
  const [randomArtifact, setRandomArtifact] = useState<Artifact | null>(null);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6 || hour > 19) setTimeOfDay("night");
    else setTimeOfDay("day");
  }, []);

  const showRandomArtifact = () => {
    const random = artifacts[Math.floor(Math.random() * artifacts.length)];
    setRandomArtifact(random);
    setTimeout(() => setRandomArtifact(null), 5000);
  };

  const isNight = timeOfDay === "night";

  return (
    <div className="min-h-screen transition-colors duration-1000">
      <AmbientCursor />
      <Header />

      {/* Random artifact toast */}
      <AnimatePresence>
        {randomArtifact && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-lg shadow-xl max-w-sm"
            style={{ backgroundColor: randomArtifact.color, color: "white" }}
          >
            <p className="text-sm font-medium">✨ Random Artifact</p>
            <p className="text-lg font-light">{randomArtifact.title}</p>
            <p className="text-xs opacity-90 mt-1">{randomArtifact.memory}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20 pt-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-32 md:mb-48"
        >
          <div className="space-y-6 max-w-3xl">
            <div
              className="w-16 h-0.5 mb-8 animate-glow"
              style={{ backgroundColor: "var(--terracotta)" }}
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1]">
              Making things that
              <span
                className="italic ml-3 relative inline-block group cursor-pointer"
                onClick={showRandomArtifact}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textDecoration = "underline";
                  e.currentTarget.style.textDecorationColor = "var(--mustard)";
                }}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                linger
                <span className="absolute -bottom-6 left-0 text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  (click me)
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-70 max-w-lg mt-6 leading-relaxed">
              I'm <span className="font-medium">[Your Name]</span>. I build
              digital artifacts, design systems that breathe, and occasionally
              write about silence in technology.
            </p>
          </div>

          <div className="mt-16 flex items-center gap-3 text-sm opacity-50 font-mono">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--terracotta)" }}
            />
            {isNight ? "🌙 The studio is dreaming" : "☀️ The studio is awake"}
          </div>
        </motion.div>

        {/* The Archive - Projects Section */}
        <div id="archive" className="space-y-32">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={artifact.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group cursor-pointer"
              onClick={() => setActiveProject(artifact)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <div
                  className="text-sm font-mono tracking-wider md:w-24 shrink-0"
                  style={{ color: "var(--terracotta)" }}
                >
                  {artifact.year}
                </div>

                <div className="flex-1">
                  <h2
                    className="text-3xl md:text-5xl font-light tracking-tight transition-all duration-300 hover:translate-x-2"
                    style={{
                      color: artifact.color,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {artifact.title}
                  </h2>

                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-sm opacity-60">
                    <span>{artifact.category}</span>
                    <span>•</span>
                    <span className="italic">{artifact.emotion}</span>
                    <span>•</span>
                    <span>{artifact.role}</span>
                  </div>

                  <p className="mt-4 text-base opacity-70 leading-relaxed max-w-xl">
                    {artifact.memory}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs opacity-40 group-hover:opacity-100 transition">
                    <span>Click to explore</span>
                    <span>→</span>
                  </div>
                </div>

                <div className="hidden md:block w-12 h-12 self-center">
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"
                    style={{ backgroundColor: artifact.color, opacity: 0.5 }}
                  />
                </div>
              </div>

              <div
                className="h-px w-full mt-8 transition-all duration-500 group-hover:opacity-100"
                style={{
                  backgroundColor: "var(--border-color)",
                  opacity: 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-48 pt-20 border-t"
          style={{ borderColor: "var(--terracotta)40" }}
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div
                className="w-12 h-0.5 mb-8"
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              <h3 className="text-2xl md:text-3xl font-light italic leading-relaxed">
                "{aboutData.manifesto}"
              </h3>
              <p className="mt-6 opacity-80 leading-relaxed">
                {aboutData.longBio}
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono tracking-wider opacity-50 mb-3">
                  CURRENTLY EXPLORING
                </h4>
                <div className="flex flex-wrap gap-2">
                  {aboutData.currentExplorations.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        opacity: 0.8,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-mono tracking-wider opacity-50 mb-3">
                  PREVIOUSLY
                </h4>
                <div className="space-y-2">
                  {aboutData.pastWork.map((work, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="opacity-80">{work.role}</span>
                      <span className="opacity-50 font-mono text-xs">
                        {work.company}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <a
                  href={`mailto:${aboutData.contactEmail}`}
                  className="inline-flex items-center gap-2 text-sm underline decoration-1 hover:decoration-2 transition"
                  style={{ textDecorationColor: "var(--terracotta)" }}
                >
                  Let's make something worth remembering
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <Footer />
      </main>

      {/* Project Drawer Modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl z-50 shadow-2xl overflow-y-auto"
              style={{ backgroundColor: "var(--bg-primary)" }}
            >
              <div className="p-8 md:p-12">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-60 transition"
                >
                  ✕
                </button>

                <div
                  className="w-16 h-0.5 mb-8"
                  style={{ backgroundColor: activeProject.color }}
                />

                <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                      {activeProject.title}
                    </h2>
                    <div className="flex gap-3 mt-3 text-sm opacity-60">
                      <span>{activeProject.category}</span>
                      <span>•</span>
                      <span>{activeProject.yearLong}</span>
                      <span>•</span>
                      <span>{activeProject.role}</span>
                    </div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: `${activeProject.color}20`,
                      color: activeProject.color,
                    }}
                  >
                    {activeProject.emotion}
                  </div>
                </div>

                <div
                  className="mb-8 p-6 italic border-l-2"
                  style={{ borderColor: activeProject.color }}
                >
                  <p className="text-lg leading-relaxed">
                    "{activeProject.memory}"
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-mono tracking-wider opacity-50 mb-3">
                    DESCRIPTION
                  </h3>
                  <p className="leading-relaxed">{activeProject.description}</p>
                </div>

                {activeProject.process && (
                  <div className="mb-8">
                    <h3 className="text-sm font-mono tracking-wider opacity-50 mb-3">
                      PROCESS
                    </h3>
                    <ul className="space-y-2">
                      {activeProject.process.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="opacity-40">
                            {String(i + 1).padStart(2, "0")}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-sm font-mono tracking-wider opacity-50 mb-3">
                    TOOLS & TECH
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{ backgroundColor: "var(--bg-secondary)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.testimonial && (
                  <div
                    className="mb-8 p-6 rounded-lg"
                    style={{ backgroundColor: "var(--bg-secondary)" }}
                  >
                    <p className="text-sm italic leading-relaxed">
                      "{activeProject.testimonial.text}"
                    </p>
                    <p className="text-xs mt-3 opacity-60">
                      — {activeProject.testimonial.author}
                    </p>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-full transition hover:opacity-70"
                      style={{
                        backgroundColor: activeProject.color,
                        color: "white",
                      }}
                    >
                      Live Project →
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm rounded-full border transition hover:opacity-70"
                      style={{
                        borderColor: activeProject.color,
                        color: activeProject.color,
                      }}
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
