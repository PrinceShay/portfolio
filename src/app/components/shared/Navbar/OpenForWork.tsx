import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function OpenForWork() {
  const containerVariants = {
    initial: {
      translateY: "0%",
    },
    hover: {
      translateY: "-100%", // Move up by 100% of its height
    },
  };

  return (
    <Link
      href={"/Kontakt"}
      className=" self-center col-start-3 justify-self-end flex items-center gap-2 px-4 py-3 h-8 relative w-64 overflow-hidden"
    >
      <div className="GreenCircle w-3 h-3 rounded-full bg-green-500"></div>
      <motion.div
        className="absolute inset-0 flex flex-col"
        initial="initial"
        whileHover="hover"
        variants={containerVariants}
      >
        <p className="text-xl w-full text-center">Offen für Aufträge</p>
        <p className="text-xl w-full text-center absolute top-full text-primary-200">
          Jetzt kontaktieren
        </p>
      </motion.div>
    </Link>
  );
}

export default OpenForWork;
