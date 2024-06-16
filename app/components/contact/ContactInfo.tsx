import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { RxPaperPlane } from "react-icons/rx";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";

const serif = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--barlow",
  style: ["normal"],
});

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-3">
      <p
        data-aos="fade-left"
        className=" font-semibold text-xl text-lightest_slate opacity-80 flex justify-center"
      >
        Contact Me
      </p>
      <div className={`${cn(serif.className)}`}>
        <h1
          data-aos="fade-left"
          className=" font-[500] text-[18px] md:text-xl text-lightest_slate opacity-85"
        >
          Lets work together
        </h1>
        <p data-aos="fade-left" className="text-slate mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          assumenda eius eligendi ullam quo! Ex doloremque, est nulla deserunt
          distinctio nostrum non, amet, at libero sit perferendis. Corrupti, non
          quas.
        </p>
      </div>
      <div className={`${cn(serif.className)} flex flex-col mt-8 mb-8`}>
        <span
          data-aos="fade-left"
          className="flex items-center gap-2 text-lightest_slate text-[18px]"
        >
          <RxPaperPlane color="lightgreen" /> moses.mwangi.me@gmail.com
        </span>
        <span
          data-aos="fade-left"
          className="flex items-center gap-2 text-lightest_slate text-[18px]"
        >
          <FaPhoneVolume color="lightgreen" /> +254 725672675
        </span>
      </div>
      <div data-aos="fade-left" className="flex gap-5">
        <Link
          href="https://github.com/moses-mwangi/portfolio"
          className="text-deep_green hover:text-white hover:-translate-y-1 transition-all duration-200"
        >
          <GitHubLogoIcon className="w-7 h-7 border-2 border-solid border-deep_green rounded-full p-1" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/moses-mwangi-5b4ba6292/"
          className=" text-deep_green hover:text-white hover:-translate-y-1 transition-all duration-200"
        >
          <LinkedInLogoIcon className="w-7 h-7 border-2 border-solid border-deep_green rounded-full p-1" />
        </Link>
      </div>
    </div>
  );
}
