import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import React from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

function Slider() {
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
      <SwiperSlide className="">
        <img
          src="/assets/images/_MG_4682-cutout-bg-with-light-web.jpg"
          alt="Jannis Röstel"
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_3012_web.jpg"
          alt="Jannis Röstel"
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_5540-Frei-bg_web.jpg"
          alt="Jannis Röstel"
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_5650--web.jpg"
          alt="Jannis Röstel"
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_6417-web.jpg"
          alt="Jannis Röstel"
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
