import { useState, useEffect } from "react";
import gifNegativo from "../../assets/gifNegativo.gif";
import gifPositivo from "../../assets/gifPositivo.gif";
import "./gifGPS.css";
export default function GifGPS(e) {
  const [type, setType] = useState(e.type);
  useEffect(() => {
    if (e.type === "1") {
      setType(true);
    } else {
      setType(false);
    }
  }, [e.type]);

  return (
    <div className="gif_gpscontrol">
      <img alt="GPS control" src={type ? gifNegativo : gifPositivo}></img>
    </div>
  );
}
