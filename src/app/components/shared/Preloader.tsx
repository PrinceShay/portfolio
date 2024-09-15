"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Preloader({}) {
  const [progress, setProgress] = useState(0);
  const [gridSize, setGridSize] = useState({ columns: 12, rows: 12 });
  const [bannerCount, setBannerCount] = useState(144); // Anzahl der Banner
  const loadingContainerRef = useRef(null);

  // Dynamische Berechnung der Grid-Größe basierend auf der Bildschirmgröße
  useLayoutEffect(() => {
    const updateGridSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Berechnung der optimalen Größe für quadratische Zellen
      const cellSize = Math.min(
        screenWidth / gridSize.columns,
        screenHeight / gridSize.rows
      );

      const columns = Math.floor(screenWidth / cellSize);
      const rows = Math.floor(screenHeight / cellSize);

      setGridSize({ columns, rows });
      setBannerCount(columns * rows);
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);

    return () => {
      window.removeEventListener("resize", updateGridSize);
    };
  }, []);

  useLayoutEffect(() => {
    if (bannerCount > 0) {
      const tl = gsap.timeline({
        delay: 0.25,
        onComplete: CompleteFunction,
      });

      tl.to("#loading-banner", {
        height: 0,
        ease: "power4.out",
        duration: 1.5,
      });

      tl.to("#progressPercent", {
        opacity: 0,
        scale: 1.2,
        ease: "power4.out",
        duration: 1,
      });

      // Apply opacity to all ".Banner" elements correctly
      tl.to(
        ".Banner",
        {
          opacity: 0, // ensure this value is correct
          backgroundColor: "#35254D",
          ease: "power3.out",
          stagger: {
            amount: 0.95,
            from: "random",
            grid: [gridSize.columns, gridSize.rows],
          },
        },
        "-=1.1"
      );

      // Timeline for updating progress
      const progressTl = gsap.timeline();
      progressTl.to(
        {},
        {
          duration: 1,
          onUpdate: () => {
            const value = Math.round(progressTl.progress() * 100);
            setProgress(value);
          },
        }
      );
    }
  }, [bannerCount, gridSize.columns, gridSize.rows]);

  function CompleteFunction() {
    const loadingContainer = document.getElementById("loading_container");
    if (loadingContainer) {
      loadingContainer.style.display = "none";
    }
  }

  return (
    <div
      ref={loadingContainerRef}
      id="loading_container"
      className="w-full h-screen flex justify-center items-center fixed left-0 top-0 z-[60]"
    >
      <div
        id="loading-banner"
        className="absolute top-0 left-0 w-full h-full bg-primary-500 z-[61]"
      ></div>

      <p id="progressPercent" className="Section_Headline relative z-[62]">
        {progress}%
      </p>

      <div
        id="BannerWrapper"
        className="w-full h-screen absolute grid z-[59]"
        style={{
          gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {Array.from({ length: bannerCount }).map((_, index) => (
          <div key={index} className="Banner bg-darkBlue-500"></div>
        ))}
      </div>
    </div>
  );
}

export default Preloader;
