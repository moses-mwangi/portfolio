import React from "react";
import { animate, motion } from "framer-motion";

export default function BackText() {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{
        x: -2000,
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className=" w-[100vw] -z-50 fixed text-[50vh] font-semibold bottom-[-115px] whitespace-nowrap text-animate_text"
    >
      Writer content creator influencer
    </motion.div>
  );
}