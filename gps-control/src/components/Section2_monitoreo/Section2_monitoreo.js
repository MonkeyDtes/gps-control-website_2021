import { useEffect, useState } from "react";
import "./Section2_monitoreo.css"
function Section2_monitoreo({ data }) {
    const [text, setText] = useState(data);

    useEffect(() => {
        setText(data);
    }, [data]);
    return <>
        <div className="sectionNew1--cont1 sectionNew1--cont12">
            <div className="margin--container2">
                <h2 className="title--component__monitoreo">Cumplir con los siguientes requisitos generales:</h2>
                <p className="subTitle--component__monitoreo1">{text}</p>
            </div>
        </div>
    </>
}

export default Section2_monitoreo;