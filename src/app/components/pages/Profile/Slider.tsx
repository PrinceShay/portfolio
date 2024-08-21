import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default () => {
  return (
    <Swiper
      grabCursor={true}
      slidesPerView="auto"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={true}
      loop={true}
      className="mySwiper mt-36"
    >
      <SwiperSlide zoom={true} className="">
        <img
          src="/assets/images/_MG_4682-cutout-bg-with-light-web.jpg"
          alt=""
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_3012_web.jpg"
          alt=""
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_5540-Frei-bg_web.jpg"
          alt=""
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_5650--web.jpg"
          alt=""
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>

      <SwiperSlide className="">
        <img
          src="/assets/images/profile/slider/_MG_6417-web.jpg"
          alt=""
          className="h-[75vh] object-cover overflow-hidden rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
};
