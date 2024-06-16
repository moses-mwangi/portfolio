"use client";

import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import { RxExternalLink } from "react-icons/rx";

import {
  Tourney,
  Barlow_Semi_Condensed as Libre_Baskerville,
} from "next/font/google";
import { cn } from "@/lib/utils";

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

export default function ProjectDetails({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  const [arrow, setArrow] = useState(true);
  return (
    <div>
      <div className=" flex flex-col gap-3 mb-4">
        <span
          className={`${cn(
            tourney.className
          )} md:text-[60px] text-4xl font-bold text-slate`}
        >
          {number}
        </span>
        <h1 className="font-semibold text-xl md:text-2xl">{label}</h1>
        <p
          className={`${cn(
            serif.className
          )} text-slate md:text-[17px] leading-5`}
        >
          A web app for visualizing personalized Spotify data. View your top
          artists, top tracks, recently played tracks, and detailed audio
        </p>
        <p
          className={`${cn(
            serif.className
          )} text-green-300 font-medium opacity-50 text-[13px]`}
        >
          Next.js Tailwind Shadcn ui & Mysql
        </p>
      </div>
      <Separator className=" hidden md:block" />
      <div className="mt-4 flex flex-row gap-2 items-center">
        <Link href="/" className=" text-deep_green hover:text-white">
          <RxExternalLink className=" w-6 h-6" />
        </Link>
        <Link href="/" className=" text-deep_green hover:text-white">
          <GitHubLogoIcon className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
