// // "use client";
// // import { useEffect, useRef, useState } from "react";

// // type Shape = {
// //   x: number;
// //   y: number;
// //   size: number;
// //   color: string;
// //   vx: number;
// //   vy: number;
// // };

// // export default function Home() {
// //   const canvasRef = useRef<HTMLCanvasElement | null>(null);
// //   const [text, setText] = useState("");
// //   const [shapes, setShapes] = useState<Shape[]>([]);

// //   // Simple sentiment logic
// //   const analyzeText = (input: string) => {
// //     const positiveWords = ["happy", "love", "joy", "excited", "good"];
// //     const negativeWords = ["sad", "angry", "hate", "bad", "pain"];

// //     let score = 0;

// //     input
// //       .toLowerCase()
// //       .split(" ")
// //       .forEach((word) => {
// //         if (positiveWords.includes(word)) score += 1;
// //         if (negativeWords.includes(word)) score -= 1;
// //       });

// //     return score;
// //   };

// //   const generateShapes = (input: string) => {
// //     const sentiment = analyzeText(input);
// //     const newShapes: Shape[] = [];

// //     for (let i = 0; i < input.length; i++) {
// //       const size = Math.random() * 30 + 10;

// //       let color = "#888";
// //       if (sentiment > 0) color = `hsl(${Math.random() * 60 + 40}, 80%, 60%)`; // warm
// //       if (sentiment < 0) color = `hsl(${Math.random() * 60 + 200}, 70%, 50%)`; // cool

// //       newShapes.push({
// //         x: Math.random() * 600,
// //         y: Math.random() * 400,
// //         size,
// //         color,
// //         vx: (Math.random() - 0.5) * (sentiment !== 0 ? 2 : 1),
// //         vy: (Math.random() - 0.5) * (sentiment !== 0 ? 2 : 1),
// //       });
// //     }

// //     setShapes(newShapes);
// //   };

// //   // Animation loop
// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const ctx = canvas?.getContext("2d");

// //     let animationFrameId: number;

// //     const render = () => {
// //       if (!ctx || !canvas) return;

// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       shapes.forEach((shape) => {
// //         shape.x += shape.vx;
// //         shape.y += shape.vy;

// //         ctx.beginPath();
// //         ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
// //         ctx.fillStyle = shape.color;
// //         ctx.fill();
// //       });

// //       animationFrameId = requestAnimationFrame(render);
// //     };

// //     render();

// //     return () => cancelAnimationFrame(animationFrameId);
// //   }, [shapes]);

// //   return (
// //     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
// //       <h1>Emotion → Visual Generator</h1>

// //       <input
// //         type="text"
// //         placeholder="Type something..."
// //         value={text}
// //         onChange={(e) => {
// //           setText(e.target.value);
// //           generateShapes(e.target.value);
// //         }}
// //         style={{
// //           padding: "10px",
// //           width: "100%",
// //           marginBottom: "20px",
// //           fontSize: "16px",
// //         }}
// //       />

// //       <canvas
// //         ref={canvasRef}
// //         width={600}
// //         height={400}
// //         style={{
// //           border: "1px solid #ccc",
// //           borderRadius: "10px",
// //         }}
// //       />
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   AnimatePresence,
// } from "framer-motion";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { useTheme } from "@/contexts/ThemeContext";

// // Demo images (using placeholders — replace with your actual images)
// const demoImages = {
//   hero: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1200&h=600&fit=crop",
//   gallery: [
//     "https://images.unsplash.com/photo-1581092335871-4e5c5f1b5c5f?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1581092335871-4e5c5f1b5c5f?w=800&h=600&fit=crop",
//     "https://images.unsplash.com/photo-1581092335871-4e5c5f1b5c5f?w=800&h=600&fit=crop",
//   ],
//   process: [
//     "https://images.unsplash.com/photo-1581092335871-4e5c5f1b5c5f?w=600&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1581092335871-4e5c5f1b5c5f?w=600&h=400&fit=crop",
//   ],
// };

