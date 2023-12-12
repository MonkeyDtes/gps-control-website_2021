import gifLogo from "../../assets/Assets1/Responsive/Componentes generalas_responsive/Logo animacion.mp4";
import "./gifLogo.css"

function gifLogo() {
    return ( <div className="container__gifLogo">
        <img src={gifLogo} alt="" />
    </div> );
}

export default gifLogo;