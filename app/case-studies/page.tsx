"use client";

import React, { Suspense, useState } from "react";
import CaseStudyPage from "./CaseStudyPage";
import AmbientCursor from "@/components/AmbientCursor";

const colors = {
  paper: "#FDF8F0", // warm off-white like handmade paper
  ink: "#1A1A1A", // soft black
  // accent: "#D46A4A", // terracotta - warm and distinctive
  accent: "#7ad44a", // terracotta - warm and distinctive
  accentLight: "#F0D3C4", // blush
  muted: "#8B7D6B", // warm gray
  highlight: "#E8C468", // mustard seed
};

export default function page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}>
      <AmbientCursor colors={colors} mousePosition={mousePosition} />

      <Suspense fallback={<p>Loading...</p>}>
        <CaseStudyPage />
      </Suspense>
    </div>
  );
}
