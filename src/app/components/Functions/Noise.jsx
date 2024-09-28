import React from "react";

function Noise() {
  return (
    <div className="w-full h-screen fixed top-0 -z-10 mix-blend-screen opacity-55 sm:opacity-15 pointer-events-none">
      <video
        muted
        loop
        playsInline
        autoPlay
        src="/assets/videos/noise.webm"
      ></video>
    </div>
  );
}

export default Noise;
