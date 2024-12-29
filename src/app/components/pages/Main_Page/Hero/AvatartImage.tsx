import React from "react";
import Image from "next/image";

export default function ProjectImage() {
  return (
    <div className="border-primary-500 border-2 p-2 w-56 h-56 rounded-full relative flex justify-center items-center mb-16">
      <div className="w-48 h-48 absolute bg-primary-600 blur-2xl opacity-100 rounded-full"></div>
      <div className="w-full h-full rounded-full  bg-primary-500 relative overflow-hidden ">
        <Image
          fill
          alt="Jannis Röstel"
          sizes="60vw"
          className="object-cover object-top scale-[1.3] mt-4"
          src={"/assets/images/_MG_4682-cutout-bg-with-light-web.jpg"}
        />
      </div>
    </div>
  );
}
