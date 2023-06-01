import NavbarGPS from "../../components/NavbarGPS";
import "./equipos.css";
import circuloHome from "../../assets/circuloHome.svg";
import waIcon from "../../assets/waRed.svg";
import ytIcon from "../../assets/ytRed.svg";
import Suntech from "../../assets/Suntech.png";
import gpsControlWhite from "../../assets/gpsControlWhite.svg";
import FMC920 from "../../assets/FMC_920.png";
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import VectorsensorEquipos from "../../assets/VectorsensorEquipos.png";
import sensorBluetooh from "../../assets/SensorBluetooh.png";
import sensorCable from "../../assets/SensorCable.png";
import sensorBluetoohTG from "../../assets/SensorBluetoohToggle.png";
import sensorCableTG from "../../assets/SensorCableToggle.png";
import masIcon from "../../assets/+ icon.svg";
import ytVerde from "../../assets/ytVerdeBG.svg";
import coticeVerde from "../../assets/cotizeVerde.svg";
import sensorEquipos1 from "../../assets/sensorEquiposTD1.png";
import sensorEquipos2 from "../../assets/sensorEquiposTD2.png";
import sensorEquipos3 from "../../assets/sensorEquiposTD3.png";
import sensorEquipos4 from "../../assets/sensorEquiposTD4.png";
import { useEffect, useState } from "react";

