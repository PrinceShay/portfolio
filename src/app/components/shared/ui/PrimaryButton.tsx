"use client";
import Link from "next/link";
import React, { useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

function PrimaryButton({ title, link }: { title: string; link: string }) {
  const ArrowRef = useRef<HTMLDivElement>(null);
  const ButtonRef = useRef<HTMLDivElement>(null);
  const textPriRef = useRef<HTMLParagraphElement>(null);
  const textSecRef = useRef<HTMLParagraphElement>(null);
  const hoverRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const animIn = () => {
      let hoverIn = gsap.timeline({});
      hoverIn.fromTo(
        ArrowRef.current,
        {
          marginLeft: -24,
          rotate: 0,
          marginBottom: -24,
          opacity: 0, // Pfeil beginnt unsichtbar
        },
        {
          marginLeft: 0,
          rotate: 45,
          marginBottom: 0,
          opacity: 1, // Pfeil wird sichtbar
          duration: 1,
          ease: "power4.out",
        }
      );

      hoverIn.to(
        textPriRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.out",
        },
        "<"
      );

      hoverIn.to(
        textSecRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.out",
        },
        "<"
      );

      hoverIn.to(
        hoverRef.current,
        {
          scale: 9,
          duration: 1.3,
          ease: "power4.out",
        },
        "<"
      );
    };

    const animOut = () => {
      let hoverOut = gsap.timeline({});

      hoverOut.to(ArrowRef.current, {
        marginLeft: -24,
        marginBottom: -24,
        opacity: 0, // Pfeil wird unsichtbar
        rotate: 0,
        duration: 1,
        ease: "power4.out",
      });

      hoverOut.to(
        textPriRef.current,
        {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
        },
        "<"
      );

      hoverOut.to(
        textSecRef.current,
        {
          yPercent: 100,
          duration: 1,
          ease: "power4.out",
        },
        "<"
      );

      hoverOut.to(
        hoverRef.current,
        {
          scale: 1,
          duration: 1.3,
          ease: "power4.out",
        },
        "<"
      );
    };

    const buttonEl = ButtonRef.current;

    if (buttonEl) {
      buttonEl.addEventListener("mouseenter", animIn);
      buttonEl.addEventListener("mouseleave", animOut);
    }
  }, {});

  return (
    <Link href={link}>
      <div
        ref={ButtonRef}
        className="relative bg-primary-500 py-4 px-8 rounded-full flex gap-2 items-center overflow-hidden"
      >
        <div
          ref={hoverRef}
          className="absolute bg-primary-600 opacity-35 w-24 h-24 rounded-full -left-[50%] z-10"
        ></div>
        <div className="relative overflow-hidden z-20">
          <p ref={textPriRef} className="relative">
            {title}
          </p>
          <p ref={textSecRef} className="absolute">
            {title}
          </p>
        </div>
        <div className="overflow-hidden z-20 ">
          <div
            className="relative -ml-[24px] -mb-[24px] opacity-0" // Setze die Opacity initial auf 0, aber die Margins bleiben erhalten
            ref={ArrowRef}
          >
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PrimaryButton;
