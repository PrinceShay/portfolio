"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className=" z-50 fixed top-8 w-full grid grid-cols-12">
        <Link
          href={"/"}
          className=" col-start-2 col-end-4 flex items-center gap-4"
        >
          <div className="relative w-16 rounded-full h-16 overflow-hidden">
            <img
              className="absolute top-6 left-1 transform scale-[2]"
              src="/Navigation/ProfilePic.jpg"
              alt="Meow"
            />
          </div>
          <p>Jannis Röstel</p>
        </Link>

        <ul className=" text-xl col-start-4 col-end-10 justify-self-center flex gap-8  items-center">
          <NavLink url="/" title="Projekt" />
          <NavLink url="/" title="Profil" />
          <NavLink url="/" title="Projekt" />
          <NavLink url="/" title="Projekt" />
        </ul>

        <Link
          href={"/Kontakt"}
          className="col-start-10 col-end-12 justify-self-end flex  items-center gap-3 px-4 py-3"
        >
          <div className="GreenCircle w-3 h-3 rounded-full bg-green-500"></div>
          <p className="text-xl">Offen für Aufträge</p>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
