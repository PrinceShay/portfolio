"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ButtonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
};
const containerVariants = {
  initial: {
    translateY: "0%",
  },
  hover: {
    translateY: "-100%", // Move up by 100% of its height
  },
};

function PrimaryButton({ link, title }: { link: string; title: string }) {
  return (
    <Link href={link} className="">
      <motion.div
        variants={ButtonVariants}
        initial="initial"
        whileHover="hover"
        className="bg-primary-600 px-8 py-4 rounded-full mt-16  "
      >
        <div className="overflow-hidden h-7 flex self-center relative w-64">
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
        </div>
      </motion.div>
    </Link>
  );
}

export default PrimaryButton;
