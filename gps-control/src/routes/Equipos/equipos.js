import NavbarGPS from "../../components/NavbarGPS";
import SectionEquipos from "../../components/Section_Equipos";
import ButtonCotizar from "../../components/ButtonCotizar";
import Section_monitoreo from "../../components/Section_monitoreo"
import Section2_monitoreo from "../../components/Section2_monitoreo"
import ContainerFlecha from "../../components/ContainerFlecha";
import "./equipos.css";
import circuloHome from "../../assets/circuloHome.svg";
import Suntech from "../../assets/Suntech.png";
import FMC920 from "../../assets/FMC_920.png";
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import VectorsensorEquipos from "../../assets/VectorsensorEquipos.png";
import sensorBluetooh from "../../assets/SensorBluetooh.png";
import sensorCable from "../../assets/SensorCable.png";
import sensorBluetoohTG from "../../assets/SensorBluetoohToggle.png";
import S_ejecutivo from "../../assets/Solucionesm/S_ejecutivo.png";
import triangulo from "../../assets/Solucionesm/triangulo.svg";
import Logo_red from "../../assets/Solucionesm/Logo_red.svg";
import S_combustible from "../../assets/Solucionesm/S_combustible.png";
import S_maquinaria from "../../assets/Solucionesm/S_maquinaria.png";
import S_collage from "../../assets/Solucionesm/S_collage.png";
import sensorCableTG from "../../assets/SensorCableToggle.png";
import FramePalabraCombustible from "../../assets/FramePalabraCombustible.png";
import ytVerde from "../../assets/ytVerdeBG.svg";
import fleetrunPDF from "../../assets/fleetrun.pdf";
import sensorEquipos1 from "../../assets/sensorEquiposTD1.png";
import sensorEquipos2 from "../../assets/sensorEquiposTD2.png";
import sensorEquipos3 from "../../assets/sensorEquiposTD3.png";
import sensorEquipos4 from "../../assets/sensorEquiposTD4.png";
import particles from "../../assets/particles.png";
import Iconob_mas from "../../assets/Componentes/Iconos_botones/Iconob_mas.svg";
import Iconob_youtube from "../../assets/Componentes/Iconos_botones/Iconob_youtube.svg";
import { useEffect, useRef, useState } from "react";
import ButtonsSocialMedia from "../../components/ButtonsSocialMedia/ButtonsSocialMedia";
import Flecha_arriba from "../../components/Flecha_arriba/Flecha_arriba";
import Ip_burburjas0 from "../../assets/Componentes/Iconos_pantalla/Ip_burburjas0.svg"

