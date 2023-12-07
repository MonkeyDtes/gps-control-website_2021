import Ip_burburjas0 from "../../assets/Componentes/Iconos_pantalla/Ip_burburjas0.svg"
import Ip_flechas0 from "../../assets/Componentes/Iconos_pantalla/Ip_flechas0.svg"
import containerF__responsive from "../../assets/containerF__responsive.png"
import "./Flecha_cont_red_abajo.css";

function Flecha_cont_red_abajo() {
    return ( <div className="cont--red--flecha">
        <img className="img--burbujas--flechaAbajo" src={Ip_burburjas0} alt="" />
        <img className="img--flecha--flechaAbajo" src={Ip_flechas0} alt="" />
        <img alt="home Down" className="img--container-f__responsive" src={containerF__responsive}></img>
    </div>
  );
}

export default Flecha_cont_red_abajo;