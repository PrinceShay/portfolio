"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Logo.svg";
import { motion } from "framer-motion";
import ButtonPrimary from "./ButtonPrimary";

var Hover = {
  scale: 1.2,
};

function Navbar() {
  return (
    <div className="relative z-50 flex justify-center">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -100 }}
        transition={{ delay: 1, ease: "circOut" }}
        className=" max-w-screen w-full transition-all duration-700 ease-out items-center gap-16 fixed my-5 mx-16 py-5 px-16 flex justify-between backdrop-blur-lg bg-primary-900 bg-opacity-20 rounded-2xl overflow-hidden hover:bg-primary-600 hover:bg-opacity-20"
      >
        <ul className="flex gap-4">
          <li className="text-slate-300 hover:text-slate-100">
            <Link href="/">Projekte</Link>
          </li>

          <li className="text-slate-300 hover:text-slate-100">
            <Link href="/">Über mich</Link>
          </li>

          <li className="text-slate-300 hover:text-slate-100">
            <Link href="/">Blog</Link>
          </li>

          <li className="text-slate-300 hover:text-slate-100">
            <Link href="/">Service</Link>
          </li>
        </ul>

        <motion.div
          whileHover={Hover}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href={"/"}>
            <Image src={Logo} width={50} height={50} alt="Logo" />
          </Link>
        </motion.div>

        <div>
          <ButtonPrimary link={"/"} text="Kontakt" />
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
