import Image from "next/image";
import React from "react";

export default function ProjectRepresentation({ url }: { url: string }) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      data-aos-delay="200"
      className=""
    >
      <Image
        className="md:w-[800px] opacity-80 transition-all duration-200 hover:opacity-100 rounded-sm"
        src={url}
        width={600}
        height={600}
        alt="Dashboard rep"
      />
    </div>
  );
}
