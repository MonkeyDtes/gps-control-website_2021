import NavbarGPS from "../../components/NavbarGPS/index";
import iconsVertical from "../../assets/iconsVertical.svg"
import wifiIcon from "../../assets/wifiIcon.svg"
import cotizacion from "../../assets/cotizacion.svg"
import pantallasHome from "../../assets/pantallasHome.png"
import combustible from "../../assets/Combustible.png"
import circuloHome from "../../assets/circuloHome.svg"
import vigilanciaHome from "../../assets/vigilanciaHome.png"
import homeBG from "../../assets/homeBG.jpg"
import camHome from "../../assets/camHome.png"
import bgPortadaHome from "../../assets/bgPortadaHome.mp4"
import GifGPS from "../../components/gifGPS/index"
import "./home.css"
import SwiperAppsHome from "../../components/SwiperAppsHome/index";
import playGreen from "../../assets/playGreen.svg"
import Leads from "../../components/Leads";
import Footer from "../../components/Footer/index";
import { useRef } from "react";
export default function Home(){
    
    const sectionRef = useRef(null);
    return(
        <div>
            <NavbarGPS Home={true} Plataforma={false} Equipos={false} transporte={false} Apps={false} Promociones={false}></NavbarGPS>
            <GifGPS type="2"></GifGPS>
            <section className="home_section1">
                <video autoPlay loop muted>
                    <source src={bgPortadaHome} type="video/mp4" />
                </video>
                <div className="home_section1_start">
                    <h1>Control is better</h1>
                    <h2>BEYOND CONTROL</h2>
                    <div className="home_section1_icons">
                        <img alt="Grupo iconos" src={iconsVertical}></img>
                    </div>
                </div>
                <div className="home_section1_end">
                    <img alt="camiones home" src={homeBG}></img>
                    <p> Creamos soluciones tecnológicas, en un ecosistema integrado por un software robusto de tracking y monitoreo en tiempo real, todo en una sola plataforma.</p>
                </div>
                <div className="home_section1_column"></div>
                
            </section>
            <section className="home_section2">
                <div className="home_column_red"></div>
                <div className="home_section2_column">
                    <div className="home_section2_wifiIcon"><img alt="wifi icon" src={wifiIcon}></img></div>
                    <h1>LA HERRAMIENTA</h1>
                    <div className="main_box">
                        <div className="home_section2_label"><h2>más completa</h2></div>
                    </div>
                    <h3>PLATAFORMA para controlar  :</h3>
                    <div className="home_section2_group">
                        <div className="home_section2_body">
                            <div>
                                Flota
                            </div>
                            <div>
                                Conductores
                            </div>
                        </div>
                        <div className="home_section2_body">
                            <div>
                                Pasajeros
                            </div>
                            <div>
                                Carga
                            </div>
                        </div>
                        <div className="home_section2_body">
                            <div>
                                Obtener estadísticas e informes
                            </div>                            
                        </div>
                        <button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}><img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ</button>
                    </div>                   
                </div>
                <div className="home_section2_pantallas"><img alt="pantallas" src={pantallasHome}></img></div>

            </section>
            <section className="home_section2">
                <div className="home_column_red"></div>
                <div className="home_section2_column">
                    <div className="home_section2_wifiIcon"><img alt="wifi icon" src={circuloHome}></img></div>
                    <h1>EVITA EL ROBO</h1>
                    <div className="main_box">
                        <div className="home_section2_label"><h2>De tu combustible</h2></div>
                    </div>
                    <h3>PLATAFORMA para controlar  :</h3>
                    <div className="home_section2_group">
                        <div className="home_section2_body">
                            <div>
                                Sensor Cableado
                            </div>
                        </div>
                        <div className="home_section2_body">
                            <div>
                                Sensor Bluetooth
                            </div>
                        </div>
                        <button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}><img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ</button>
                    </div>                   
                </div>
                <div className="home_section2_combusible"><img alt="pantallas" src={combustible}></img></div>

            </section>
            <section className="home_section2">
                <div className="home_column_red"></div>
                <div className="home_section2_column">
                    <div className="home_section2_wifiIcon"><img alt="wifi icon" src={wifiIcon}></img></div>
                    <h1>VIDEO VIGILANCIA</h1>
                    <div className="main_box">
                        <div className="home_section2_label"><h2>Vehicular</h2></div>
                    </div>
                    
                    <div className="home_section2_group">
                        <div className="home_section2_body">
                            <div>
                                Evitar accidentes
                            </div>
                            
                        </div>
                        <div className="home_section2_body">
                            <div>
                                Registrar lo que ocurre al interior del móvil en tiempo real
                            </div>
                           
                        </div>
                        <div className="home_section2_body">
                            <div>
                                Controlar el comportamiento de los conductores
                            </div>                            
                        </div>
                        <button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}><img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ</button>
                    </div>                   
                </div>
                <div className="home_section2_carretera"><img alt="pantallas" src={vigilanciaHome}></img></div>
                <div className="home_section2_camara"><img alt="pantallas" src={camHome}></img></div>

            </section>
            <section section className="home_section3">
                <div className="home_section3_header">
                    <img alt="play verde" src={playGreen}></img>
                    <h2>Aplicaciones</h2>
                </div>
                <SwiperAppsHome></SwiperAppsHome>
                
                <div className="home_column_red_end"></div>
            </section>
            <section ref={sectionRef}></section>
            <Leads></Leads>
            <Footer></Footer>

        </div>
    )
}