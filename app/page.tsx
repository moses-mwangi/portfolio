"use client";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Products from "./components/Products";

function MyApp() {
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
    <div>
      <p data-aos="fade-up">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
        labore tempora magni dicta sunt fugit alias vero, sit et nesciunt enim
        laudantium, id iste numquam voluptatem sed. Placeat, dolorem dolorum?
      </p>
      <Products />
    </div>
  );
}

export default MyApp;
