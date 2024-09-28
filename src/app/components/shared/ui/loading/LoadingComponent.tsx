import React from "react";
import LoadingAnim from "./LoadingAnim";

export default function LoadingComponent() {
  return (
    <div className="w-full py-24">
      <LoadingAnim className="w-full max-w-24" />
    </div>
  );
}
