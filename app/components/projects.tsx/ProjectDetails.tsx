"use client";

import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ArrowUpRightSquareIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { RxExternalLink } from "react-icons/rx";

export default function ProjectDetails() {
  const [arrow, setArrow] = useState(true);
  return (
    <div>
      <div className=" flex flex-col gap-3 mb-4">
        <span className=" text-[60px] font-bold text-slate">01</span>
        <h1 className=" font-semibold text-2xl">FullStack Project</h1>
        <p className=" text-slate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          impedit cupiditate alias
        </p>
        <p className=" text-green-300 font-medium opacity-50 text-[13px]">
          Next.js Tailwind Shadcn ui & Mysql
        </p>
      </div>
      <Separator />
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
