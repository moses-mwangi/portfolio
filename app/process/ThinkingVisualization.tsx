"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  id: number;
  label: string;
  x: number;
  y: number;
  color: string;
  size: number;
}

export default function ThinkingVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const nodes: Node[] = [
    { id: 0, label: "Empathy", x: 0.2, y: 0.3, color: "#D46A4A", size: 1.2 },
    { id: 1, label: "Systems", x: 0.7, y: 0.2, color: "#2E5E4E", size: 1.0 },
    { id: 2, label: "Beauty", x: 0.5, y: 0.5, color: "#E8C468", size: 1.1 },
    { id: 3, label: "Function", x: 0.3, y: 0.7, color: "#8B7D6B", size: 0.9 },
    { id: 4, label: "Surprise", x: 0.8, y: 0.6, color: "#D46A4A", size: 0.8 },
    { id: 5, label: "Clarity", x: 0.4, y: 0.4, color: "#2E5E4E", size: 1.0 },
    { id: 6, label: "Delight", x: 0.6, y: 0.8, color: "#E8C468", size: 0.9 },
    { id: 7, label: "Meaning", x: 0.1, y: 0.6, color: "#8B7D6B", size: 1.1 },
  ];

  const connections = [
    [0, 1],
    [0, 2],
    [0, 5],
    [1, 3],
    [1, 5],
    [2, 4],
    [2, 6],
    [3, 5],
    [3, 7],
    [4, 6],
    [5, 7],
    [6, 7],
    [0, 7],
    [1, 4],
  ];

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const rect = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width: rect.width, height: 400 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Clear and draw connections
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    connections.forEach(([from, to]) => {
      const fromNode = nodes[from];
      const toNode = nodes[to];
      const fromX = fromNode.x * dimensions.width;
      const fromY = fromNode.y * dimensions.height;
      const toX = toNode.x * dimensions.width;
      const toY = toNode.y * dimensions.height;

      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.strokeStyle = `${nodes[from].color}30`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Draw nodes
    nodes.forEach((node) => {
      const x = node.x * dimensions.width;
      const y = node.y * dimensions.height;
      const radius = 25 * node.size;

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = `${node.color}15`;
      ctx.fill();
      ctx.strokeStyle = node.color;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = node.color;
      ctx.font = 'bold 14px "JetBrains Mono", monospace';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, x, y);
    });
  }, [dimensions]);

  return (
    <div className="relative w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light">
            The Constellation of My Thinking
          </h2>
          <p className="opacity-50 text-sm mt-2">
            Each node connects — ideas rarely live alone
          </p>
        </div>

        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
          }}
        >
          <canvas
            ref={canvasRef}
            width={dimensions.width}
            height={dimensions.height}
            className="w-full"
            style={{ height: "400px" }}
          />

          <div className="absolute bottom-4 right-4 text-xs opacity-30 font-mono">
            constellation visualization
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="flex items-center gap-2 px-3 py-1 rounded-full text-xs"
              style={{ backgroundColor: `${node.color}20`, color: node.color }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: node.color }}
              />
              {node.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
