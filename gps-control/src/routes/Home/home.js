import NavbarGPS from "../../components/NavbarGPS/index";
import Ip_burburjas1 from "../../assets/Componentes/Iconos_pantalla/Ip_burburjas1.svg"
import ButtonCotizar from "../../components/ButtonCotizar";
import wifiIcon from "../../assets/wifiIcon.svg";
import pantallasHome from "../../assets/pantallasHome.png";
import combustible from "../../assets/Combustible.png";
import circuloHome from "../../assets/circuloHome.svg";
import vigilanciaHome from "../../assets/vigilanciaHome.png";
import homeDownButton from "../../assets/homeDownButton.svg";
import camHome from "../../assets/camHome.png";
import bgPortadaHome from "../../assets/Home/Bg_portada_1.mp4";
import iconoApps1 from "../../assets/iconoApps1.svg";
import iconoApps2 from "../../assets/iconoApps2.svg";
import iconoApps3 from "../../assets/iconoApps3.svg";
import iconoApps4 from "../../assets/iconoApps4.svg";
import iconoApps5 from "../../assets/iconoApps5.svg";
import iconoApps6 from "../../assets/iconoApps6.svg";
import VectorPalabra from "../../assets/VectorPalabra.png";
import Frame4 from "../../assets/Frame4.png";
import VectorNube from "../../assets/VectorNube.png";
import VectorNube2 from "../../assets/VectorNube2.svg";
import Line41 from "../../assets/Line41.png";
import GifGPS from "../../components/gifGPS/index";
import "./home.css";
import Leads from "../../components/Leads";
import Footer from "../../components/Footer/index";
import { useEffect, useRef, useState } from "react";
import { history } from "../../components/History";
import SwiperHome from "../../components/SwiperHome/index";
import SwiperHomeSecond from "../../components/SwiperHomeSecond/index";
import P_bgcomposicion from "../../assets/Home/P_bgcomposicion.png"
import P_caminones from "../../assets/Home/P_caminones.png"
import P_beyond from "../../assets/Home/P_beyond.png"
import P_control from "../../assets/Home/P_control.png"
import Ip_flechas1 from "../../assets/Componentes/Iconos_pantalla/Ip_flechas1.svg"
import P_trama from "../../assets/Home/P_trama.png"
import ButtonHomeAplicaciones from "../../components/ButtonHomeAplicaciones";
import Flecha_arriba from "../../components/Flecha_arriba/Flecha_arriba";

