"use client";

import React, { useState, useEffect } from "react";

export default function AmbientCursor({
  colors,
  // onMouseMove,
  mousePosition,
}: {
  colors: { accent: string };
  // onMouseMove: (position: { x: number; y: number }) => void;
  mousePosition: { x: number; y: number };
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-100"
        style={{
          width: "80px",
          height: "80px",
          background:
            "radial-gradient(circle, var(--terracotta)20 0%, transparent 70%)",
          left: position.x - 40,
          top: position.y - 40,
          transform: "translate(-50%, -50%)",
        }}
      /> */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          width: "60px",
          height: "60px",
          background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 80%)`,
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          transition: "transform 0.1s ease",
        }}
      />
    </>
  );
}
