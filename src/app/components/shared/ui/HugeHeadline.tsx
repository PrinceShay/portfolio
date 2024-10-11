"use client";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HugeHeadlineProps {
  text: string;
  fontSizeClass?: string;
}

export default function HugeHeadline({
  text,
  fontSizeClass = "text-[40vw]",
}: HugeHeadlineProps) {
  const Headline = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (Headline.current) {
        // Text in Zeichen aufteilen
        new SplitType(Headline.current, { types: "chars" });

        // GSAP-Plugin registrieren
        gsap.registerPlugin(ScrollTrigger);

        // Zeichen für die Animation auswählen
        const chars = Headline.current.querySelectorAll(".char");

        if (chars.length > 0) {
          gsap.from(chars, {
            yPercent: 30,
            opacity: 0,
            rotateX: 80,
            stagger: 0.05,
            rotate: 5,
            duration: 1.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: Headline.current,
              start: "top 70%",
              scrub: true,
              end: "top 10%",
            },
          });
        }
      }
    },
    { scope: Headline, dependencies: [text] }
  );

  return (
    <h1
      ref={Headline}
      className={`font-humane uppercase text-center font-bold leading-none ${fontSizeClass}`}
      style={{ transform: "perspective(1500px)" }}
    >
      {text}
    </h1>
  );
}
