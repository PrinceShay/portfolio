import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BenefitCardProps {
  title: string;
  content: string;
}

function BenefitCard({ title, content }: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (isHovered && cardRef.current) {
      gsap.to(cardRef.current, {
        backgroundColor: "rgb(4, 4, 18)",
        duration: 0.5,
      });
    } else if (cardRef.current) {
      gsap.to(cardRef.current, {
        backgroundColor: "rgb(0, 0, 14)",
        duration: 0.5,
      });
    }
  }, [isHovered]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    setIsHovered(true);
    updateBackground(event);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isHovered) return;
    updateBackground(event);
  };

  const updateBackground = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!borderRef.current) return;
    const { left, top, width, height } =
      borderRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    gsap.to(borderRef.current, {
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(177, 122, 255, 0.6), rgba(177, 122, 255, 0) 80%)`,
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        background: "none",
        duration: 0.5,
        ease: "power4.out", // Smooth transition using Power4.out easing
      });
    }
  };

  return (
    <li
      className="BenefitCard max-w-2xl"
      ref={borderRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "2px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <div
        ref={cardRef}
        className="p-12 text-left rounded-lg shadow-lg h-full"
        style={{
          opacity: 1,
        }}
      >
        <h2 className="text-4xl font-bold text-primary-500">{title}</h2>
        <p className="mt-8 text-lg text-primary-100">{content}</p>
      </div>
    </li>
  );
}

export default BenefitCard;
