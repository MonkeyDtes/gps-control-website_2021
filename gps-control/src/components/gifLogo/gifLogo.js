import gifLogo from "../../assets/Assets1/Responsive/Componentes generalas_responsive/Logo animacion.mp4";
import "./GifLogo.css"

function GifLogo() {
    return ( <div className="container__gifLogo">
        <video playsInline autoPlay loop muted>
            <source src={gifLogo} type="video/mp4" />
        </video>
    </div> );
}

export default GifLogo;