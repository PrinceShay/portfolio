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
      <div className="cursor-pointer group border-primary-500 transition-all ease-out duration-200 hover:border hover:bg-darkBlue-400 hover:bg-opacity-60 rounded-xl overflow-hidden p-5">
        <div className="rounded-xl w-full aspect-video relative overflow-hidden">
          <Image
            alt={post.title}
            title={post.title}
            src={urlFor(post.titleImage).url()}
            fill
            sizes="60vw"
            className="object-cover group-hover:scale-110 duration-200 ease-out transition-transform"
          />
        </div>
        <div className="mt-6">
          <p className=" opacity-70">{formatDate(post.publishDate)}</p>
          <h2 className="text-xl mt-2">{post.title}</h2>
          <div className="mt-2 flex gap-1 items-center opacity-70">
            Mehr lesen
            <ChevronRight className="group-hover:translate-x-3 duration-200 ease-out transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogItem;
