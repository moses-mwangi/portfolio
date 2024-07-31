"use client";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { RxExternalLink } from "react-icons/rx";
import {
  Tourney,
  Barlow_Semi_Condensed as Libre_Baskerville,
} from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { projects } from "./ProjectService";

const tourney = Tourney({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--tourn",
  style: ["normal"],
});

const serif = Libre_Baskerville({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--tourn",
  style: ["normal"],
});

export default function ProjectDetails() {
  return (
    <div className="mt-7">
      {projects.map((el) => (
        <div
          className="flex flex-col md:flex-row gap-4 mb-16 items-center"
          key={el.number}
        >
          <div data-aos="fade-up">
            <div className=" flex flex-col gap-3 mb-4">
              <span
                className={`${cn(
                  tourney.className
                )} md:text-[60px] text-4xl font-bold text-slate`}
              >
                {el.number}
              </span>
              <h1 className="font-semibold text-xl md:text-2xl">{el.label}</h1>
              <p
                className={`${cn(
                  serif.className
                )} text-slate md:text-[17px] leading-5`}
              >
                {el.description}
              </p>
              <p
                className={`${cn(
                  serif.className
                )} text-green-300 font-medium opacity-50 text-[13px]`}
              >
                {el.tecknology}
              </p>
            </div>
            <Separator className=" hidden md:block" />
            <div className="mt-4 flex flex-row gap-2 items-center">
              <Link
                href={el.link}
                className=" text-deep_green hover:text-white"
              >
                <RxExternalLink className=" w-6 h-6" />
              </Link>
              <Link href="/" className=" text-deep_green hover:text-white">
                <GitHubLogoIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-delay="200"
            className=" flex flex-col gap-16"
          >
            <Image
              className="md:w-[800px] opacity-80 transition-all duration-200 hover:opacity-100 rounded-sm"
              src={el.url}
              width={600}
              height={600}
              alt="Dashboard rep"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
