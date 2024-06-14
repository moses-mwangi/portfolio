import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function Skills() {
  return (
    <div className=" w-[80%] mx-auto mt-28">
      <div className=" mb-10 ml-6">
        <div className="flex gap-3 items-center justify-center">
          <span className=" h-[1px] w-[300px] bg-gray-700 block" />
          <p className=" text-3xl font-[500]">
            <span
              className={`${cn(
                play.className
              )} text-xl font-light text-lightGreen`}
            >
              03.
            </span>
            Skills
          </p>
          <span className=" h-[1px] w-[300px] bg-gray-700 block" />
        </div>
      </div>
    </div>
  );
}
