"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  title: string;
  content: string;
}

function BenefitCard({ title, content }: BenefitCardProps) {
  const borderRef = useRef<HTMLLIElement>(null);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});
  const [isHovered, setIsHovered] = useState(false);

  const updateHighlight = (x: number, y: number): React.CSSProperties => ({
    background: `radial-gradient(circle at ${x}% ${y}%, rgba(237, 179, 255,0.6), rgba(237, 179, 255,0) 55%)`,
  });

  const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
    if (borderRef.current) {
      const { left, top, width, height } =
        borderRef.current.getBoundingClientRect();
      const x = ((event.clientX - left) / width) * 100;
      const y = ((event.clientY - top) / height) * 100;
      setIsHovered(true);
      setHighlightStyle({
        ...updateHighlight(x, y),
        transition: "background 2s ease-out",
      });
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isHovered || !borderRef.current) return;
    const { left, top, width, height } =
      borderRef.current.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setHighlightStyle(updateHighlight(x, y));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHighlightStyle({
      transition: "background 2s ease-out",
      background: "none",
    });
  };

  return (
    <li
      ref={borderRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...highlightStyle,
        padding: "2px",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="p-12 text-left rounded-lg shadow-lg h-full"
        initial={{ opacity: 0.6 }}
        animate={{
          opacity: 1,
          backgroundColor: isHovered ? "rgb(8, 0, 10)" : "rgb(4, 0, 5)",
        }}
        transition={{
          opacity: { duration: 0.3 },
          backgroundColor: { duration: 0.3 },
        }}
      >
        <h2 className="text-4xl font-bold text-primary-100">{title}</h2>
        <p className="mt-8 text-lg text-primary-100">{content}</p>
      </motion.div>
    </li>
  );
}

export default BenefitCard;
