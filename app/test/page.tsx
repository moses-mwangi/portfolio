"use client";
import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
export default function Home() {
  return (
    <div className=" ml-20 mt-20 relative rounded-sm border-[2px] border-solid border-lightGreen w-[292px] h-[292px]">
      <div className="relative w-72 h-72 -top-3 -left-3  transition-all duration-200 hover:translate-x-[-6px] hover:translate-y-[-6px]">
        <Image
          className="object-cover w-full h-full rounded-sm"
          src="/images/image.png"
          alt="moses mwangi"
          width={290}
          height={290}
          priority
          quality={100}
        />
        <div className="absolute top-0 left-0 w-full rounded-sm h-full hover:opacity-0 bg-lightGreen transition-all duration-200 opacity-60"></div>
      </div>
    </div>
  );
}

{
  /* <div>
<motion.circle
  className=" bg-gray-50"
  cx={300}
  cy={300}
  radius={300}
  stroke="#000000"
  strokeWidth={4}
  strokeLinejoin="round"
  strokeLinecap="round"
  initial={{ strokeDasharray: "24 10 0 0" }}
  animate={{
    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
    rotate: [120, 360],
  }}
/>
</div> */
}
