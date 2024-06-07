"use client";

import { useRef, useState } from "react";
import NavLink from "./NavLink";
import gsap from "gsap";
import OpenForWork from "./OpenForWork";
import ProfileNav from "./ProfileNav";
import MobileMenu from "./MobileMenu";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const NavContainer = useRef(null);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  useGSAP(() => {
    var tl = gsap.timeline({ delay: 1 });
    tl.from(NavContainer.current, { width: 0, opacity: 0, ease: "power4.out" });
    tl.from("li", { opacity: 0, y: 50, ease: "power4.out", stagger: 0.05 });
    tl.from(
      "#OpenForWork",
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
  }, {});

  return (
    <>
      <MobileMenu />
      <div className=" z-50 fixed hidden md:block md:top-8 px-12 xl:px-48 w-full ">
        <nav
          ref={NavContainer}
          className="hidden max-w-5xl mx-auto md:grid xl:grid-cols-3 bg-primary-900 bg-opacity-50 backdrop-blur-md rounded-full p-2 overflow-hidden"
        >
          <ProfileNav />
          <ul className=" text-xl col-start-2 justify-self-center flex gap-1  items-center">
            <NavLink url="/projekte" title="Projekte" />
            <NavLink url="/profil" title="Profil" />
            <NavLink url="blog" title="Blog" />
            <NavLink url="/" title="Kontakt" />
          </ul>

          <OpenForWork />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
