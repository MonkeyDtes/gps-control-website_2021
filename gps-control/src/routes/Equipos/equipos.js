import NavbarGPS from "../../components/NavbarGPS";
import "./equipos.css"
import circuloHome from "../../assets/circuloHome.svg"

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
        </div>
        )
}