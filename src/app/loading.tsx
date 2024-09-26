"use client";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Loading = () => {
  // Specify the ref type as HTMLDivElement or null to accommodate for the initial null state.
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      const instance = lottie.loadAnimation({
        container: animationContainer.current, // Safe to use because we checked if it's not null
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
      <div className="w-full max-w-xs" ref={animationContainer}></div>
    </div>
  );
};

export default Loading;
