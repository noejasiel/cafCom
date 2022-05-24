import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";
import PedidosCola from "../components/Pedidos_cola";
import mapa from "../assets/ESCOM_explanada.jpg";
import Bien from "../assets/btnBien.svg";
import Mod from "../assets/Mod.png";
import { useNavigate, useParams } from "react-router-dom";
import pedido, { getUser } from "./../data";
import { ReturnPlaces } from "../components/ReturnPlaces";
import { ReturnFormNewOrder } from "../components/ReturnFormNewOrder";
import { useState } from "react";

const NuevoPedido = () => {
  const navigate = useNavigate();
  const [hidePlaces, setHidePlaces] = useState(false);

  const handleHidePlaces = () => {
    setHidePlaces(!hidePlaces);
  };

  //llamaos a una funcion donde estan los datos de las personas, simulando la bse

  const modDatos = () => {};

  const allOk = () => {};

  return (
    <div className=" bg-negroAzul pb-20 relative pt-16">
      {/* <Navbar name="red" /> */}
      <div className="w-full  ">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-white">
          Ordenar
        </h1>
        <div className=" flex  justify-around"></div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-8 bg-white rounded-xl opacity-90">
          <ReturnFormNewOrder />
          <div className="w-full flex justify-around mb-10">
            <button onClick={() => modDatos()}>
              <img src={Mod} width="90" height="100" />
            </button>
            <button onClick={() => allOk()}>
              <img src={Bien} width="50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoPedido;