// export default function ConcretePoetryCaseStudy() {
//   const { resolvedTheme } = useTheme();
//   const { scrollYProgress } = useScroll();
//   const [activeImage, setActiveImage] = useState(0);
//   const [showDemo, setShowDemo] = useState(false);

//   const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
//   const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

//   // Demo poem generator state
//   const [typedWord, setTypedWord] = useState("");
//   const [generatedShape, setGeneratedShape] = useState<null | {
//     type: string;
//     color: string;
//     emotion: string;
//   }>(null);

//   const emotions = {
//     happy: {
//       shape: "circle",
//       color: "#E8C468",
//       gradient: "from-yellow-400 to-orange-400",
//       emotion: "joyful",
//     },
//     sad: {
//       shape: "teardrop",
//       color: "#5B8CBE",
//       gradient: "from-blue-400 to-indigo-400",
//       emotion: "melancholic",
//     },
//     angry: {
//       shape: "zigzag",
//       color: "#D46A4A",
//       gradient: "from-red-400 to-orange-500",
//       emotion: "intense",
//     },
//     calm: {
//       shape: "wave",
//       color: "#2E5E4E",
//       gradient: "from-green-400 to-teal-400",
//       emotion: "peaceful",
//     },
//     love: {
//       shape: "heart",
//       color: "#E86A8C",
//       gradient: "from-pink-400 to-rose-400",
//       emotion: "tender",
//     },
//     wonder: {
//       shape: "spiral",
//       color: "#8B5E9E",
//       gradient: "from-purple-400 to-violet-400",
//       emotion: "curious",
//     },
//   };

//   const analyzeWord = (word: string) => {
//     const lower = word.toLowerCase();
//     if (lower.includes("love") || lower.includes("heart")) return emotions.love;
//     if (lower.includes("angry") || lower.includes("rage"))
//       return emotions.angry;
//     if (lower.includes("sad") || lower.includes("cry")) return emotions.sad;
//     if (lower.includes("calm") || lower.includes("peace")) return emotions.calm;
//     if (lower.includes("wonder") || lower.includes("magic"))
//       return emotions.wonder;
//     return emotions.happy;
//   };

//   const handleGenerate = () => {
//     if (!typedWord.trim()) return;
//     const result = analyzeWord(typedWord);
//     setGeneratedShape(result);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "var(--bg-primary)",
//         color: "var(--text-primary)",
//       }}
//     >
//       <Header />

//       <main className="pt-20">
//         {/* Hero Section with Parallax */}
//         <motion.section
//           style={{ opacity: heroOpacity, scale: heroScale }}
//           className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
//         >
//           <div className="absolute inset-0 z-0">
//             <img
//               src={demoImages.hero}
//               alt="Concrete Poetry Machine"
//               className="w-full h-full object-cover opacity-30"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-primary)]" />
//           </div>

//           <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="flex justify-center gap-2 mb-6">
//                 <span
//                   className="px-3 py-1 rounded-full text-xs"
//                   style={{ backgroundColor: "#D46A4A20", color: "#D46A4A" }}
//                 >
//                   Case Study
//                 </span>
//                 <span
//                   className="px-3 py-1 rounded-full text-xs"
//                   style={{ backgroundColor: "#2E5E4E20", color: "#2E5E4E" }}
//                 >
//                   Generative / Installation
//                 </span>
//               </div>

//               <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
//                 Concrete Poetry Machine
//               </h1>

//               <p className="text-xl opacity-70 max-w-2xl mx-auto">
//                 A typewriter that only writes in shapes. Every letter becomes a
//                 brick in a visual poem.
//               </p>

//               <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
//                 <div className="flex items-center gap-2">
//                   <span className="opacity-40">Year</span>
//                   <span>2023</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="opacity-40">Role</span>
//                   <span>Creator & Engineer</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="opacity-40">Duration</span>
//                   <span>4 months</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <span className="opacity-40">Exhibitions</span>
//                   <span>3 galleries</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.section>

