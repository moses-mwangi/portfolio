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

const social = [{ label: "GitHub" }, { label: "Linkedin" }];

export default function SocialMedia() {
  return (
    <div className=" fixed bottom-0 left-0 flex items-center flex-col gap-7 pl-12">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
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
            <Link href="/">
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
            <Link href="/">
              <TwitterLogoIcon className=" w-5 h-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Twitter</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/">
              <InstagramLogoIcon className=" w-5 h-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Instagram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <span className=" w-[1px] h-[110px] bg-light_slate block" />
    </div>
  );
}
