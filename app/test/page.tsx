"use client";
import { useEffect, useRef, useState } from "react";

type Shape = {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
};

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [text, setText] = useState("");
  const [shapes, setShapes] = useState<Shape[]>([]);

  // Simple sentiment logic
  const analyzeText = (input: string) => {
    const positiveWords = ["happy", "love", "joy", "excited", "good"];
    const negativeWords = ["sad", "angry", "hate", "bad", "pain"];

    let score = 0;

    input
      .toLowerCase()
      .split(" ")
      .forEach((word) => {
        if (positiveWords.includes(word)) score += 1;
        if (negativeWords.includes(word)) score -= 1;
      });

    return score;
  };

  const generateShapes = (input: string) => {
    const sentiment = analyzeText(input);
    const newShapes: Shape[] = [];

    for (let i = 0; i < input.length; i++) {
      const size = Math.random() * 30 + 10;

      let color = "#888";
      if (sentiment > 0) color = `hsl(${Math.random() * 60 + 40}, 80%, 60%)`; // warm
      if (sentiment < 0) color = `hsl(${Math.random() * 60 + 200}, 70%, 50%)`; // cool

      newShapes.push({
        x: Math.random() * 600,
        y: Math.random() * 400,
        size,
        color,
        vx: (Math.random() - 0.5) * (sentiment !== 0 ? 2 : 1),
        vy: (Math.random() - 0.5) * (sentiment !== 0 ? 2 : 1),
      });
    }

    setShapes(newShapes);
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    let animationFrameId: number;

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;

        ctx.beginPath();
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2);
        ctx.fillStyle = shape.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [shapes]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Emotion → Visual Generator</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          generateShapes(e.target.value);
        }}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Emotion to visual mapping
// const emotionLibrary = {
//   joy: {
//     shapes: ["circle", "sun", "sparkle", "heart"],
//     colors: ["#E8C468", "#F4A261", "#E9C46A", "#FFD93D"],
//     patterns: ["radial", "pulse", "bounce"],
//     sound: "bright",
//     description: "Warm, expansive, radiating outward",
//   },
//   sadness: {
//     shapes: ["teardrop", "wave", "droplet", "willow"],
//     colors: ["#5B8CBE", "#6C91B2", "#4A7A9C", "#3B6F8A"],
//     patterns: ["slow-drift", "fade", "descend"],
//     sound: "gentle",
//     description: "Flowing downward, soft edges",
//   },
//   anger: {
//     shapes: ["zigzag", "spike", "lightning", "sharp-edge"],
//     colors: ["#D46A4A", "#C53030", "#E53E3E", "#9B2C2C"],
//     patterns: ["shake", "rapid", "explode"],
//     sound: "intense",
//     description: "Sharp angles, sudden movements",
//   },
//   calm: {
//     shapes: ["wave", "spiral", "leaf", "feather"],
//     colors: ["#2E5E4E", "#4A7C6F", "#6B9E8E", "#8BB5A8"],
//     patterns: ["slow-flow", "gentle-sway", "breathing"],
//     sound: "ambient",
//     description: "Organic flowing lines, breathing rhythm",
//   },
//   love: {
//     shapes: ["heart", "interlocking", "bloom", "embrace"],
//     colors: ["#E86A8C", "#F687B3", "#D53F8C", "#B83280"],
//     patterns: ["pulse-gentle", "expand-contract", "radiant"],
//     sound: "warm",
//     description: "Soft curves, gentle expansion",
//   },
//   wonder: {
//     shapes: ["spiral", "star", "mandala", "fractal"],
//     colors: ["#8B5E9E", "#9F7AEA", "#B794F4", "#D6BCFA"],
//     patterns: ["grow", "rotate", "unfold"],
//     sound: "magical",
//     description: "Expanding patterns, intricate details",
//   },
//   fear: {
//     shapes: ["shatter", "scatter", "retreat", "spike"],
//     colors: ["#4A5568", "#2D3748", "#1A202C", "#718096"],
//     patterns: ["flicker", "tremble", "fade-away"],
//     sound: "tense",
//     description: "Fragmented, pulling inward",
//   },
//   surprise: {
//     shapes: ["burst", "explosion", "star", "splash"],
//     colors: ["#F6AD55", "#ED8936", "#DD6B20", "#C05621"],
//     patterns: ["pop", "expand-fast", "sparkle"],
//     sound: "sudden",
//     description: "Sudden expansion, radiating energy",
//   },
// };

// // Word analyzer - maps words to emotions
// const analyzeWord = (word: string): keyof typeof emotionLibrary => {
//   const lower = word.toLowerCase();

