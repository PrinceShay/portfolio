"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LoadingAnim from "./loading/LoadingAnim";

interface AnimatedImageProps {
  src: string;
  alt: string;
}

export default function AnimatedImage({ src, alt }: AnimatedImageProps) {
  const animImageContainer = useRef<HTMLDivElement>(null); // Für das DarkBlue-Panel
  const animImage = useRef<HTMLImageElement>(null); // Für den Wrapper (Clip-Effekt)
  const animImageLoader = useRef<HTMLDivElement>(null); // Für den Lade-Animation

  const animImageTL = gsap.timeline({ paused: true });

  useGSAP(() => {
    animImageTL.to(animImageLoader.current, {
      opacity: 0,
      ease: "power4.inOut",
      duration: 0.25,
    });

    // Erstes Panel (darkBlue) hochfahren
    animImageTL.to(
      animImageContainer.current,
      {
        scaleY: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      "<"
    );

    // Zweiter Wrapper öffnet sich (Clip-Effekt)
    animImageTL.to(
      animImage.current,
      {
        scale: 1,
        opacity: 1,
        ease: "power4.inOut",
        duration: 1,
      },
      "<25%"
    );
  }, []);

  return (
    <div className="relative w-screen h-screen">
      {/* Dunkler Container für die erste Animation */}
      <div
        ref={animImageContainer}
        style={{ transformOrigin: "top" }}
        className="absolute w-full h-full bg-darkBlue-400 z-20 flex items-center justify-center"
      >
        <div ref={animImageLoader}>
          <LoadingAnim className="w-32" />
        </div>
      </div>

      <div>
        <div className="w-screen h-screen relative overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            onLoadingComplete={() => {
              animImageTL.play();
            }}
            ref={animImage}
            sizes="50vw"
            className="object-cover scale-150 opacity-0"
          />
        </div>
      </div>
    </div>
  );
}
