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
import VectorsensorEquipos from "../../assets/VectorsensorEquipos.svg";

export default function equipos() {
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
            <div className="equipos_section1_sensor">
              <img alt="sensor de combustible" src={VectorsensorEquipos}></img>
              <div className="equipos_section1_sensor_text">
                Sensor de combustible
              </div>
            </div>
            <div className="main_box_pedestales_sensor">
              <div className="pedestales_sensor"></div>
            </div>
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
