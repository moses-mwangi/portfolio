"use client";

import React, { useEffect, useRef } from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { animate } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function Navbar() {
  const scrollToHome = () => {
    const footerElement = document.getElementById("home");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const footerElement = document.getElementById("about");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProject = () => {
    const footerElement = document.getElementById("project");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const footerElement = document.getElementById("contact");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className=" hidden md:flex md:justify-between md:items-center px-12 py-3 md:shadow-xl z-50 w-full md:fixed md:top-0 md:left-0">
      <div className="">
        <h1 className=" text-2xl font-medium">M</h1>
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex flex-row gap-7 text-[13px]">
          <div
            onClick={() => {
              scrollToHome();
            }}
            // href="/#home"
            className={`${cn(play.className)} flex gap-1 cursor-pointer`}
          >
            <span className=" text-lightGreen">01.</span>
            <span className=" text-lightest_slate hover:text-lightGreen transition-all">
              Home
            </span>
          </div>
          <span
            className={`${cn(play.className)} flex gap-1 cursor-pointer`}
            // href="/#about"
            onClick={scrollToAbout}
          >
            <span className=" text-lightGreen">02.</span>
            <span className=" text-lightest_slate hover:text-lightGreen transition-all">
              About
            </span>
          </span>
          <div
            onClick={scrollToAbout}
            // href="/#about"
            className={`${cn(play.className)} flex gap-1 cursor-pointer`}
          >
            <span className=" text-lightGreen">03.</span>
            <span className=" text-lightest_slate hover:text-lightGreen transition-all">
              Skills
            </span>
          </div>
          <div
            onClick={scrollToProject}
            // href="/#projects"
            className={`${cn(play.className)} flex gap-1 cursor-pointer`}
          >
            <div className=" text-lightGreen">04.</div>
            <div className="text-lightest_slate hover:text-lightGreen transition-all">
              Work
            </div>
          </div>
          <div
            // href="/#contact"
            className={`${cn(play.className)} flex gap-1 cursor-pointer`}
            onClick={scrollToContact}
          >
            <span className=" text-lightGreen">05.</span>
            <span className=" text-lightest_slate hover:text-lightGreen transition-all">
              Contact
            </span>
          </div>
        </ul>
        <Link
          href="/#resume"
          className="px-4 py-2 rounded-sm text-lightGreen text-[13px] font-light border-[1px] border-solid border-lightGreen  w-fit transition-all duration-300 hover:shadow-[3px_3px_0_lightGreen]  hover:translate-x-[-3px] hover:translate-y-[-3px]"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
}
