import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function NavLink({ url, title }) {
  // Defining the animation variants for the container
  const containerVariants = {
    initial: {
      translateY: "0%",
    },
    hover: {
      translateY: "-100%", // Move up by 100% of its height
    },
  };

  return (
    <li
      className="p-2 relative overflow-hidden w-16 h-8"
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
    >
      <Link href={url} className="flex">
        <motion.div
          className="absolute inset-0 flex flex-col "
          initial="initial"
          whileHover="hover"
          variants={containerVariants}
        >
          <p className="Navlink_Title w-full text-center">{title}</p>
          <p className="Navlink_Shadow w-full text-center absolute top-full text-primary-200">
            {title}
          </p>
        </motion.div>
      </Link>
    </li>
  );
}

export default NavLink;
