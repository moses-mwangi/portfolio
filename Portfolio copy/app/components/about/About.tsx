import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import TechStarck from "./TechStarck";
import "aos/dist/aos.css";

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

export default function About() {
  return (
    <div id="about" className=" md:w-[70%] mx-auto pt-24 md:pt-32">
      <div className=" mb-10 ml-6">
        <div data-aos="fade-up" className="flex gap-3 items-center pr-3">
          <p className="text-2xl font-[600] whitespace-nowrap">
            <span
              className={`${cn(
                play.className
              )} text-sm font-light text-lightGreen`}
            >
              02.
            </span>
            About Me
          </p>
          <span className=" h-[1px] w-full md:w-[300px] bg-gray-700 block" />
        </div>
      </div>
      <div className="grid md:grid-cols-[auto_1fr] gap-10 ml-6 grid-cols-1">
        <div
          className={`${cn(
            serif.className
          )} flex flex-col gap-4 md:text-[17px]`}
        >
          <p data-aos="fade-up" className="text-slate">
            Hello! I’m Moses Mungai, a passionate and dedicated fullstack
            developer with a keen eye for design and a love for crafting
            seamless user experiences. I specialize in creating responsive,
            user-friendly websites and applications using modern web
            technologies.
          </p>
          <p data-aos="fade-up" className="text-slate">
            I began my coding journey with a fascination for how websites work
            and quickly fell in love with fullstack development. I thrive on
            turning ideas into reality through code, and I continuously seek to
            improve my skills and stay updated with the latest industry trends.
          </p>
          <p data-aos="fade-up" className="text-slate">
            When I’m not coding, you can find me
            <span className="pl-1 text-[15px] text-lightGreen">
              exploring new hiking trails,playing the guitar, or experimenting
              with new recipes in the kitchen
            </span>
            . I believe that a healthy balance of work and play fuels creativity
            and productivity.
          </p>
          <TechStarck />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="200"
          className="relative rounded-sm border-[2px] border-solid border-lightGreen w-[292px] h-[292px]"
        >
          <div className="relative h-72 w-72 -top-3 -left-3  transition-all duration-200 hover:translate-x-[-6px] hover:translate-y-[-6px]">
            <Image
              className="object-cover w-full h-full rounded-sm"
              // src="/images/JMN_6818.JPG"
              src="/images/moses_edited.jpg"
              alt="moses mwangi"
              width={600}
              height={600}
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
