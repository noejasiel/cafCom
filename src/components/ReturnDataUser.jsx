import React from "react";
import userPic from "../assets/user.png";
import pedido, { getUser } from "./../data";
import { useState } from "react";
import { useEffect } from "react";
const ReturnDataUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getUser(1));
  }, []);

  const borrarCuenta = () => {
    alert("borrar cuent");
  };

  const editarCuenta = () => {
    alert("editar cuent");
  };

  return (
    <div className="w-3/4 flex justify-center items-center flex-col">
      <img src={userPic} />
      <p className="mt-4">Nombre: {user.persona}</p>
      <p className="mt-4">Apellido {user.apellido}</p>
      <p className="mt-4">Direcciones: {user.direccion}</p>
      <button
        onClick={() => borrarCuenta()}
        className=" mt-4  text-center p-4 bg-colorBoton  rounded-3xl"
      >
        <p className="">Cerrar Cuenta</p>
      </button>

      <div className="mt-20">
        <button
          onClick={() => editarCuenta()}
          className=" text-center p-4 bg-colorBoton  rounded-3xl"
        >
          <p className="">Editar</p>
        </button>
      </div>
    </div>
  );
};

export default ReturnDataUser;
