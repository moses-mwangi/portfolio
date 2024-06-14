import React from "react";

import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Skills from "./Skills";
const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function About() {
  return (
    <div className=" w-[70%] mx-auto mt-28">
      <div className=" mb-10 ml-6">
        <div className="flex gap-3 items-center">
          <p className=" text-3xl font-[500]">
            <span
              className={`${cn(
                play.className
              )} text-xl font-light text-lightGreen`}
            >
              02.
            </span>
            About Me
          </p>
          <span className=" h-[1px] w-[300px] bg-gray-700 block" />
        </div>
      </div>
      <div className="grid sm:grid-cols-[1fr_auto] gap-10 ml-6 grid-cols-1">
        <div className="flex flex-col gap-4">
          <p className="text-slate">
            Hello! I’m Moses Mungai, a passionate and dedicated junior frontend
            developer with a keen eye for design and a love for crafting
            seamless user experiences. I specialize in creating responsive,
            user-friendly websites and applications using modern web
            technologies.
          </p>
          <p className="text-slate">
            When I’m not coding, you can find me [ [personal touch]insert
            personal interests or hobbies, e.g. exploring new hiking
            trails,playing the guitar or experimenting with new recipes in the
            kitchen] . I believe that a healthy balance of work and play fuels
            creativity and productivity.
          </p>
          <p className="text-slate">
            I began my coding journey with a fascination for how websites work
            and quickly fell in love with frontend development. I thrive on
            turning ideas into reality through code, and I continuously seek to
            improve my skills and stay updated with the latest industry trends.
          </p>
          <Skills />
        </div>
        <div className="relative rounded-sm border-[2px] border-solid border-lightGreen w-[292px] h-[292px]">
          <div className="relative w-72 h-72 -top-3 -left-3  transition-all duration-200 hover:translate-x-[-6px] hover:translate-y-[-6px]">
            <Image
              className="object-cover w-full h-full rounded-sm"
              src="/images/JMN_6818.JPG"
              alt="moses mwangi"
              width={290}
              height={290}
              priority
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full rounded-sm h-full hover:opacity-0 bg-lightGreen transition-all duration-200 opacity-35"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