//         {/* Interactive Demo Section */}
//         <section
//           className="py-20 px-6"
//           style={{ backgroundColor: "var(--bg-secondary)" }}
//         >
//           <div className="max-w-4xl mx-auto text-center">
//             <div
//               className="inline-block px-3 py-1 rounded-full text-xs mb-4"
//               style={{ backgroundColor: "#D46A4A20", color: "#D46A4A" }}
//             >
//               Try It Yourself
//             </div>
//             <h2 className="text-3xl md:text-4xl font-light mb-4">
//               Experience the Machine
//             </h2>
//             <p className="opacity-60 mb-8">
//               Type a word and see how the machine visualizes its emotion
//             </p>

//             <div className="max-w-md mx-auto">
//               <div className="flex gap-3 mb-6">
//                 <input
//                   type="text"
//                   value={typedWord}
//                   onChange={(e) => setTypedWord(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleGenerate()}
//                   placeholder="Type a word..."
//                   className="flex-1 px-4 py-3 rounded-full bg-transparent border focus:outline-none transition"
//                   style={{ borderColor: "var(--border-color)" }}
//                 />
//                 <button
//                   onClick={handleGenerate}
//                   className="px-6 py-3 rounded-full transition hover:opacity-80"
//                   style={{ backgroundColor: "#D46A4A", color: "white" }}
//                 >
//                   Generate →
//                 </button>
//               </div>

//               <AnimatePresence>
//                 {generatedShape && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     className="p-8 rounded-2xl text-center"
//                     style={{ backgroundColor: `${generatedShape.color}20` }}
//                   >
//                     <div className="text-lg mb-2 opacity-60">
//                       Emotion detected:
//                     </div>
//                     <div
//                       className="text-2xl font-light mb-4"
//                       style={{ color: generatedShape.color }}
//                     >
//                       {generatedShape.emotion}
//                     </div>
//                     <div className="text-6xl mb-4">
//                       {generatedShape.shape === "circle" && "●"}
//                       {generatedShape.shape === "heart" && "❤"}
//                       {generatedShape.shape === "wave" && "〰"}
//                       {generatedShape.shape === "spiral" && "🌀"}
//                       {generatedShape.shape === "zigzag" && "⚡"}
//                       {generatedShape.shape === "teardrop" && "💧"}
//                     </div>
//                     <p className="text-sm opacity-50">
//                       The machine translated "{typedWord}" into a{" "}
//                       {generatedShape.shape} — a symbol of{" "}
//                       {generatedShape.emotion}
//                     </p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>
//         </section>

