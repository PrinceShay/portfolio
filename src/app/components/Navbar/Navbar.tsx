"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Logo.svg";
import FullscreenNav from "./FullscreenNav";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="relative z-50 flex justify-center">
        <div className="max-w-screen w-full items-center gap-16 fixed my-5 mx-16 py-5 px-16 flex justify-between backdrop-blur-lg bg-primary-900 bg-opacity-20 rounded-3xl overflow-hidden">
          <div className="basis-auto flex justify-start">
            <Link href={"/"}>
              <Image src={Logo} width={50} height={50} alt="Logo" />
            </Link>
          </div>

          <div
            className="flex flex-col items-center justify-end basis-auto text-2xl font-light cursor-pointer uppercase"
            onClick={handleButtonClick}
          >
            <div className="overflow-hidden">
              <div>Menü</div>
              <div>Close</div>
            </div>
          </div>
        </div>
      </div>

      {showMenu && <FullscreenNav />}
    </>
  );
}

export default Navbar;