export default function Equipos() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  useEffect(() => {
    const sensorT1 = document.getElementById("sensor1");
    const sensorT2 = document.getElementById("sensor2");
    const sensorT3 = document.getElementById("sensor3");
    const sensorT4 = document.getElementById("sensor4");
    if (button2 === true) {
      sensorT1.style.marginTop = "14vh";
      sensorT2.style.marginTop = "14vh";
      sensorT3.style.marginTop = "7vh";
      sensorT4.style.marginTop = "7vh";
      sensorT1.style.opacity = "0.4";
      sensorT2.style.opacity = "0.4";
      sensorT3.style.opacity = "1";
      sensorT4.style.opacity = "1";
      sensorT1.style.transition = "all 1s";
      sensorT2.style.transition = "all 1s";
      sensorT3.style.transition = "all 1s";
      sensorT4.style.transition = "all 1s";
    } else if (button1 === true) {
      sensorT1.style.marginTop = "7vh";
      sensorT2.style.marginTop = "7vh";
      sensorT3.style.marginTop = "14vh";
      sensorT4.style.marginTop = "14vh";
      sensorT1.style.opacity = "1";
      sensorT2.style.opacity = "1";
      sensorT3.style.opacity = "0.4";
      sensorT4.style.opacity = "0.4";
      sensorT1.style.transition = "all 1s";
      sensorT2.style.transition = "all 1s";
      sensorT3.style.transition = "all 1s";
      sensorT4.style.transition = "all 1s";
    } else {
      sensorT1.style.marginTop = "14vh";
      sensorT2.style.marginTop = "14vh";
      sensorT3.style.marginTop = "14vh";
      sensorT4.style.marginTop = "14vh";
      sensorT1.style.opacity = "0.4";
      sensorT2.style.opacity = "0.4";
      sensorT3.style.opacity = "0.4";
      sensorT4.style.opacity = "0.4";
      sensorT1.style.transition = "all 1s";
      sensorT2.style.transition = "all 1s";
      sensorT3.style.transition = "all 1s";
      sensorT4.style.transition = "all 1s";
    }
  }, [button1, button2]);
  const HandleClick = (e) => {
    if (e.currentTarget.value === "1") {
      setButton1(true);
      setButton2(false);
    } else if (e.currentTarget.value === "2") {
      setButton1(false);
      setButton2(true);
    } else {
      setButton1(false);
      setButton2(false);
    }
  };
  const onChangeIn =(e)=>{
    e.target.style.marginTop= "7vh"
    e.target.style.opacity= "1"
  }
  const onChangeOut =(e)=>{
    e.target.style.marginTop= "14vh"
    e.target.style.opacity= "0.4"
    e.target.style.transition= "all 1s"
  }

  return (
    <div>
      <NavbarGPS
        Home={false}
        Plataforma={false}
        Equipos={true}
        transporte={false}
        Apps={false}
        Promociones={false}
      ></NavbarGPS>
      <GifGPS type="2"></GifGPS>
      <section className="equipos_section1">
        <div className="equipos_section1_bg">
          <div className="equipos_section2_column">
            <div className="equipos_section2_circleIcon">
              <img alt="wifi icon" src={circuloHome}></img>
            </div>
            <h1>EVITA EL ROBO</h1>
            <div className="main_box">
              <div className="equipos_section2_label">
                <h2>De tu combustible</h2>
              </div>
            </div>
          </div>
          <div className="equipos_section1_footer"></div>
        </div>
      </section>
      <section className="equipos_section_sensores">
        <div className="equipos_section_sensores_header">
          <div className="equipos_section_sensores_buttons">
            {button1 ? (
              <button
                value={3}
                onClick={(e) => HandleClick(e)}
                className="equipos_section_sensores_buttons_toggle"
              >
                <img alt="sensor bluetooth" src={sensorBluetoohTG}></img>
                <p>Sensor bluetooth</p>
              </button>
            ) : (
              <button value={1} onClick={(e) => HandleClick(e)}>
                <img alt="sensor bluetooth" src={sensorBluetooh}></img>
                <p>Sensor bluetooth</p>
              </button>
            )}
            {button2 ? (
              <button
                value={3}
                onClick={(e) => HandleClick(e)}
                className="equipos_section_sensores_buttons_toggle"
              >
                <img alt="sensor Cableado" src={sensorCableTG}></img>
                <p>Sensor bluetooth</p>
              </button>
            ) : (
              <button value={2} onClick={(e) => HandleClick(e)}>
                <img alt="sensor Cableado" src={sensorCable}></img>
                <p>Sensor Cableado</p>
              </button>
            )}
          </div>
          <div className="equipos_section_sensores_body">
            <div className="equipos_section_sensores_title">
              <img alt="sensores" src={VectorsensorEquipos}></img>
              <h3>Sensor de Combustible</h3>
            </div>
            <p>
              Controla el consumo de tu combustible para todos los tipos de
              vehículos comerciales y equipo especial, el combustible representa
              la mayor parte de los costos haciendo necesario su monitoreo de
              consumo real de combustible y reducir gastos.
            </p>
            <div className="equipos_section_sensores_body_buttons">
              <button>
                <img alt="información" src={masIcon}></img>INFORMACION
              </button>
              <button>
                <img alt="información" src={ytVerde}></img>REEL
              </button>
              <button>
                <img alt="información" src={coticeVerde}></img>COTICE AQUI
              </button>
            </div>
          </div>
        </div>
        <div className="equipos_section_sensores_downside">
          <img onMouseEnter={e=>onChangeIn(e)} onMouseLeave={onChangeOut} alt="sensor" id="sensor1" src={sensorEquipos4}></img>
          <div className="text_suport_equipos">BLE- 600</div>
          <img onMouseEnter={e=>onChangeIn(e)} onMouseLeave={onChangeOut} alt="sensor" id="sensor2" src={sensorEquipos1}></img>
          <div className="text_suport_equipos">BLE- 150</div>
          <img onMouseEnter={e=>onChangeIn(e)} onMouseLeave={onChangeOut} alt="sensor" id="sensor3" src={sensorEquipos3}></img>
          <div className="text_suport_equipos">TD- 600</div>
          <img onMouseEnter={e=>onChangeIn(e)} onMouseLeave={onChangeOut} alt="sensor" id="sensor4" src={sensorEquipos2}></img>
          <div className="text_suport_equipos">TD- 150</div>
        </div>
      </section>
      <section className="equipos_section2">
        <div className="equipos_section2_startbg"></div>
        <div className="equipos_section2_start">
          <div className="equipos_section2_start_column">
            <div className="equipos_section2_start_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="youtube icon " src={ytIcon}></img>VIDEO DEL EQUIPO
              </a>
              <a href=" https://wa.me/qr/HVC55BD4ZJMLH1">
                <img alt="youtube icon " src={waIcon}></img>CHATEE CON NOSOTROS
              </a>
            </div>
            <p>
              Este equipo GPS para maquinaria amarilla es una solución efectiva
              para monitorear tus maquinas en tiempo real. Con geolocalización
              precisa, alertas de posibles problemas y fácil instalación y
              manejo, mejora la gestión de tus activos y tomar decisiones
              informadas sobre su uso y mantenimiento.
            </p>
            <img alt=" logo gps control" src={gpsControlWhite}></img>
          </div>
          <h1>MAQUINARIA</h1>
        </div>
        <div className="equipos_section2_end">
          <img alt="suntech" src={Suntech}></img>
        </div>
      </section>
      <section className="equipos_section3">
        <div className="equipos_section3_start">
          <img alt="suntech" src={FMC920}></img>
        </div>
        <div className="equipos_section3_end_bg"></div>
        <div className="equipos_section3_end">
          <h1>TRANSPORTE</h1>
          <div className="equipos_section3_end_column">
            <div className="equipos_section2_start_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="youtube icon " src={ytIcon}></img>VIDEO DEL EQUIPO
              </a>
              <a href=" https://wa.me/qr/HVC55BD4ZJMLH1">
                <img alt="youtube icon " src={waIcon}></img>CHATEE CON NOSOTROS
              </a>
            </div>
            <p>
              Este equipo GPS para maquinaria amarilla es una solución efectiva
              para monitorear tus maquinas en tiempo real. Con geolocalización
              precisa, alertas de posibles problemas y fácil instalación y
              manejo, mejora la gestión de tus activos y tomar decisiones
              informadas sobre su uso y mantenimiento.
            </p>
            <img alt=" logo gps control" src={gpsControlWhite}></img>
          </div>
        </div>
      </section>
      <section className="equipos_section4">
        <div className="equipos_section2_startbg"></div>
        <div className="equipos_section2_start">
          <div className="equipos_section2_start_column">
            <div className="equipos_section2_start_buttons">
              <a href="https://www.youtube.com/channel/UCYU-Vn3lnDLePlavejpZMBg">
                <img alt="youtube icon " src={ytIcon}></img>VIDEO DEL EQUIPO
              </a>
              <a href=" https://wa.me/qr/HVC55BD4ZJMLH1">
                <img alt="youtube icon " src={waIcon}></img>CHATEE CON NOSOTROS
              </a>
            </div>
            <p>
              Este equipo GPS para maquinaria amarilla es una solución efectiva
              para monitorear tus maquinas en tiempo real. Con geolocalización
              precisa, alertas de posibles problemas y fácil instalación y
              manejo, mejora la gestión de tus activos y tomar decisiones
              informadas sobre su uso y mantenimiento.
            </p>
            <img alt=" logo gps control" src={gpsControlWhite}></img>
          </div>
          <h1>PERSONAS</h1>
        </div>
        <div className="equipos_section2_end"></div>
      </section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
