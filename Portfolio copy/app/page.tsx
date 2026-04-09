// // import Navbar from "./components/Navbar";
// // import HeroSection from "./components/HeroSection";
// // import AboutSection from "./components/AboutSection";
// // import SkillsSection from "./components/SkillsSection";
// // import ProjectsSection from "./components/ProjectsSection";
// // import ExperienceSection from "./components/ExperienceSection";
// // import ServicesSection from "./components/ServicesSection";
// // import TestimonialsSection from "./components/TestimonialsSection";
// // import ContactSection from "./components/ContactSection";
// // import Footer from "./components/Footer";

// // export default function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <main>
// //         <HeroSection />
// //         <AboutSection />
// //         <SkillsSection />
// //         <ProjectsSection />
// //         <ExperienceSection />
// //         <ServicesSection />
// //         <TestimonialsSection />
// //         <ContactSection />
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Unique color palette - warm, organic, memorable
// const colors = {
//   paper: "#FDF8F0", // warm off-white like handmade paper
//   ink: "#1A1A1A", // soft black
//   accent: "#D46A4A", // terracotta - warm and distinctive
//   accentLight: "#F0D3C4", // blush
//   muted: "#8B7D6B", // warm gray
//   highlight: "#E8C468", // mustard seed
// };

// const LivingArchive = () => {
//   const [activeProject, setActiveProject] = useState<
//     null | (typeof artifacts)[0]
//   >(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [timeOfDay, setTimeOfDay] = useState("day");

//   useEffect(() => {
//     const hour = new Date().getHours();
//     if (hour < 6 || hour > 19) setTimeOfDay("night");
//     else setTimeOfDay("day");
//   }, []);

//   // Projects as "artifacts" with emotional weight, not just titles
//   const artifacts = [
//     {
//       id: 1,
//       title: "The Quiet Interface",
//       category: "Digital / Speculative",
//       year: "2024",
//       memory: "A meditation on slowness in a world of infinite scroll.",
//       emotion: "calm",
//       color: "#2E5E4E",
//       image: null, // placeholder for your image
//     },
//     {
//       id: 2,
//       title: "Concrete Poetry Machine",
//       category: "Generative / Installation",
//       year: "2023",
//       memory: "A typewriter that only writes in shapes.",
//       emotion: "playful",
//       color: "#D46A4A",
//     },
//     {
//       id: 3,
//       title: "Notes from a Garden",
//       category: "Editorial / Photography",
//       year: "2024",
//       memory: "Documenting decay as a form of preservation.",
//       emotion: "melancholic",
//       color: "#8B7D6B",
//     },
//     {
//       id: 4,
//       title: "Invisible Cities Map",
//       category: "Interactive / Narrative",
//       year: "2023",
//       memory: "A map where every path leads to a different story.",
//       emotion: "wonder",
//       color: "#E8C468",
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen"
//       style={{
//         backgroundColor: timeOfDay === "day" ? colors.paper : "#1A1620",
//         color: timeOfDay === "day" ? colors.ink : "#E8E2D9",
//         transition: "background-color 1s ease",
//       }}
//       onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
//     >
//       {/* Ambient cursor follower - subtle, not annoying */}
//       <div
//         className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
//         style={{
//           width: "60px",
//           height: "60px",
//           background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 70%)`,
//           left: mousePosition.x - 30,
//           top: mousePosition.y - 30,
//           transition: "transform 0.1s ease",
//         }}
//       />

//       {/* Main content */}
//       <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
//         {/* Hero - unconventional, no "I'm a designer" */}
//         <div className="mb-32 md:mb-48">
//           <div className="space-y-4 max-w-2xl">
//             <div
//               className="w-16 h-0.5 mb-8"
//               style={{ backgroundColor: colors.accent }}
//             />
//             <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
//               Making things that
//               <span
//                 className="italic ml-3 relative inline-block"
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.textDecoration = "underline";
//                   e.currentTarget.style.textDecorationColor = colors.highlight;
//                 }}
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.textDecoration = "none")
//                 }
//               >
//                 linger
//               </span>
//             </h1>
//             <p className="text-lg md:text-xl opacity-70 max-w-lg mt-6">
//               I'm [Your Name]. I build digital artifacts, design systems, and
//               occasionally write about silence in technology.
//             </p>
//           </div>

