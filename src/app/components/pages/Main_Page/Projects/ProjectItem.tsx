"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanity";
import { useGSAP } from "@gsap/react";
import { throttle } from "lodash";

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
  const tooltipRef = useRef<HTMLDivElement>(null);

  const splitInstance = useRef<any>(null); // Keep track of SplitType instance

  const [isSplit, setSplit] = useState(false);
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

  // SplitText with SplitType
  useEffect(() => {
    const splitText = () => {
      if (titleRef.current) {
        // Revert previous splits
        if (splitInstance.current) {
          splitInstance.current.revert();
        }
        // Create a new SplitType instance
        splitInstance.current = new SplitType(titleRef.current, {
          types: "words,chars",
        });
        setSplit(true);
      }
    };

    // Initial split
    splitText();

    // Add resize listener
    window.addEventListener("resize", splitText);

    return () => {
      window.removeEventListener("resize", splitText);
      // Clean up the split instance
      if (splitInstance.current) {
        splitInstance.current.revert();
      }
    };
  }, [titleRef.current]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (tooltipRef.current) {
        gsap.set(tooltipRef.current, { opacity: 0, scale: 0.8 });
      }

      if (isSplit && titleRef.current) {
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

        // Animation for title characters
        const chars = titleRef.current.querySelectorAll(".char");
        if (chars.length > 0) {
          gsap.from(chars, {
            yPercent: 30,
            opacity: 0,
            rotateX: 80,
            stagger: 0.05,
            rotate: 5,
            duration: 1.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 70%",
              end: "top 10%",
            },
          });
        }

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
      dependencies: [isSplit, isMobile, videoLoaded, windowSize.width],
      revertOnUpdate: true,
    }
  );

  // Tooltip animation and event handlers
  useEffect(() => {
    if (!tooltipRef.current || !object.current) return;

    const tooltipX = gsap.quickTo(tooltipRef.current, "left", {
      duration: 0.5,
      ease: "power3.out",
    });
    const tooltipY = gsap.quickTo(tooltipRef.current, "top", {
      duration: 0.5,
      ease: "power3.out",
    });

    const handleMouseMove = throttle((e: MouseEvent) => {
      const rect = object.current?.getBoundingClientRect();
      if (tooltipRef.current && rect) {
        const offsetX = 15; // Adjustable
        const offsetY = 15; // Adjustable

        let x = e.clientX - rect.left + offsetX;
        let y = e.clientY - rect.top + offsetY;

        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        const containerWidth = rect.width;
        const containerHeight = rect.height;

        const tooltipWidth = tooltipRect.width;
        const tooltipHeight = tooltipRect.height;

        // Check and adjust boundaries
        if (x + tooltipWidth > containerWidth) {
          x = containerWidth - tooltipWidth - offsetX;
        }
        if (x < 0) {
          x = offsetX;
        }
        if (y + tooltipHeight > containerHeight) {
          y = containerHeight - tooltipHeight - offsetY;
        }
        if (y < 0) {
          y = offsetY;
        }

        tooltipX(x);
        tooltipY(y);
      }
    }, 16); // Throttling to ~60fps

    const handleMouseEnter = () => {
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
      if (!isMobile && ProjectvideoRef.current) {
        gsap.to(ProjectvideoRef.current, {
          scale: 1.25,
          rotate: 5,
          ease: "power2.out",
          duration: 1.5,
        });
      }
      if (isMobile && imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.25,
          rotate: 5,
          ease: "power2.out",
          duration: 1.5,
        });
      }
    };

    const handleMouseLeave = () => {
      if (tooltipRef.current) {
        gsap.to(tooltipRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.in",
        });
      }
      if (!isMobile && ProjectvideoRef.current) {
        gsap.to(ProjectvideoRef.current, {
          scale: 1,
          rotate: 0,
          ease: "power4.out",
          duration: 1.5,
        });
      }
      if (isMobile && imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1,
          rotate: 0,
          ease: "power4.out",
          duration: 1.5,
        });
      }
    };

    const container = object.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMobile]);

  if (!post) {
    return <div>Post not available</div>;
  }

  const categories: string[] = post.categories || [];

  return (
    <Link
      href={`/projekte/${post.currentSlug}`}
      className="ProjectCard col-start-1 col-end-13 block sticky top-[10vh] max-w-full group "
    >
      <div
        ref={object}
        className="will-change-transform relative rounded-xl min-h-[60vh] md:min-h-[80vh] overflow-hidden w-full h-auto p-8 md:p-14 flex items-center shadow-2xl bg-darkBlue-400"
      >
        {!isMobile && post.titleVideo && post.titleVideo.asset && (
          <video
            ref={ProjectvideoRef}
            className="w-full h-full absolute left-0 top-0 object-cover touch-none pointer-events-none"
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
        <div className="w-full h-full bg-gradient-to-t from-primary-600 to-[#4731662c] opacity-60 absolute left-0 bottom-0"></div>
        <div className="text-center flex flex-col gap-6 justify-between w-full h-full items-center">
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
        {/* Tooltip */}
        <div
          ref={tooltipRef}
          className="hidden xl:block absolute left-0 top-0 pointer-events-none ToolTip text-lg z-50 text-white bg-primary-500 px-3 py-2 rounded whitespace-nowrap"
          style={{
            left: 0,
            top: 0,
          }}
        >
          {`${post.title} anschauen`}
        </div>
      </div>
    </Link>
  );
}

export default ProjectItem;
