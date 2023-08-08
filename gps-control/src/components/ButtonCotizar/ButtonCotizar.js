import "./ButtonCotizar.css";
import cotizacion from "../../assets/cotizacion.svg";

export default function ButtonCotizar({elementRef}) {

    return (
        <button className="buttonsCotizar"
        onClick={() =>
            elementRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <img alt="cotizacion" className="imgButton" src={cotizacion}></img>
        <p className="textCotice">COTICE AQUÍ</p> 
      </button>
    )
}
