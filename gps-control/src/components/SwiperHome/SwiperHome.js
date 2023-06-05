import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";

const SwiperHome = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [swiper, setSwiper] = useState(null);

  const swiperRef = useRef(null);
  useEffect(() => {
    focusSlide(e.focusOnSlide);
  }, [
    e.focusOnSlide,
  ]);

  const handleSwiperInit = (swiper) => {
    setSwiper(swiper);
  };

  const focusSlide = (slideIndex) => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };
  return (
    <div
      style={{
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <Swiper
        centeredSlides={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        initialSlide={0}
        mousewheel={true}
        ref={swiperRef}
        onSwiper={(swiper) => handleSwiperInit(swiper)}
        breakpoints={{
          200: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          650: {
            slidesPerView: 1,
          },
        }}
        className="swiper_home"
      >
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src=""></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
