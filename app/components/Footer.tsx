import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <Link
      href="https://github.com/moses-mwangi/portfolio"
      className=" text-deep_green text-[14px] flex flex-col mb-10 justify-center items-center"
    >
      <p>Design & Built by Moses Mungai</p>
      <p>7,284 3,556</p>
    </Link>
  );
}