export default function Home({ onChangeState }) {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [inicialSlide, setInicialSlide] = useState(0);
  const ModalClick = (e) => {
    setModal(!modal);
    setInicialSlide(e.currentTarget.value);
    const body = document.getElementsByTagName("body");
    if (modal === false) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
  };
  const ModalClick2 = (e) => {
    setModal2(!modal2);
    setInicialSlide(e.currentTarget.value);
    const body = document.getElementsByTagName("body");
    if (modal2 === false) {
      body[0].style.overflow = "hidden";
    } else {
      body[0].style.overflow = "auto";
    }
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
  useEffect(() => {
    setInicialSlide(inicialSlide);
  }, [inicialSlide]);

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
      <section className="container--portada___home">

        <div className="video">
          <video playsInline autoPlay loop muted>
            <source src={bgPortadaHome} type="video/mp4" />
          </video>
        </div>
        <div className="subContainer1--portada___home">
          <div className="contentSubContainer1--portada___home">
            <img className="img--mapa__portadaHome" src={P_bgcomposicion}></img>
          </div>
        </div>
        {/*************************************/}
        <div className="subContainer2--portada___home">

          <div className="title">
            <img className="img--text__portadaHome" src={P_beyond} alt="" />
          </div>
          <div className="container--imgCamiones__portadaHome">
            <img className="img--camiones__portadaHome" src={P_caminones}></img>
          </div>
          <div className="containerText--h2__portadaHome">
            <img className="img--pControl__portadaHome" src={P_control} alt="" />
          </div>
          <div className="container--items__portadaHome">
            <hr /><p>sensores remotos</p>
            <hr /><p>gestión de flotas</p>
            <hr /><p>monitoreo gps</p>
          </div>
          <div className="container--text__portadaHome">
            <p><span>Creamos soluciones tecnológicas</span> en un ecosistema integrado por un software robusto
              de tracking y monitoreo en tiempo real, <span>todo en una sola plataforma.</span></p>
          </div>
        </div>
        <div className="container-f">
          {/***********************************************************************************/}
          <img alt="home Down" className="img-flecha" src={Ip_flechas1}></img>
          <img alt="home Down" className="img--container-f" src={Ip_burburjas1}></img>
        </div>
      </section>
      {modal ? (
        <>
          {" "}
          <div onClick={ModalClick} className="modal_home"></div>{" "}
          <div className="modal_home_fade">
            <SwiperHome incialSlide={inicialSlide}></SwiperHome>
          </div>
        </>
      ) : (
        <></>
      )}
      <section className="home_section2">
        <div className="home_column_red">
          <Flecha_arriba></Flecha_arriba>
          <img alt="home Down" src={homeDownButton}></img>
        </div>
        <div className="home_section2_column">
          <div className="home_section2_wifiIcon">
            <img alt="wifi icon" src={wifiIcon}></img>
          </div>
          <h1 className="text--herramienta__home">LA HERRAMIENTA</h1>
          <div className="main_box">
            <div className="home_section2_label">
              <h2>más completa</h2>
            </div>
          </div>
          <img alt="home Down" className="iconHerramienta" src={VectorPalabra}></img>
          <h3>PLATAFORMA para controlar :</h3>
          <div className="home_section2_group">
            <div className="home_section2_body">
              <button value={0} onClick={(e) => ModalClick(e)}>
                Flota
              </button>
              <button value={1} onClick={(e) => ModalClick(e)}>
                Conductores
              </button>
            </div>
            <div className="home_section2_body">
              <button value={2} onClick={(e) => ModalClick(e)}>
                Pasajeros
              </button>
              <button value={3} onClick={(e) => ModalClick(e)}>
                Carga
              </button>
            </div>
            <div className="home_section2_body">
              <button value={4} onClick={(e) => ModalClick(e)}>
                Obtener estadísticas e informes
              </button>
            </div>
            <ButtonCotizar elementRef={sectionRef}></ButtonCotizar>
          </div>
        </div>
        <div className="home_section2_pantallas">
          <img alt="pantallas" src={pantallasHome}></img>
        </div>
      </section>
      <section className="home_section2">
        <div className="home_column_red">
          <Flecha_arriba></Flecha_arriba>
          <img alt="home Down" src={homeDownButton}></img>
        </div>
        <div className="home_section3_column">
          <div className="home_section3_circle">
            <img alt="wifi icon" src={circuloHome}></img>
          </div>
          <h1 className="text--herramienta__home">EVITA EL ROBO</h1>
          <div className="main_box">
            <div className="home_section2_label">
              <h2><img className="img--icon" alt="wifi icon" src={circuloHome}></img>de tu combustible</h2>
            </div>
          </div>
          <h3>PLATAFORMA para controlar :</h3>
          <div className="home_section3_group">
            <div className="home_section2_body">
              <button>
                El éxito del negocio de cualquier empresa con su flota depende
                en gran medida de la eficacia con que se organice en ella el
                control y la contabilidad del combustible.
              </button>
            </div>
            <ButtonCotizar elementRef={sectionRef}></ButtonCotizar>
          </div>
        </div>
        <div className="home_section2_combusible">
          <img alt="pantallas" src={combustible}></img>
        </div>
      </section>
      <section className="home_section2">
        {modal2 ? (
          <>
            <div onClick={ModalClick2} className="modal_home"></div>{" "}
            <div className="modal_home_fade">
              <SwiperHomeSecond incialSlide={inicialSlide}></SwiperHomeSecond>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="home_column_red">
          <Flecha_arriba></Flecha_arriba>
          <img alt="home Down" src={homeDownButton}></img>
        </div>
        <div className="home_section4_column">
          <div className="home_section2_wifiIcon">
          </div>
          <h1 className="text--herramienta__home">VIDEO VIGILANCIA</h1>
          <div className="main_box">
            <div className="home_section2_label">
              <h2><img alt="nube icon" className="iconNube1" src={VectorNube}></img>Vehicular</h2>
            </div>
          </div>
          <img alt="nube icon" className="iconNube" src={VectorNube2}></img>
          <div className="home_section4_group">
            <div className="home_section2_body">
              <button value={0} onClick={(e) => ModalClick2(e)}>
                Evitar accidentes
              </button>
            </div>
            <div className="home_section2_body">
              <button value={1} onClick={(e) => ModalClick2(e)}>
                Registrar lo que ocurre al interior del móvil en tiempo real
              </button>
            </div>
            <div className="home_section2_body">
              <button value={2} onClick={(e) => ModalClick2(e)}>
                Controlar el comportamiento de los conductores
              </button>
            </div>
            <ButtonCotizar elementRef={sectionRef}></ButtonCotizar>
          </div>
        </div>
        <div className="home_section2_carretera">
          <img alt="pantallas" src={vigilanciaHome}></img>
        </div>
        <div className="home_section2_camara">
          <img alt="pantallas" src={camHome}></img>
        </div>
      </section>
      {/**************************************************************/}
      <section className="home_section3">
        <div className="container--left__homeSection3">
          <div className="home_column_red_end">
            <img alt="home Down" src={homeDownButton}></img>
          </div>
          <div className="container--imgGato__home">
            <img className="imgGato--home" src={Frame4} alt="" />
          </div>
        </div>
        <div className="container--right__homeSection3">
          <div className="container--imgParticle__home">
            <img className="img--Particle__home" src={P_trama} alt="" />
          </div>
          <div className="container--aplicaciones__home">
            <h2>Aplicaciones</h2>
          </div>
          <div className="home_section3_buttons">
            <div className="home_section3_buttons_up">
              <ButtonHomeAplicaciones text="FLEETRUM" image={iconoApps3} />
              <ButtonHomeAplicaciones text="LOGISTICS" image={iconoApps2} />
              <ButtonHomeAplicaciones text="HECTERRA" image={iconoApps4} />
            </div>
            <div className="home_section3_buttons_up">
              <ButtonHomeAplicaciones text="ECODRIVING" image={iconoApps5} />
              <ButtonHomeAplicaciones text="CHATERRBOX" image={iconoApps6} />
              <ButtonHomeAplicaciones text="WIATAG" image={iconoApps1} />
            </div>
            {/* <div className="home_section3_buttons_up">
              <button value={1} onClick={(e) => HandleClick(e)}>
                <img alt="apps" src={iconoApps3}></img>
              </button>
              <button value={2} onClick={(e) => HandleClick(e)}>
                <img alt="apps" src={iconoApps2}></img>
              </button>
              <button value={3} onClick={(e) => HandleClick(e)}>
                <img alt="apps" src={iconoApps4}></img>
              </button>
            </div> */}
            {/* <div className="home_section3_buttons_up">
              <button value={4} onClick={(e) => HandleClick(e)}>
                <img alt="apps" src={iconoApps5}></img>
              </button>
              <button value={5} onClick={(e) => HandleClick(e)}>
                <img alt="apps" src={iconoApps6}></img>
              </button>
              <button value={6} onClick={(e) => HandleClick(e)}>
                <img alt="apps" src={iconoApps1}></img>
              </button>
            </div> */}
          </div>
          <div className="main_box--home">
            <div className="container--textSeguimiento__home">
              <img alt="line icon" className="" src={Line41}></img>
              <div class="slider">
                <ul>
                  <li>
                    <h2>SEGUIMIENTO Y REGISTRO VEHICULAR</h2>
                  </li>
                  <li>
                    <h2>MONITOREO REPORTE Y VERIFICACIÓN</h2>
                  </li>
                  <li>
                    <h2>SEGUIMIENTO SATELITAL VEHICULAR</h2>
                  </li>
                  <li>
                    <h2>MONITOREO GPS VEHICULAR</h2>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className="home_corner_red">
          <img src={Frame4} alt="" />
        </div>
        <div className="home_section3_header">
          <img alt="play verde" src={playGreen}></img>
          <h2>Aplicaciones</h2>
        </div>
        <div className="home_section3_buttons">
          <div className="home_section3_buttons_up">
            <button value={1} onClick={(e) => HandleClick(e)}>
              <img alt="apps" src={iconoApps3}></img>
            </button>
            <button value={2} onClick={(e) => HandleClick(e)}>
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
        </div>
        <div className="main_box">
          <div className="home_section2_label2">
            <img alt="line icon" className="iconline41" src={Line41}></img>
            <h2>SEGUIMIENTO Y REGISTRO VEHICULAR</h2>
          </div>
        </div>
        <div className="home_column_red_end">
          <img alt="home Down" src={homeDownButton}></img>
        </div>
      */}
      </section>
      {/************************************************************************/}
      <section ref={sectionRef}></section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
