"use client";
import { useEffect, useState } from "react";
import SplitType from "split-type";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Intro from "./Intro";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

export default function Hero() {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    let cleanupFunction = () => {}; // Default empty function

    if (!splineLoaded) {
      // Set background color to red while the scene is loading
      // You can perform any other actions here if needed
      document.body.style.backgroundColor = "red";

      return () => {
        // Cleanup function if necessary
        document.body.style.backgroundColor = ""; // Reset background color
      };
    } else {
      // Scene is loaded, reset background color to default
      document.body.style.backgroundColor = "";

      cleanupFunction = () => {
        // Cleanup function if necessary
      };
    }

    return cleanupFunction;
  }, [splineLoaded]);

  function TextFinished() {
    console.log("Ich bin fertig");
  }

  useEffect(() => {
    if (splineLoaded) {
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
    }
  }, [splineLoaded]);

  return (
    <header className="mt-32 rounded-3xl container_hero w-full h-screen relative flex justify-center items-center bg-primary-800 overflow-hidden">
      {!splineLoaded && <Intro />}
      <Spline
        onLoad={() => setSplineLoaded(true)}
        className={"absolute z-10"}
        scene="https://prod.spline.design/8gHs3myUnIMqYu8u/scene.splinecode"
      />
      <div className="z-1 relative">
        <h1 className="text-hero uppercase text-primary-200">
          Jannis <br /> Röstel
        </h1>
      </div>
      <div className="hero-highlight bg-primary-300"></div>
    </header>
  );
}
