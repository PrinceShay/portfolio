import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  // Declare useRef with a specific type that can be null or gsap.core.Timeline
  const MenuContainer = useRef<HTMLDivElement>(null);
  const menuTL = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Ensure that menuTL is correctly typed and checks are in place before assignment
    if (MenuContainer.current && menuTL.current === null) {
      menuTL.current = gsap
        .timeline({ paused: true })
        .fromTo(
          MenuContainer.current,
          { yPercent: 0 },
          { yPercent: -100, duration: 0.75, ease: "power4.out" }
        )
        .fromTo(
          ".MobileLink",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, ease: "power4.out" },
          "<"
        );
    }
  }, []);

  useEffect(() => {
    // Use optional chaining to safely call methods on potentially null objects
    if (menuTL.current) {
      isOpen ? menuTL.current.play() : menuTL.current.reverse();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-center md:hidden">
      <div
        onClick={toggleMenu}
        className="fixed bottom-8 bg-primary-900 bg-opacity-50 backdrop-blur-md rounded-full px-10 py-3 text-lg uppercase z-50 cursor-pointer"
      >
        Menü
      </div>

      <div
        ref={MenuContainer}
        className=" translate-y-full fixed w-full h-screen flex gap-8 flex-col justify-center items-center top-0 left-0 bg-gradient-to-b from-primary-500 to-primary-700 z-40"
      >
        <Link className="MobileLink text-7xl uppercase font-bold" href="/">
          Home
        </Link>
        <Link className="MobileLink text-7xl uppercase font-bold" href="/about">
          About
        </Link>
        <Link
          className="MobileLink text-7xl uppercase font-bold"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
