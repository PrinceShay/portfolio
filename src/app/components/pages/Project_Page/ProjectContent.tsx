import React from "react";
import MediaItem from "./MediaItem"; // Make sure the path is correct
import { MediaItemProps } from "./MediaItem"; // Import the interface if it's exported from MediaItem.tsx

type ProjectContentProps = {
  mediaCollection: MediaItemProps[]; // Use the imported MediaItemProps type
};

function ProjectContent({ mediaCollection }: ProjectContentProps) {
  return (
    <section className="flex flex-col lg:grid grid-cols-12 w-full py-24 px-6 md:px-24 lg:px-48 gap-16 justify-between">
      <div className="col-span-4">
        <div className="sticky top-1/3">
          <h1 className="Section_Headline small mb-6">
            Ich bin eine verdammt geile Überschrift.
          </h1>
          <p className="text-xl">
            Als er an seinem ersten dienstfreien Wochenende aus der Kaserne zu
            seinen Eltern fährt, muss er feststellen, dass sein Kinderzimmer von
            seinem Vater als Hobbyraum für Elektroarbeiten genutzt wird. Obwohl
            sich seine Eltern einig sind, dass sie ihren Sohn nicht aus der
            Wohnung haben wollen.
          </p>
        </div>
      </div>
      <div className="col-span-8 col-start-5 gap-16 flex flex-col items-end">
        {mediaCollection.map((item, index) => (
          <MediaItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProjectContent;
