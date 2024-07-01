"use client";

import React from "react";
import { urlFor } from "@/app/lib/sanity";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    gsap.to(MediaItemRef.current, {
      rotate: "random(-4,4,0.5)",
      scrollTrigger: {
        trigger: MediaItemRef.current,
        toggleActions: "play pause resume reset",
        start: "-5% 105%",
        end: "",
        scrub: true,
      },
    });
  });
  if (item._type === "image") {
    return (
      <div
        ref={MediaItemRef}
        className="w-full h-auto max-h-[80vh] rounded-lg overflow-hidden sticky top-10 max-w-[64em] MediaItem"
      >
        <img
          src={urlFor(item).url()}
          alt={item.title || "Project image"}
          className="w-full h-full object-cover"
        />
      </div>
    );
  } else if (item.asset && item.asset.url) {
    // Check if 'asset' and 'asset.url' are not undefined
    return (
      <div
        ref={MediaItemRef}
        className="w-full h-auto rounded-lg overflow-hidden sticky top-10 max-w-[64em] MediaItem"
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