//   const keywords: Record<string, keyof typeof emotionLibrary> = {
//     // Joy
//     happy: "joy",
//     joy: "joy",
//     laugh: "joy",
//     smile: "joy",
//     celebrate: "joy",
//     sunshine: "joy",
//     bright: "joy",
//     wonderful: "joy",
//     amazing: "joy",

//     // Sadness
//     sad: "sadness",
//     cry: "sadness",
//     lonely: "sadness",
//     grief: "sadness",
//     loss: "sadness",
//     heartbreak: "sadness",
//     melancholy: "sadness",

//     // Anger
//     angry: "anger",
//     rage: "anger",
//     fury: "anger",
//     mad: "anger",
//     hate: "anger",
//     destroy: "anger",
//     fight: "anger",

//     // Calm
//     calm: "calm",
//     peace: "calm",
//     quiet: "calm",
//     serene: "calm",
//     meditate: "calm",
//     breathe: "calm",
//     gentle: "calm",

//     // Love
//     love: "love",
//     heart: "love",
//     care: "love",
//     tender: "love",
//     embrace: "love",
//     affection: "love",
//     sweet: "love",

//     // Wonder
//     wonder: "wonder",
//     magic: "wonder",
//     mystery: "wonder",
//     awe: "wonder",
//     explore: "wonder",
//     curious: "wonder",
//     dream: "wonder",

//     // Fear
//     fear: "fear",
//     scared: "fear",
//     afraid: "fear",
//     terror: "fear",
//     nightmare: "fear",
//     dark: "fear",
//     alone: "fear",

//     // Surprise
//     surprise: "surprise",
//     shock: "surprise",
//     unexpected: "surprise",
//     wow: "surprise",
//     sudden: "surprise",
//   };

//   for (const [key, emotion] of Object.entries(keywords)) {
//     if (lower.includes(key)) return emotion;
//   }

//   // Default to joy
//   return "joy";
// };

// // Shape renderer component
// const ShapeRenderer = ({
//   emotion,
//   intensity = 1,
//   isAnimating = true,
// }: {
//   emotion: keyof typeof emotionLibrary;
//   intensity?: number;
//   isAnimating?: boolean;
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number>();
//   const timeRef = useRef(0);

