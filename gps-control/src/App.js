import "./App.css";
import { history } from "./components/History";
import ThreeRouter from "./components/ThreeRouter";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/index";
import Plataforma from "./routes/Plataforma/index";
import Equipos from "./routes/Equipos/index";
import Promociones from "./routes/Promociones/index";
import Apps from "./routes/Apps/index";
import Soluciones from "./routes/Soluciones/index";
import NotFound from "./routes/404";
import { useState } from "react";

function App() {
  const [estado, setEstado] = useState([]);

  const manejarCambioEstado = (nuevoEstado) => {
    setEstado(nuevoEstado);
  };

  return (
    <div className="h-screen">
      <ThreeRouter history={history}>
        <Routes>
          <Route exact path="/" element={<Home onChangeState={manejarCambioEstado}/>} />
          <Route path="/plataforma" element={<Plataforma />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/apps" element={<Apps estadoApps={estado}/>} />
          <Route path="/soluciones" element={<Soluciones></Soluciones>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </ThreeRouter>
    </div>
  );
}

export default App;
