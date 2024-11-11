import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function NavLink({ url, title }) {
  const navlinkRef = useRef();
  const titleRef = useRef();
  const shadowRef = useRef();

  useGSAP(() => {
    // Hover-Effekt initialisieren
    gsap.set([titleRef.current, shadowRef.current], { yPercent: 0 });

    // Mouseenter-Handler
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

    // Mouseleave-Handler
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

    // Event-Listener hinzufügen
    navlinkRef.current.addEventListener("mouseenter", onMouseEnter);
    navlinkRef.current.addEventListener("mouseleave", onMouseLeave);

    return () => {
      // Event-Listener aufräumen
      navlinkRef.current.removeEventListener("mouseenter", onMouseEnter);
      navlinkRef.current.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <li ref={navlinkRef} className="p-2 text-lg">
      <Link href={url} className="flex relative overflow-hidden">
        <p ref={titleRef} className="Navlink_Title text-gray-300">
          {title}
        </p>
        <p
          ref={shadowRef}
          className="Navlink_Shadow absolute top-0 translate-y-full text-primary-300"
        >
          {title}
        </p>
      </Link>
    </li>
  );
}

export default NavLink;
