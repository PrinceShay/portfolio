"use client";

import React, { Suspense, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LoadingAnim from "../shared/ui/loading/LoadingAnim";
import { X } from "lucide-react";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden"; // Lock background scroll
    return () => {
      document.documentElement.style.overflow = ""; // Unlock background scroll
    };
  }, []);

  const handleClose = () => {
    const modalElement = document.getElementById("modal-root");
    const closeEvent = new Event("close");
    modalElement?.dispatchEvent(closeEvent);
    router.back();
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      id="modal-root"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[1600px] max-h-full p-6 bg-darkBlue-500 rounded-2xl backdrop-blur-xl bg-opacity-80 overflow-hidden"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white bg-transparent border-none text-2xl cursor-pointer hover:text-gray-300"
          aria-label="Close modal"
        >
          <X />
        </button>

        {/* Ensure native scroll behavior for the modal */}
        <div className="overflow-auto max-h-[80vh] p-4">
          <Suspense fallback={<LoadingAnim className="w-full max-w-16" />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
