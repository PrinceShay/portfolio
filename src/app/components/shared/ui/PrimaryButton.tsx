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
  const textParentRef = useRef<HTMLDivElement>(null);
  const arrowParentRef = useRef<HTMLDivElement>(null);
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
    const textParentEl = textParentRef.current;
    const arrowParentEl = arrowParentRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (buttonEl && textParentEl && arrowParentEl) {
        const rect = buttonEl.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 200; // Erhöhter Effekt-Radius

        const magnetStrength = Math.max(
          0,
          (maxDistance - distance) / maxDistance
        );

        gsap.to(buttonEl, {
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

        gsap.to(arrowParentEl, {
          x: x * magnetStrength * 0.25,
          y: y * magnetStrength * 0.25,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (buttonEl && textParentEl && arrowParentEl) {
        gsap.to([buttonEl, textParentEl, arrowParentEl], {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    if (buttonEl) {
      buttonEl.addEventListener("mouseenter", animIn);
      buttonEl.addEventListener("mouseleave", animOut);
      buttonEl.addEventListener("mousemove", handleMouseMove);
      buttonEl.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup-Funktion
    return () => {
      if (buttonEl) {
        buttonEl.removeEventListener("mouseenter", animIn);
        buttonEl.removeEventListener("mouseleave", animOut);
        buttonEl.removeEventListener("mousemove", handleMouseMove);
        buttonEl.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link href={link}>
      <div
        ref={ButtonRef}
        className="relative bg-primary-500 py-4 px-8 rounded-full flex gap-2 items-center overflow-hidden"
      >
        <div
          ref={hoverRef}
          className="absolute bg-primary-800 opacity-35 w-24 h-24 rounded-full -left-[50%] z-10"
        ></div>
        <div ref={textParentRef} className="relative overflow-hidden z-20">
          <p ref={textPriRef} className="relative">
            {title}
          </p>
          <p ref={textSecRef} className="absolute">
            {title}
          </p>
        </div>
        <div className="overflow-hidden z-20" ref={arrowParentRef}>
          <div
            className="relative -ml-[24px] -mb-[24px] opacity-0"
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
