import React from "react";
import MediaItem from "./MediaItem"; // Make sure the path is correct
import { MediaItemProps } from "./MediaItem"; // Import the interface if it's exported from MediaItem.tsx

type ProjectContentProps = {
  mediaCollection: MediaItemProps[]; // Use the imported MediaItemProps type
};

function ProjectContent({ mediaCollection }: ProjectContentProps) {
  return (
    <section className="px-6 md:px-24 lg:px-48">
      <div className="gap-32 md:gap-64 lg:gap-96 flex flex-col items-center ">
        {mediaCollection.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContent;
