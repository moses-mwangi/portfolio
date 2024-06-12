import React from "react";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import About from "./components/about/About";

function MyApp() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}

export default MyApp;
