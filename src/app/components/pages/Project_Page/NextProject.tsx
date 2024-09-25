"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ProjectCard, NextProjectProps } from "@/app/lib/interface"; // Adjust the import path as necessary
import { urlFor } from "@/app/lib/sanity";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function NextProject({ projects }: NextProjectProps) {
  const hoverRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useGSAP(() => {
    hoverRef.current.forEach((hoverElem) => {
      if (hoverElem) {
        const NextHover = gsap.timeline({ paused: true });
        NextHover.fromTo(
          hoverElem.querySelector(".NextProject_Image"),
          { scale: 1 },
          {
            scale: 1.2,
            duration: 1,
            rotateZ: 2,
            ease: "power4.inOut",
          }
        );

        hoverElem.addEventListener("mouseenter", () => NextHover.play());
        hoverElem.addEventListener("mouseleave", () => NextHover.reverse());
      }
    });
  }, [projects]);

  return (
    <section className="px-0 md:px-24 lg:px-48 py-24">
      <h1 className="px-6 Section_Headline small mb-12">Nächstes Projekt</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={32}
        navigation
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project: ProjectCard, index) => (
          <SwiperSlide className="" key={project.currentSlug}>
            <Link
              ref={(el) => {
                hoverRef.current[index] = el;
              }}
              href={`/projekte/${project.currentSlug}`}
              className=""
            >
              <div className="h-[60vh] md:h-[40vh]  relative overflow-hidden rounded-xl">
                <img
                  className="NextProject_Image w-full h-full absolute object-cover z-10"
                  src={urlFor(project.titleImage).url()}
                  alt={project.title}
                  title={project.title}
                />
                <div className="absolute h-full w-full z-20 bg-gradient-to-t from-primary-900 to-transparent bg-opacity-60"></div>
                <div className="relative z-30 w-full h-full flex flex-col justify-end gap-6 p-6">
                  <h2 className="text-2xl font-bold uppercase">
                    {project.title}
                  </h2>
                  <div className=" inline-flex justify-start gap-2 w-full overflow-auto">
                    {project.categories.map((category: string) => (
                      <div
                        key={category}
                        className="text-sm category py-2 px-4 relative bg-primary-300 rounded-full backdrop-blur-lg bg-opacity-10"
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NextProject;
