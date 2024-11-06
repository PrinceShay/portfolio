"use client";
import React, { useRef, useEffect, MutableRefObject } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Define the types for the component props
interface FooterLinkProps {
  url: string;
  title: string;
  small?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  url,
  title,
  small = false,
}) => {
  // Initialize the refs with specific types
  const navlinkRef = useRef<HTMLLIElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const shadowRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    // Hover effect initialization
    gsap.set([titleRef.current, shadowRef.current], { yPercent: 0 });

    // Mouseenter handler
    const onMouseEnter = () => {
      gsap.to(titleRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.out",
      });
      gsap.to(shadowRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: "power4.out",
      });
    };

    // Mouseleave handler
    const onMouseLeave = () => {
      gsap.to(titleRef.current, {
        yPercent: 0,
        duration: 0.7,
        ease: "power4.out",
      });
      gsap.to(shadowRef.current, {
        yPercent: 0,
        duration: 0.7,
        ease: "power4.out",
      });
    };

    // Add event listeners
    if (navlinkRef.current) {
      navlinkRef.current.addEventListener("mouseenter", onMouseEnter);
      navlinkRef.current.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      // Clean up event listeners
      if (navlinkRef.current) {
        navlinkRef.current.removeEventListener("mouseenter", onMouseEnter);
        navlinkRef.current.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <li ref={navlinkRef} className="">
      <Link href={url} className="flex relative overflow-hidden">
        <p ref={titleRef} className={`Navlink_Title ${small ? "text-md" : ""}`}>
          {title}
        </p>
        <p
          ref={shadowRef}
          className={`Navlink_Shadow absolute top-0 translate-y-full text-primary-300 ${
            small ? "text-md" : ""
          }`}
        >
          {title}
        </p>
      </Link>
    </li>
  );
};

export default FooterLink;
