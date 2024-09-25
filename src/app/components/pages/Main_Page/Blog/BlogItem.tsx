"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import { ChevronRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BlogItem({ post, idx }: { post: any; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const chevronRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });
    tl.to(imageRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.from("ref.current", {
      yPercent: 20,
      opacity: 0,
      ease: "power4.out",
      ScrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
        markers: true,
      },
    });

    const chevronTl = gsap.timeline({ paused: true });
    chevronTl.to(chevronRef.current, { x: 10, ease: "power4.inOut" });

    if (ref.current) {
      ref.current.addEventListener("mouseenter", () => {
        tl.play();
        chevronTl.play();
      });

      ref.current.addEventListener("mouseleave", () => {
        tl.reverse();
        chevronTl.reverse();
      });
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mouseenter", () => {
          tl.play();
          chevronTl.play();
        });

        ref.current.removeEventListener("mouseleave", () => {
          tl.reverse();
          chevronTl.reverse();
        });
      }
    };
  }, []);

  if (!post) {
    return <div>Post not available</div>;
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  return (
    <Link href={`/blog/${post.currentSlug}`}>
      <div
        ref={ref}
        className="cursor-pointer border-primary-500 transition-all ease-out duration-100 hover:border hover:bg-darkBlue-400 hover:bg-opacity-60 rounded-xl overflow-hidden p-5"
      >
        <div className="rounded-xl w-full aspect-video relative overflow-hidden">
          <Image
            alt={post.title}
            title={post.title}
            src={urlFor(post.titleImage).url()}
            fill
            objectFit="cover"
            ref={imageRef}
          />
        </div>
        <div className="mt-6">
          <p className=" opacity-70">{formatDate(post.publishDate)}</p>
          <h2 className="text-xl mt-2">{post.title}</h2>
          <div className="mt-2 flex gap-1 items-center opacity-70">
            Mehr lesen
            <div ref={chevronRef}>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
