import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import modalImg1 from "../../assets/Modal_comportamiento.jpg"
import modalImg2 from "../../assets/Modal_interior.jpg"

 
const SwiperHomeSecond = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  
  const [inicialSlide, setInicialSlide] =useState(e.incialSlide)

  const swiperRef = useRef(null);
  useEffect(() => {
    setInicialSlide(e.incialSlide)
  }, [
    e.incialSlide
  ]);
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
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg1}></img></SwiperSlide>
        <SwiperSlide className="swiper_home_slide" ><img alt="swiper" src={modalImg2}></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHomeSecond;
