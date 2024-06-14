import React from "react";
import { PT_Serif as Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { RxPaperPlane } from "react-icons/rx";
import { FaPhoneVolume } from "react-icons/fa6";
import Link from "next/link";

const play = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--play",
  style: ["normal"],
});

// export default function ContactInfo() {
//   return (
//   <div className="flex gap-3 items-center">

//    <div className=" grid grid-cols-[1.5fr_1fr] gap-6">
//       <div className=" grid gap-4">
//
//       <div>
//       <h1 className=" font-[500] text-xl text-lightest_slate opacity-85">
//        Lets work together
//       </h1>
//       <p className="text-slate">
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
//        assumenda eius eligendi ullam quo! Ex doloremque, est nulla
//        deserunt distinctio nostrum non, amet, at libero sit perferendis.
//        Corrupti, non quas.
//       </p>
//      </div>
// <div className="flex flex-col">
//   <span className="flex items-center gap-1">
//     <RxPaperPlane color="lightgreen" /> moses.mwangi.me@gmail.com
//   </span>
//   <span className="flex items-center gap-1">
//     <FaPhoneVolume color="lightgreen" /> +254 725672675
//   </span>
// </div>
// <div className="flex gap-3">
//   <GitHubLogoIcon className=" w-5 h-5" />
//   <LinkedInLogoIcon className=" w-5 h-5" />
// </div>
//     </div>
//   </div>
//   );
// }

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-3">
      <p className=" font-semibold text-2xl text-lightest_slate opacity-80 flex justify-center">
        Contact Me
      </p>
      <div>
        <h1 className=" font-[500] text-xl text-lightest_slate opacity-85">
          Lets work together
        </h1>
        <p className="text-slate mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          assumenda eius eligendi ullam quo! Ex doloremque, est nulla deserunt
          distinctio nostrum non, amet, at libero sit perferendis. Corrupti, non
          quas.
        </p>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <span className="flex items-center gap-2 text-lightest_slate">
          <RxPaperPlane color="lightgreen" /> moses.mwangi.me@gmail.com
        </span>
        <span className="flex items-center gap-2 text-lightest_slate">
          <FaPhoneVolume color="lightgreen" /> +254 725672675
        </span>
      </div>
      <div className="flex gap-5">
        <Link href="/" className="text-deep_green hover:text-white">
          <GitHubLogoIcon className="w-7 h-7 border-2 border-solid border-deep_green rounded-full p-1" />
        </Link>
        <Link href="/" className="text-deep_green hover:text-white">
          <LinkedInLogoIcon
            className="w-7 h-7 border-2 border-solid border-deep_green rounded-full p-1"
            fill="lightgreen"
          />
        </Link>
      </div>
    </div>
  );
}
