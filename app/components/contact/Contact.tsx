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
    <div id="contact" className=" w-[80%] mx-auto pt-20 mb-40 mt-28">
      <div className="flex gap-3 items-center justify-center mb-16">
        <span className=" h-[1px] w-[200px] bg-gray-700 block" />
        <p className=" text-4xl font-[500]">
          <span
            className={`${cn(
              play.className
            )} text-xl font-light text-lightGreen`}
          >
            04.
          </span>
          Get In Touch
        </p>
        <span className=" h-[1px] w-[200px] bg-gray-700 block" />
      </div>
      <div className=" grid md:grid-cols-[1fr_1.4fr] grid-cols-1 gap-6 items-center">
        <div>
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