//   const emotionData = emotionLibrary[emotion];
//   const shapeType =
//     emotionData.shapes[Math.floor(Math.random() * emotionData.shapes.length)];
//   const color =
//     emotionData.colors[Math.floor(Math.random() * emotionData.colors.length)];
//   const pattern = emotionData.patterns[0];

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       const rect = canvas.parentElement?.getBoundingClientRect();
//       if (rect) {
//         canvas.width = rect.width;
//         canvas.height = rect.height;
//       }
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const draw = (timestamp: number) => {
//       if (!ctx || !canvas) return;

//       if (isAnimating) {
//         timeRef.current += 0.02;
//       }

//       const w = canvas.width;
//       const h = canvas.height;
//       const centerX = w / 2;
//       const centerY = h / 2;
//       const size = Math.min(w, h) * 0.4 * intensity;

//       ctx.clearRect(0, 0, w, h);

//       // Draw based on shape type
//       if (
//         shapeType === "circle" ||
//         shapeType === "sun" ||
//         shapeType === "heart"
//       ) {
//         // Radial pattern
//         const radius = size * (0.5 + Math.sin(timeRef.current) * 0.1);

//         ctx.beginPath();
//         ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
//         ctx.fillStyle = `${color}40`;
//         ctx.fill();

//         for (let i = 0; i < 8; i++) {
//           const angle = (i / 8) * Math.PI * 2 + timeRef.current;
//           const x = centerX + Math.cos(angle) * radius * 0.8;
//           const y = centerY + Math.sin(angle) * radius * 0.8;

//           ctx.beginPath();
//           ctx.arc(x, y, radius * 0.2, 0, Math.PI * 2);
//           ctx.fillStyle = color;
//           ctx.fill();
//         }
//       } else if (shapeType === "wave" || shapeType === "spiral") {
//         // Wave pattern
//         ctx.beginPath();
//         for (let x = 0; x < w; x += 10) {
//           const y =
//             centerY + Math.sin(x * 0.02 + timeRef.current * 2) * size * 0.5;
//           if (x === 0) ctx.moveTo(x, y);
//           else ctx.lineTo(x, y);
//         }
//         ctx.strokeStyle = color;
//         ctx.lineWidth = 3;
//         ctx.stroke();

//         // Add second wave
//         ctx.beginPath();
//         for (let x = 0; x < w; x += 10) {
//           const y =
//             centerY + Math.cos(x * 0.02 + timeRef.current * 1.5) * size * 0.3;
//           if (x === 0) ctx.moveTo(x, y);
//           else ctx.lineTo(x, y);
//         }
//         ctx.stroke();
//       } else if (shapeType === "zigzag" || shapeType === "lightning") {
//         // Zigzag pattern
//         ctx.beginPath();
//         let x = 0;
//         let y = centerY;
//         ctx.moveTo(x, y);

//         while (x < w) {
//           x += 30;
//           y = centerY + Math.sin(x * 0.05 + timeRef.current * 5) * size * 0.8;
//           ctx.lineTo(x, y);
//         }
//         ctx.strokeStyle = color;
//         ctx.lineWidth = 4;
//         ctx.stroke();

//         // Add spikes
//         for (let i = 0; i < 12; i++) {
//           const spikeX = (i / 12) * w;
//           const spikeY =
//             centerY +
//             Math.sin(spikeX * 0.05 + timeRef.current * 5) * size * 0.8;

//           ctx.beginPath();
//           ctx.moveTo(spikeX, spikeY);
//           ctx.lineTo(spikeX + 10, spikeY - 15);
//           ctx.lineTo(spikeX - 10, spikeY - 10);
//           ctx.fillStyle = color;
//           ctx.fill();
//         }
//       } else if (shapeType === "spiral") {
//         // Spiral pattern
//         let angle = 0;
//         let radius = 0;
//         let x = centerX;
//         let y = centerY;

//         ctx.beginPath();
//         ctx.moveTo(x, y);

//         while (radius < size) {
//           angle += 0.2;
//           radius += 1;
//           x = centerX + Math.cos(angle + timeRef.current) * radius;
//           y = centerY + Math.sin(angle + timeRef.current) * radius;
//           ctx.lineTo(x, y);
//         }
//         ctx.strokeStyle = color;
//         ctx.lineWidth = 2;
//         ctx.stroke();
//       } else if (shapeType === "star" || shapeType === "burst") {
//         // Starburst pattern
//         const spikes = 12;

//         for (let i = 0; i < spikes; i++) {
//           const angle = (i / spikes) * Math.PI * 2 + timeRef.current;
//           const x1 = centerX + Math.cos(angle) * size * 0.5;
//           const y1 = centerY + Math.sin(angle) * size * 0.5;
//           const x2 = centerX + Math.cos(angle + 0.2) * size;
//           const y2 = centerY + Math.sin(angle + 0.2) * size;

//           ctx.beginPath();
//           ctx.moveTo(centerX, centerY);
//           ctx.lineTo(x1, y1);
//           ctx.lineTo(x2, y2);
//           ctx.fillStyle = `${color}80`;
//           ctx.fill();
//         }
//       }

//       animationRef.current = requestAnimationFrame(draw);
//     };

//     draw(0);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, [emotion, intensity, shapeType, color, isAnimating]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="w-full h-full rounded-xl"
//       style={{ minHeight: "300px" }}
//     />
//   );
// };

// // Main Component
// export default function ConcretePoetryMachine() {
//   const [inputWord, setInputWord] = useState("");
//   const [currentEmotion, setCurrentEmotion] =
//     useState<keyof typeof emotionLibrary>("joy");
//   const [poemHistory, setPoemHistory] = useState<
//     Array<{
//       word: string;
//       emotion: keyof typeof emotionLibrary;
//       timestamp: Date;
//     }>
//   >([]);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [showHistory, setShowHistory] = useState(false);
//   const [intensity, setIntensity] = useState(0.5);

//   const handleGenerate = () => {
//     if (!inputWord.trim()) return;

//     setIsGenerating(true);
//     const emotion = analyzeWord(inputWord);
//     setCurrentEmotion(emotion);

//     // Add to history
//     setPoemHistory((prev) => [
//       { word: inputWord, emotion, timestamp: new Date() },
//       ...prev.slice(0, 9),
//     ]);

//     // Reset intensity
//     setIntensity(1);
//     setTimeout(() => setIntensity(0.7), 100);
//     setTimeout(() => setIsGenerating(false), 300);

//     // Clear input
//     setInputWord("");
//   };

//   const currentEmotionData = emotionLibrary[currentEmotion];

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <div
//           className="inline-block px-3 py-1 rounded-full text-xs mb-4"
//           style={{ backgroundColor: "#D46A4A20", color: "#D46A4A" }}
//         >
//           Interactive Installation
//         </div>
//         <h2 className="text-3xl md:text-4xl font-light mb-3">
//           Concrete Poetry Machine
//         </h2>
//         <p className="opacity-60 max-w-2xl mx-auto">
//           Type a word. The machine reads its emotion and draws it into
//           existence.
//         </p>
//       </div>

//       {/* Main Interactive Area */}
//       <div className="grid lg:grid-cols-2 gap-8 mb-12">
//         {/* Canvas Area */}
//         <motion.div
//           className="relative rounded-2xl overflow-hidden"
//           style={{
//             backgroundColor: "var(--bg-secondary)",
//             border: "1px solid var(--border-color)",
//             minHeight: "400px",
//           }}
//           animate={{ scale: isGenerating ? [1, 1.02, 1] : 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <ShapeRenderer
//             emotion={currentEmotion}
//             intensity={intensity}
//             isAnimating={!isGenerating}
//           />

//           {/* Emotion Badge */}
//           <div
//             className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs backdrop-blur-md"
//             style={{
//               backgroundColor: `${currentEmotionData.colors[0]}80`,
//               color: "white",
//             }}
//           >
//             {currentEmotion} • {currentEmotionData.description}
//           </div>
//         </motion.div>

//         {/* Input Area */}
//         <div className="space-y-6">
//           <div>
//             <label className="block text-sm font-mono opacity-60 mb-2">
//               ENTER A WORD
//             </label>
//             <div className="flex gap-3">
//               <input
//                 type="text"
//                 value={inputWord}
//                 onChange={(e) => setInputWord(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleGenerate()}
//                 placeholder="e.g., love, wonder, calm, rage..."
//                 className="flex-1 px-4 py-3 rounded-xl bg-transparent border focus:outline-none transition"
//                 style={{ borderColor: "var(--border-color)" }}
//                 autoFocus
//               />
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={handleGenerate}
//                 className="px-6 py-3 rounded-xl font-medium transition hover:opacity-80"
//                 style={{ backgroundColor: "#D46A4A", color: "white" }}
//               >
//                 Generate →
//               </motion.button>
//             </div>
//           </div>

//           {/* Emotion Info */}
//           <motion.div
//             key={currentEmotion}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="p-4 rounded-xl space-y-3"
//             style={{ backgroundColor: `${currentEmotionData.colors[0]}15` }}
//           >
//             <div className="flex items-center gap-2">
//               <div
//                 className="w-3 h-3 rounded-full"
//                 style={{ backgroundColor: currentEmotionData.colors[0] }}
//               />
//               <span className="text-sm font-medium">
//                 Current Emotion: {currentEmotion}
//               </span>
//             </div>
//             <div className="text-sm opacity-70">
//               {currentEmotionData.description}
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {currentEmotionData.shapes.slice(0, 3).map((shape) => (
//                 <span
//                   key={shape}
//                   className="text-xs px-2 py-1 rounded"
//                   style={{
//                     backgroundColor: `${currentEmotionData.colors[0]}30`,
//                   }}
//                 >
//                   {shape}
//                 </span>
//               ))}
//             </div>
//           </motion.div>

//           {/* Intensity Slider */}
//           <div>
//             <label className="block text-sm font-mono opacity-60 mb-2">
//               INTENSITY: {Math.round(intensity * 100)}%
//             </label>
//             <input
//               type="range"
//               min="0"
//               max="1"
//               step="0.01"
//               value={intensity}
//               onChange={(e) => setIntensity(parseFloat(e.target.value))}
//               className="w-full"
//               style={{ accentColor: "#D46A4A" }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* History Section */}
//       <div className="mt-8">
//         <button
//           onClick={() => setShowHistory(!showHistory)}
//           className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition mb-4"
//         >
//           <span>{showHistory ? "▼" : "▶"}</span>
//           <span>Poem History ({poemHistory.length} words)</span>
//         </button>

//         <AnimatePresence>
//           {showHistory && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="overflow-hidden"
//             >
//               <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//                 {poemHistory.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="p-3 rounded-lg text-center cursor-pointer hover:scale-105 transition"
//                     style={{
//                       backgroundColor: `${emotionLibrary[item.emotion].colors[0]}20`,
//                     }}
//                     onClick={() => {
//                       setCurrentEmotion(item.emotion);
//                       setIntensity(0.7);
//                     }}
//                   >
//                     <div className="text-lg font-medium mb-1">{item.word}</div>
//                     <div className="text-xs opacity-60">{item.emotion}</div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Instructions */}
//       <div
//         className="mt-8 p-4 rounded-lg text-center text-sm opacity-40 border-t"
//         style={{ borderColor: "var(--border-color)" }}
//       >
//         <p>
//           ⚡ The machine reads emotions — try words like "love", "storm",
//           "peace", "magic", "fire"
//         </p>
//         <p className="mt-1">
//           🎨 Each word becomes a unique visual poem. No two are the same.
//         </p>
//       </div>
//     </div>
//   );
// }
