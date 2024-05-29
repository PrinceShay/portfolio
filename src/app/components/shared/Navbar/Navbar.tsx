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

  return (
    <>
      <MobileMenu />
      <div
        ref={NavContainer}
        className=" z-50 fixed hidden md:block md:top-8 px-12 xl:px-48 w-full "
      >
        <nav className="hidden max-w-5xl mx-auto md:grid xl:grid-cols-3 bg-primary-900 bg-opacity-50 backdrop-blur-md rounded-full p-2">
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
