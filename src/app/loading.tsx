"use client";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Loading = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if window object is available to ensure we're in a client environment
    if (typeof window !== "undefined" && animationContainer.current) {
      const instance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/animations/loading.json",
      });
      return () => instance.destroy();
    }
  }, []);

  return (
    <div className="w-full h-screen bg-darkBlue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-24" ref={animationContainer}></div>
    </div>
  );
};

export default Loading;
