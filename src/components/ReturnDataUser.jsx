import React from "react";
import userPic from "../assets/user.png";
import choki from "../assets/Productos/Arcoiris.jpg";
import pedido, { getUser } from "./../data";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ReturnDataUser = () => {
  const [users, setUsers] = useState({});
  const [modDataUser, setModDataUser] = useState(true);
  const [inputMod, setInputMod] = useState({});
  const [makeChangedate, setMakeChangedate] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  useEffect(() => {
    getUsers();
  }, [makeChangedate]);

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
    setModDataUser(!modDataUser);
  };

  const handleInputMod = (e) => {
    setInputMod({
      ...inputMod,
      [e.target.name]: e.target.value,
      ["itemFile"]: e.target.value.split("\\")[2],
    });
  };

  const sendDataMod = () => {
    axios
      .put(
        `http://localhost:8888/DBCafe/updateDataUserProfile.php/updateProfile/${users.num_boleta}`,
        inputMod
      )
      .then(function (response) {
        console.log(response.data, "aqui es la data");
        setMakeChangedate(!makeChangedate);
        setModDataUser(!modDataUser);
        //aqui ahora cargo los datos de regreso a la variable donde os imprimo
      });
  };

  console.log(inputMod);

  return (
    <div className="w-full flex justify-center">
      {deleteUser ? (
        <div className="bg-colorBoton w-full fixed top-1/2">
          <h1 className="text-white text-3xl p-4">
            {" "}
            Seguro que deseas eliminar la cuenta ?
          </h1>
          <div className="w-full text-center">
            <button
              onClick={() => setDeleteUser(!deleteUser)}
              className=" pl-6 pr-6 pt-2 pb-2 mr-4 mb-4 bg-white text-red-700 hover:bg-red-700 hover:text-white rounded-2xl"
            >
              Si
            </button>
            <button
              onClick={() => setDeleteUser(!deleteUser)}
              className=" pl-6 pr-6 pt-2 pb-2 mr-4 mb-4  text-white hover:bg-red-700 hover:text-white rounded-2xl"
            >
              No
            </button>
          </div>
        </div>
      ) : null}

      <div className="w-3/4 flex justify-center items-center flex-col">
        <img
          className="rounded-full"
          width="150px"
          src={
            users.rutaImg
              ? require(`../assets/User/${users.rutaImg}`).default
              : userPic
          }
        />

        {modDataUser ? (
          <div>
            <p className="mt-4">Nombre: {users.nombre}</p>
            <p className="mt-4">Apellido: {users.apellidos}</p>
            <p className="mt-4">numero de Boleta: {users.num_boleta}</p>
          </div>
        ) : (
          <div className="mr-10 mt-10 ml-10    flex justify-center flex-col">
            <p className="mt-4">Nombre: {users.nombre}</p>
            <input
              className="m-2 rounded-md h-10"
              placeholder={users.apellidos}
              onChange={handleInputMod}
              name="apellidos"
            />
            <input
              className="m-2 rounded-md h-10"
              placeholder={users.num_boleta}
              onChange={handleInputMod}
              name="boleta"
            />
            <div className="flex flex-col">
              <span className="text-white text-xl">
                Seleccione foto de Perfil
              </span>
              <input
                type="file"
                className="m-2 rounded-md h-10"
                placeholder={users.num_boleta}
                onChange={handleInputMod}
                name="itemFile"
              />
            </div>
            <div>
              <button
                className="pl-6 pr-6 pt-2 pb-2 mr-4 mb-4 bg-white text-green-600 hover:bg-green-600 hover:text-white rounded-2xl"
                onClick={sendDataMod}
              >
                Enviar
              </button>
            </div>
          </div>
        )}
        <div className="flex mt-10">
          <div className="">
            <button
              onClick={() => setDeleteUser(!deleteUser)}
              className="   text-center p-4 bg-colorBoton  rounded-3xl"
            >
              <p className="">Cerrar Cuenta</p>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => editarCuenta()}
              className="ml-10 text-center p-4 bg-colorBoton  rounded-3xl"
            >
              <p className="">Editar</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnDataUser;
