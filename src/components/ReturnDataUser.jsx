import React from "react";
import userPic from "../assets/user.png";
import pedido, { getUser } from "./../data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ReturnDataUser = () => {
  const [users, setUsers] = useState({});
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const user = localStorage.getItem("usr");
    await axios
      .get(`http://localhost:8888/DBCafe/getUser.php/getUser/${user}`)
      .then((response) => {
        console.log(response.data[0]);
        setUsers(response.data[0]);
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
      <p className="mt-4">Nombre: {users.nombre}</p>
      <p className="mt-4">Apellido: {users.apellidos}</p>
      <p className="mt-4">numero de Boleta: {users.num_boleta}</p>
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
