import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectRepresentation from "./ProjectRepresentation";
import Header from "./Header";

export default function MyWorked() {
  return (
    <div id="project" className=" w-[70%] mx-auto pt-28">
      <Header />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-7 gap-y-14 items-center">
        <ProjectDetails number="01" label="FullStack Project" />
        <ProjectRepresentation url="/images/dashb.png" />
        <ProjectRepresentation url="/images/food_deliver.png" />
        <ProjectDetails number="02" label="Frontend Project" />
        <ProjectDetails number="03" label="Frontend Project" />
        <ProjectRepresentation url="/images/house.png" />
      </div>
    </div>
  );
}
