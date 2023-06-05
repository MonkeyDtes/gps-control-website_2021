import NavbarGPS from "../../components/NavbarGPS/index";
import iconsVertical from "../../assets/iconsVertical.svg";
import wifiIcon from "../../assets/wifiIcon.svg";
import cotizacion from "../../assets/cotizacion.svg";
import pantallasHome from "../../assets/pantallasHome.png";
import combustible from "../../assets/Combustible.png";
import circuloHome from "../../assets/circuloHome.svg";
import vigilanciaHome from "../../assets/vigilanciaHome.png";
import homeDownButton from "../../assets/homeDownButton.svg";
import homeBG from "../../assets/homeBG.jpg";
import camHome from "../../assets/camHome.png";
import bgPortadaHome from "../../assets/bgPortadaHome.mp4";
import iconoApps1 from "../../assets/iconoApps1.svg";
import iconoApps2 from "../../assets/iconoApps2.svg";
import iconoApps3 from "../../assets/iconoApps3.svg";
import iconoApps4 from "../../assets/iconoApps4.svg";
import iconoApps5 from "../../assets/iconoApps5.svg";
import iconoApps6 from "../../assets/iconoApps6.svg";
import GifGPS from "../../components/gifGPS/index";
import "./home.css";
import playGreen from "../../assets/playGreen.svg";
import Leads from "../../components/Leads";
import Footer from "../../components/Footer/index";
import { useRef, useState } from "react";
import { history } from "../../components/History";
import SwiperHome from "../../components/SwiperHome/index";

