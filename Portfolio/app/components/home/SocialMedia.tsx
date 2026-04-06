import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { LinkedinIcon } from "lucide-react";
import { RxPaperPlane } from "react-icons/rx";
import { FaPhoneVolume } from "react-icons/fa6";

const social = [{ label: "GitHub" }, { label: "Linkedin" }];

export default function SocialMedia() {
  return (
    <div className=" md:fixed md:bottom-0 md:left-0 flex flex-row mb-12 items-center md:flex-col gap-5 md:gap-7 md:pl-12">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="hover:text-white text-deep_green hover:-translate-y-1 transition-all duration-200"
              href="https://github.com/moses-mwangi/portfolio"
            >
              <GitHubLogoIcon className=" w-5 h-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>GitHub</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="hover:text-white text-deep_green hover:-translate-y-1 transition-all duration-200"
              href="https://www.linkedin.com/in/moses-mwangi-5b4ba6292/"
            >
              <LinkedinIcon className=" w-5 h-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>LinkedIn</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="hover:text-white text-deep_green hover:-translate-y-1 transition-all duration-200"
              href="/"
            >
              <RxPaperPlane />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Email</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              className="hover:text-white text-deep_green hover:-translate-y-1 transition-all duration-200"
              href="/"
            >
              <FaPhoneVolume className=" w-4 h-4" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>+254 725672675</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <span className=" hidden w-[1px] h-[110px] bg-light_slate md:block" />
    </div>
  );
}
