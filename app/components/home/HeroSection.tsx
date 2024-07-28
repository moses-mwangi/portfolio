"use client";
import React, { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import Email from "./Email";
import BackText from "./BackText";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import Aos from "aos";
import "aos/dist/aos.css";
import { Router } from "next/router";

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
    // if (typeof window !== "undefined") {
    Aos.init({
      // startEvent: "DOMContentLoaded",
      offset: 60,
      duration: 800,
      easing: "ease-in-sine",
      delay: 60,
      once: false,
      // disableMutationObserver: ,
    });

    // const handleRouteChange = () => {
    Aos.refresh();
    // };

    // Router.events.on("routeChangeComplete", handleRouteChange);
    // return () => {
    //   Router.events.off("routeChangeComplete", handleRouteChange);
    // };
    // }
  }, []);

  return (
    <div
      id="home"
      className="md:pl-12 pl-5 pr-4 h-[100svh] pt-24 md:pt-36 relative overflow-x-clip"
    >
      <div className="md:w-[80%] mx-auto">
        <div>
          <h1
            data-aos="zoom-in"
            className=" text-lightGreen font-light md:mb-8"
          >
            Hi, my name is
          </h1>
          <p className=" text-4xl font-bold text-lightest_slate md:font-extrabold md:text-[56px] leading-normal mb-1">
            Moses Mwangi.
          </p>
          <p
            data-aos="fade-right"
            className="text-slate text-4xl font-bold md:text-[50px] leading-none mb-10"
          >
            {/* I’m a Fullstack web developer */}
            I’m a Fullstack developer.
          </p>

          <p
            className={`${cn(
              serif.className
            )} md:mb-16 mb-6 md:w-[580px] text-slate md:text-[17px]`}
          >
            I am a passionate and dedicated Fullstack Developer with a strong
            foundation in web development technologies and a keen eye for
            design. My journey in fullstack development began quite a years back
            , and I have since honed my skills through continuous learning and
            hands-on experience in various projects.
          </p>
          <SocialMedia />
          <button
            className={`${cn(
              serif.className
            )} z-50 md:px-7 px-4 py-2 md:py-4 rounded-sm text-lightGreen md:text-[15px] font-light border-[1px] border-solid border-lightGreen  w-fit transition-all duration-300 hover:shadow-[3px_3px_0_lightGreen]  hover:translate-x-[-3px] hover:translate-y-[-3px]`}
            onClick={() => {}}
          >
            Check out my projects
          </button>
        </div>
        <BackText />
        <Email />
      </div>
    </div>
  );
}