//           {/* Ambient time indicator */}
//           <div className="mt-12 text-sm opacity-40 font-mono">
//             {timeOfDay === "day"
//               ? "☀️ The studio is awake"
//               : "🌙 The studio is dreaming"}
//           </div>
//         </div>

//         {/* The Archive - projects as discoverable objects */}
//         <div className="space-y-32">
//           {artifacts.map((artifact, index) => (
//             <motion.div
//               key={artifact.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               className="relative group cursor-pointer"
//               onClick={() =>
//                 setActiveProject(
//                   activeProject === artifact.id ? null : artifact.id,
//                 )
//               }
//             >
//               {/* The artifact row - organic, not grid-aligned */}
//               <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
//                 {/* Year as a ritual */}
//                 <div
//                   className="text-sm font-mono tracking-wider md:w-24 shrink-0"
//                   style={{ color: colors.accent }}
//                 >
//                   {artifact.year}
//                 </div>

//                 {/* Title - large, confident */}
//                 <div className="flex-1">
//                   <h2
//                     className="text-3xl md:text-5xl font-light tracking-tight transition-all duration-300"
//                     style={{
//                       color: artifact.color,
//                       letterSpacing: "-0.02em",
//                     }}
//                   >
//                     {artifact.title}
//                   </h2>

//                   <div className="flex gap-3 mt-2 text-sm opacity-50">
//                     <span>{artifact.category}</span>
//                     <span>•</span>
//                     <span className="italic">{artifact.emotion}</span>
//                   </div>

//                   {/* Expandable memory - unfolds like a thought */}
//                   <AnimatePresence>
//                     {activeProject === artifact.id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0, marginTop: 0 }}
//                         animate={{ opacity: 1, height: "auto", marginTop: 24 }}
//                         exit={{ opacity: 0, height: 0, marginTop: 0 }}
//                         transition={{ duration: 0.4 }}
//                         className="overflow-hidden"
//                       >
//                         <div
//                           className="p-6 rounded-sm"
//                           style={{
//                             backgroundColor:
//                               timeOfDay === "day" ? "white" : "#2A2430",
//                             borderLeft: `3px solid ${artifact.color}`,
//                           }}
//                         >
//                           <p className="text-base leading-relaxed max-w-xl">
//                             {artifact.memory}
//                           </p>
//                           <button
//                             className="mt-4 text-sm font-mono opacity-60 hover:opacity-100 transition"
//                             style={{ color: artifact.color }}
//                           >
//                             Explore this artifact →
//                           </button>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 {/* A visual "thread" connecting to something */}
//                 <div className="hidden md:block w-12 h-12 self-center">
//                   <div
//                     className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150"
//                     style={{ backgroundColor: artifact.color }}
//                   />
//                 </div>
//               </div>

//               {/* Subtle divider that animates on hover */}
//               <div
//                 className="h-px w-full mt-8 transition-all duration-500 group-hover:opacity-100"
//                 style={{
//                   backgroundColor:
//                     timeOfDay === "day" ? colors.muted : "#3A3440",
//                   opacity: 0.3,
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* The "About" reimagined - not a bio, a confession */}
//         <div
//           className="mt-48 pt-20 border-t"
//           style={{ borderColor: colors.accent + "40" }}
//         >
//           <div className="grid md:grid-cols-2 gap-16">
//             <div>
//               <div
//                 className="w-12 h-0.5 mb-8"
//                 style={{ backgroundColor: colors.accent }}
//               />
//               <h3 className="text-2xl font-light italic">
//                 "I don't believe in creative blocks. I believe in not paying
//                 enough attention."
//               </h3>
//               <p className="mt-6 opacity-70 leading-relaxed">
//                 Based somewhere between the physical and the digital. I
//                 collaborate with people who care about the invisible details.
//               </p>
//             </div>
//             <div className="space-y-4 text-sm opacity-60 leading-relaxed">
//               <p>
//                 Currently exploring: generative textures, slow interfaces, and
//                 the smell of old books.
//               </p>
//               <p>
//                 Previously: [Past work place] · [Another place] · [A project you
//                 loved]
//               </p>
//               <p className="pt-4">
//                 <a
//                   href="#"
//                   className="underline decoration-1 hover:decoration-2 transition"
//                   style={{ textDecorationColor: colors.accent }}
//                 >
//                   Let's make something worth remembering →
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer - quiet, not shouting */}
//         <footer className="mt-32 pt-12 text-xs opacity-40 font-mono flex flex-col md:flex-row justify-between gap-4">
//           <span>
//             © {new Date().getFullYear()} — All artifacts are originals
//           </span>
//           <span className="flex gap-6">
//             <a href="#" className="hover:opacity-100 transition">
//               Instagram
//             </a>
//             <a href="#" className="hover:opacity-100 transition">
//               Github
//             </a>
//             <a href="#" className="hover:opacity-100 transition">
//               Email
//             </a>
//           </span>
//         </footer>
//       </main>
//     </div>
//   );
// };

