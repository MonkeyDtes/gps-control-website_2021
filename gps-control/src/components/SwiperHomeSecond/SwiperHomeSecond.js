import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import Ondas from "../Ondas/Ondas";
import Iconos_gpscontrol from "../../assets/Modales_iconos/Iconos_gpscontrol.svg";
import Boton_flecha from "../../assets/Modales_botones/Boton_flecha.png";
import Vpasajeros_capturas from "../../assets/Modales_home/Vpasajeros_capturas.jpg";
import Vpasajeros_bg from "../../assets/Modales_home/Vpasajeros_bg.png";
import Registro_bg from "../../assets/Modales_home/Registro_bg.png";
import Accidentes_bg from "../../assets/Modales_home/Accidentes_bg.png";

function SwiperHomeSecond({ incialSlide }) {
  SwiperCore.use([Keyboard, Mousewheel]);

  const [inicialSlide, setInicialSlide] = useState(incialSlide);

  const swiperRef = useRef(null);
  useEffect(() => {
    setInicialSlide(incialSlide);
  }, [incialSlide]);
  return (
    <Swiper
      centeredSlides={true}
      navigation={true}
      modules={[Pagination, Navigation]}
      initialSlide={inicialSlide}
      mousewheel={true}
      ref={swiperRef}
      loop={true}
      className="swiper_home_c"
    >
      <SwiperSlide>
        <div className="container__swiper_home">
          <img className="img--botonFlecha__home" src={Boton_flecha} alt="" />
          <img className="img--botonFlecha__invertido__home" src={Boton_flecha} alt="" />
          <div className="container--title--iconos--group__modal">
            <h2>accidentes</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <div className="cont--text--container--white__modal__accidentes">
              {/*animación de ondas */}
              <div>
                <Ondas />
                <p>Alertas en tiempo real</p>
              </div>
              <div>
                <Ondas />
                <p>Fotos de la ruta</p>
              </div>
              <div>
                <Ondas />
                <p>Grabación</p>
              </div>
              <div>
                <Ondas />
                <p>Video reporte</p>
              </div>
              <div>
                <Ondas />
                <p>Configuración de: resolución, cámara frontal y trasera</p>
              </div>
            </div>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="filter_gray img--cargaBg__home" src={Accidentes_bg} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container__swiper_home">
          <img className="img--botonFlecha__home" src={Boton_flecha} alt="" />
          <img className="img--botonFlecha__invertido__home" src={Boton_flecha} alt="" />
          <div className="container--title--iconos--group__modal">
            <h2>registro</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <div className="cont--text--container--white__modal__flota">
              {/*animación de ondas */}
              <div>
                <Ondas />
                <p>Reporte en tiempo real</p>
              </div>
              <div>
                <Ondas />
                <p>App móvil</p>
              </div>
              <div>
                <Ondas />
                <p>Para todo tipo de vehículos</p>
              </div>
            </div>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Registro_bg} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal">
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container__swiper_home">
          <img className="img--botonFlecha__home" src={Boton_flecha} alt="" />
          <img className="img--botonFlecha__invertido__home" src={Boton_flecha} alt="" />
          <img className="img--botonFlecha__home" src={Boton_flecha} alt="" />
          <div className="container--img--pasajerosCaptura__home">
            <img src={Vpasajeros_capturas} alt="" />
          </div>
          <div className="container--title--iconos--group__modal">
            <h2>comportamiento</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <div className="cont--text--container--white__modal__flota">
              {/*animación de ondas */}
              <div>
                <Ondas />
                <p>Chat constante</p>
              </div>
              <div>
                <Ondas />
                <p>Hábitos de manejo</p>
              </div>
              <div>
                <Ondas />
                <p>Ecodriving APP para calificar la calidad de conducción</p>
              </div>
            </div>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Vpasajeros_bg} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHomeSecond;
