import React from "react";
import { RxPlay } from "react-icons/rx";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import { teck } from "./TeckLabel";

const serif = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--barlow",
  style: ["normal"],
});

export default function TechStarck() {
  return (
    <div>
      <p data-aos="fade-up" className=" font-[45px]">
        Here are a few technologies I’ve been working with recently:
      </p>
      <ul
        data-aos="fade-up"
        data-aos-offset="200"
        className="mb-4 mt-2 text-xl font-normal grid grid-cols-3 text-slate"
      >
        {teck.map((el) => (
          <li
            className={`${cn(serif.className)} flex items-center text-[15px]`}
            key={el.label}
          >
            <RxPlay className="w-3 h-3" color="#66ffdb" />
            <span className="text-[15px]">{el.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
