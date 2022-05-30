import ESCOM_explanada from "./../assets/ESCOM_explanada.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";

export const MenuCafe = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState({});

  //false para desactivado

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`http://localhost:8888/DBCafe/getMenu.php/getMenu`)
      .then((response) => {
        setProductos(() => [response.data]);
        console.log(response.data);
      });
  };

  const focusBtn = (e) => {
    navigate("/DashboardCafe/MenuItem");
  };

  return (
    <div className="w-full bg-negroAzul h-full pt-20">
      <h1 className="text-center text-white text-3xl">MENU</h1>
      <button
        onClick={focusBtn}
        className="text-white font-bold rounded-full bg-colorLetras pt-2 pl-4 pb-2 pr-4 before:content-['hola'] fixed right-8 bottom-8"
      >
        +
      </button>

      <div className=" w-full flex  text-white flex-col pb-10 items-center justify-center ">
        {productos[0] ? (
          productos[0].map((producto) => (
            <Link to={producto.no_producto}>
              <div
                className="flex items-center flex-row cursor-pointer w-3/4 m-auto mt-4 mb-4 hover:bg-gray-600 p-2 rounded-2xl"
                // onClick={addToCart}
              >
                <img width="35%" src={ESCOM_explanada} />
                <div className="flex flex-col ml-12">
                  <p>
                    producto:{" "}
                    <label className="text-yellow-500">
                      {producto.nom_producto}
                    </label>
                  </p>
                  <p>
                    Descripcion:
                    <label className="text-yellow-500">
                      {producto.desc_producto}
                    </label>
                  </p>
                  <p>
                    precio:{" "}
                    <label className="text-yellow-500">
                      {producto.precio_producto}
                    </label>{" "}
                  </p>
                  <p>
                    tiempo preparacion:{" "}
                    <label className="text-yellow-500">
                      {producto.tiempo_coccion}
                    </label>{" "}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <h1>No hay nada que mostrar</h1>
          </div>
        )}
      </div>
    </div>
  );
};
