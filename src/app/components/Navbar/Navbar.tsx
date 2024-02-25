"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/Logo.svg";
import { motion } from "framer-motion";
import gsap from "gsap";

var Hover = {
  scale: 1.2,
};

function Navbar() {
  return (
    <div className="relative z-50 flex justify-center">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: "-100%" }}
        transition={{ delay: 1, ease: "circOut" }}
        className=" max-w-screen w-full transition-all duration-700 ease-out items-center gap-16 fixed my-5 mx-16 py-5 px-16 flex justify-between backdrop-blur-lg bg-primary-900 bg-opacity-20 rounded-3xl overflow-hidden hover:bg-primary-600 hover:bg-opacity-20"
      >
        <motion.div
          whileHover={Hover}
          transition={{ type: "spring", stiffness: 200 }}
          className="basis-auto flex justify-start"
        >
          <Link href={"/"}>
            <Image src={Logo} width={50} height={50} alt="Logo" />
          </Link>
        </motion.div>

        <div className="flex flex-col items-center justify-end basis-auto text-2xl font-light cursor-pointer uppercase">
          <div className="overflow-hidden">
            <div>Menü</div>
            <div>Close</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
