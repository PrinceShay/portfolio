"use client";
import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import LoadingAnim from "../shared/ui/loading/LoadingAnim";
import { X } from "lucide-react";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter(); // Initialize router

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Handler to close the modal
  const handleClose = () => {
    router.back();
  };

  return (
    <div className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-80 z-50">
      <div className="w-full h-full p-24 flex items-center justify-center relative">
        {/* Close Button */}

        <div className="rounded-2xl bg-darkBlue-500 backdrop-blur-2xl bg-opacity-60 w-full max-h-full relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white bg-transparent border-none text-2xl cursor-pointer hover:text-gray-300"
            aria-label="Close modal"
          >
            <X />
          </button>

          <Suspense fallback={<LoadingAnim className="w-full max-w-16" />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