//         {/* The Story */}
//         <section className="py-20 px-6 max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <div
//                 className="w-12 h-0.5 mb-6"
//                 style={{ backgroundColor: "#D46A4A" }}
//               />
//               <h2 className="text-2xl font-light mb-4">The Challenge</h2>
//               <p className="leading-relaxed opacity-80">
//                 Poetry has always been visual — from ancient calligraphy to
//                 concrete poetry of the 1950s. But digital interfaces strip away
//                 the physicality of writing. How might we create a machine that
//                 restores the tactile, emotional relationship between words and
//                 their visual form?
//               </p>
//             </div>
//             <div>
//               <div
//                 className="w-12 h-0.5 mb-6"
//                 style={{ backgroundColor: "#E8C468" }}
//               />
//               <h2 className="text-2xl font-light mb-4">The Solution</h2>
//               <p className="leading-relaxed opacity-80">
//                 A modified typewriter that doesn't type letters — it draws
//                 shapes. Each word's emotional weight is analyzed and visualized
//                 through color, form, and movement. The machine becomes a
//                 collaborator, not just a tool.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Process Deep Dive */}
//         <section
//           className="py-20 px-6"
//           style={{ backgroundColor: "var(--bg-secondary)" }}
//         >
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-light mb-4">
//                 The Process
//               </h2>
//               <p className="opacity-60 max-w-2xl mx-auto">
//                 From vintage typewriter to interactive installation
//               </p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Phase 1 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="p-6 rounded-xl"
//                 style={{ backgroundColor: "var(--bg-primary)" }}
//               >
//                 <div className="text-4xl mb-4">📚</div>
//                 <h3 className="text-xl font-medium mb-2">
//                   Research: Concrete Poetry Movement
//                 </h3>
//                 <p className="text-sm opacity-60 mb-3">2 weeks</p>
//                 <p className="text-sm leading-relaxed opacity-80">
//                   Studied the works of Eugen Gomringer, Augusto de Campos, and
//                   Ian Hamilton Finlay. Analyzed how poets used typography,
//                   space, and visual arrangement to create meaning beyond the
//                   words themselves.
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#D46A4A20" }}
//                   >
//                     Archival research
//                   </span>
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#D46A4A20" }}
//                   >
//                     Poetry analysis
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Phase 2 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.1 }}
//                 className="p-6 rounded-xl"
//                 style={{ backgroundColor: "var(--bg-primary)" }}
//               >
//                 <div className="text-4xl mb-4">🔧</div>
//                 <h3 className="text-xl font-medium mb-2">
//                   Hardware: Arduino Typewriter
//                 </h3>
//                 <p className="text-sm opacity-60 mb-3">3 weeks</p>
//                 <p className="text-sm leading-relaxed opacity-80">
//                   Restored a vintage 1960s typewriter, added sensors to each
//                   key, and built an Arduino interface to capture keystrokes. The
//                   challenge was preserving the original mechanical feel while
//                   adding digital intelligence.
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#2E5E4E20" }}
//                   >
//                     Arduino
//                   </span>
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#2E5E4E20" }}
//                   >
//                     Circuit design
//                   </span>
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#2E5E4E20" }}
//                   >
//                     Soldering
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Phase 3 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.2 }}
//                 className="p-6 rounded-xl"
//                 style={{ backgroundColor: "var(--bg-primary)" }}
//               >
//                 <div className="text-4xl mb-4">🎨</div>
//                 <h3 className="text-xl font-medium mb-2">
//                   Algorithm: Emotion → Shape
//                 </h3>
//                 <p className="text-sm opacity-60 mb-3">4 weeks</p>
//                 <p className="text-sm leading-relaxed opacity-80">
//                   Developed a sentiment analysis model that maps words to
//                   emotional dimensions. Created a visual grammar where each
//                   emotion corresponds to a unique shape, color, and movement
//                   pattern. Iterated through 50+ prototypes.
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#E8C46820" }}
//                   >
//                     Python
//                   </span>
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#E8C46820" }}
//                   >
//                     p5.js
//                   </span>
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#E8C46820" }}
//                   >
//                     NLP
//                   </span>
//                 </div>
//               </motion.div>

