import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function ProfileNav() {
  const MainVariants = {
    initial: {
      translateY: "0%",
      translateX: "0%",
      scale: 1,
      rotate: 0,
    },
    animate: {
      translateY: "-100%",
      translateX: "50%",
      scale: 1.5,
      rotate: -50,
    },
  };

  const SecondVariants = {
    initial: {
      translateY: "100%",
      translateX: "-50%",
      scale: 1.5,
      rotate: 50,
    },
    animate: {
      translateY: "0%",
      translateX: "0%", // Move up by 100% of its height
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate" // This will now control the hover state for all nested animations
      className="col-start-1"
    >
      <Link href={"/"} className="gap-4 flex items-center">
        <div className="relative w-16 rounded-full h-16 overflow-hidden">
          <motion.div
            variants={MainVariants}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
            }}
            className="absolute w-16 rounded-full h-16 overflow-hidden z-10"
          >
            <img
              className="relative top-6 left-1 transform scale-[2]"
              src="/Navigation/ProfilePic.jpg"
              alt="Meow"
            />
          </motion.div>

          <motion.div
            variants={SecondVariants}
            transition={{
              ease: "easeInOut",
              duration: 0.4,
            }}
            className="absolute w-16 rounded-full h-16 overflow-hidden z-20 translate-y-full"
          >
            <div className="w-full h-full relative bg-gradient-to-tr from-primary-500 to-primary-800 flex justify-center items-center">
              <img
                src="/Navigation/Logo.svg"
                alt="Logo"
                className="w-7 relative right-[0.5]"
              />
            </div>
          </motion.div>
        </div>
        <p>Jannis Röstel</p>
      </Link>
    </motion.div>
  );
}

export default ProfileNav;