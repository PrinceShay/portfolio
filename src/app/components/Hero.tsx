"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {
  function TextFinished() {
    console.log("Ich bin fertig");
  }

  useEffect(() => {
    // This will run after the component has mounted
    const text = new SplitType(".text-hero", { types: "chars" });

    var tl = gsap.timeline({ autoAlpha: 0, onComplete: TextFinished });

    tl.from(".text-hero .char", {
      opacity: 0,
      y: 100,
      color: "#c300ff",
      duration: 1.35,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.5,
    });

    tl.from(
      ".text-hero .char",
      {
        fontFamily: "amador, sans-serif",
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
      },
      "<-0.8"
    );
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <header className="pb-32 mt-32 rounded-3xl container_hero w-full h-screen relative flex justify-center items-center bg-primary-900 overflow-hidden">
      <div className="z-1 relative">
        <h1 className="text-hero uppercase text-primary-200">
          Jannis <br /> Röstel
        </h1>
      </div>
      <div className="hero-highlight bg-primary-300"></div>
    </header>
  );
}
