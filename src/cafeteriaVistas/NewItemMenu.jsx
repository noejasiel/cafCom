import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { showDate } from "../components/showDate";

export const NewItemMenu = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [newItem, setNewItem] = useState();

  const notOk = () => {
    navigate("/DashboardCafe/Menu");
  };

  const handleInputSelect = (e) => {
    let path = e.target.value;
    let aux = path.split("\\");
    console.log(aux, typeof path);
    setNewItem({
      ...newItem,
      ["noProducto"]: (Math.random() * 100000).toFixed(),
      [e.target.name]: e.target.value,
      ["itemFile"]: e.target.value.split("\\")[2],
    });
  };

  const handleInput = (e) => {
    let path = e.target.value;
    let aux = path.split("\\");
    console.log(aux, typeof path);
  };

  console.log(newItem);
  const sendUpdateData = (e) => {
    e.preventDefault();
    console.log("hola");
    console.log(newItem);
    axios
      .post(
        `http://localhost:8888/DBCafe/cafe/newItemMenu.php/ItemMenu`,
        newItem
      )
      .then(function (response) {
        navigate("/DashboardCafe/Menu");
        //aqui ahora cargo los datos de regreso a la variable donde os imprimo
      });
  };

  return (
    <div className=" bg-negroAzul pb-20 relative pt-20  h-full">
      <div className="w-full pb-15">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-white">
          Agrega un Producto al menu
        </h1>
      </div>
      <div className=" w-full flex justify-center items-center pb-10">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-8 bg-white rounded-xl opacity-90">
          <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            <form onSubmit={sendUpdateData}>
              <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                Nombre del Item
                <input
                  className="mt-3 mb-5"
                  type="text"
                  onChange={handleInputSelect}
                  name="nameItem"
                  placeholder="Nombre del Producto"
                />
              </p>
              <hr className="h-0.5 w-full bg-primary" />

              <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                Descripcion del Item
                <input
                  className="mt-3 mb-5"
                  type="text"
                  onChange={handleInputSelect}
                  name="descItem"
                  placeholder="Descripcion Item"
                />
              </p>
              <hr className="h-0.5 w-full bg-primary" />
              <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                Tiempo preparacion del Item
                <input
                  className="mt-3 mb-5"
                  type="text"
                  onChange={handleInputSelect}
                  name="timeItem"
                  placeholder="Preparacion del Item"
                />
              </p>
              <hr className="h-0.5 w-full bg-primary" />

              <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                Precio del Items
                <input
                  className="mt-3 mb-5"
                  type="text"
                  onChange={handleInputSelect}
                  name="itemPrice"
                  placeholder="Precio del Item"
                />
              </p>
              <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center flex flex-col">
                Precio del Items
                <input
                  className="mt-3 mb-5"
                  type="file"
                  onChange={handleInputSelect}
                  name="itemFile"
                  placeholder="Precio del Item"
                />
              </p>
              <div className="w-full flex justify-around">
                <button
                  onClick={notOk}
                  className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 mt4"
                >
                  Cancelar
                </button>
                <button className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 mt4">
                  Aplicar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
