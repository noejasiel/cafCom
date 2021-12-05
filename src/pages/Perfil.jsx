import React from "react";
import Navbar from "../components/Navbar";
import user from "../assets/user.png";

const Perfil = () => {
  return (
    <div className="bg-danger">
      <Navbar />
      <div>
        <img src={user} />
        <p>Nombre</p>
        <p>Apellido</p>
        <p>Metodo Pago</p>
        <p>Cerrar Cuenta</p>
        <p>Direcciones</p>
      </div>
    </div>
  );
};

export default Perfil;
