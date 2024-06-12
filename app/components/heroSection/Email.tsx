import React from "react";
import Link from "next/link"; // Adjust according to your routing library

export default function Email() {
  return (
    <>
      <div className="flex fixed bottom-72 right-0">
        <p className=" rotate-90 block w-[92px] text-lightest_slate  font-light text-[14px]">
          moses.mwangi.me@gmail.com
        </p>
      </div>
      <span className=" w-[1px] h-[110px] fixed bottom-0 right-0 bg-gray-300 block mr-[46px]" />
    </>
  );
}
