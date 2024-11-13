"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

function Preloader() {
  const [gridSize, setGridSize] = useState({ columns: 12, rows: 12 });
  const [bannerCount, setBannerCount] = useState(144);
  const loadingContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateGridSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
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
        delay: 2, // 2 Sekunden Wartezeit vor Beginn der Animation
        onComplete: () => {
          if (loadingContainerRef.current) {
            loadingContainerRef.current.style.display = "none";
          }
        },
      });

      // Anpassung der Grid-Animation an den Stil des MobileMenu
      tl.set(".Banner", { opacity: 1 }); // Sichtbar zu Beginn
      tl.to(".Banner", {
        opacity: 0,
        ease: "power3.in",
        stagger: {
          amount: 0.75,
          from: "random",
          grid: [gridSize.columns, gridSize.rows],
        },
      });
    }
  }, [bannerCount, gridSize.columns, gridSize.rows]);

  return (
    <div
      ref={loadingContainerRef}
      className="w-full h-screen flex justify-center items-center fixed left-0 top-0 z-[60]"
    >
      <div
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
