"use client";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

interface LoadingAnimProps {
  className?: string;
  style?: React.CSSProperties;
}

const LoadingAnim: React.FC<LoadingAnimProps> = ({ className, style }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "assets/animations/loading.json",
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div ref={animationContainer} className={className} style={style}></div>
  );
};

export default LoadingAnim;
