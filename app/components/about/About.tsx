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

export default function About() {
  return (
    <div className=" w-[70%] mx-auto mt-16">
      <div className=" mb-10">
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
      <div className=" grid grid-cols-[1fr_auto] gap-8">
        <div className="text-slate flex flex-col gap-4">
          <p>
            Hello! I’m [Your Name], a passionate and dedicated junior frontend
            developer with a keen eye for design and a love for crafting
            seamless user experiences. I specialize in creating responsive,
            user-friendly websites and applications using modern web
            technologies.
          </p>
          <p>
            When I’m not coding, you can find me [ [personal touch]insert
            personal interests or hobbies, e.g. exploring new hiking
            trails,playing the guitar or experimenting with new recipes in the
            kitchen] . I believe that a healthy balance of work and play fuels
            creativity and productivity.
          </p>
          <p>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <div>
            <p></p>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Next js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src="/images/image.png"
            alt="moses mwangi"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
