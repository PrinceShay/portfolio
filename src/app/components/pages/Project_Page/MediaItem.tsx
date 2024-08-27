"use client";

import React, { useRef, useEffect } from "react";
import { urlFor } from "@/app/lib/sanity";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export interface MediaItemProps {
  _type: string;
  title?: string;
  alt?: string;
  url: string;
  asset?: {
    _type: string;
    mimeType?: string;
    url?: string; // Ensure this is added if 'url' is a valid property
  };
}

const MediaItem: React.FC<{ item: MediaItemProps }> = ({ item }) => {
  const MediaItemRef = useRef(null);

  useGSAP(() => {
    gsap.from(MediaItemRef.current, {
      scale: 1.1,
      opacity: 0,
      scrollTrigger: {
        trigger: MediaItemRef.current,
        start: "0% 95%",
        end: "0% 65%",
        scrub: true,
      },
    });
  }, {});

  if (item._type === "image") {
    return (
      <div
        ref={MediaItemRef}
        className="w-full max-h-[100vh] aspect-video max-w-[1600px] rounded-lg overflow-hidden  MediaItem"
      >
        <img
          src={urlFor(item).url()}
          alt={item.title || "Jannis Röstel"}
          title={item.title || "Project image"}
          className="w-full h-full object-cover "
          loading="eager"
        />
      </div>
    );
  } else if (item.asset && item.asset.url) {
    // Check if 'asset' and 'asset.url' are not undefined
    return (
      <div
        ref={MediaItemRef}
        className="w-full max-h-[100vh] rounded-lg overflow-hidden MediaItem aspect-video"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src={item.asset.url}
          className="w-full object-cover rounded-lg shadow-md"
        />
      </div>
    );
  } else {
    return <div>Error: Video asset is missing</div>; // Handle missing URL scenario
  }
};

export default MediaItem;
