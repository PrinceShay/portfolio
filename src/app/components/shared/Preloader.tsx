"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Preloader() {
  const [gridSize, setGridSize] = useState({ columns: 12, rows: 12 });
  const [bannerCount, setBannerCount] = useState(144);
  const loadingContainerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Funktion zur Berechnung der Grid-Größe basierend auf dem Bildschirm
  const updateGridSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Maximale Anzahl an Spalten und Reihen zur Begrenzung auf mobilen Geräten
    const maxColumns = 20;
    const maxRows = 20;

    // Berechnung der Zellgröße, um quadratische Zellen zu gewährleisten
    const cellSize = Math.floor(
      Math.min(screenWidth / maxColumns, screenHeight / maxRows)
    );

    // Berechnung der tatsächlichen Anzahl der Spalten und Reihen, um den Bildschirm zu füllen
    const columns = Math.ceil(screenWidth / cellSize);
    const rows = Math.ceil(screenHeight / cellSize);

    setGridSize({ columns, rows });
    setBannerCount(columns * rows);
  };

  useEffect(() => {
    // Initiale Berechnung der Grid-Größe
    updateGridSize();

    // Aktualisierung der Grid-Größe bei Fensteränderungen
    window.addEventListener("resize", updateGridSize);

    return () => {
      window.removeEventListener("resize", updateGridSize);
    };
  }, []);

  // Verwenden des useGSAP Hooks für die Animation
  useGSAP(
    (context, contextSafe) => {
      if (bannerCount > 0) {
        const tl = gsap.timeline({
          delay: 0.25,
          onComplete: () => {
            if (loadingContainerRef.current) {
              gsap.to(loadingContainerRef.current, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                  if (loadingContainerRef.current) {
                    loadingContainerRef.current.style.display = "none";
                  }
                },
              });
            }
          },
          context: context, // Kontext für saubere Aufräumung
        });

        tl.to(".Banner", {
          opacity: 0,
          backgroundColor: "#35254D",
          ease: "power3.out",
          stagger: {
            amount: 0.95,
            from: "random",
            grid: [gridSize.columns, gridSize.rows],
          },
        });
      }
    },
    {
      dependencies: [bannerCount, gridSize.columns, gridSize.rows],
      scope: gridRef,
    }
  );

  return (
    <div
      ref={loadingContainerRef}
      className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 z-50 "
    >
      <div
        ref={gridRef}
        className="w-screen h-screen grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {Array.from({ length: bannerCount }).map((_, index) => (
          <div
            key={index}
            className="Banner bg-darkBlue-500 w-full h-full"
            style={{ aspectRatio: "1 / 1" }} // Sicherstellen, dass die Zellen quadratisch bleiben
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Preloader;
