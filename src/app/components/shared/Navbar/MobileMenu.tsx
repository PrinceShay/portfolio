import Link from "next/link";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const MenuContainer = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const menuTL = useRef<gsap.core.Timeline | null>(null);

  // Grid-Animation Zustände
  const [gridSize, setGridSize] = useState({ columns: 12, rows: 12 });
  const [bannerCount, setBannerCount] = useState(144);

  useLayoutEffect(() => {
    const updateGridSize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const cellSize = Math.min(
        screenWidth / gridSize.columns,
        screenHeight / gridSize.rows
      );
      const columns = Math.floor(screenWidth / cellSize);
      const rows = Math.floor(screenHeight / cellSize);

      setGridSize({ columns, rows });
      setBannerCount(columns * rows);
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);

    return () => {
      window.removeEventListener("resize", updateGridSize);
    };
  }, []);

  useEffect(() => {
    // Existierende Timeline entfernen, um erneute Initialisierung zu vermeiden
    if (menuTL.current) {
      menuTL.current.kill();
    }

    menuTL.current = gsap.timeline({
      paused: true,
      onStart: () => setIsAnimating(true),
      onComplete: () => setIsAnimating(false),
      onReverseComplete: () => {
        setIsAnimating(false);
        MenuContainer.current?.classList.add("hidden");
        (gridContainerRef.current?.parentNode as HTMLElement)?.classList.add(
          "hidden"
        );
        document.body.style.overflow = ""; // Scrollen wieder aktivieren
      },
    });

    // Setzen der Anfangszustände
    gsap.set(".Banner", { opacity: 0 });
    gsap.set(MenuContainer.current, { opacity: 0 });
    gsap.set(".MobileLink", { opacity: 0, y: 50 });

    // Grid-Animation (In)
    menuTL.current.to(
      ".Banner",
      {
        opacity: 1,
        backgroundColor: "#000017",
        ease: "power3.out",
        stagger: {
          amount: 0.75,
          from: "random",
          grid: [gridSize.columns, gridSize.rows],
        },
      },
      0
    );

    // Menücontainer-Animation (nach der Grid-Animation)
    menuTL.current.to(
      MenuContainer.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        onStart: () => {
          MenuContainer.current?.classList.remove("hidden");
          (
            gridContainerRef.current?.parentNode as HTMLElement
          )?.classList.remove("hidden");
          document.body.style.overflow = "hidden"; // Scrollen deaktivieren
        },
      },
      "-=0.5" // Startet 0.5 Sekunden vor Ende der Grid-Animation
    );

    // Menüelemente-Animation
    menuTL.current.to(
      ".MobileLink",
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.3" // Startet etwas vor Ende der vorherigen Animation
    );

    // Reverse Animation (Out)
    menuTL.current.addPause();

    menuTL.current.to(
      ".MobileLink",
      {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.in",
      },
      "+=0.5" // Startet nach einer kurzen Pause
    );

    menuTL.current.to(
      MenuContainer.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      "-=0.3"
    );

    menuTL.current.to(
      ".Banner",
      {
        opacity: 0,
        ease: "power3.in",
        stagger: {
          amount: 0.75,
          from: "random",
          grid: [gridSize.columns, gridSize.rows],
        },
      },
      "-=0.5"
    );
  }, [gridSize.columns, gridSize.rows]);

  useEffect(() => {
    if (menuTL.current) {
      if (isOpen) {
        MenuContainer.current?.classList.remove("hidden");
        (gridContainerRef.current?.parentNode as HTMLElement)?.classList.remove(
          "hidden"
        );
        menuTL.current.play(0);
      } else {
        menuTL.current.reverse();
      }
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const menuText = isOpen ? "Schließen" : "Menü";

  return (
    <div className="relative flex justify-center md:hidden">
      <div
        onClick={toggleMenu}
        className="fixed bottom-8 bg-primary-900 bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-full px-10 py-3 text-lg uppercase z-50 cursor-pointer"
      >
        {menuText}
      </div>
      <div
        className={`${isOpen || isAnimating ? "" : "hidden"} w-full h-screen fixed top-0 left-0 z-40`}
      >
        {/* Grid-Animation */}
        <div
          ref={gridContainerRef}
          className="w-full h-screen absolute grid"
          style={{
            gridTemplateColumns: `repeat(${gridSize.columns}, 1fr)`,
            gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
          }}
        >
          {Array.from({ length: bannerCount }).map((_, index) => (
            <div key={index} className="Banner bg-darkBlue-500"></div>
          ))}
        </div>

        {/* Menücontainer */}
        <div
          ref={MenuContainer}
          className={`${
            isOpen || isAnimating ? "flex" : "hidden"
          } py-12 w-full h-screen gap-8 flex-col justify-center items-center bg-transparent`}
        >
          <Link
            className="MobileLink text-4xl"
            href="/"
            onClick={handleLinkClick}
          >
            Startseite
          </Link>
          <Link
            className="MobileLink text-4xl"
            href="/projekte"
            onClick={handleLinkClick}
          >
            Projekte
          </Link>
          <Link
            className="MobileLink text-4xl"
            href="/profil"
            onClick={handleLinkClick}
          >
            Profil
          </Link>
          <Link
            className="MobileLink text-4xl"
            href="/#service"
            onClick={handleLinkClick}
          >
            Service
          </Link>
          <Link
            className="MobileLink text-4xl"
            href="/blog"
            onClick={handleLinkClick}
          >
            Blog
          </Link>
          <Link
            className="MobileLink text-4xl"
            href="/kontakt"
            onClick={handleLinkClick}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
