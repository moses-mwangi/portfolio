import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function Navbar() {
  return (
    <nav className=" hidden md:flex md:justify-between md:items-center md:px-12 md:py-5 md:shadow-xl">
      <div className="">
        <h1 className=" text-2xl font-medium">M</h1>
      </div>
      <div className="flex items-center gap-7">
        <ul className="flex flex-row gap-7 text-[13px]">
          <li className={`${cn(play.className)} flex gap-1 cursor-pointer`}>
            <div className=" text-lightGreen">01.</div>
            <div className=" text-lightest_slate hover:text-lightGreen transition-all">
              Home
            </div>
          </li>
          <li className={`${cn(play.className)} flex gap-1 cursor-pointer`}>
            <span className=" text-lightGreen">02.</span>
            <div className=" text-lightest_slate hover:text-lightGreen transition-all">
              About
            </div>
          </li>
          <li className={`${cn(play.className)} flex gap-1 cursor-pointer`}>
            <div className=" text-lightGreen">03.</div>
            <div className=" text-lightest_slate hover:text-lightGreen transition-all">
              Skills
            </div>
          </li>
          <li className={`${cn(play.className)} flex gap-1 cursor-pointer`}>
            <div className=" text-lightGreen">04.</div>
            <div className="text-lightest_slate hover:text-lightGreen transition-all">
              Work
            </div>
          </li>
          <li className={`${cn(play.className)} flex gap-1 cursor-pointer`}>
            <div className=" text-lightGreen">05.</div>
            <div className=" text-lightest_slate hover:text-lightGreen transition-all">
              Contact
            </div>
          </li>
        </ul>
        <button className="px-4 py-2 rounded-sm text-lightGreen text-[13px] font-light border-[1px] border-solid border-lightGreen  w-fit transition-all duration-300 hover:shadow-[3px_3px_0_lightGreen]  hover:translate-x-[-3px] hover:translate-y-[-3px]">
          Resume
        </button>
      </div>
    </nav>
  );
}
