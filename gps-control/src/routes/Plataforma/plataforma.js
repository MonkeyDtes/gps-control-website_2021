import NavbarGPS from "../../components/NavbarGPS";
import "./plataforma.css"
import PlataformaPantallas from "../../assets/PlataformaPantallas.svg"
import videoPlataforma from "../../assets/videoPlataforma.svg"
import GifGPS from "../../components/gifGPS/index";
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";

export default function Plataforma(){
    return(
        <div>
            <NavbarGPS Home={false} Plataforma={true} Equipos={false} transporte={false} Apps={false} Promociones={false}></NavbarGPS>
            <GifGPS type="2"></GifGPS>
            <section className="plataforma_section1">
                <div className="plataforma_section1_header">
                    <div className="plataforma_sectionq_body_text_a1">
                        <div>
                            MANTENIMIENTO PREVENTIVO Y CORRECTIVO
                        </div>
                        
                    </div>
                    <div className="plataforma_sectionq_body_text_a1">
                        <div>
                            CONTROL Y CALIFICACIÓN DE CONDUCTORES
                        </div>                            
                    </div>
                </div>
                <div className="plataforma_section1_body">
                    <div className="plataforma_section1_body_text">
                        <div className="plataforma_sectionq_body_text_a2">
                            <div>
                                APAGADO REMOTO
                            </div>
                            
                        </div>
                        <div className="plataforma_sectionq_body_text_a2">
                            <div>
                                INFORMES A LA MEDIDA
                            </div>                            
                        </div>
                    </div>
                    <img alt="pantallas plataforma" src={PlataformaPantallas}></img>
                    <div className="plataforma_section1_body_text">
                        <div className="plataforma_sectionq_body_text_a">
                            <div>
                                GEOCERCAS
                            </div>
                            
                        </div>
                        <div className="plataforma_sectionq_body_text_a">
                            <div>
                                APLICACIÓN MÓVIL
                            </div>                            
                        </div>
                        <div className="plataforma_sectionq_body_text_a">
                            <div>
                                PRE ALISTAMIENTO
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="plataforma_sectionq_body_text_a3">
                    <div>
                    SEGUIMIENTO EN TIEMPO REAL
                    </div>                            
                </div>                
            </section>
            <section className="plataforma_section2">
                <img alt="video yt" src={videoPlataforma}></img>
                <div className="plataforma_section2_body">
                    <div className="plataforma_section2_body_line">

                    </div>
                    <h6>
                        Esta aplicación conecta los dispositivos móviles como herramientas de rastreo, permite hacer seguimiento de diferentes tareas y controla su ejecución de forma remota.
                    </h6>
                </div>

            </section>
            <Leads></Leads>
            <Footer></Footer>
        </div>
    )
}