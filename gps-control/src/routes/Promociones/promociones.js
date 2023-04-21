import NavbarGPS from "../../components/NavbarGPS";
import GifGPS from "../../components/gifGPS/index";
import "./promociones.css"
import cotizacion from "../../assets/cotizacion.svg"
import Leads from "../../components/Leads/index";
import Footer from "../../components/Footer/index";
import { useRef } from "react";

export default function Promociones(){
    const sectionRef = useRef(null);
    return(
        <div>
            <NavbarGPS Home={false} Plataforma={false} Equipos={false} transporte={false} Apps={false} Promociones={true}></NavbarGPS>
            <GifGPS type="2"></GifGPS>
            <section className="promociones_section">
                <div className="promociones_section_bg">
                    <div className="promociones_section_body">
                        <div>
                            Mi SIM
                        </div>
                        <div>
                            Sistema de comunicación simCARD M2M
                        </div>
                        <div>
                            Recargas de MB
                        </div>
                        <div>
                            Plataforma de línea blanca
                        </div>
                        <div>
                            Cotiza equipos con descuentos especiales
                        </div>
                        <button onClick={() => sectionRef.current.scrollIntoView({ behavior: 'smooth' })}><img alt="cotizacion" src={cotizacion}></img>COTICE AQUÍ</button>
                    </div>
                </div>

            </section>
            <section ref={sectionRef}></section>
            <Leads></Leads>
            <Footer></Footer>
        </div>
    )
}