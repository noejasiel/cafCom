import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { showDate } from "../components/showDate";

export const MenuItem = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [modData, setModData] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [makeChangedate, setMakeChangedate] = useState(false);

  const allOk = () => {
    navigate("/DashboardCafe/Menu");
  };
  console.log(parametro.id);

  useEffect(() => {
    getUser();
  }, [makeChangedate]);

  const getUser = () => {
    axios
      .get(
        `http://localhost:8888/DBCafe/cafe/getMenuItem.php/getItemMenu/${parametro.id}`
      )
      .then((response) => {
        console.log(response.data[0]);
        setItem(response.data[0]);
      });
  };

  const modDatos = () => {
    setModData(!modData);
  };
  console.log(updateData);
  const handleInputSelect = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const sendUpdateData = () => {
    setModData(!modData);
    console.log(updateData, "desde antes de enviar soli al server");
    axios
      .put(
        `http://localhost:8888/DBCafe/cafe/updateMenuItem.php/updateItem/${parametro.id}`,
        updateData
      )
      .then(function (response) {
        console.log(response.data, "aqui es la data");
        setMakeChangedate(!makeChangedate);
        //aqui ahora cargo los datos de regreso a la variable donde os imprimo
      });
  };
  console.log(setUpdateData, "datos");

  return (
    <div className=" bg-negroAzul pb-20 relative pt-20  h-full">
      <div className="w-full pb-20">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-white">
          Modifica Item del Menu
        </h1>
      </div>
      <div className=" w-full flex justify-center items-center pb-10">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-8 bg-white rounded-xl opacity-90">
          <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            {modData ? (
              <div>
                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                  Modificar Nombre del Item
                  <input
                    className="mt-3 mb-5"
                    type="text"
                    onChange={handleInputSelect}
                    name="nameItem"
                    placeholder={`${item.nom_producto}`}
                  />
                </p>
                <hr className="h-0.5 w-full bg-primary" />

                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                  Modificar Descripcion del Item
                  <input
                    className="mt-3 mb-5"
                    type="text"
                    onChange={handleInputSelect}
                    name="descItem"
                    placeholder={`${item.desc_producto}`}
                  />
                </p>
                <hr className="h-0.5 w-full bg-primary" />
                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                  Modificar Precio del Items
                  <input
                    className="mt-3 mb-5"
                    type="text"
                    onChange={handleInputSelect}
                    name="itemPrice"
                    placeholder={`${item.precio_producto}`}
                  />
                </p>
                <hr className="h-0.5 w-full bg-primary" />

                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                  Modificar Tiempo preparacion del Item
                  <input
                    className="mt-3 mb-5"
                    type="text"
                    onChange={handleInputSelect}
                    name="timeItem"
                    placeholder={`${item.tiempo_coccion}`}
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
              </div>
            ) : (
              <div>
                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
                  Nombre del Item:
                  <span className="text-red-600"> {item.nom_producto}</span>
                </p>
                <hr className="h-0.5 w-full bg-primary" />
                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
                  Descripcion del Item:
                  <span className="text-red-600 "> {item.desc_producto}</span>
                </p>
                <hr className="h-0.5 w-full bg-primary" />
                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
                  Tiempo de preparacion del Item:
                  <span className="text-red-600 "> {item.precio_producto}</span>
                </p>
                <hr className="h-0.5 w-full bg-primary" />

                <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
                  Precio del Item:
                  <span className="text-red-600 "> {item.tiempo_coccion}</span>
                </p>
              </div>
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
