import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";

import modalImg6 from "../../assets/Modal_interior.jpg"
import modalImg7 from "../../assets/Modal_pasajeros.jpg"
 
const SwiperHomeSecond = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [swiper, setSwiper] = useState(null);
  const [inicialSlide, setInicialSlide] =useState(e.inicialSlide)

  const swiperRef = useRef(null);
  useEffect(() => {
    focusSlide(e.focusOnSlide);
    setInicialSlide(e.inicialSlide)
  }, [
    e.focusOnSlide, e.inicialSlide
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
        initialSlide={inicialSlide}
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
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg6}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg7}></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHomeSecond;
