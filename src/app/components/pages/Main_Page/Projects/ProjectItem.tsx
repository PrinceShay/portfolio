"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlFor } from "@/app/lib/sanity"; // Import urlFor
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

function ProjectItem({ post, idx }: { post: any; idx: number }) {
  const object = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useEffect(() => {
    if (isSplit && titleRef.current) {
      const ctx = gsap.context(() => {
        gsap.to(object.current, {
          scale: 0.7,
          opacity: 0,
          rotate: -2.5,
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
          stagger: 0.1,
          ease: "elastic.out(1,0.7)",
          scrollTrigger: {
            trigger: object.current,
            toggleActions: "play pause resume reset",
            start: "80% 95%",
          },
        });

        const chars = titleRef.current?.querySelectorAll(".char");
        if (chars) {
          gsap.from(chars, {
            yPercent: 30,
            opacity: 0,
            rotateX: 80,
            stagger: 0.05,
            rotate: 5,
            duration: 1.4,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 70%",
              scrub: true,
              end: "top 10%",
            },
            ease: "back.out(2)",
          });
        }

        // Add hover effects
        object.current?.addEventListener("mouseenter", () => {
          gsap.to(videoRef.current, {
            scale: 1.25,
            rotate: 5,
            ease: "power2.out",
            duration: 1.5,
          });
          gsap.to(imageRef.current, {
            scale: 1.25,
            rotate: 5,
            ease: "power2.out",
            duration: 1.5,
          });
        });
        object.current?.addEventListener("mouseleave", () => {
          gsap.to(videoRef.current, {
            scale: 1,
            rotate: 0,
            ease: "power4.out",
            duration: 1.5,
          });
          gsap.to(imageRef.current, {
            scale: 1,
            rotate: 0,
            ease: "power4.out",
            duration: 1.5,
          });
        });
      }, object);

      return () => ctx.revert();
    }
  }, [isSplit]);

  if (!post) {
    return <div>Post not available</div>;
  }

  const categories = post.categories || [];

  return (
    <Link
      href={`/projekte/${post.currentSlug}`}
      className="ProjectCard col-start-1 col-end-13 block sticky top-[10vh] max-w-full"
    >
      <div
        ref={object}
        className="rounded-xl relative min-h-[60vh] md:min-h-[80vh] overflow-hidden w-full h-auto p-8 md:p-14 flex items-center shadow-2xl"
      >
        {post.titleVideo && post.titleVideo.asset && (
          <video
            ref={videoRef}
            className="w-full h-full absolute left-0 top-0 object-cover touch-none pointer-events-none hidden md:block"
            src={post.titleVideo.asset.url}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        )}
        {post.titleImage && (
          <img
            ref={imageRef}
            src={urlFor(post.titleImage).url()} // Use urlFor for image URL
            alt={post.title}
            className="w-full h-full absolute left-0 top-0 object-cover touch-none pointer-events-none md:hidden"
          />
        )}
        <div className="w-full h-3/4 bg-gradient-to-t from-primary-600 to-transparent absolute left-0 bottom-0"></div>
        <div className="text-center md:text-left flex flex-col gap-6  justify-between w-full h-full items-center">
          <h2
            ref={titleRef}
            className="ProjectCard-Heading mt-4 relative split"
          >
            {post.title}
          </h2>
          <div className="flex justify-start gap-2">
            {categories.map((category: string) => (
              <div
                key={category}
                className="category hidden md:block py-3 px-6 relative bg-primary-900 rounded-full backdrop-blur-lg bg-opacity-10"
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
