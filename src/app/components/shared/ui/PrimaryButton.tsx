"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ButtonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

function PrimaryButton({ link, title }: { link: string; title: string }) {
  console.log("Rendering PrimaryButton");
  return (
    <Link href={link}>
      <motion.div
        variants={ButtonVariants}
        initial="initial"
        whileHover="hover"
        className="bg-primary-800 px-8 py-4 rounded-full mt-16"
      >
        {title}
      </motion.div>
    </Link>
  );
}

export default PrimaryButton;
