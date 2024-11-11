import React, { useState, forwardRef } from "react";

type BenefitCardProps = {
  children: React.ReactNode;
  className?: string;
  blurElement?: React.ReactNode;
};

const BenefitCard = forwardRef<HTMLElement, BenefitCardProps>(
  ({ children, className = "", blurElement }, ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    return (
      <article
        ref={ref}
        onMouseMove={handleMouseMove}
        className={`bg-darkBlue-400 rounded-2xl BenefitCard overflow-hidden relative p-1 group ${className}`}
      >
        <div
          style={{
            left: `${mousePosition.x - 128}px`,
            top: `${mousePosition.y - 128}px`,
          }}
          className="w-72 h-72 blur-[128px] bg-primary-400 absolute group-hover:opacity-100 opacity-0 transition-opacity ease-out duration-300"
        ></div>
        <div className="w-full h-full bg-darkBlue-400 relative z-10 rounded-xl">
          {children}
        </div>
        {blurElement}
      </article>
    );
  }
);

BenefitCard.displayName = "BenefitCard";

export default BenefitCard;
