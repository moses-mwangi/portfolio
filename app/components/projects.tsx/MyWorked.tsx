import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProjectDetails from "./ProjectDetails";
import ProjectRepresentation from "./ProjectRepresentation";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function MyWorked() {
  return (
    <div className=" w-[70%] mx-auto mt-32">
      <div className=" mb-12 ml-6">
        <div className="flex gap-3 items-center justify-center">
          <span className=" h-[1px] w-[200px] bg-gray-700 block" />
          <p className=" text-4xl font-[600]">
            <span
              className={`${cn(
                play.className
              )} text-xl font-light text-lightGreen`}
            >
              04.
            </span>
            Some Things I’ve Built
          </p>
          <span className=" h-[1px] w-[200px] bg-gray-700 block" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-14 items-center">
        <ProjectDetails />
        <ProjectRepresentation />
        <ProjectRepresentation />
        <ProjectDetails />
        <ProjectDetails />
        <ProjectRepresentation />
      </div>
    </div>
  );
}
