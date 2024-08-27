import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import React from "react";
import Image from "next/image";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

function Slider() {
  const images = [
    {
      src: "/assets/images/_MG_4682-cutout-bg-with-light-web.jpg",
      alt: "Jannis Röstel 1",
    },
    {
      src: "/assets/images/profile/slider/_MG_3012_web.jpg",
      alt: "Jannis Röstel 2",
    },
    {
      src: "/assets/images/profile/slider/_MG_5540-Frei-bg_web.jpg",
      alt: "Jannis Röstel 3",
    },
    {
      src: "/assets/images/profile/slider/_MG_5650--web.jpg",
      alt: "Jannis Röstel 4",
    },
    {
      src: "/assets/images/profile/slider/_MG_6417-web.jpg",
      alt: "Jannis Röstel 5",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, EffectCoverflow, Pagination]}
      grabCursor={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 200,
      }}
      slidesPerView="auto"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={true}
      loop={true}
      className="mySwiper mt-36"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="">
          <div className="h-[75vh] w-auto object-cover overflow-hidden rounded-xl">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