export default function Equipos() {

  let listData1 = [{
    "title2": "CERTIFICA TU MAQUINARIA AMARILLA",
    "subtitle2": "ESTAMOS HABILITADOS Y CERTIFICADOS COMO PROVEEDOR DE SERVICIO DE GPS POR policía nacional",
    "text2": "nuestra certificación es la que necesitas para poder obtener el RUNT de tu máquina amarilla, maquinaria pesada o de construcción.",
  },

  {
    "title2": "APRENDE TODO SOBRE EL RUNT",
    "subtitlec2": "¿QUIÉNES DEBEN INSCRIBIRSE?",
    "text2": "Todo vehículo automotor del tipo de maquinaria agrícola, industrial y de construcción autopropulsada, que esté vinculado en el país, deberá ser inscrito por parte del propietario o poseedor en el RNMA.",
  }];

  let listData2 = [{
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Estar inscrito en el Registro Único Nacional de Tránsito - RUNT como persona natural o jurídica. Cuando el trámite se realice a través de un tercero, este también deberá estar registrado",
  },

  {
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Formulario de solicitud de trámites del registro nacional de maquinaria agrícola, y de construcción autopropulsada",
  },

  {
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Declaración de importación: 1 Copia(s)",
  },

  {
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Factura de compra de la maquinaria: 1 Original(es)",
  },

  {
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Contar con un sistema de posicionamiento global (GPS) u otro dispositivo de seguridad y monitoreo electrónico, instalado de manera permanente, de conformidad con los requerimientos técnicos que para el efecto establezca la Policía Nacional, para la maquinaria clasificable en las sub partidas 8429.11.00.00, 8429.19.00.00, 8429.51.00.00, 8429.52.00.00, 8429.59.00.00, 8431.41.00.00, 8431.42.00.00 y 8905.10.00.00 del arancel de aduanas",
  },

  {
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Documento privado por medio del cual acredite la posesión de buena fe de la maquinaria: 1 Original(es)",
  },

  {
    "title3": "CUMPLIR CON LOS SIGUIENTES REQUISITOS GENERALES:",
    "text3": "Certificado de instalación del sistema de posicionamiento global (GPS) u otros dispositivo de seguridad y monitoreo electrónico: 1 Copia(s)",
  },

  ];

  const [data1, setData1] = useState(listData1[0]);
  const HandleClick1 = (e) => {
    setData1(listData1[e.target.id.slice(-1)])
    console.log(listData1[e.target.id]);
  };

  const [data2, setData2] = useState(listData2[0]);
  const HandleClick2 = (e) => {
    setData2(listData2[e.target.id.slice(-1)])
    console.log(listData2[e.target.id]);
  };

  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const sectionRef = useRef(null);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const sensorT1 = document.getElementById("sensor1");
    const sensorT2 = document.getElementById("sensor2");
    const sensorT3 = document.getElementById("sensor3");
    const sensorT4 = document.getElementById("sensor4");
    if (windowSize.current[0] > 600) {
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
    } else {
      if (button2 === true) {
        sensorT1.style.marginTop = "20vh";
        sensorT2.style.marginTop = "20vh";
        sensorT3.style.marginTop = "17vh";
        sensorT4.style.marginTop = "17vh";
        sensorT1.style.opacity = "0.4";
        sensorT2.style.opacity = "0.4";
        sensorT3.style.opacity = "1";
        sensorT4.style.opacity = "1";
        sensorT1.style.transition = "all 1s";
        sensorT2.style.transition = "all 1s";
        sensorT3.style.transition = "all 1s";
        sensorT4.style.transition = "all 1s";
      } else if (button1 === true) {
        sensorT1.style.marginTop = "17vh";
        sensorT2.style.marginTop = "17vh";
        sensorT3.style.marginTop = "20vh";
        sensorT4.style.marginTop = "20vh";
        sensorT1.style.opacity = "1";
        sensorT2.style.opacity = "1";
        sensorT3.style.opacity = "0.4";
        sensorT4.style.opacity = "0.4";
        sensorT1.style.transition = "all 1s";
        sensorT2.style.transition = "all 1s";
        sensorT3.style.transition = "all 1s";
        sensorT4.style.transition = "all 1s";
      } else {
        sensorT1.style.marginTop = "20vh";
        sensorT2.style.marginTop = "20vh";
        sensorT3.style.marginTop = "20vh";
        sensorT4.style.marginTop = "20vh";
        sensorT1.style.opacity = "0.4";
        sensorT2.style.opacity = "0.4";
        sensorT3.style.opacity = "0.4";
        sensorT4.style.opacity = "0.4";
        sensorT1.style.transition = "all 1s";
        sensorT2.style.transition = "all 1s";
        sensorT3.style.transition = "all 1s";
        sensorT4.style.transition = "all 1s";
      }
    }

  }, [button1, button2, windowSize]);
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
  const onChangeIn = (e) => {
    if (windowSize.current[0] > 600) {
      e.target.style.marginTop = "7vh";
      e.target.style.opacity = "1";
    } else {
      e.target.style.marginTop = "17vh";
      e.target.style.opacity = "1";
    }
  };
  const onChangeOut = (e) => {
    if (windowSize.current[0] > 600) {
      e.target.style.marginTop = "14vh";
      e.target.style.opacity = "0.4";
      e.target.style.transition = "all 0.5s";
    } else {
      e.target.style.marginTop = "20vh";
      e.target.style.opacity = "0.4";
      e.target.style.transition = "all 0.5s";
    }
  };

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
        <div className="div2--equipos_section1">
          <div className="container--title--div2--equipos_section1">
            <h2>CERTIFICADO</h2>
          </div>
          <div className="container--subTitle--div2--equipos_section1">
            <h2>de tu maquinaria</h2>
          </div>
          <div className="container--button--div1--equipos_section1">
            <img alt="información" src={Iconob_mas}></img>
            <p>Leer más</p>
          </div>
          <div className="contimg2">
            <img src={S_maquinaria} alt="" />
          </div>
        </div>
        <div className="div1--equipos_section1">
          <div className="container--title--div1--equipos_section1">
            <h2>EVITA EL ROBO</h2>
          </div>
          <div className="container--subTitle--div1--equipos_section1">
            <h2>de tu combustible</h2>
          </div>
          <div className="container--button--div1--equipos_section1">
            <img alt="información" src={Iconob_mas}></img>
            <p>Leer más</p>
          </div>
          <div className="contimg">
            <img src={S_combustible} alt="" />
          </div>
        </div>
        {/* <div className="equipos_section1_bg">
          <div className="equipos_section2_column">
            <div className="equipos_section2_circleIcon">
              <img alt="wifi icon" src={circuloHome}></img>
            </div>
            <h1>EVITA EL ROBO</h1>
            <div className="main_box">
              <div className="equipos_section2_label">
                <img alt="icon" className="iconCombustible" src={FramePalabraCombustible}></img>
                <h2>De tu combustible</h2>
              </div>
            </div>
          </div>
        </div> */}

      </section>
      {/**************************************************************/}
      <section className="sectionNew1">
        <div className="fondo">
          <img className="img--fondo" src={S_maquinaria} alt="" />
        </div>
        <div className="fn">
          <Section_monitoreo data1={data1}></Section_monitoreo>
          <div className="monitoreo_buttons">
            <div>
              <input type="radio" name="op1" onClick={(e) => HandleClick1(e)} id="radio0" />
              <label htmlFor="radio0"></label>
            </div>
            {/*
          <div className="apps_button_check">
            <div className="dot"></div>
          </div>
           */}
            <div>
              <input type="radio" name="op1" onClick={(e) => HandleClick1(e)} id="radio1" />
              <label htmlFor="radio1"></label>
            </div>
          </div>
        </div>
        <div className="container-flechas">

        </div>
      </section>
      {/**************************************************************/}

      {/**************************************************************/}
      <section className="new--section2">
        <div className="container--left">
          <div className="collage">
            <img src={S_collage} alt="" />
          </div>
          <div className="text">
            <p>Nota: si presenta dudas respecto al proceso puede comunicarse al Centro de ayuda y servicios: Línea a nivel nacional 018000930060 o línea en Bogotá (1) 4232221.

              <p>Tipo de actor: Ciudadano</p>
            </p>
          </div>
          <div className="container-flechas">
            <ContainerFlecha></ContainerFlecha>
          </div>
        </div>
        <div className="container--right">
          <div className="content--container--right">
            <h2>¿CÓMO REGISTRO MI MAQUINARIA ANTE EL RUNT?</h2>
            <p>El ciudadano que va a registrar maquinaria agrícola ante el RUNT debe realizar el siguiente procedimiento</p>
            {/* <hr className="hrg" /> */}<p className="capitalize">Se debe habilitar como importador ocasional o frecuente realizando la consulta mediante el correo soporteimportadores@runt.com.co a través del cual se le indicarán los pasos a seguir.</p>
            <p className="capitalize">Después de encontrarse habilitado se debe dirigir al Organismo de Tránsito para la incorporación de la información de la Maquinaria dependiendo si la figura es ocasional o frecuente.</p>
            <p className="capitalize1">Luego, solicitar el trámite de matrícula inicial ante el Organismo de Tránsito.</p>
          </div>
        </div>
      </section>
      {/**************************************************************/}

      <section className="section--requisitos">
        <div className="div1--section--requisitos">
          <img className="img--ejecutivo" src={S_ejecutivo} alt="" />
          <div className="container--text--div1__sectionRequisitos">
            <p>Estamos habilitados y certificados como proveedor de servicio GPS  por la Policía Nacional</p>
            <div className="mixB"></div>
          </div>
          <div className="tri">
            <img className="triangulo" src={triangulo} alt="" />
          </div>
          <div className="container--logoRed">
            <img src={Logo_red} alt="" />
          </div>
        </div>
        <div className="div2--section--requisitos">
          <div className="container--title--div2__sectionRequisitos">
            <h2>REQUISITOS DEL TRÁMITE</h2>
          </div>
          <div className="container--text--div2__sectionRequisitos">
            <p>Registro inicial de la maquinaria agrícola, industrial y de construcción autopropulsada,
              fabricada, importada o ensamblada en el país, ante un organismo de tránsito, en donde se
              consignan las características tanto internas como externas del equipo, así como los datos e
              identificación del propietario.</p>

            <p><span>Pasos para realizar este trámite:</span> Antes de dirigirse a un punto de atención VUS, por favor
              lea las siguientes instrucciones y recomendaciones que deberá tener en cuenta para que pueda
              realizar su trámite de manera personal, sin contratiempos y obteniendo el resultado esperado a su
              solicitud. No recurra a intermediarios.</p>
          </div>

          <div className="container--cajaWhite--div2__sectionRequisitos">
            <Section2_monitoreo data2={data2}></Section2_monitoreo>
            <div className="monitoreo_buttons">
              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn0" />
                <label htmlFor="btn0"></label>
              </div>

              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn1" />
                <label htmlFor="btn1"></label>
              </div>

              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn2" />
                <label htmlFor="btn2"></label>
              </div>

              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn3" />
                <label htmlFor="btn3"></label>
              </div>

              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn4" />
                <label htmlFor="btn4"></label>
              </div>

              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn5" />
                <label htmlFor="btn5"></label>
              </div>

              <div>
                <input type="radio" name="op1" onClick={(e) => HandleClick2(e)} id="btn6" />
                <label htmlFor="btn6"></label>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**************************************************************/}

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
                <p className="textContainerEquipos">Sensor bluetooth</p>
              </button>
            ) : (
              <button value={1} onClick={(e) => HandleClick(e)}>
                <img alt="sensor bluetooth" src={sensorBluetooh}></img>
                <p className="textContainerEquipos">Sensor bluetooth</p>
              </button>
            )}
            {button2 ? (
              <button
                value={3}
                onClick={(e) => HandleClick(e)}
                className="equipos_section_sensores_buttons_toggle"
              >
                <img alt="sensor Cableado" src={sensorCableTG}></img>
                <p className="textContainerEquipos">Sensor bluetooth</p>
              </button>
            ) : (
              <button value={2} onClick={(e) => HandleClick(e)}>
                <img alt="sensor Cableado" src={sensorCable}></img>
                <p className="textContainerEquipos">Sensor Cableado</p>
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
              <a
                href={fleetrunPDF}
                download="fleetrun documentation"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img alt="información" src={Iconob_mas}></img>
                  <p className="textContainerBlue">INFORMACION</p>
                </button>
              </a>
              <button>
                <img alt="información" src={Iconob_youtube}></img>
                <p className="textContainerBlue">REEL</p>
              </button>
              <ButtonCotizar elementRef={sectionRef}></ButtonCotizar>
            </div>
          </div>
        </div>
        <div className="equipos_section_sensores_downside">
          <img
            onMouseEnter={(e) => onChangeIn(e)}
            onMouseLeave={onChangeOut}
            alt="sensor"
            id="sensor1"
            src={sensorEquipos4}
          ></img>
          <div className="text_suport_equipos">BLE- 600</div>
          <img
            onMouseEnter={(e) => onChangeIn(e)}
            onMouseLeave={onChangeOut}
            alt="sensor"
            id="sensor2"
            src={sensorEquipos1}
          ></img>
          <div className="text_suport_equipos">BLE- 150</div>
          <img
            onMouseEnter={(e) => onChangeIn(e)}
            onMouseLeave={onChangeOut}
            alt="sensor"
            id="sensor3"
            src={sensorEquipos3}
          ></img>
          <div className="text_suport_equipos">TD- 600</div>
          <img
            onMouseEnter={(e) => onChangeIn(e)}
            onMouseLeave={onChangeOut}
            alt="sensor"
            id="sensor4"
            src={sensorEquipos2}
          ></img>
          <div className="text_suport_equipos">TD- 150</div>
        </div>
      </section>
      <section className="equipos_section2">
        <div className="equipos_section2_startbg"></div>
        <div className="equipos_section2_start">
          <div className="equipos_section2_start_column">
            <ButtonsSocialMedia></ButtonsSocialMedia>
            <p>
              Este equipo GPS para maquinaria amarilla es una solución efectiva
              para monitorear tus maquinas en tiempo real. Con geolocalización
              precisa, alertas de posibles problemas y fácil instalación y
              manejo, mejora la gestión de tus activos y tomar decisiones
              informadas sobre su uso y mantenimiento.
            </p>
          </div>
          <h1>MAQUINARIA</h1>
        </div>
        <div className="container_Section3">
          <div className="equipos_section3_start">
            <img className="imgSuntech" alt="suntech" src={Suntech}></img>
          </div>
        </div>
      </section>
      <section className="equipos_section3">
        <div className="container_Section3">
          <div className="equipos_section3_start">
            <img className="imgFmc920" alt="suntech" src={FMC920}></img>
          </div>
        </div>
        <div className="equipos_section3_end_bg"></div>
        <div className="equipos_section3_end">
          <h1>TRANSPORTE</h1>
          <div className="equipos_section3_end_column">
            <ButtonsSocialMedia></ButtonsSocialMedia>
            <p>
              El modelo FMC920 es recomendado para transporte especial es eficiente en su monitoreo
              y reporte a plataforma, mejorando la calidad y seguridad de tus servicios. Con geolocalización
              precisa, alertas en tiempo real y fácil instalación, recibiendo datos de tus vehículos en todo momento
              y garantizar una experiencia de viaje positiva y eficaz para tus pasajeros.
            </p>
          </div>
        </div>
      </section>
      <section className="equipos_section4">
        <div className="equipos_section2_startbg"></div>
        <div className="equipos_section2_start">
          <div className="equipos_section2_start_column">
            <ButtonsSocialMedia></ButtonsSocialMedia>
            <p>
              OPTIMICE TIEMPOS DE OPERACIÓN DE SU TALENTO EN CALLE
              Su personal siempre estará en constante conexión. Optimice tiempos, diseñe rutas,
              organice pedidos y despachos; manteniendo así siempre el control sobre las labores
              fuera de oficina.
            </p>
          </div>
          <h1>PERSONAS</h1>
        </div>
        <div className="container_elemnts1">
          <img alt="particles" className="img_Particles" src={particles}></img>
          <div className="equipos_section3_start"></div>
        </div>
      </section>
      <section ref={sectionRef}></section>
      <Leads></Leads>
      <Footer></Footer>
    </div>
  );
}
