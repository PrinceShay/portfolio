"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const handleScroll = (e: Event) => {
      console.log(e);
      // Add your custom smooth scrolling logic here
    };

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Clean up the event listener when the component is unmounted
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default SmoothScroll;
