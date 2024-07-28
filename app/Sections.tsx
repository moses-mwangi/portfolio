"use client";

import React from "react";
import Navbar from "./components/home/Navbar";
import HeroSection from "./components/home/HeroSection";
import About from "./components/about/About";
import MyWorked from "./components/projects.tsx/MyWorked";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/Footer";

export default function Sections() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      {/* <Skills /> */}
      <MyWorked />
      <Contact />
      <Footer />
    </div>
  );
}
