import React from "react";
import { RxPlay } from "react-icons/rx";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";

const serif = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--barlow",
  style: ["normal"],
});

export default function TechStarck() {
  return (
    <div>
      <p className=" font-[45px]">
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul className="mb-4 mt-2 text-xl font-normal grid grid-cols-3 text-slate">
        <li className={`${cn(serif.className)} flex items-center  gap-x-[6px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">Javascript</span>
        </li>
        <li className={`${cn(serif.className)} flex items-center text-[15px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">React.js</span>
        </li>
        <li className={`${cn(serif.className)} flex items-center text-[15px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">Next.js</span>
        </li>
        <li className={`${cn(serif.className)} flex items-center text-[15px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">Typescript.js</span>
        </li>
        <li className={`${cn(serif.className)} flex items-center text-[15px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">Mysql</span>
        </li>
        <li className={`${cn(serif.className)} flex items-center text-[15px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">Html & Css</span>
        </li>
        <li className={`${cn(serif.className)} flex items-center text-[15px]`}>
          <RxPlay className="w-3 h-3" color="#66ffdb" />
          <span className="text-[15px]">Typescript.js</span>
        </li>
      </ul>
    </div>
  );
}
