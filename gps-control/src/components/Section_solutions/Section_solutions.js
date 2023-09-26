import navbarNube from "../../assets/navbarNube.svg";
import Vector4 from "../../assets/Vector4.svg";
import { useEffect, useState } from "react";

function Section_solutions({data}) {
    const [title,setTitle] = useState(data.title);
    const [subtitle,setSubtitle] = useState(data.subtitle);
    const [image,setImage] = useState(data.image);
    const [texts,setText] = useState(data.text);
    useEffect(()=>{
        setTitle(data.title);
        setSubtitle(data.subtitle);
        setImage(data.image);
        setText(data.text);
    },[data]);
    return <>
        <div className="soluciones_section1_header">
            <h1>{title}</h1>
        </div>
        <div className="soluciones_section1_row">
            <div className="main_box">
                <img className="imgNube" alt="nube" src={navbarNube}></img>
                <div className="soluciones_section1_label">
                    <h2>{subtitle}</h2>
                </div>
                <img alt="nube" className="imgNube2" src={Vector4}></img>
            </div>
        </div>
        <div class="image-container">
            <img alt="camara" src={image}></img>
            <div class="containerImgHover">
                <div class="text-overlay">
                    {texts}</div>
            </div>
        </div>
    </>;
}

export default Section_solutions;