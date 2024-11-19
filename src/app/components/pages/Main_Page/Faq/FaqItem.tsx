"use client";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

type Props = {
  title: string;
  text: any;
};

export default function FaqItem({ title, text }: Props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open]);

  return (
    <li className="rounded-xl bg-darkBlue-400 shadow-2xl group p-6 cursor-pointer ">
      <div
        className="flex items-center justify-between w-full text-2xl group-hover:text-primary-300"
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClick();
          }
        }}
        tabIndex={0}
        aria-expanded={open}
        role="button"
      >
        {title}
        <ChevronDown
          className={`transform  transition-transform duration-300 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <p className="mt-6 opacity-75 text-lg">{text}</p>
      </div>
    </li>
  );
}
