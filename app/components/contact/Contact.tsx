import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Card } from "@/components/ui/card";
import { RxPaperPlane } from "react-icons/rx";
import { FaPhoneVolume } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
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
    <div className=" w-[80%] mx-auto mt-28 mb-60">
      <div className="flex gap-3 items-center justify-center mb-16">
        <span className=" h-[1px] w-[200px] bg-gray-700 block" />
        <p className=" text-3xl font-[500]">
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
