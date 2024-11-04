import React, { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ProfileNav() {
  const Main = useRef<HTMLDivElement>(null);
  const Second = useRef<HTMLDivElement>(null);
  const ProfileTL = useRef<any | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(Main.current, {
      yPercent: -100,
      xPercent: 50,
      scale: 1.5,
      rotate: -50,
      ease: "power4.inOut",
      duration: 0.75,
    });

    tl.from(
      Second.current,
      {
        yPercent: 100,
        xPercent: -50,
        scale: 1.5,
        rotate: 50,
        ease: "power4.inOut",
        duration: 0.75,
      },
      "<"
    );

    ProfileTL.current = tl;
  });

  const handleMouseEnter = () => {
    if (ProfileTL.current) {
      ProfileTL.current.play(); // Ensure it's not null before calling play
    }
  };

  const handleMouseLeave = () => {
    if (ProfileTL.current) {
      ProfileTL.current.reverse(); // Ensure it's not null before calling reverse
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="col-start-1"
    >
      <Link id="Profile" href="/" className="gap-4 flex items-center">
        <div className="ml-1 relative w-16 rounded-full h-16 overflow-hidden">
          <div
            ref={Main}
            className="absolute w-16 rounded-full h-16 overflow-hidden z-10"
          >
            <img
              className="transform"
              src="/Navigation/ProfilePic.jpg"
              alt="Profile"
            />
          </div>

          <div
            ref={Second}
            className="absolute w-16 rounded-full h-16 overflow-hidden z-20"
          >
            <div className="w-full h-full relative bg-gradient-to-tr from-primary-500 to-primary-800 flex justify-center items-center">
              <img
                src="/Navigation/Logo.svg"
                alt="Logo"
                className="w-12 relative right-[0.5]"
              />
            </div>
          </div>
        </div>
        <p className="hidden xl:block text-lg ">Jannis Röstel</p>
      </Link>
    </div>
  );
}

export default ProfileNav;
