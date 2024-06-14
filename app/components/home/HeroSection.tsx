"use client";
import React, { useTransition } from "react";
import SocialMedia from "./SocialMedia";
import Email from "./Email";
import { animate, motion } from "framer-motion";
import BackText from "./BackText";

export default function HeroSection() {
  const variants = {
    initial: { opacity: 0, x: -500 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, staggerChildren: 0.1 },
    },
  };

  return (
    <div className="pl-12 h-[88svh] relative overflow-x-clip">
      <div className="w-[80%] mx-auto pt-16">
        <motion.div variants={variants} initial="initial" animate="animate">
          <motion.h1 className=" text-lightGreen font-light mb-8">
            Hi, my name is
          </motion.h1>
          <motion.p className=" text-lightest_slate font-extrabold text-[56px] leading-normal mb-2">
            Moses Mungai.
          </motion.p>
          <motion.p className="text-slate font-bold text-[50px] leading-none mb-10">
            I’m a Frontend developer
          </motion.p>
          <motion.p className=" mb-16 w-[580px] text-slate">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </motion.p>
          <motion.button className=" z-50 px-7 py-4 rounded-sm text-lightGreen text-[15px] font-light border-[1px] border-solid border-lightGreen  w-fit transition-all duration-300 hover:shadow-[3px_3px_0_lightGreen]  hover:translate-x-[-3px] hover:translate-y-[-3px]">
            Check out my projects
          </motion.button>
        </motion.div>
        <BackText />
        <Email />
        <SocialMedia />
      </div>
    </div>
  );
}
