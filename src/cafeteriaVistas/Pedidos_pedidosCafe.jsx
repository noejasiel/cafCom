import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { showDate } from "../components/showDate";

export const Pedidos_pedidosCafe = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [modData, setModData] = useState(false);
  const [updateData, setUpdateData] = useState();
  const typeUsr = localStorage.getItem("typeUsr");
  const [makeChangedate, setMakeChangedate] = useState(false);

  const allOk = () => {
    navigate("/DashboardCafe/listaPedidos");
  };

  useEffect(() => {
    getUser();
  }, [makeChangedate]);

  const getUser = () => {
    axios
      .get(
        `http://localhost:8888/DBCafe/getUserPedido.php/getPedidos/${parametro.numero}`
      )
      .then((response) => {
        console.log(response.data[0]);
        setUser(response.data[0]);
      });
  };

  const modDatos = () => {
    setModData(!modData);
  };

  const handleInputSelect = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInput = (e) => {
    const dateNew = showDate(user.fecha, parseInt(e.target.value));
    // setUpdateData({
    //   ...updateData,
    //   [e.target.name]: e.target.value,
    // });

    //console.log(dateNew, " mi nuevaaa fechaaa");
    setUpdateData({
      ...updateData,
      ["addHora"]: dateNew,
    });
  };

  const sendUpdateData = () => {
    setModData(!modData);
    if (typeUsr == "Cafeteria") {
      axios
        .put(
          `http://localhost:8888/DBCafe/cafe/UpdateUser.php/updateuser/${parametro.numero}`,
          updateData
        )
        .then(function (response) {
          console.log(response.data, "aqui es la data");
          setMakeChangedate(!makeChangedate);

          //aqui ahora cargo los datos de regreso a la variable donde os imprimo
        });
    }
    if (typeUsr == "Repartidor") {
      axios
        .put(
          `http://localhost:8888/DBCafe/repartidor/UpdateStatusRepartidor.php/updateStatus/${parametro.numero}`,
          updateData
        )
        .then(function (response) {
          console.log(response.data, "aqui es la data");
          setMakeChangedate(!makeChangedate);

          //aqui ahora cargo los datos de regreso a la variable donde os imprimo
        });
    }
    console.log(updateData, "desde antes de enviar soli al server");
  };

  return (
    <div className=" bg-negroAzul pb-20 relative pt-16 h-full">
      <div className="w-full  ">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-white">
          Pedido Numero: {user.no_orden}
        </h1>
        <div className=" flex  justify-around">
          <div className="flex w-10/12  m-4 rounded-lg flex-col relative h-2/5 mt-10 ">
            <p className=" text-2xl pt-2 pbt-2 w-full mt-auto mb-auto pl-2 pr-2 text-center rounded-xl text-white">
              Lugar de envio :
              {user.edificio != 0 ? (
                <div>
                  <h1> edificio : {user.edificio}</h1>{" "}
                  <h1> salon : {user.salon}</h1>{" "}
                </div>
              ) : (
                <h1> {user.zona}</h1>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-8 bg-white rounded-xl opacity-90">
          <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            <p className="mt-auto mb-auto pl-2 pr-2 p-3">
              Nombre: <span className="text-red-600"> {user.usuario}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3 ">
              Status :
              {modData ? (
                typeUsr == "Repartidor" ? (
                  <select name="select" onChange={handleInputSelect}>
                    <option value="" selected></option>
                    <option value="En camino">En camino</option>
                    <option value="En espera"> En espera</option>
                    <option value="Entregado">Entregado</option>
                  </select>
                ) : (
                  <select name="select" onChange={handleInputSelect}>
                    <option value="" selected></option>
                    <option value="Solicitud">Solicitud</option>
                    <option value="Preparacion"> en Preparacion</option>
                    <option value="en Camino">en camino</option>
                  </select>
                )
              ) : (
                <span className="text-red-600">{user.status}</span>
              )}
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
              contenido del pedido:
              <span className="text-red-600 "> {user.pedido}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />

            {modData ? (
              typeUsr == "Cafeteria" ? (
                <>
                  <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                    Modificar la hora
                    <input
                      className="mt-3 mb-5"
                      type="text"
                      onChange={handleInput}
                      name="addHora"
                      placeholder={`agrega minutos: ${showDate(user.fecha)}`}
                    />
                  </p>
                  <div className="w-full flex justify-around">
                    <button
                      onClick={modDatos}
                      className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 mt4"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={sendUpdateData}
                      className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 mt4"
                    >
                      Aplicar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
                    Hora estimada de entrega:
                    <span className="text-red-600 ">
                      {" "}
                      {showDate(user.fecha)}
                    </span>
                  </p>
                  <div className="w-full flex justify-around">
                    <button
                      onClick={modDatos}
                      className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 mt4"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={sendUpdateData}
                      className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 mt4"
                    >
                      Aplicar
                    </button>
                  </div>
                </>
              )
            ) : (
              <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
                Hora estimada de entrega:
                <span className="text-red-600 "> {showDate(user.fecha)}</span>
              </p>
            )}
          </div>
          <div className="w-full flex justify-around mb-10">
            <button
              onClick={modDatos}
              className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9"
            >
              Mod Datos
            </button>
            <button
              onClick={allOk}
              className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-5 pb-2 pr-5"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
