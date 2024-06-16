import React from "react";
import ProjectDetails from "./ProjectDetails";
import ProjectRepresentation from "./ProjectRepresentation";
import Header from "./Header";
import { Separator } from "@/components/ui/separator";

export default function MyWorked() {
  return (
    <div id="project" className=" md:w-[70%] mx-auto pt-28 pr-4 pl-6">
      <Header />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:gap-x-7 md:gap-x-7 gap-y-14 items-center">
        <ProjectDetails number="01" label="FullStack Project" />
        <ProjectRepresentation url="/images/dashb.png" />
        <Separator className=" md:hidden lg:hidden" />
        <ProjectDetails number="02" label="Frontend Project" />
        <ProjectRepresentation url="/images/food_deliver.png" />
        <Separator className=" md:hidden lg:hidden" />
        <ProjectDetails number="03" label="Frontend Project" />
        <ProjectRepresentation url="/images/house.png" />
      </div>
    </div>
  );
}
