import Image from "next/image";
import React from "react";

export default function ProjectRepresentation() {
  return (
    <div>
      <Image
        className=" w-[800px]"
        src="/images/dashb.png"
        width={900}
        height={900}
        alt="Dashboard rep"
      />
    </div>
  );
}
