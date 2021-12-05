import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import Perfil from "./pages/Perfil";
import Salir from "./pages/Salir";
import Faqs from "./pages/Faqs";
import Pedidos_pedidos from "./pages/Pedidos_pedidos";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Pedidos" exact element={<Pedidos />} />
          <Route path="/Perfil" exact element={<Perfil />} />
          <Route path="/Salir" exact element={<Salir />} />
          <Route path="/Faqs" exact element={<Faqs />} />
          <Route path="/Pedidos/:numero" exact element={<Pedidos_pedidos />} />
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
