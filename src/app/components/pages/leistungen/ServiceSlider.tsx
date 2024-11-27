"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogItem from "../Main_Page/Blog/BlogItem";

// Importiere die Swiper-Styles, falls du spezielle Swiper-Module verwendest
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

interface BlogArticle {
  title: string;
  slug: string;
  smallDescription: string;
  titleImage: any; // Passe den Typ entsprechend deinem Sanity-Schema an
}

interface ServiceSliderProps {
  blogArticles: BlogArticle[];
}

export default function ServiceSlider({ blogArticles }: ServiceSliderProps) {
  return (
    <div className="py-16 max-w-[1600px] page_padding mx-auto">
      <h2 className="text-3xl mb-8">Verwandte Blog Artikel</h2>
      <Swiper
        spaceBetween={32}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1, // Auf kleinen Bildschirmen (z. B. Mobile)
          },
          768: {
            slidesPerView: 2, // Ab Tablet-Größe (768px und größer)
          },
        }}
        className="mySwiper"
      >
        {blogArticles.map((post, idx) => (
          <SwiperSlide key={post.slug}>
            <BlogItem post={post} idx={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
