"use client";

import LoadingAnim from "./components/shared/ui/loading/LoadingAnim";

const Loading = () => {
  return (
    <div className="w-full h-screen bg-darkBlue-500 flex items-center justify-center p-6">
      <LoadingAnim className="w-full max-w-16" />
    </div>
  );
};

export default Loading;
