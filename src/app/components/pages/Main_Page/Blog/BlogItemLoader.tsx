import React from "react";

type Props = {};

export default function BlogItemLoader({}: Props) {
  return (
    <div className=" rounded-xl overflow-hidden p-5 animate-pulse">
      <div className="rounded-xl w-full aspect-video relative overflow-hidden bg-darkBlue-400"></div>
      <div className="mt-6">
        <div className="bg-darkBlue-400 h-5 w-full rounded-full"></div>
        <div className="mt-2 bg-darkBlue-400 h-4 w-24 rounded-full"></div>
      </div>
    </div>
  );
}
