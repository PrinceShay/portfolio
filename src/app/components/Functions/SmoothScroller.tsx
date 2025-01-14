"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";

const SmoothScroller = ({ children }: PropsWithChildren) => {
  const lenis = useLenis();
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle scroll-to-top on route changes
  useEffect(() => {
    if (lenis && !isModalOpen) {
      lenis.stop(); // Prevent Lenis scrolling during the initial setup
      lenis.start(); // Allow smooth scroll for the page
      window.scrollTo(0, 0); // Scroll to the top
    }
  }, [pathname, lenis, isModalOpen]);

  // Listen for modal open/close events
  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
      lenis?.stop(); // Disable Lenis scroll on the back page
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      lenis?.start(); // Re-enable Lenis scroll for the back page
    };

    const modalElement = document.getElementById("modal-root");
    modalElement?.addEventListener("open", handleOpenModal);
    modalElement?.addEventListener("close", handleCloseModal);

    return () => {
      modalElement?.removeEventListener("open", handleOpenModal);
      modalElement?.removeEventListener("close", handleCloseModal);
    };
  }, [lenis]);

  return (
    <ReactLenis
      className="h-full"
      options={{
        lerp: 0.1,
        duration: 1.05,
        smoothWheel: !isModalOpen, // Disable smooth scroll for the modal
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroller;
