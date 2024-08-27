import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const MenuContainer = useRef<HTMLDivElement>(null);
  const menuTL = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
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
    if (menuTL.current) {
      isOpen ? menuTL.current.play() : menuTL.current.reverse();
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
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
        className=" translate-y-[100lvh] fixed w-full h-screen flex gap-8 flex-col justify-center items-center top-0 left-0 bg-gradient-to-b bg-primary-700 bg-opacity-80 backdrop-blur-md z-40"
      >
        <Link
          className="MobileLink text-4xl uppercase font-bold"
          href="/"
          onClick={handleLinkClick}
        >
          Startseite
        </Link>
        <Link
          className="MobileLink text-4xl uppercase font-bold"
          href="/projekte"
          onClick={handleLinkClick}
        >
          Projekte
        </Link>
        <Link
          className="MobileLink text-4xl uppercase font-bold"
          href="/profil"
          onClick={handleLinkClick}
        >
          Profil
        </Link>
        <Link
          className="MobileLink text-4xl uppercase font-bold"
          href="/#service"
          onClick={handleLinkClick}
        >
          Service
        </Link>
        <Link
          className="MobileLink text-4xl uppercase font-bold"
          href="/blog"
          onClick={handleLinkClick}
        >
          Blog
        </Link>
        <Link
          className="MobileLink text-4xl uppercase font-bold"
          href="/kontakt"
          onClick={handleLinkClick}
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
