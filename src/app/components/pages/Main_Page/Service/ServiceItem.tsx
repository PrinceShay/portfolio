"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Define the props type
interface ServiceItemProps {
  title: string;
  description: string;
  items: string[];
  tools: { name: string; logo: string }[];
}

function ServiceItem({ title, description, items, tools }: ServiceItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLLIElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: { trigger: containerRef.current, start: "0% 90%" },
      });
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 2,
        yPercent: 20,
        ease: "power4.out",
      });

      tl.from(
        ".ServiceItemText",
        {
          opacity: 0,
          y: 50,
          ease: "power4.out",
          duration: 0.8,
        },
        "<25%"
      );

      tl.from(
        ".listItemService",
        {
          opacity: 0,
          scale: 0,
          ease: "back.out",
          duration: 1.3,
          stagger: 0.2,
        },
        "<25%"
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="bg-primary-600 bg-gradient-to-br from-primary-600 to-[#543185] z-10 p-8 flex flex-col items-center justify-center rounded-2xl"
    >
      <div className="text-center ServiceItemText">
        <h3 className="Section_Headline small">{title}</h3>
        <p className="mt-4 text-lg">{description}</p>
      </div>
      <div className="flex flex-col">
        <ul className="mt-24 flex flex-wrap justify-center gap-2 text-lg">
          {items.map((item: string, index: number) => (
            <li
              key={index}
              ref={itemRef}
              className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full listItemService "
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <p className="text-center opacity-50 uppercase mb-3">Tools</p>
          <ul className="flex flex-col flex-wrap sm:flex-row justify-center gap-4 text-xl items-center">
            {tools.map(
              (tool: { name: string; logo: string }, index: number) => (
                <li key={index} className="flex gap-2 items-center">
                  <div>
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      title={tool.name}
                      width={20}
                      height={20}
                      className="h-5"
                    />
                  </div>

                  {tool.name}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
