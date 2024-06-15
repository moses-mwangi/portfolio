"use client";
import React, { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import Email from "./Email";
import BackText from "./BackText";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import Aos from "aos";
import "aos/dist/aos.css";

const serif = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--tourn",
  style: ["normal"],
});

export default function HeroSection() {
  // const variants = {
  //   initial: { opacity: 0, x: -500 },
  //   animate: {
  //     opacity: 1,
  //     x: 0,
  //     transition: { duration: 2, staggerChildren: 0.1 },
  //   },
  // };

  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 100,
      easing: "ease-in-sine",
      offset: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="pl-12 h-[88svh] relative overflow-x-clip">
      <div className="w-[80%] mx-auto pt-16">
        <div>
          <h1
            data-aos="fade-right"
            // data-aos-delay="150"
            className=" text-lightGreen font-light mb-8"
          >
            Hi, my name is
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            className=" text-lightest_slate font-extrabold text-[56px] leading-normal mb-2"
          >
            Moses Mungai.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="230"
            className="text-slate font-bold text-[50px] leading-none mb-10"
          >
            I’m a Frontend developer
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="250"
            className={`${cn(serif.className)} mb-16 w-[580px] text-slate`}
          >
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="300"
            className=" z-50 px-7 py-4 rounded-sm text-lightGreen text-[15px] font-light border-[1px] border-solid border-lightGreen  w-fit transition-all duration-300 hover:shadow-[3px_3px_0_lightGreen]  hover:translate-x-[-3px] hover:translate-y-[-3px]"
          >
            Check out my projects
          </button>
        </div>
        <BackText />
        <Email />
        <SocialMedia />
      </div>
    </div>
  );
}
