"use client";
import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ProjectItem({ post, idx }: { post: any; idx: number }) {
  const object = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // Updated to HTMLVideoElement
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(object.current, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: object.current,
          toggleActions: "play pause resume reset",
          start: "top 5vh",
          end: "",
          scrub: true,
        },
      });

      gsap.from(".category", {
        scale: 0,
        opacity: 0,
        duration: 1.75,
        stagger: 0.2,
        ease: "elastic.out(1,0.7)",
        scrollTrigger: {
          trigger: object.current,
          toggleActions: "play pause resume reset",
          start: "80% 95%",
        },
      });

      gsap.from(titleRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: object.current,
          toggleActions: "play pause resume reset",
          start: "80% 95%",
        },
      });

      // Add hover effects
      object.current?.addEventListener("mouseenter", () => {
        gsap.to(videoRef.current, {
          scale: 1.1,
          ease: "power2.out",
          duration: 1.5,
        });
      });
      object.current?.addEventListener("mouseleave", () => {
        gsap.to(videoRef.current, {
          scale: 1,
          ease: "power4.out",
          duration: 1.5,
        });
      });
    },
    { scope: object }
  );

  if (!post) {
    return <div>Post not available</div>;
  }

  const categories = post.categories || [];

  return (
    <Link
      href={`/projekte/${post.currentSlug}`}
      className="ProjectCard col-start-1 col-end-13 sticky top-[10vh]"
    >
      <div
        ref={object}
        className="rounded-xl relative min-h-[80vh] overflow-hidden w-full h-auto p-14 flex items-end shadow-2xl"
        onMouseEnter={() =>
          gsap.to(videoRef.current, { scale: 1.2, ease: "Power2.out" })
        }
        onMouseLeave={() =>
          gsap.to(videoRef.current, { scale: 1, ease: "Power2.out" })
        }
      >
        {post.titleVideo && post.titleVideo.asset && (
          <video
            ref={videoRef} // Correctly assigned ref for the video element
            className="w-full h-full absolute left-0 top-0 object-cover"
            src={post.titleVideo.asset.url}
            autoPlay
            muted
            loop
          ></video>
        )}
        <div className="w-full h-3/4 bg-gradient-to-t from-primary-600 to-transparent absolute left-0 bottom-0"></div>
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between w-full items-center">
          <h2 ref={titleRef} className="ProjectCard-Heading mt-4 relative">
            {post.title}
          </h2>
          <div className="flex justify-start gap-2">
            {categories.map((category: string) => (
              <div
                key={category}
                className="category py-3 px-6 relative bg-primary-900 rounded-full backdrop-blur-lg bg-opacity-10"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
