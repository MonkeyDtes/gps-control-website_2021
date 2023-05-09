import { useState } from "react";
import NavbarGPS from "../../components/NavbarGPS";
import "./apps.css";
import SwiperApps from "../../components/SwiperApps";
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";

export default function Apps() {
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [button5, setButton5] = useState(false);
  const [button6, setButton6] = useState(false);

  const HandleClick = (index) => {
    if (index.currentTarget.id === "1") {
      setButton1(true);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setButton5(false);
      setButton6(false);
    } else if (index.currentTarget.id === "2") {
      setButton1(false);
      setButton2(true);
      setButton3(false);
      setButton4(false);
      setButton5(false);
      setButton6(false);
    } else if (index.currentTarget.id === "3") {
      setButton1(false);
      setButton2(false);
      setButton3(true);
      setButton4(false);
      setButton5(false);
      setButton6(false);
    } else if (index.currentTarget.id === "4") {
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setButton4(true);
      setButton5(false);
      setButton6(false);
    } else if (index.currentTarget.id === "5") {
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setButton5(true);
      setButton6(false);
    } else if (index.currentTarget.id === "6") {
      setButton1(false);
      setButton2(false);
      setButton3(false);
      setButton4(false);
      setButton5(false);
      setButton6(true);
    }
  };
  return (
    <div>
      <NavbarGPS
        Home={false}
        Plataforma={false}
        Equipos={false}
        transporte={false}
        Apps={true}
        Promociones={false}
      ></NavbarGPS>
      <GifGPS type="2"></GifGPS>
      <section className="apps_section1">
        <h1>Seleccione una actividad de su interés</h1>
        <div className="apps_section1_buttons">
          <div className="apps_section1_buttons_top">
            <button onClick={(e) => HandleClick(e)} id="1">
              {" "}
              {button1 ? (
                <div className="apps_button_check">
                  <div className="dot"></div>
                </div>
              ) : (
                <div className="apps_button_dontcheck"></div>
              )}{" "}
              Servicios técnicos
            </button>
            <button onClick={(e) => HandleClick(e)} id="2">
              {" "}
              {button2 ? (
                <div className="apps_button_check">
                  <div className="dot"></div>
                </div>
              ) : (
                <div className="apps_button_dontcheck"></div>
              )}{" "}
              Planificación de rutas
            </button>
            <button onClick={(e) => HandleClick(e)} id="3">
              {" "}
              {button3 ? (
                <div className="apps_button_check">
                  <div className="dot"></div>
                </div>
              ) : (
                <div className="apps_button_dontcheck"></div>
              )}{" "}
              Producción agrícola
            </button>
          </div>
          <div className="apps_section1_buttons_bot">
            <button onClick={(e) => HandleClick(e)} id="4">
              {" "}
              {button4 ? (
                <div className="apps_button_check">
                  <div className="dot"></div>
                </div>
              ) : (
                <div className="apps_button_dontcheck"></div>
              )}{" "}
              Calidad de conducción
            </button>
            <button onClick={(e) => HandleClick(e)} id="5">
              {" "}
              {button5 ? (
                <div className="apps_button_check">
                  <div className="dot"></div>
                </div>
              ) : (
                <div className="apps_button_dontcheck"></div>
              )}{" "}
              Comunicación por chat
            </button>
            <button onClick={(e) => HandleClick(e)} id="6">
              {" "}
              {button6 ? (
                <div className="apps_button_check">
                  <div className="dot"></div>
                </div>
              ) : (
                <div className="apps_button_dontcheck"></div>
              )}{" "}
              Rastreo móvil de vehículos
            </button>
          </div>
        </div>
        <SwiperApps
          button1={button1}
          button2={button2}
          button3={button3}
          button4={button4}
          button5={button5}
          button6={button6}
        ></SwiperApps>
      </section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
