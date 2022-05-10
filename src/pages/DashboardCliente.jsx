import { Outlet } from "react-router-dom";
import NavbarCliente from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

export const DashboardCliente = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    //lo que fallo fue la ruta
    // await axios.get("http://localhost:8888/api/users").then((response) => {
    //   console.log(response.data);
    // });
    await axios
      .get("http://localhost:8888/DBCafe/select.php ")
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <div>
      <NavbarCliente />
      <h1>yo soy Dashboard de cliente y soy ruta privada</h1>
      <Outlet />
    </div>
  );
};
