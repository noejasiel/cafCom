import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Pedidos from "./pages/Pedidos";
import Perfil from "./pages/Perfil";
import Salir from "./pages/Salir";
import Faqs from "./pages/Faqs";
import Pedidos_pedidos from "./pages/Pedidos_pedidos";
import NuevoPedido from "./pages/NuevoPedido";
import PerfilCafeteria from "./cafeteriaVistas/PerfilCafeteria";
import { ListPedidos } from "./cafeteriaVistas/ListPedidos";
import { Login } from "./pages/Login";
import { DashboardCliente } from "./pages/DashboardCliente";
import { DashboardCafe } from "./componentsCafe/DashboardCafe";
import { Register } from "./pages/Register";
import { useState, useEffect } from "react";
import { Menu } from "./pages/Menu";
import { Carrito } from "./pages/Carrito";

function App() {
  const [auth, setAuth] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setAuth(localStorage.getItem("usr"));
    console.log(auth);
  };
  return (
    <div className="">
      <Router>
        <Routes>
          //si auth esta autenticado, y usr es para saber que Dashboard
          renderizara
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route
            path="/login"
            exact
            element={auth ? <Navigate to="/Dashboard" /> : <Login />}
          />
          <Route path="/Dashboard/*" exact element={<DashboardCliente />}>
            <Route path="Pedidos" element={<Pedidos />} />
            <Route path="Ordenar" element={<NuevoPedido />} />
            <Route path="Menu/*" element={<Menu />} />
            <Route path="Perfil" element={<Perfil />} />
            <Route path="Salir" element={<Salir />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="Pedidos/:numero" element={<Pedidos_pedidos />} />
          </Route>
          {/* <Route path="*" exact element={<Navigate replace to="/" />} /> */}
          {/* routes cafeteria */}
          {/* <Dashboard /> */}
          <Route path="DashboardCafe/*" element={<DashboardCafe />}>
            <Route path="perfilCafeteria" element={<PerfilCafeteria />} />
            <Route path="listaPedidos" element={<ListPedidos />} />
            <Route path="faqs" element={<Faqs />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
