"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Preloader() {
  const [gridSize, setGridSize] = useState({ columns: 12, rows: 12 });
  const [bannerCount, setBannerCount] = useState(144);
  const loadingContainerRef = useRef<HTMLDivElement>(null);

  // Funktion zur Berechnung der Grid-Größe basierend auf dem Bildschirm
  const updateGridSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Bestimmen der maximalen Anzahl an Spalten und Reihen, um quadratische Zellen zu gewährleisten
    const maxColumns = 20; // Maximale Spaltenanzahl zur Begrenzung auf mobilen Geräten
    const maxRows = 20; // Maximale Reihenanzahl zur Begrenzung auf mobilen Geräten

    // Berechnung der Zellgröße basierend auf der Bildschirmgröße
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

  useEffect(() => {
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
  }, [bannerCount, gridSize.columns, gridSize.rows]);

  return (
    <div
      ref={loadingContainerRef}
      className="w-full h-full flex justify-center items-center fixed left-0 top-0 z-50"
    >
      <div
        className="w-full h-full grid"
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
