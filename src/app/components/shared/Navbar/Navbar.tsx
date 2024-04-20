"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import OpenForWork from "./OpenForWork";
import ProfileNav from "./ProfileNav";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className=" z-50 fixed top-8 px-48 w-full grid grid-cols-3">
        <ProfileNav />
        <ul className=" text-xl col-start-2 justify-self-center flex gap-8  items-center">
          <NavLink url="/" title="Projekt" />
          <NavLink url="/" title="Profil" />
          <NavLink url="/" title="Projekt" />
          <NavLink url="/" title="Projekt" />
        </ul>

        <OpenForWork />
      </div>
    </>
  );
}

export default Navbar;
