import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Barlow_Semi_Condensed as Barlow } from "next/font/google";
import { cn } from "@/lib/utils";

const serif = Barlow({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--barlow",
  style: ["normal"],
});

export default function ContactForm() {
  return (
    <Card className="rounded-sm  bg-transparent">
      <p className="flex justify-center mt-5 mb-8 text-[17px] font-medium">
        Let’s work together
      </p>
      <div className={`${cn(serif.className)} px-3 pb-10 flex flex-col gap-5`}>
        <div className=" grid grid-cols-2 gap-x-3 gap-y-5">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
        </div>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent className=" w-full">
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Wed Developer</SelectItem>
              <SelectItem value="banana">Logo design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Textarea className=" h-20" placeholder="What do you say sir" />
        <Button className=" rounded-sm bg-deep_green w-full cursor-pointer">
          send message
        </Button>
      </div>
    </Card>
  );
}
