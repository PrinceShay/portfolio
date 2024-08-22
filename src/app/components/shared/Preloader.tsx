"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Preloader({}) {
  const [progress, setProgress] = useState(0);
  const loadingContainerRef = useRef(null);

  useGSAP(
    () => {
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
        duration: 1.5,
      });

      tl.to(
        ".Banner",
        {
          yPercent: 100,
          ease: "power4.out",
          stagger: 0.1,
          duration: 1.25,
        },
        "-=1.1"
      );

      const progressTl = gsap.timeline();
      progressTl.to(
        {},
        {
          duration: 1.5,
          onUpdate: () => {
            const value = Math.round(progressTl.progress() * 100);
            setProgress(value);
          },
        }
      );
    },
    { scope: loadingContainerRef }
  );

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

      <div id="BannerWrapper" className="w-full h-full absolute flex z-[59]">
        <div id="Banner-1" className="Banner bg-darkBlue-500 basis-1/4"></div>
        <div id="Banner-2" className="Banner bg-darkBlue-500 basis-1/4"></div>
        <div id="Banner-3" className="Banner bg-darkBlue-500 basis-1/4"></div>
        <div id="Banner-4" className="Banner bg-darkBlue-500 basis-1/4"></div>
      </div>
    </div>
  );
}

export default Preloader;
