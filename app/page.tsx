import React from "react";
import "aos/dist/aos.css";
import { Card } from "@/components/ui/card";
import { ModeToggle } from "./components/MoodToogle";
import Navbar from "./components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function MyApp() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa atque
        provident officiis eaque non a, harum placeat recusandae totam similique
        dignissimos odio earum saepe blanditiis obcaecati, perspiciatis
        deleniti? Ipsam, fugiat!
      </p>
      <Separator />
      <Button>click me</Button>
      <Card className="w-[60%] mx-auto">
        <Navbar />

        <ModeToggle />
      </Card>
    </div>
  );
}

export default MyApp;
