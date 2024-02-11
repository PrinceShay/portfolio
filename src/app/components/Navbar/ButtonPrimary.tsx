import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";

function ButtonPrimary(props: { link: string; text: string }) {
  const router = useRouter(); // Use useRouter hook to get the router instance
  return (
    <motion.button
      onClick={() => router.push(props.link)}
      layout
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className=" transition-colors duration-500 ease-out transit py-4 px-8 rounded-md bg-slate-900 hover:bg-slate-700"
    >
      {props.text}
    </motion.button>
  );
}

export default ButtonPrimary;
