import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import "./swiper.css";
import iconoApps1 from "../../assets/iconoApps1.svg";
import iconoApps2 from "../../assets/iconoApps2.svg";
import iconoApps3 from "../../assets/iconoApps3.svg";
import iconoApps4 from "../../assets/iconoApps4.svg";
import iconoApps5 from "../../assets/iconoApps5.svg";
import iconoApps6 from "../../assets/iconoApps6.svg";
import ytVerde from "../../assets/ytVerdeBG.svg";
import appsUsuario from "../../assets/userGreen.svg";
import ytWhite from "../../assets/ytWhite.svg";
import userWhite from "../../assets/userWhite.svg";

const SwiperApps = (e) => {
  SwiperCore.use([Keyboard, Mousewheel]);
  const [button1, setButton1] = useState(e.button1);
  const [button2, setButton2] = useState(e.button2);
  const [button3, setButton3] = useState(e.button3);
  const [button4, setButton4] = useState(e.button4);
  const [button5, setButton5] = useState(e.button5);
  const [button6, setButton6] = useState(e.button6);
  const [swiper, setSwiper] = useState(null);
  const handleSwiperInit = (swiper) => {
    setSwiper(swiper);
  };

  const focusSlide = (slideIndex) => {
    if (swiper) {
      swiper.slideTo(slideIndex);
    }
  };

  const swiperRef = useRef(null);
  useEffect(() => {
    setButton1(e.button1);
    setButton2(e.button2);
    setButton3(e.button3);
    setButton4(e.button4);
    setButton5(e.button5);
    setButton6(e.button6);
    focusSlide(e.focusOnSlide);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    e.button1,
    e.button2,
    e.button3,
    e.button4,
    e.button5,
    e.button6,
    e.focusOnSlide,
  ]);
  return (
    <div>
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
            slidesPerView: 4,
          },
        }}
        className="swiper_apps"
      >
        {button1 ? (
          <SwiperSlide className="swiper_apps_slide_clicked">
            <h1>FLEETRUN</h1>
            <img alt="fleetrun" src={iconoApps3}></img>
            <div className="swiper_apps_buttons_clicked">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytWhite}></img>DIDÁCTICO
              </a>
              <a href="https://fleetrun.wialon.com/login ">
                <img alt="usuario" src={userWhite}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Aplicación informativa sobre los servicios realizados para su
              flota. de todo tipo de trabajos y servicios, llevando un registro
              de gastos en cada vehículo e incluso cada kilómetro.
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="swiper_apps_slide">
            <h1>FLEETRUN</h1>
            <img alt="fleetrun" src={iconoApps3}></img>
            <div className="swiper_apps_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytVerde}></img>DIDÁCTICO
              </a>
              <a href="https://fleetrun.wialon.com/login">
                <img alt="usuario" src={appsUsuario}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Aplicación informativa sobre los servicios realizados para su
              flota. de todo tipo de trabajos y servicios, llevando un registro
              de gastos en cada vehículo e incluso cada kilómetro.
            </div>
          </SwiperSlide>
        )}

        {button2 ? (
          <SwiperSlide className="swiper_apps_slide_clicked">
            <h1>LOGISTICS</h1>
            <img alt="LOGISTICS" src={iconoApps2}></img>
            <div className="swiper_apps_buttons_clicked">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytWhite}></img>DIDÁCTICO
              </a>
              <a href="https://apps.wialon.com/logistics/?&lang=es#/">
                <img alt="usuario" src={userWhite}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Herramienta de logística y entrega: planifica rutas, optimiza
              transporte y ahorro de gastos. Contando con la versión web para
              los operadores y la aplicación móvil para los conductores.
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="swiper_apps_slide">
            <h1>LOGISTICS</h1>
            <img alt="LOGISTICS" src={iconoApps2}></img>
            <div className="swiper_apps_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytVerde}></img>DIDÁCTICO
              </a>
              <a href="https://apps.wialon.com/logistics/?&lang=es#/">
                <img alt="usuario" src={appsUsuario}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Herramienta de logística y entrega: planifica rutas, optimiza
              transporte y ahorro de gastos. Contando con la versión web para
              los operadores y la aplicación móvil para los conductores.
            </div>
          </SwiperSlide>
        )}
        {button3 ? (
          <SwiperSlide className="swiper_apps_slide_clicked">
            <h1>HECTERRA</h1>
            <img alt="HECTERRA" src={iconoApps4}></img>
            <div className="swiper_apps_buttons_clicked">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytWhite}></img>DIDÁCTICO
              </a>
              <a href="https://hecterra.wialon.com/login">
                <img alt="usuario" src={userWhite}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Desarrollada para la ejecución de operaciones de campo. Informando
              sobre el registro de operaciones y productos agrícolas, guías
              especiales, reportes detallados, todo lo necesario para una
              eficiente gestión agrícola.
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="swiper_apps_slide">
            <h1>HECTERRA</h1>
            <img alt="HECTERRA" src={iconoApps4}></img>
            <div className="swiper_apps_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytVerde}></img>DIDÁCTICO
              </a>
              <a href="https://hecterra.wialon.com/login">
                <img alt="usuario" src={appsUsuario}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Desarrollada para la ejecución de operaciones de campo. Informando
              sobre el registro de operaciones y productos agrícolas, guías
              especiales, reportes detallados, todo lo necesario para una
              eficiente gestión agrícola.
            </div>
          </SwiperSlide>
        )}
        {button4 ? (
          <SwiperSlide className="swiper_apps_slide_clicked">
            <h1>ECODRIVING</h1>
            <img alt="ECODRIVING" src={iconoApps5}></img>
            <div className="swiper_apps_buttons_clicked">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytWhite}></img>DIDÁCTICO
              </a>
              <a href="https://apps.wialon.com/ecodriving/">
                <img alt="usuario" src={userWhite}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Evalúa la calidad de conducción, los datos obtenidos capacitan a
              los conductores, disminuir gastos en combustible, garantizar
              seguridad de transporte de pasajeros y de carga.
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="swiper_apps_slide">
            <h1>ECODRIVING</h1>
            <img alt="ECODRIVING" src={iconoApps5}></img>
            <div className="swiper_apps_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytVerde}></img>DIDÁCTICO
              </a>
              <a href="https://apps.wialon.com/ecodriving/">
                <img alt="usuario" src={appsUsuario}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Evalúa la calidad de conducción, los datos obtenidos capacitan a
              los conductores, disminuir gastos en combustible, garantizar
              seguridad de transporte de pasajeros y de carga.
            </div>
          </SwiperSlide>
        )}
        {button5 ? (
          <SwiperSlide className="swiper_apps_slide_clicked">
            <h1>CHATTERBOX</h1>
            <img alt="CHATTERBOX" src={iconoApps6}></img>
            <div className="swiper_apps_buttons_clicked">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytWhite}></img>DIDÁCTICO
              </a>
              <a href="https://apps.wialon.com/chatterbox/">
                <img alt="usuario" src={userWhite}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Chatterbox es una aplicación que permite al operador comunicarse
              con los conductores y enviar varios comandos a la unidad. Los
              mensajes pueden enviarse vía Internet (conexión TCP, UDP) o como
              SMS.
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="swiper_apps_slide">
            <h1>CHATTERBOX</h1>
            <img alt="CHATTERBOX" src={iconoApps6}></img>
            <div className="swiper_apps_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytVerde}></img>DIDÁCTICO
              </a>
              <a href="https://apps.wialon.com/chatterbox/">
                <img alt="usuario" src={appsUsuario}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Chatterbox es una aplicación que permite al operador comunicarse
              con los conductores y enviar varios comandos a la unidad. Los
              mensajes pueden enviarse vía Internet (conexión TCP, UDP) o como
              SMS.
            </div>
          </SwiperSlide>
        )}
        {button6 ? (
          <SwiperSlide className="swiper_apps_slide_clicked">
            <h1>WIATAG</h1>
            <img alt="WIATAG" src={iconoApps1}></img>
            <div className="swiper_apps_buttons_clicked">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytWhite}></img>DIDÁCTICO
              </a>
              <a href="https://configurator.wialon.com/login ">
                <img alt="usuario" src={userWhite}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Esta aplicación conecta los dispositivos móviles como herramientas
              de rastreo, permite hacer seguimiento de diferentes tareas y
              controla su ejecución de forma remota.
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide className="swiper_apps_slide">
            <h1>WIATAG</h1>
            <img alt="WIATAG" src={iconoApps1}></img>
            <div className="swiper_apps_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="Youtube" src={ytVerde}></img>DIDÁCTICO
              </a>
              <a href="https://configurator.wialon.com/login ">
                <img alt="usuario" src={appsUsuario}></img>INICIAR SESIÓN{" "}
              </a>
            </div>
            <div className="text_suport_apps">
              Esta aplicación conecta los dispositivos móviles como herramientas
              de rastreo, permite hacer seguimiento de diferentes tareas y
              controla su ejecución de forma remota.
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default SwiperApps;
