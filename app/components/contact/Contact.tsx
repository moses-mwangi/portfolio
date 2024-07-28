"use client";
import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-6 md:w-[80%] mx-auto pt-20 mb-32 mt-24"
      data-aos="fade-up"
    >
      <div className="flex gap-3 items-center justify-center mb-10 md:mb-16">
        <span className=" h-[1px] w-[200px] bg-gray-700 block" />
        <p className="text-2xl md:text-4xl font-[600] whitespace-nowrap">
          <span
            className={`${cn(
              play.className
            )} text-sm md:text-xl font-light text-lightGreen`}
          >
            04.
          </span>
          Get In Touch
        </p>
        <span className=" h-[1px] w-[200px] bg-gray-700 block" />
      </div>
      <div
        className=" grid md:grid-cols-[1fr_1.4fr] grid-cols-1 gap-6 items-center"
        data-aos="fade-up"
      >
        <div>
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
