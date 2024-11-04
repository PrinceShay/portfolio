"use client";
import React, { useState, useEffect } from "react";
import MediaItem, { MediaItemProps } from "./MediaItem";
import Lightbox from "../../shared/ui/Lightbox";
type ProjectContentProps = {
  mediaCollection: MediaItemProps[];
};

function ProjectContent({ mediaCollection }: ProjectContentProps) {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMediaItemClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaCollection.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + mediaCollection.length) % mediaCollection.length
    );
  };

  // useEffect zum Verhindern des Scrollens bei geöffneter Lightbox
  useEffect(() => {
    if (isLightboxOpen) {
      // Scrollen verhindern
      document.body.style.overflow = "hidden";
    } else {
      // Scrollen wieder erlauben
      document.body.style.overflow = "";
    }
    // Cleanup-Funktion
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <section className="page_padding py-24">
      <div className="gap-16 md:gap-64 lg:gap-96 flex flex-col items-center">
        {mediaCollection.map((item, index) => (
          <MediaItem
            key={index}
            item={item}
            onClick={() => handleMediaItemClick(index)}
          />
        ))}
      </div>
      {isLightboxOpen && (
        <Lightbox
          item={mediaCollection[currentIndex]}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </section>
  );
}

export default ProjectContent;
