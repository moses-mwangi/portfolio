import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function Header() {
  return (
    <div data-aos="fade-up" className=" mb-12 ml-6">
      <div className="flex gap-3 items-center justify-center">
        <span className="hidden h-[1px] w-full bg-gray-700 md:block" />
        <p className="text-2xl md:text-4xl font-[600] whitespace-nowrap">
          <span
            className={`${cn(
              play.className
            )} text-sm md:text-xl font-light text-lightGreen`}
          >
            04.
          </span>
          Some Things I’ve Built
        </p>
        <span className=" h-[1px] w-full bg-gray-700 block" />
      </div>
    </div>
  );
}
