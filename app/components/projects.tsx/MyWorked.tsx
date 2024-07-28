import React from "react";
import ProjectDetails from "./ProjectDetails";
import Header from "./Header";

export default function MyWorked() {
  return (
    <div id="project" className=" md:w-[70%] mx-auto pt-28 pr-4 pl-6">
      <Header />
      <ProjectDetails />
    </div>
  );
}
