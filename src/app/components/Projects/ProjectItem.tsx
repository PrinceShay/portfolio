"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanity";
import { motion, useInView } from "framer-motion";

function ProjectItem({ post, idx }: { post: any; idx: number }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

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

  return (
    <Link
      className="ProjectCard col-start-2 col-end-12 sticky top-[10vh]"
      key={idx}
      href={`/projekte/${post.currentSlug}`}
    >
      <motion.div
        ref={ref}
        className="relative min-h-[80vh] w-full h-auto p-6 flex items-end"
        initial="visible"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
        variants={variants}
      >
        <Image
          className="rounded-xl object-cover absolute"
          fill={true}
          alt={post.title}
          src={urlFor(post.titleImage).url()}
        />
        <div className="flex justify-between w-full items-center">
          <h2 className="ProjectCard-Heading mt-4 relative">{post.title}</h2>
          <div className="flex justify-start gap-2">
            <div className="py-3 px-6 relative bg-primary-900 rounded-full backdrop-blur-lg bg-opacity-10">
              Branding
            </div>
            <div className="py-3 px-6 relative bg-primary-900 rounded-full backdrop-blur-lg bg-opacity-10">
              Webdesign
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default ProjectItem;