// export default LivingArchive;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { artifacts, aboutData } from "../data/artifacts";
import AmbientCursor from "../app/components/AmbientCursor";
import UniqueNav from "../app/components/UniqueNav";
import ProjectDrawer from "../app/components/ProjectDrawer";

export default function LivingArchive() {
  const [activeProject, setActiveProject] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [randomArtifact, setRandomArtifact] = useState(null);
  const mainRef = useRef(null);

  // Time-based mood
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 6 || hour > 19) setTimeOfDay("night");
    else setTimeOfDay("day");
  }, []);

  // Scroll listener for nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Random artifact Easter egg
  const showRandomArtifact = () => {
    const random = artifacts[Math.floor(Math.random() * artifacts.length)];
    setRandomArtifact(random);
    setTimeout(() => setRandomArtifact(null), 5000);
  };

  const isNight = timeOfDay === "night";

  return (
    <>
      <Head>
        <title>Living Archive — [Your Name]</title>
        <meta
          name="description"
          content="A portfolio of digital artifacts, interfaces, and quiet moments."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="min-h-screen transition-colors duration-1000"
        style={{
          backgroundColor: isNight ? "var(--night-bg)" : "var(--paper)",
          color: isNight ? "var(--night-text)" : "var(--ink)",
        }}
      >
        {/* Ambient cursor */}
        <AmbientCursor />

        {/* Unique navigation */}
        <UniqueNav isNight={isNight} scrolled={scrolled} />

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

        <main ref={mainRef} className="max-w-6xl mx-auto px-6 py-12 md:py-20">
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
                    e.currentTarget.style.textDecorationColor =
                      "var(--mustard)";
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

            {/* Time indicator */}
            <div className="mt-16 flex items-center gap-3 text-sm opacity-50 font-mono">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--terracotta)" }}
              />
              {isNight ? "🌙 The studio is dreaming" : "☀️ The studio is awake"}
            </div>
          </motion.div>

          {/* The Archive - Projects Section */}
          <div className="space-y-32">
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
                  {/* Year */}
                  <div
                    className="text-sm font-mono tracking-wider md:w-24 shrink-0"
                    style={{ color: "var(--terracotta)" }}
                  >
                    {artifact.year}
                  </div>

                  {/* Content */}
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

                    {/* Preview memory */}
                    <p className="mt-4 text-base opacity-70 leading-relaxed max-w-xl">
                      {artifact.memory}
                    </p>

                    {/* Expand indicator */}
                    <div className="mt-4 flex items-center gap-2 text-xs opacity-40 group-hover:opacity-100 transition">
                      <span>Click to explore</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Visual marker */}
                  <div className="hidden md:block w-12 h-12 self-center">
                    <div
                      className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:opacity-100"
                      style={{ backgroundColor: artifact.color, opacity: 0.5 }}
                    />
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full mt-8 transition-all duration-500 group-hover:opacity-100"
                  style={{
                    backgroundColor: isNight ? "#3A3440" : "var(--muted)",
                    opacity: 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* About Section - Reimagined */}
          <motion.div
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
                          backgroundColor: isNight ? "#2A2430" : "var(--blush)",
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

          {/* Footer */}
          <footer className="mt-32 pt-12 text-xs opacity-40 font-mono flex flex-col md:flex-row justify-between gap-4">
            <span>
              © {new Date().getFullYear()} — All artifacts are originals
            </span>
            <div className="flex gap-6">
              <a
                href={aboutData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition"
              >
                Instagram
              </a>
              <a
                href={aboutData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition"
              >
                Github
              </a>
              <a
                href={aboutData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition"
              >
                Twitter
              </a>
            </div>
          </footer>
        </main>

        {/* Project Drawer */}
        <ProjectDrawer
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setActiveProject(null)}
          isNight={isNight}
        />
      </div>
    </>
  );
}
