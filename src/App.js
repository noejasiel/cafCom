import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import Perfil from "./pages/Perfil";
import Salir from "./pages/Salir";
import Faqs from "./pages/Faqs";
import Pedidos_pedidos from "./pages/Pedidos_pedidos";
import ReturnDataUser from "./components/ReturnDataUser";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pedidos" exact element={<Pedidos />} />
          <Route path="/perfil" exact element={<Perfil />} />
          {/* <Route path="/perfil" exact element={<ReturnDataUser />} /> */}
          <Route path="/salir" exact element={<Salir />} />
          <Route path="/faqs" exact element={<Faqs />} />
          <Route path="/pedidos/:numero" element={<Pedidos_pedidos />} />
          <Route path="*" exact element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