//               {/* Phase 4 */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.3 }}
//                 className="p-6 rounded-xl"
//                 style={{ backgroundColor: "var(--bg-primary)" }}
//               >
//                 <div className="text-4xl mb-4">🏛️</div>
//                 <h3 className="text-xl font-medium mb-2">
//                   Exhibition: Gallery Integration
//                 </h3>
//                 <p className="text-sm opacity-60 mb-3">3 weeks</p>
//                 <p className="text-sm leading-relaxed opacity-80">
//                   Designed the installation environment — lighting, sound, and
//                   participant flow. Created guides for gallery staff and
//                   documentation for visitors. Debuted at three galleries, with
//                   over 2,000 participants.
//                 </p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#8B7D6B20" }}
//                   >
//                     Installation design
//                   </span>
//                   <span
//                     className="text-xs px-2 py-1 rounded"
//                     style={{ backgroundColor: "#8B7D6B20" }}
//                   >
//                     Documentation
//                   </span>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Gallery */}
//         <section className="py-20 px-6 max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-light mb-4">Gallery</h2>
//             <p className="opacity-60">The installation in action</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {demoImages.gallery.map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="aspect-square rounded-xl overflow-hidden cursor-pointer"
//                 onClick={() => setActiveImage(idx)}
//               >
//                 <img
//                   src={img}
//                   alt={`Gallery ${idx + 1}`}
//                   className="w-full h-full object-cover hover:scale-105 transition duration-500"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Impact & Results */}
//         <section
//           className="py-20 px-6"
//           style={{ backgroundColor: "var(--bg-secondary)" }}
//         >
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-light mb-4">Impact</h2>
//             <p className="opacity-60 mb-12">
//               What happened when people experienced the machine
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//               <div>
//                 <div
//                   className="text-4xl font-light mb-2"
//                   style={{ color: "#D46A4A" }}
//                 >
//                   2,000+
//                 </div>
//                 <div className="text-sm opacity-60">
//                   Participants across 3 exhibitions
//                 </div>
//               </div>
//               <div>
//                 <div
//                   className="text-4xl font-light mb-2"
//                   style={{ color: "#D46A4A" }}
//                 >
//                   15 min
//                 </div>
//                 <div className="text-sm opacity-60">
//                   Average interaction time
//                 </div>
//               </div>
//               <div>
//                 <div
//                   className="text-4xl font-light mb-2"
//                   style={{ color: "#D46A4A" }}
//                 >
//                   94%
//                 </div>
//                 <div className="text-sm opacity-60">
//                   Left feeling "emotionally moved"
//                 </div>
//               </div>
//             </div>

//             <div
//               className="p-8 rounded-xl italic"
//               style={{ backgroundColor: "var(--bg-primary)" }}
//             >
//               <p className="text-lg leading-relaxed">
//                 "This isn't just an art piece — it's a mirror. People cry,
//                 laugh, and stare in wonder. The machine doesn't judge. It just
//                 reflects."
//               </p>
//               <p className="mt-4 text-sm opacity-60">
//                 — Exhibition Curator, Digital Art Gallery
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Technologies */}
//         <section className="py-20 px-6 max-w-4xl mx-auto text-center">
//           <h2 className="text-2xl font-light mb-8">Technologies Used</h2>
//           <div className="flex flex-wrap justify-center gap-3">
//             {[
//               "Arduino",
//               "p5.js",
//               "Python",
//               "Computer Vision",
//               "TensorFlow",
//               "OpenCV",
//               "WebSockets",
//               "React",
//             ].map((tech) => (
//               <span
//                 key={tech}
//                 className="px-4 py-2 rounded-full text-sm"
//                 style={{
//                   backgroundColor: "var(--bg-secondary)",
//                   border: "1px solid var(--border-color)",
//                 }}
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </section>

//         {/* Links */}
//         <section className="py-20 px-6 max-w-4xl mx-auto">
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="#"
//               className="px-8 py-3 rounded-full transition hover:opacity-80"
//               style={{ backgroundColor: "#D46A4A", color: "white" }}
//             >
//               View Documentation →
//             </a>
//             <a
//               href="#"
//               className="px-8 py-3 rounded-full border transition hover:opacity-80"
//               style={{ borderColor: "var(--border-color)" }}
//             >
//               GitHub Repository
//             </a>
//             <a
//               href="#"
//               className="px-8 py-3 rounded-full border transition hover:opacity-80"
//               style={{ borderColor: "var(--border-color)" }}
//             >
//               Exhibition Press Kit
//             </a>
//           </div>
//         </section>

//         <Footer />
//       </main>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {activeImage !== null && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setActiveImage(-1)}
//               className="fixed inset-0 bg-black/90 z-50"
//             />
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-8"
//               onClick={() => setActiveImage(-1)}
//             >
//               <img
//                 src={demoImages.gallery[activeImage]}
//                 alt="Full size"
//                 className="max-w-full max-h-full object-contain"
//               />
//               <button
//                 onClick={() => setActiveImage(-1)}
//                 className="absolute top-6 right-6 text-white text-2xl"
//               >
//                 ✕
//               </button>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
