"use client";

import { useRef, useState, useEffect } from "react";
import NavLink from "./NavLink";
import gsap from "gsap";
import ProfileNav from "./ProfileNav";
import MobileMenu from "./MobileMenu";
import { useGSAP } from "@gsap/react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const NavContainer = useRef(null);
  const lastScrollTop = useRef(0);
  const scrollThreshold = 50; // Schwellenwert in Pixel

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDifference = Math.abs(scrollTop - lastScrollTop.current);

    if (scrollDifference > scrollThreshold) {
      if (scrollTop > lastScrollTop.current) {
        // Wenn nach unten gescrollt wird
        setIsVisible(false);
      } else {
        // Wenn nach oben gescrollt wird
        setIsVisible(true);
      }
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop; // ScrollTop speichern
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(
    () => {
      gsap.set(NavContainer.current, {
        opacity: 1,
      });
      var tl = gsap.timeline({ delay: 2, autoAlpha: 0 });
      tl.from(NavContainer.current, {
        width: 0,
        opacity: 0,
        ease: "power4.out",
      });
      tl.from("li", { opacity: 0, y: 50, ease: "power4.out", stagger: 0.05 });
      tl.from(
        "#ButtonSecondary",
        {
          opacity: 0,
          x: 50,
          ease: "power4.out",
        },
        "<"
      );
      tl.from(
        "#Profile",
        {
          opacity: 0,
          x: -50,
          ease: "power4.out",
        },
        "<"
      );
    },
    { scope: NavContainer }
  );

  return (
    <>
      <MobileMenu />
      <div
        className={`z-50 fixed hidden md:block md:top-8 page_padding w-full transition-transform duration-500 ease-out ${
          isVisible ? "translate-y-0 " : "-translate-y-[150%]"
        }`}
      >
        <nav
          ref={NavContainer}
          className="hidden opacity-0 items-center max-w-5xl mx-auto md:grid xl:grid-cols-3 border border-primary-700 border-opacity-50 bg-darkBlue-400 bg-opacity-50 backdrop-blur-md rounded-full p-2 overflow-hidden"
        >
          <ProfileNav />
          <ul className=" text-xl col-start-2 justify-self-center flex gap-1  items-center">
            <NavLink url="/projekte" title="Projekte" />
            <NavLink url="/profil" title="Profil" />
            <NavLink
              url="https://www.jannisroestel.de/#service"
              title="Service"
            />
            <NavLink url="blog" title="Blog" />
          </ul>
          <div className="self-center col-start-3 justify-self-end text-xl">
            <ButtonSecondary
              firstTitle="Kostenlose Beratung"
              secondTitle="Jetzt kontaktieren"
              link="/kontakt"
            />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
