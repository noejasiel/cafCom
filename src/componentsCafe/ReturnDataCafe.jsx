import React from "react";
import userPic from "../assets/user.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ReturnDataUser = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getDataCafe();
  }, []);

  const getDataCafe = async () => {
    const user = localStorage.getItem("usr");
    await axios
      .get(`http://localhost:8888/DBCafe/cafe/getUserCafe.php/getUser/${user}`)
      .then((response) => {
        console.log(response.data[0]);
        setUser(response.data[0]);
      });
  };

  const borrarCuenta = () => {
    alert("borrar cuent");
  };

  const editarCuenta = () => {
    alert("editar cuent");
  };

  return (
    <div className="w-3/4 flex justify-center items-center flex-col">
      <img src={userPic} />
      <p className="mt-4">Nombre: {user.nombre}</p>
      <p className="mt-4">Apellido: {user.ap_paterno}</p>
      <p className="mt-4">Tipo de cuenta: {localStorage.getItem("typeUsr")} </p>
      <p className="mt-4">Sucursal: ESCOM </p>
      <p className="mt-4">Rol: {user.rol} </p>
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
