"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ProjectItem({ post, idx }: { post: any; idx: number }) {
  const object = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
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
        gsap.to(image.current, {
          scale: 1.1,
          ease: "power2.out",
          duration: 1.5,
        });
      });
      object.current?.addEventListener("mouseleave", () => {
        gsap.to(image.current, { scale: 1, ease: "power4.out", duration: 1.5 });
      });
    },
    { scope: object }
  );

  if (!post) {
    return <div>Post not available</div>;
  }

  const variants = {
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: { scale: 0.7, opacity: 0 },
  };

  const categories = post.categories || [];

  return (
    <Link
      href={`/projekte/${post.currentSlug}`}
      className="ProjectCard col-start-1 col-end-13 sticky top-[10vh]"
    >
      <div
        ref={object}
        className="rounded-xl relative min-h-[80vh] overflow-hidden w-full h-auto p-14 flex items-end shadow-2xl"
        onMouseEnter={() => gsap.to(image.current, { scale: 1.2 })}
        onMouseLeave={() => gsap.to(image.current, { scale: 1 })}
      >
        <Image
          fill={true}
          ref={image}
          alt={post.title}
          src={urlFor(post.titleImage).url()}
          className="object-cover absolute"
        />
        <div className="flex justify-between w-full items-center">
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
