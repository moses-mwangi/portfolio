"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 100,
      duration: 800,
      easing: "ease-in-sine",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <h1
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-anchor-placement="top-center"
      >
        moses mwangi
      </h1>
      <p data-aos="fade-up" data-aos-delay="300" data-aos-mirror="true">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis
        laboriosam quia, ducimus tempora incidunt nesciunt placeat quisquam
        consequatur mollitia consectetur, possimus voluptatibus molestias magni
        vel non sapiente. Aliquam, aliquid.
      </p>
    </div>
  );
}
