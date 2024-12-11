"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

const SmoothScroller = ({ children }: PropsWithChildren) => {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (lenis) {
      lenis.stop();
    }

    const handleScrollToTop = () => {
      if (lenis) {
        lenis.start();
        window.scrollTo(0, 0);
      }
    };

    handleScrollToTop();
  }, [pathname, lenis]);

  return (
    <ReactLenis className="h-full" options={{ lerp: 0.1 }} root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroller;
