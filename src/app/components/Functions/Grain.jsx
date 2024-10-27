import React from "react";

function Grain() {
  return (
    <div className="w-screen h-screen fixed top-0 z-30 mix-blend-screen opacity-70  sm:opacity-50 pointer-events-none">
      <video
        className="w-full h-full object-cover pointer-events-none"
        muted
        playsInline
        loop
        autoPlay
        src="/assets/videos/grain.webm"
      ></video>
    </div>
  );
}

export default Grain;
