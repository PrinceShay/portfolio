import React from "react";

function Noise() {
  return (
    <div className="w-full h-screen fixed top-0 -z-10 mix-blend-screen opacity-50 pointer-events-none">
      <video muted loop autoPlay src="/assets/videos/noise.webm"></video>
    </div>
  );
}

export default Noise;
