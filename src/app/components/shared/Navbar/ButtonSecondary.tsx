"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ButtonSecondaryProps {
  firstTitle: string;
  secondTitle?: string;
  link: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  firstTitle,
  secondTitle,
  link,
}) => {
  const topTextRef = useRef<HTMLParagraphElement>(null);
  const bottomTextRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check that all refs are linked properly
    if (
      !topTextRef.current ||
      !bottomTextRef.current ||
      !containerRef.current
    ) {
      return;
    }

    // GSAP Timeline setup
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.65 },
      paused: true,
    });

    // Animate texts and background color simultaneously
    tl.to(topTextRef.current, { yPercent: -100 }, 0)
      .to(bottomTextRef.current, { yPercent: -100 }, 0)
      .to(containerRef.current, { backgroundColor: "#231833" }, 0);

    // Event listeners for hover effects
    containerRef.current.addEventListener("mouseenter", () => tl.play());
    containerRef.current.addEventListener("mouseleave", () => tl.reverse());

    // Cleanup function to remove event listeners on component unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mouseenter", () => tl.play());
        containerRef.current.removeEventListener("mouseleave", () =>
          tl.reverse()
        );
      }
    };
  }, []);

  return (
    <Link href={link} className=" h-full" id="ButtonSecondary">
      <div
        ref={containerRef}
        className="flex justify-center items-center gap-4 px-6 py-3 relative overflow-hidden rounded-full h-full"
      >
        <div className="GreenCircle w-3 h-3 rounded-full bg-primary-500"></div>
        <div className="relative inset-0 flex flex-col overflow-hidden">
          <p ref={topTextRef} className="text-xl w-full text-center">
            {firstTitle}
          </p>
          <p
            ref={bottomTextRef}
            className="text-xl w-full text-center absolute top-full text-primary-200 text-nowrap"
          >
            {secondTitle || firstTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ButtonSecondary;
