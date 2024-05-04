import React from "react";

function Noise() {
  return (
    <div className="w-full h-screen fixed top-0 z-50 mix-blend-screen opacity-80 pointer-events-none">
      <video muted loop autoPlay src="/assets/videos/noise.webm"></video>
    </div>
  );
}

export default Noise;
