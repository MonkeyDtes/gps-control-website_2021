import "./ButtonCotizar.css";
import cotizacion from "../../assets/cotizacion.svg";
import cotizacionWhite from "../../assets/cotizacionWhite.svg";
import { useEffect, useState } from "react";

export default function ButtonCotizar({elementRef}) {
  const [srcImage, setSrcImage] = useState(cotizacion);

  const setImage = srci => {
    setSrcImage(srci);
    console.log(srci);
  }

    return (
        <button className="buttonsCotizar" onMouseOver={()=> setImage(cotizacionWhite)} onMouseOut={()=> setImage(cotizacion)}
        onClick={() =>
            elementRef.current.scrollIntoView({ behavior: "smooth" })
        }
      >
        <img alt="cotizacion" className="imgButton" src={srcImage}></img>
        <p className="textCotice">COTICE AQUÍ</p> 
      </button>
    )
}
