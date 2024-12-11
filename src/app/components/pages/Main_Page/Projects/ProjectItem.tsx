"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { useGSAP } from "@gsap/react";

interface Post {
  title: string;
  currentSlug: string;
  categories: string[];
  titleVideo?: {
    asset: {
      url: string;
    };
  };
  titleImage?: any;
}

interface ProjectItemProps {
  post: Post;
  idx: number;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    // Initial call
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function ProjectItem({ post, idx }: ProjectItemProps) {
  const object = useRef<HTMLDivElement>(null);
  const ProjectvideoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const windowSize = useWindowSize();

  // Check if it's a mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (titleRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: object.current,
            start: "top 5vh",
            scrub: true,
            toggleActions: "play pause resume reset",
          },
        });

        tl.to(object.current, {
          scale: 0.7,
          rotate: -2.5,
        });

        // Animation for categories
        gsap.from(".category", {
          scale: 0,
          opacity: 0,
          duration: 1.75,
          stagger: 0.1,
          ease: "elastic.out(1, 0.7)",
          scrollTrigger: {
            trigger: object.current,
            start: "80% 95%",
          },
        });

        // Animation for the entire title
        gsap.from(titleRef.current, {
          y: 30,
          opacity: 0,
          rotateX: 80,
          rotate: 5,
          duration: 1.4,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "top 10%",
          },
        });

        // Load video before it comes into the viewport
        if (!isMobile && ProjectvideoRef.current && post.titleVideo) {
          ScrollTrigger.create({
            trigger: object.current,
            start: "-10% bottom", // 200px before the element reaches the viewport
            onEnter: () => {
              if (!videoLoaded) {
                setVideoLoaded(true);
              }
            },
          });

          // Play/Pause video based on scroll position
          ScrollTrigger.create({
            trigger: object.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              ProjectvideoRef.current?.play();
            },
            onLeave: () => {
              ProjectvideoRef.current?.pause();
            },
            onEnterBack: () => {
              ProjectvideoRef.current?.play();
            },
            onLeaveBack: () => {
              ProjectvideoRef.current?.pause();
            },
          });
        }
      }
    },
    {
      scope: object,
      dependencies: [isMobile, videoLoaded, windowSize.width],
      revertOnUpdate: true,
    }
  );

  if (!post) {
    return <div>Post not available</div>;
  }

  const categories: string[] = post.categories || [];

  return (
    <Link
      href={`/projekte/${post.currentSlug}`}
      className="ProjectCard col-start-1 col-end-13 block sticky top-[10vh] max-w-full group hover:scale-90 transition-transform ease-out duration-500"
    >
      <div
        ref={object}
        className="will-change-transform relative rounded-xl min-h-[60vh] md:min-h-[80vh] overflow-hidden w-full h-auto p-8 md:p-14 flex items-center shadow-2xl bg-darkBlue-400"
      >
        {!isMobile && post.titleVideo && post.titleVideo.asset && (
          <video
            ref={ProjectvideoRef}
            className=" group-hover:brightness-125 w-full h-full absolute left-0 top-0 object-cover touch-none pointer-events-none group-hover:scale-125 transition-all duration-500 ease-out"
            muted
            playsInline
            loop
            preload="metadata" // Loads only metadata
          >
            {videoLoaded && (
              <source src={post.titleVideo.asset.url} type="video/webm" />
            )}
          </video>
        )}
        {isMobile && post.titleImage && (
          <Image
            ref={imageRef}
            src={urlFor(post.titleImage).url()}
            alt={post.title}
            fill
            className="touch-none pointer-events-none object-cover"
          />
        )}
        <div className="w-full h-full bg-gradient-to-t bg-darkBlue-400 group-hover:bg-primary-600 transition-colors ease-out duration-500 opacity-60 group-hover:opacity-30 absolute left-0 bottom-0"></div>
        <div className="text-center flex flex-col gap-6 justify-end w-full h-full items-center group-hover:scale-[1.2] transition-transform duration-500 ease-out">
          <h2
            ref={titleRef}
            className=" font-humane text-[25vw] sm:text-[10vw] font-bold uppercase leading-none mt-4 relative"
          >
            {post.title}
          </h2>
          <div className="flex justify-start gap-2">
            {categories.map((category: string) => (
              <div
                key={category}
                className="category hidden md:block py-3 px-6 relative bg-darkBlue-400 shadow-xl rounded-full backdrop-blur-lg bg-opacity-10"
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
