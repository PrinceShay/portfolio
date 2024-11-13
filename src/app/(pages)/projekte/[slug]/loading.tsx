import React from "react";

export default function loading() {
  return (
    <header className="min-h-[80vh] grid grid-cols-12 animate-pulse">
      <div className="page_padding py-12 col-start-1 col-end-13 flex flex-col items-center justify-center text-center">
        <p className="text-2xl block text-center text-primary font-semibold tracking-wide uppercase bg-gray-300 rounded-lg h-8 w-1/4 my-2">
          {/* Loading Title Placeholder */}
        </p>
        <h1 className="mt-8 block text-center Section_Headline bg-gray-300 rounded-lg h-10 w-2/3 my-4">
          {/* Loading Hero Text Placeholder */}
        </h1>

        <div className="flex flex-col sm:flex-row gap-16 mt-8">
          <div className="items-center">
            <p className="opacity-50 mb-4 text-lg uppercase bg-gray-200 rounded h-4 w-24 my-2"></p>
            <p className="text-xl max-w-48 bg-gray-300 rounded h-6 w-32"></p>
          </div>
        </div>
      </div>
    </header>
  );
}
