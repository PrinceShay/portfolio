import React from "react";
import MediaItem from "./MediaItem"; // Make sure the path is correct
import { MediaItemProps } from "./MediaItem"; // Import the interface if it's exported from MediaItem.tsx

type ProjectContentProps = {
  title: string; // Add title prop
  text: string; // Add text prop
  mediaCollection: MediaItemProps[]; // Use the imported MediaItemProps type
};

function ProjectContent({ title, text, mediaCollection }: ProjectContentProps) {
  return (
    <section className="flex flex-col lg:grid grid-cols-12 w-full py-24 px-6 md:px-24 lg:px-48 gap-16 justify-between">
      <div className="col-span-5 3xl:col-span-4">
        <div className="sticky top-1/4 3xl:top-1/3">
          <h1 className="Section_Headline small mb-12">{title}</h1>
          <p className="text-xl">{text}</p>
        </div>
      </div>
      <div className="col-span-6 col-start-7 xl:col-span-7 xl:col-start-6 3xl:col-span-8 3xl:col-start-5 gap-16 flex flex-col items-end">
        {mediaCollection.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContent;
