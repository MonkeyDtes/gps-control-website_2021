import Iconob_mas from "../../assets/Componentes/Iconos_botones/Iconob_mas.svg";
import Iconob_masBwhite from "../../assets/Componentes/Iconos_botones/Iconob_masBwhite.svg";
function ButtonVerMas() {
    return (<div className="container--button--div1--equipos_section1">
        <img alt="información" className="iconMas1" src={Iconob_mas}></img>
        <img alt="información" className="iconMas2" src={Iconob_masBwhite}></img>
        <p>Leer más</p>
    </div>);
}

export default ButtonVerMas;