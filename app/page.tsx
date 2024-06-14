import React from "react";
import "aos/dist/aos.css";
import Navbar from "./components/home/Navbar";
import HeroSection from "./components/home/HeroSection";
import About from "./components/about/About";
import MyWorked from "./components/projects.tsx/MyWorked";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

function MyApp() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      {/* <Skills /> */}
      <MyWorked />
      <Contact />
    </div>
  );
}

export default MyApp;
