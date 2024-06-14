import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { FaCss3, FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiHtml5Fill, RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import { RxPlay } from "react-icons/rx";
import { SiJavascript, SiMysql, SiTypescript } from "react-icons/si";

export default function Skills() {
  return (
    <div className=" ml-7 text-light_slate">
      <p className="mb-4 text-xl font-normal flex items-center">
        <RxPlay className="" color="#66ffdb" /> Here are some of the skills i
        have worked with
      </p>

      <div className="flex ml-8 gap-7">
        <div className="flex flex-col items-center justify-start">
          <span className=" w-[3px] h-[60px] bg-lightGreen block rounded-sm" />
          <span className=" w-[1px] h-[70px] bg-gray-700 block" />
        </div>

        <div className="grid grid-cols-3 gap-x-24">
          <FaReact className="w-8 h-8" fontWeight={800} color="#06b6d4" />{" "}
          <RiNextjsLine
            className=" w-8 h-8"
            fontWeight={800}
            fill="black"
            color="white"
          />
          <SiJavascript className=" w-8 h-8" fontWeight={800} fill="yellow" />
          <RiHtml5Fill className=" w-8 h-8" fontWeight={800} fill="#f97316" />
          <FaCss3 className=" w-8 h-8" fontWeight={800} fill="#06b6d4" />
          <SiTypescript
            className=" w-8 h-8 bg-white rounded-sm"
            fontWeight={800}
            fill="#0284c7"
          />
          <SiMysql
            className=" w-8 h-8 bg-white rounded-sm"
            fontWeight={800}
            fill="#0284c7"
          />
        </div>
      </div>
    </div>
  );
}
