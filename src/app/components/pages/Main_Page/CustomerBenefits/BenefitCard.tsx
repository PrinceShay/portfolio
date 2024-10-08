import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

interface BenefitCardProps {
  title: React.ReactNode;
  content: string;
  imageSrc: string;
}

function BenefitCard({ title, content, imageSrc }: BenefitCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set the initial state for isMobile on the client side
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useGSAP(() => {
    if (isMobile && borderRef.current) {
      gsap.to(borderRef.current, {
        background:
          "radial-gradient(circle, rgba(177, 122, 255, 0.6), rgba(177, 122, 255, 0) 80%)",
        duration: 0.5,
      });
    } else if (!isMobile && borderRef.current) {
      gsap.to(borderRef.current, {
        background: "none",
        duration: 0.5,
      });
    }
  }, [isMobile]);

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isMobile) {
      setIsHovered(true);
      updateBackground(event);
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isHovered || isMobile) return;
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
    if (!isMobile) {
      setIsHovered(false);
      if (borderRef.current) {
        gsap.to(borderRef.current, {
          background: "none",
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
      }}
    >
      <div
        ref={cardRef}
        className="p-12 text-left rounded-lg shadow-lg h-full flex flex-col justify-between relative"
        style={{
          opacity: 1,
        }}
      >
        <Image
          src={imageSrc}
          alt=""
          width={96} // Passen Sie die Werte entsprechend an
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
