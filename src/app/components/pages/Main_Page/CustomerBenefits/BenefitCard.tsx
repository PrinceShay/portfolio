import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

interface BenefitCardProps {
  title: React.ReactNode;
  content: string;
  imageSrc: string;
}

// Define color constants based on Tailwind's color palette
const colors = {
  backgroundDefault: "rgb(0, 0, 14)", // Example Tailwind color equivalent
  backgroundHovered: "rgb(4, 4, 18)", // Example Tailwind color equivalent
  gradientStart: "rgba(177, 122, 255, 0.6)", // Tailwind primary-500 with opacity
  gradientEnd: "rgba(177, 122, 255, 0)", // Transparent end for gradient
};

function BenefitCard({ title, content, imageSrc }: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive design by updating isMobile state
  useEffect(() => {
    // Initialize isMobile on component mount
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile(); // Set initial value

    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  // Animate background color of the card based on hover state
  useEffect(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        backgroundColor: isHovered
          ? colors.backgroundHovered
          : colors.backgroundDefault,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isHovered]);

  // Animate border background based on mobile state
  useEffect(() => {
    if (borderRef.current) {
      gsap.to(borderRef.current, {
        background: isMobile
          ? `radial-gradient(circle, ${colors.gradientStart}, ${colors.gradientEnd} 80%)`
          : "transparent",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isMobile]);

  // Handle mouse enter event
  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isMobile) {
      setIsHovered(true);
      updateBackground(event);
    }
  };

  // Handle mouse move event to update gradient position
  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isHovered || isMobile) return;
    updateBackground(event);
  };

  // Update the position of the radial gradient based on mouse position
  const updateBackground = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!borderRef.current) return;
    const { left, top, width, height } =
      borderRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;

    gsap.to(borderRef.current, {
      background: `radial-gradient(circle at ${x}% ${y}%, ${colors.gradientStart}, ${colors.gradientEnd} 80%)`,
      duration: 0.1,
      ease: "power1.out",
    });
  };

  // Handle mouse leave event to smoothly transition out the gradient
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      if (borderRef.current) {
        gsap.to(borderRef.current, {
          background: "transparent",
          duration: 0.5,
          ease: "power4.out",
        });
      }
    }
  };

  return (
    <li
      className="BenefitCard h-full"
      ref={borderRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        padding: "2px",
        borderRadius: "10px",
        overflow: "hidden",
        transform: "perspective(500px)",
        background: "transparent", // Initial background
      }}
    >
      <div
        ref={cardRef}
        className="p-12 text-left rounded-lg shadow-lg h-full flex flex-col justify-between relative bg-primary-700 transition-colors duration-500" // Added Tailwind classes for initial background and transitions
        style={{
          backgroundColor: colors.backgroundDefault, // Ensures GSAP starts from this color
          opacity: 1,
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          width={96} // Adjust as needed
          height={96}
          className="max-w-36 min-w-12 mb-16"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 hyphens-auto">
            {title}
          </h2>
          <p className="mt-6 text-xl max-w-2xl text-primary-100">{content}</p>
        </div>
      </div>
    </li>
  );
}

export default BenefitCard;
