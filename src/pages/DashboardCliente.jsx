import { Outlet } from "react-router-dom";
import NavbarCliente from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import changeUser, { setUsr, setAuth } from "../user";

export const DashboardCliente = () => {
  const [user, setUser] = useState();
  //ya esta el usuario

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    setUser(localStorage.getItem("usr"));
  };
  return (
    <div>
      <NavbarCliente />
      {/* <h1 className="mt-20">yo soy {user} cliente y soy ruta privada</h1> */}
      <Outlet />
    </div>
  );
};
