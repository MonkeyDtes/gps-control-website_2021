import { useEffect, useState } from "react";
import "./Section_monitoreo.css"
function Section_monitoreo({ data1 }) {
    const [title2, setTitle2] = useState(data1.title2);
    const [subtitle2, setSubtitle2] = useState(data1.subtitle2);
    const [subtitlec2, setSubtitlec2] = useState(data1.subtitlec2);
    const [text2, setText2] = useState(data1.text2);

    useEffect(() => {
        setTitle2(data1.title2);
        setSubtitle2(data1.subtitle2);
        setSubtitlec2(data1.subtitlec2);
        setText2(data1.text2);
    }, [data1]);
    return <>
        <div className="sectionNew1--cont1">
            <div className="margin--container">
                <h2 className="title--component__monitoreo">{title2}</h2>
                <p className="subTitle--component__monitoreo">{subtitle2}</p>
                <p className="subtitlec2--component__monitoreo">{subtitlec2}</p>
                <p className="text--component__monitoreo">{text2}</p>
            </div>
        </div>
    </>
}

export default Section_monitoreo;