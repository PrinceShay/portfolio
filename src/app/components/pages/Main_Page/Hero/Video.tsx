import { Play } from "lucide-react";
import React, { useState, useRef } from "react";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="page_padding rounded-2xl overflow-hidden relative flex items-center justify-center ">
      {!isPlaying && (
        <div
          onClick={handlePlayButtonClick}
          className="absolute flex items-center justify-center w-16 h-16 rounded-full bg-primary-500 cursor-pointer"
        >
          <Play className="ml-1" />
        </div>
      )}
      <video
        poster="/assets/images/hero/thumbnail.jpg"
        muted
        ref={videoRef}
        onEnded={handleVideoEnd}
        className="w-full h-[75vh] object-cover mt-12 border border-darkBlue-400"
      >
        <source type="video/webm" src="/assets/videos/heroAnim.webm" />
      </video>
    </div>
  );
}
