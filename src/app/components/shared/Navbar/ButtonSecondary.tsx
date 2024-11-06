"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ButtonSecondaryProps {
  firstTitle: string;
  secondTitle?: string;
  link: string;
  inverted?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  firstTitle,
  secondTitle,
  link,
  inverted = false,
}) => {
  const topTextRef = useRef<HTMLParagraphElement>(null);
  const bottomTextRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const textParentRef = useRef<HTMLDivElement>(null);

  const backgroundColor = inverted ? "#35254D" : "#231833";
  const textColor = inverted ? "#ffffff" : "#FFFFFF";
  const circleColor = inverted ? "#B17AFF" : "#00FF00"; // Passen Sie die Farben bei Bedarf an

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const containerEl = containerRef.current;
    const textParentEl = textParentRef.current;
    const circleEl = circleRef.current;

    if (
      !containerEl ||
      !topTextRef.current ||
      !bottomTextRef.current ||
      !circleEl
    ) {
      return;
    }

    // Initiale Scroll-Animation
    gsap.from(containerEl, {
      y: 45,
      opacity: 0,
      ease: "power4.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: containerEl,
        start: "top bottom",
      },
    });

    // Hover-Animation
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 0.65 },
      paused: true,
    });

    tl.to(topTextRef.current, { yPercent: -100, color: textColor }, 0)
      .to(bottomTextRef.current, { yPercent: -100, color: textColor }, 0)
      .to(containerEl, { backgroundColor: backgroundColor }, 0)
      .to(circleEl, { backgroundColor: circleColor }, 0);

    containerEl.addEventListener("mouseenter", () => tl.play());
    containerEl.addEventListener("mouseleave", () => tl.reverse());

    // Magneteffekt
    const handleMouseMove = (event: MouseEvent) => {
      if (containerEl && textParentEl && circleEl) {
        const rect = containerEl.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 200; // Effekt-Radius anpassen

        const magnetStrength = Math.max(
          0,
          (maxDistance - distance) / maxDistance
        );

        gsap.to(containerEl, {
          x: x * magnetStrength * 0.3,
          y: y * magnetStrength * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(textParentEl, {
          x: x * magnetStrength * 0.2,
          y: y * magnetStrength * 0.2,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(circleEl, {
          x: x * magnetStrength * 0.25,
          y: y * magnetStrength * 0.25,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (containerEl && textParentEl && circleEl) {
        gsap.to([containerEl, textParentEl, circleEl], {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    containerEl.addEventListener("mousemove", handleMouseMove);
    containerEl.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup-Funktion
    return () => {
      if (containerEl) {
        containerEl.removeEventListener("mouseenter", () => tl.play());
        containerEl.removeEventListener("mouseleave", () => tl.reverse());
        containerEl.removeEventListener("mousemove", handleMouseMove);
        containerEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [backgroundColor, textColor, circleColor]);

  return (
    <Link href={link} className="h-full" id="ButtonSecondary">
      <div
        ref={containerRef}
        className="flex justify-center items-center gap-4 px-9 py-5 relative overflow-hidden rounded-full h-full"
        style={{ backgroundColor: inverted ? "#231833" : "" }} // Initiale Hintergrundfarbe
      >
        <div
          ref={circleRef}
          className="GreenCircle w-3 h-3 rounded-full"
          style={{ backgroundColor: circleColor }} // Initiale Kreisfarbe
        ></div>
        <div
          ref={textParentRef}
          className="relative inset-0 flex flex-col overflow-hidden"
        >
          <p
            ref={topTextRef}
            className="w-full text-center"
            style={{ color: textColor }} // Initiale Textfarbe
          >
            {firstTitle}
          </p>
          <p
            ref={bottomTextRef}
            className="w-full text-center absolute top-full text-primary-200 text-nowrap"
            style={{ color: textColor }} // Initiale Textfarbe
          >
            {secondTitle || firstTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ButtonSecondary;
