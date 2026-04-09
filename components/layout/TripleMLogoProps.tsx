"use client";

import { motion } from "framer-motion";

interface TripleMLogoProps {
  className?: string;
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  withTripleMText?: boolean;
  onClick?: () => void;
}

export const TripleMLogo = ({
  className = "",
  variant = "auto",
  size = "md",
  withTripleMText = true,
  onClick,
}: TripleMLogoProps) => {
  // Size mappings
  const sizeMap = {
    sm: { text: "text-base", badge: "text-sm", spacing: "gap-1" },
    md: { text: "text-xl", badge: "text-base", spacing: "gap-1.5" },
    lg: { text: "text-3xl", badge: "text-xl", spacing: "gap-2" },
    xl: { text: "text-5xl", badge: "text-3xl", spacing: "gap-3" },
  };

  // Color variants (CSS variables for theme flexibility)
  const getColorStyle = () => {
    if (variant === "light") return { color: "#ffffff" };
    if (variant === "dark") return { color: "#ffffffff  " };
    // if (variant === "dark") return { color: "#111111" };
    return { color: "var(--text-primary, #1a1a1a)" }; // fallback
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`inline-flex items-center ${sizeMap[size].spacing} cursor-pointer ${className}`}
      style={getColorStyle()}
      onClick={onClick}
    >
      {/* Triple M Text - "Triple M" spelled out */}
      {withTripleMText && (
        <div className="flex items-baseline gap-0.5">
          <span className={`${sizeMap[size].text} font-light tracking-tighter`}>
            triple
          </span>
          <span
            className={`${sizeMap[size].text} font-semibold tracking-tighter ml-0.5`}
          >
            M
          </span>
        </div>
      )}

      {/* The [TM] badge exactly as requested */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`${sizeMap[size].badge} font-light tracking-tighter`}
        style={{ color: "inherit" }}
      >
        [TM]
      </motion.div>
    </motion.div>
  );
};
