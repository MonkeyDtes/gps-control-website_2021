import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import modalImg1 from "../../assets/Modal_comportamiento.jpg";
import modalImg2 from "../../assets/Modal_interior.jpg";
import modalImg3 from "../../assets/Modal_accidentes.jpg";
import resImg1 from "../../assets/swResponsive3.jpg";
import resImg2 from "../../assets/swResponsive4.jpg";
import resImg3 from "../../assets/swResponsive5.jpg";

const SwiperHomeSecond = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);

  const [inicialSlide, setInicialSlide] = useState(e.incialSlide);

  const swiperRef = useRef(null);
  useEffect(() => {
    setInicialSlide(e.incialSlide);
  }, [e.incialSlide]);
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
        className="swiper_home"
      >
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg1}></img>
          <div>
            <img alt="swiper" src={resImg1}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg2}></img>
          <div>
            <img alt="swiper" src={resImg2}></img>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_home_slide">
          <img alt="swiper" src={modalImg3}></img>
          <div>
            <img alt="swiper" src={resImg3}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHomeSecond;
