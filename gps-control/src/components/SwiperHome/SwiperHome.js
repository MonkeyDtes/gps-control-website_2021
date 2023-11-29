import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import Flota_vehículos from "../../assets/Modales_home/Flota_vehículos.jpg"
import Iconos_gpscontrol from "../../assets/Modales_iconos/Iconos_gpscontrol.svg";
import Flota_plataforma from "../../assets/Modales_home/Flota_plataforma.png";
import Boton_flecha from "../../assets/Modales_botones/Boton_flecha.svg";
import Pasajeros_captura from "../../assets/Modales_home/Pasajeros_captura.png";
import Conductores_captura from "../../assets/Modales_home/Conductores_captura.png";
import Estadisticas_captura from "../../assets/Modales_home/Estadisticas_captura.png";
import Carga_bg from "../../assets/Modales_home/Carga_bg.png";
import Pasajeros_bg from "../../assets/Modales_home/Pasajeros_bg.png";
import Estadisticas_bg from "../../assets/Modales_home/Estadisticas_bg.png";
import Conductores_conductor from "../../assets/Modales_home/Conductores_conductor.png";
import "./swiper.css";

function SwiperHome({ incial }) {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [inicialSlide, setInicialSlide] = useState(incial);

  const swiperRef = useRef(null);
  useEffect(() => {
    setInicialSlide(incial);
  }, [incial]);

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
          <img className="img--flotaVehiculos__home" src={Flota_vehículos} alt="" />
          {/* <img className="img--botonFlecha__home" src={Boton_flecha} alt="" /> */}
          <div className="grid__sides__modal container__left__modal">
            <div className="container--title--iconos--group__modal">
              <h2>flota</h2>
              <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
            </div>
            <div className="container--white__modal__flota">
              <p>Reporte en tiempo real</p>
              <p>App móvil</p>
              <p>Para todo tipo de vehículos</p>
            </div>
          </div>
          <div className="grid__sides__modal container__right__modal">
            <img className="img--flota__modal" src={Flota_plataforma} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container__swiper_home">
          <div className="container--img--pasajerosCaptura__home">
            <img src={Pasajeros_captura} alt="" />
          </div>
          <div className="container--title--iconos--group__modal">
            <h2>pasajeros</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <p>Creación de pasajeros</p>
            <p>Monitoreo de ruta</p>
            <p>Vinculación de pasajero y vehículo</p>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Pasajeros_bg} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal"></div>
        </div>
        {/* <div className="container__swiper_home">
          <img className="img--cargaBg__home" src={Pasajeros_bg} alt="" />
          <div className="container--img--pasajerosCaptura__home">
            <img src={Pasajeros_captura} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
            <div className="container--title--iconos--group__modal">
              <h2>pasajeros</h2>
              <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
            </div>
            <div className="container--white__modal">
              <p>Creación de pasajeros</p>
              <p>Monitoreo de ruta</p>
              <p>Vinculación de pasajero y vehículo</p>
            </div>
          </div>
          <div className="grid__sides__modal container__right__modal"></div>
        </div> */}
      </SwiperSlide>
      <SwiperSlide>
        <div className="container__swiper_home">
          <div className="container--title--iconos--group__modal">
            <h2>Estadisticas</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <p>Sistema de control</p>
            <p>Localización de vehículos</p>
            <p>Obtención de informes mediante satélite vehicular</p>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Estadisticas_bg} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal">
            <div className="container--img--estadisticasCaptura__home">
              <img src={Estadisticas_captura} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="container__swiper_home">
          <img className="img--cargaBg__home" src={Estadisticas_bg} alt="" />
          <div className="grid__sides__modal container__left__modal">
            <div className="container--title--iconos--group__modal">
              <h2>estadísticas</h2>
              <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
            </div>
            <div className="container--white__modal">
              <p>Sistema de control</p>
              <p>Localización de vehículos</p>
              <p>Obtención de informes mediante satélite vehicular</p>
            </div>
          </div>
          <div className="grid__sides__modal container__right__modal">
            <div className="container--img--estadisticasCaptura__home">
              <img src={Estadisticas_captura} alt="" />
            </div>
          </div>
        </div> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <div className="container__swiper_home">
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Conductores_conductor} alt="" />
          </div>
          <div className="container--img--pasajerosCaptura__home">
            <img src={Conductores_captura} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
            <div className="container--title--iconos--group__modal">
              <h2>conductores</h2>
              <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
            </div>
            <div className="container--white__modal">
              <p>Registro de conductores</p>
              <p>Comunicación constante</p>
              <p>Vinculación de conductor y vehículo</p>
            </div>
          </div>
          <div className="grid__sides__modal container__right__modal"></div>
        </div> */}

        <div className="container__swiper_home">
          <div className="container--img--pasajerosCaptura__home">
            <img src={Conductores_captura} alt="" />
          </div>
          <div className="container--title--iconos--group__modal">
            <h2>conductores</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <p>Registro de conductores</p>
            <p>Comunicación constante</p>
            <p>Vinculación de conductor y vehículo</p>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Conductores_conductor} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="container__swiper_home">
          <div className="container--title--iconos--group__modal">
            <h2>carga</h2>
            <img className="iconos--group__modal" src={Iconos_gpscontrol} alt="" />
          </div>
          <div className="container--white__modal">
            <p>GPS para transporte</p>
            <p>Monitoreo interno</p>
            <p>Rastreo localizador de camiones</p>
          </div>
          <div className="cont--img--cargaBg__home">
            <img className="img--cargaBg__home" src={Carga_bg} alt="" />
          </div>
          <div className="grid__sides__modal container__left__modal">
          </div>
          <div className="grid__sides__modal container__right__modal"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperHome; 