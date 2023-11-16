import { useEffect, useState } from "react";
import "./Section2_monitoreo.css"
function Section2_monitoreo({ data2 }) {
    const [title3, setTitle3] = useState(data2.title3);
    const [text3, setText3] = useState(data2.text3);

    useEffect(() => {
        setTitle3(data2.title3);
        setText3(data2.text3);
    }, [data2]);
    return <>
        <div className="sectionNew1--cont1">
            <div className="margin--container2">
                <h2 className="title--component__monitoreo">{title3}</h2>
                <p className="subTitle--component__monitoreo">{text3}</p>
            </div>

        </div>
        {/* <div className="sectionNew1--cont2">
            <ContainerFlecha></ContainerFlecha>
        </div> */}
    </>
}

export default Section2_monitoreo;