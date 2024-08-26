import React from "react";

function Grain() {
  return (
    <div className="w-screen h-screen fixed top-0 -z-10 mix-blend-screen  opacity-60 pointer-events-none">
      <video
        className="w-full h-full object-cover"
        muted
        loop
        autoPlay
        src="/assets/videos/grain.webm"
      ></video>
    </div>
  );
}

export default Grain;
