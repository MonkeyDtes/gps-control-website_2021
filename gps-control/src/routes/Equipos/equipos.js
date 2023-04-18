import NavbarGPS from "../../components/NavbarGPS";
import "./equipos.css"
import circuloHome from "../../assets/circuloHome.svg"
import waIcon from "../../assets/waWhite.svg"
import ytIcon from "../../assets/ytWhite.svg"
import Suntech from "../../assets/Suntech.svg"
import gpsControlWhite from "../../assets/gpsControlWhite.svg"
import FMC920 from "../../assets/FMC_920.svg"

export default function equipos(){
    return(
        <div>
            <NavbarGPS Home={false} Plataforma={false} Equipos={true } transporte={false} Apps={false} Promociones={false}></NavbarGPS>
            <section className="equipos_section1">
                <div className="equipos_section2_column">
                    <div className="equipos_section2_circleIcon"><img alt="wifi icon" src={circuloHome}></img></div>
                    <h1>EVITA EL ROBO</h1>
                    <div className="main_box">
                        <div className="equipos_section2_label"><h2>De tu combustible</h2></div>
                    </div>           
                </div>
                <div className="equipos_section1_footer"></div>

            </section>
            <section className="equipos_section2">
                <div className="equipos_section2_start">
                    <div className="equipos_section2_start_column">
                        <div className="equipos_section2_start_buttons">
                            <button>VIDEO DEL EQUIPO<img alt="youtube icon " src={ytIcon}></img></button>
                            <button>CHATEE CON NOSOTROS<img alt="youtube icon " src={waIcon}></img></button>
                        </div>
                        <p>Este equipo GPS para maquinaria amarilla es una solución efectiva para monitorear tus maquinas en tiempo real. Con geolocalización precisa, alertas de posibles problemas y fácil instalación y manejo, mejora la gestión de tus activos y tomar decisiones informadas sobre su uso y mantenimiento.</p>
                        <img alt=" logo gps control" src={gpsControlWhite}></img>
                    </div>
                    <h1>MAQUINARIA</h1>

                </div>
                <div className="equipos_section2_end">
                    <img alt="suntech" src={Suntech}></img>
                    <div className="equipos_section2_end_table">
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_title1">Deta
                            </div>
                            <div className="equipos_section2_end_title2">lles
                            </div>                            
                        </div>                        
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Conexión
                            </div>
                            <div className="equipos_section2_end_cell">Micro USB
                            </div>                            
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell"># de Pines
                            </div>
                            <div className="equipos_section2_end_cell">3
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell"># Cables
                            </div>
                            <div className="equipos_section2_end_cell">6
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">GPS
                            </div>
                            <div className="equipos_section2_end_cell">2G
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Antena
                            </div>
                            <div className="equipos_section2_end_cell">Interna
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Reporte
                            </div>
                            <div className="equipos_section2_end_cell">Configurable
                            </div>                               
                        </div>
                    </div>

                </div>

            </section>
            <section className="equipos_section3">
                <div  className="equipos_section3_start">
                <div className="equipos_section2_end_table">
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_title1">Deta
                            </div>
                            <div className="equipos_section2_end_title2">lles
                            </div>                            
                        </div>                        
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">CAT
                            </div>
                            <div className="equipos_section2_end_cell">4G
                            </div>                            
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Prevención
                            </div>
                            <div className="equipos_section2_end_cell">Choques
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Respaldo
                            </div>
                            <div className="equipos_section2_end_cell">Batería
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Equipo
                            </div>
                            <div className="equipos_section2_end_cell">Compacto
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Banda
                            </div>
                            <div className="equipos_section2_end_cell">Ancha
                            </div>                               
                        </div>
                        <div className="equipos_section2_end_row">
                            <div className="equipos_section2_end_cell">Baja
                            </div>
                            <div className="equipos_section2_end_cell">Latencia
                            </div>                               
                        </div>
                    </div>
                    
                    <img alt="suntech" src={FMC920}></img>

                </div>
                <div  className="equipos_section3_end">
                    <h1>TRANSPORTE</h1>
                    <div className="equipos_section3_end_column">
                        <div className="equipos_section2_start_buttons">
                            <button>VIDEO DEL EQUIPO<img alt="youtube icon " src={ytIcon}></img></button>
                            <button>CHATEE CON NOSOTROS<img alt="youtube icon " src={waIcon}></img></button>
                        </div>
                        <p>Este equipo GPS para maquinaria amarilla es una solución efectiva para monitorear tus maquinas en tiempo real. Con geolocalización precisa, alertas de posibles problemas y fácil instalación y manejo, mejora la gestión de tus activos y tomar decisiones informadas sobre su uso y mantenimiento.</p>
                        <img alt=" logo gps control" src={gpsControlWhite}></img>
                    </div>
                    
                </div>

            </section>
            <section className="equipos_section4">
                <div className="equipos_section2_start">
                    <div className="equipos_section2_start_column">
                        <div className="equipos_section2_start_buttons">
                            <button>VIDEO DEL EQUIPO<img alt="youtube icon " src={ytIcon}></img></button>
                            <button>CHATEE CON NOSOTROS<img alt="youtube icon " src={waIcon}></img></button>
                        </div>
                        <p>Este equipo GPS para maquinaria amarilla es una solución efectiva para monitorear tus maquinas en tiempo real. Con geolocalización precisa, alertas de posibles problemas y fácil instalación y manejo, mejora la gestión de tus activos y tomar decisiones informadas sobre su uso y mantenimiento.</p>
                        <img alt=" logo gps control" src={gpsControlWhite}></img>
                    </div>
                    <h1>PERSONAS</h1>

                </div>
                <div className="equipos_section2_end"></div>

            </section>
        </div>
        )
}