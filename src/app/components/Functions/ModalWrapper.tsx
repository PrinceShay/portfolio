"use client";
import React, { Suspense, useEffect } from "react";
import LoadingAnim from "../shared/ui/loading/LoadingAnim";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-80 z-50">
      <div className="w-full h-full p-24 flex items-center justify-center">
        <div className="rounded-2xl overflow-auto bg-darkBlue-500 backdrop-blur-2xl bg-opacity-60 w-full max-h-full">
          <Suspense fallback={<LoadingAnim className="w-full max-w-16" />}>
            {children}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
