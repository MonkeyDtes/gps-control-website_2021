import Ip_burburjas0 from "../../assets/Componentes/Iconos_pantalla/Ip_burburjas0.svg"
import Ip_flechas0 from "../../assets/Componentes/Iconos_pantalla/Ip_flechas0.svg"
function Flecha_arriba() {
    return ( <div className="cont--red--flecha__arriba">
        <img className="img--burbujas--flechaAbajo" src={Ip_burburjas0} alt="" />
        <img className="img--flecha--flechaAbajo" src={Ip_flechas0} alt="" />
    </div>
  );
}

export default Flecha_arriba;