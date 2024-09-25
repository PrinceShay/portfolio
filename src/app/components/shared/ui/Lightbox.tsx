import React, { useRef } from "react";
import { MediaItemProps } from "../../pages/Project_Page/MediaItem";
import { urlFor } from "@/app/lib/sanity";

interface LightboxProps {
  item: MediaItemProps;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50; // Minimum distance for a swipe to be recognized

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        // Swiped left
        onNext();
      } else {
        // Swiped right
        onPrev();
      }
    }
    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
      >
        &times;
      </button>
      {/* Previous Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 text-white text-3xl focus:outline-none"
      >
        &#8249;
      </button>
      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 text-white text-3xl focus:outline-none"
      >
        &#8250;
      </button>
      {/* Media Content */}
      {item._type === "image" ? (
        <img
          src={urlFor(item).url()}
          alt={item.title || "Image"}
          className="max-w-full max-h-full"
        />
      ) : item.asset && item.asset.url ? (
        <video
          src={item.asset.url}
          controls
          autoPlay
          className="max-w-full max-h-full"
        />
      ) : (
        <div className="text-white">Error loading media</div>
      )}
    </div>
  );
};

export default Lightbox;
