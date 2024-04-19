"use client";
import React from "react";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

function BlogItem({ post, idx }: { post: any; idx: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  if (!post) {
    return <div>Post not available</div>;
  }

  // Correcting the TypeScript errors by adding explicit types
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };
  const chevron = {
    initial: { x: 0 },
    animate: { x: 10 },
  };

  return (
    <Link href={`/blog/${post.currentSlug}`} className="">
      <motion.div initial="initial" animate="initial" whileHover="animate">
        <div className="w-full aspect-video relative overflow-hidden">
          <img
            alt={post.title}
            src={urlFor(post.titleImage).url()}
            className="rounded-xl object-cover absolute w-full h-full"
          />
        </div>
        <div className="mt-6">
          <p className="">{formatDate(post.publishDate)}</p>
          <h2 className="text-xl mt-2">{post.title}</h2>
          <div className="mt-2 flex gap-1 items-center">
            Mehr lesen
            <motion.div variants={chevron}>
              <ChevronRight />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default BlogItem;
