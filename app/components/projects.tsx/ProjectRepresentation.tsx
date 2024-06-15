import Image from "next/image";
import React from "react";

export default function ProjectRepresentation({ url }: { url: string }) {
  return (
    <div className="">
      <Image
        className="w-[800px] opacity-80 transition-all duration-200 hover:opacity-100 rounded-sm"
        src={url}
        width={900}
        height={900}
        alt="Dashboard rep"
      />
      {/* <div className="absolute top-0 left-0 w-[400px] rounded-sm h-full hover:opacity-0 bg-lightGreen transition-all duration-200 opacity-25" /> */}
    </div>
  );
}