export default function Home({ onChangeState }) {
  const [modal, setModal] = useState(false);
  const ModalClick = () => {
    setModal(!modal);
  };
  const HandleClick = (e) => {
    if (e.currentTarget.value === "1") {
      onChangeState([true, false, false, false, false, false, 0]);
    } else if (e.currentTarget.value === "2") {
      onChangeState([false, true, false, false, false, false, 1]);
    } else if (e.currentTarget.value === "3") {
      onChangeState([false, false, true, false, false, false, 2]);
    } else if (e.currentTarget.value === "4") {
      onChangeState([false, false, false, true, false, false, 4]);
    } else if (e.currentTarget.value === "5") {
      onChangeState([false, false, false, false, true, false, 5]);
    } else if (e.currentTarget.value === "6") {
      onChangeState([false, false, false, false, false, true, 6]);
    }
    goToTop();
    history.push("/apps");
  };
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const sectionRef = useRef(null);
  return (
    <div>
      <NavbarGPS
        Home={true}
        Plataforma={false}
        Equipos={false}
        transporte={false}
        Apps={false}
        Promociones={false}
      ></NavbarGPS>
      <GifGPS type="2"></GifGPS>
      <section className="home_section1">
        <video playsInline autoPlay loop muted>
          <source src={bgPortadaHome} type="video/mp4" />
        </video>
        <div className="home_section1_header">
          <div className="home_section1_start">
            <div className="home_section1_start_label">
              <h1>Control is better</h1>
            </div>
            <h2>BEYOND CONTROL</h2>
          </div>
          <div className="home_section1_header_end">
            <div>sensores remotos</div>
            <div>gestión de flotas</div>
            <div>monitoreo gps</div>
          </div>
        </div>
        <div className="home_section1_end">
          <div className="home_section1_icons">
            <img alt="Grupo iconos" src={iconsVertical}></img>
          </div>
          <div className="home_section1_end_body">
            <img alt="camiones home" src={homeBG}></img>
            <div>
              <p>
                {" "}
                Creamos soluciones tecnológicas, en un ecosistema integrado por
                un software robusto de tracking y monitoreo en tiempo real, todo
                en una sola plataforma.
              </p>
            </div>
          </div>
        </div>
        <div className="home_section1_column">
          <img alt="home Down" src={homeDownButton}></img>
        </div>
      </section>
      {modal ?<> <div onClick={ModalClick} className="modal_home"></div> <SwiperHome></SwiperHome></> : <></>}
      <section className="home_section2">
        <div className="home_column_red"></div>
        <div className="home_section2_column">
          <div className="home_section2_wifiIcon">
            <img alt="wifi icon" src={wifiIcon}></img>
          </div>
          <h1>LA HERRAMIENTA</h1>
          <div className="main_box">
            <div className="home_section2_label">
              <h2>más completa</h2>
            </div>
          </div>
          <h3>PLATAFORMA para controlar :</h3>
          <div className="home_section2_group">
            <div className="home_section2_body">
              <div  onClick={ModalClick}>Flota</div>
              <div>Conductores</div>
            </div>
            <div className="home_section2_body">
              <div>Pasajeros</div>
              <div>Carga</div>
            </div>
            <div className="home_section2_body">
              <div>Obtener estadísticas e informes</div>
            </div>
            <button
              onClick={() =>
                sectionRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ
            </button>
          </div>
        </div>
        <div className="home_section2_pantallas">
          <img alt="pantallas" src={pantallasHome}></img>
        </div>
      </section>
      <section className="home_section2">
        <div className="home_column_red"></div>
        <div className="home_section3_column">
          <div className="home_section3_circle">
            <img alt="wifi icon" src={circuloHome}></img>
          </div>
          <h1>EVITA EL ROBO</h1>
          <div className="main_box">
            <div className="home_section2_label">
              <h2>De tu combustible</h2>
            </div>
          </div>
          <h3>PLATAFORMA para controlar :</h3>
          <div className="home_section3_group">
            <div className="home_section2_body">
              <div>
                El éxito del negocio de cualquier empresa con su flota depende
                en gran medida de la eficacia con que se organice en ella el
                control y la contabilidad del combustible.
              </div>
            </div>
            <button
              onClick={() =>
                sectionRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ
            </button>
          </div>
        </div>
        <div className="home_section2_combusible">
          <img alt="pantallas" src={combustible}></img>
        </div>
      </section>
      <section className="home_section2">
        <div className="home_column_red"></div>
        <div className="home_section4_column">
          <div className="home_section2_wifiIcon">
            <img alt="wifi icon" src={wifiIcon}></img>
          </div>
          <h1>VIDEO VIGILANCIA</h1>
          <div className="main_box">
            <div className="home_section2_label">
              <h2>Vehicular</h2>
            </div>
          </div>
          <div className="home_section4_group">
            <div className="home_section2_body">
              <div>Evitar accidentes</div>
            </div>
            <div className="home_section2_body">
              <div>
                Registrar lo que ocurre al interior del móvil en tiempo real
              </div>
            </div>
            <div className="home_section2_body">
              <div>Controlar el comportamiento de los conductores</div>
            </div>
            <button
              onClick={() =>
                sectionRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ
            </button>
          </div>
        </div>
        <div className="home_section2_carretera">
          <img alt="pantallas" src={vigilanciaHome}></img>
        </div>
        <div className="home_section2_camara">
          <img alt="pantallas" src={camHome}></img>
        </div>
      </section>
      <section className="home_section3">
        <div className="home_section3_header">
          <img alt="play verde" src={playGreen}></img>
          <h2>Aplicaciones</h2>
        </div>
        <div className="home_section3_buttons_up">
          <button value={"1"} onClick={(e) => HandleClick(e)}>
            <img alt="apps" src={iconoApps3}></img>
          </button>
          <button value={"2"} onClick={(e) => HandleClick(e)}>
            <img alt="apps" src={iconoApps2}></img>
          </button>
          <button value={3} onClick={(e) => HandleClick(e)}>
            <img alt="apps" src={iconoApps4}></img>
          </button>
        </div>
        <div className="home_section3_buttons_up">
          <button value={4} onClick={(e) => HandleClick(e)}>
            <img alt="apps" src={iconoApps5}></img>
          </button>
          <button value={5} onClick={(e) => HandleClick(e)}>
            <img alt="apps" src={iconoApps6}></img>
          </button>
          <button value={6} onClick={(e) => HandleClick(e)}>
            <img alt="apps" src={iconoApps1}></img>
          </button>
        </div>
        <div className="home_column_red_end"></div>
        <div className="home_corner_red"></div>
      </section>
      <section ref={sectionRef}></section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
