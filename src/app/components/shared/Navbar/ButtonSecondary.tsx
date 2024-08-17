"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ButtonSecondaryProps {
  firstTitle: string;
  secondTitle?: string;
  link: string;
  inverted?: boolean; // Add the inverted prop
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  firstTitle,
  secondTitle,
  link,
  inverted = false, // Default to false
}) => {
  const topTextRef = useRef<HTMLParagraphElement>(null);
  const bottomTextRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const backgroundColor = inverted ? "#35254D" : "#231833";
  const textColor = inverted ? "#ffffff" : "#FFFFFF";
  const circleColor = inverted ? "#B17AFF" : "#00FF00"; // Assuming bg-primary-500 is green

  useGSAP(() => {
    if (
      !topTextRef.current ||
      !bottomTextRef.current ||
      !containerRef.current ||
      !circleRef.current
    ) {
      return;
    }

    gsap.from(containerRef.current, {
      y: 45,
      opacity: 0,
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
      },
    });

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.65 },
      paused: true,
    });

    tl.to(topTextRef.current, { yPercent: -100, color: textColor }, 0)
      .to(bottomTextRef.current, { yPercent: -100, color: textColor }, 0)
      .to(containerRef.current, { backgroundColor: backgroundColor }, 0)
      .to(circleRef.current, { backgroundColor: circleColor }, 0);

    containerRef.current.addEventListener("mouseenter", () => tl.play());
    containerRef.current.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseenter", () => tl.play());
        containerRef.current.removeEventListener("mouseleave", () =>
          tl.reverse()
        );
      }
    };
  }, [backgroundColor, textColor, circleColor]);

  return (
    <Link href={link} className="h-full" id="ButtonSecondary">
      <div
        ref={containerRef}
        className="flex justify-center items-center gap-4 px-9 py-5 relative overflow-hidden rounded-full h-full"
        style={{ backgroundColor: inverted ? "#231833" : "" }} // Set initial background color
      >
        <div
          ref={circleRef}
          className="GreenCircle w-3 h-3 rounded-full"
          style={{ backgroundColor: circleColor }} // Set initial circle color
        ></div>
        <div className="relative inset-0 flex flex-col overflow-hidden">
          <p
            ref={topTextRef}
            className=" w-full text-center"
            style={{ color: textColor }} // Set initial text color
          >
            {firstTitle}
          </p>
          <p
            ref={bottomTextRef}
            className=" w-full text-center absolute top-full text-primary-200 text-nowrap"
            style={{ color: textColor }} // Set initial text color
          >
            {secondTitle || firstTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ButtonSecondary;
