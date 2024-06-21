"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ProjectCard, NextProjectProps } from "@/app/lib/interface"; // Adjust the import path as necessary

function NextProject({ projects }: NextProjectProps) {
  return (
    <section className="px-12 md:px-24 lg:px-48">
      <h1>Nächses Projekt</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {projects.map((project: ProjectCard) => (
          <SwiperSlide key={project.currentSlug}>
            <div className="min-h-48 bg-red-500">
              <h2>{project.title}</h2>
              {/* Add more details here as needed */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default NextProject;
