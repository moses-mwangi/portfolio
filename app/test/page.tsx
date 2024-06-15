"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Aos from "aos";

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      once: false,
      easing: "ease-in-sine",
      delay: 100,
    });

    Aos.refresh();
  }, []);

  return (
    <div className=" w-[50vw]">
      <h1 data-aos="fade-up">moses mesngi nene</h1>
      <p data-aos="fade-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis magni iste
        explicabo tempore, asperiores eveniet fugit, hic odit recusandae
        consequuntur suscipit et fugiat, praesentium consectetur saepe vero
        adipisci dignissimos obcaecati.
      </p>
    </div>
  );
}
