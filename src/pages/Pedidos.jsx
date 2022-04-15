import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";
import PedidosCola from "../components/Pedidos_cola";
import { Link } from "react-router-dom";
import pedido, { getUser } from "./../data";
import { useEffect, useState } from "react";

const Pedidos = () => {
  //trayendo los pedidos de mi data.js
  const pedidos = pedido;

  const handleOrder = () => {
    alert("nueva orden");
  };

  return (
    <div className="relative pt-16 bg-negroAzul h-screen w-full">
      <Navbar name="red" />
      <div className="w-full  ">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-yellow-500">
          Pedidos
        </h1>
        <div className=" mt-11 flex  justify-center items-center">
          <div className="flex w-1/3  m-4  justify-center items-center">
            <button onClick={() => handleOrder()}>
              <p className="mt-auto mb-auto  text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9">
                Ordenar
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 bg-negroAzul h-full">
        <hr className="bg-white" />
        <div className="flex justify-center items-center mt-10 flex-col">
          {pedidos.map((l, k) => (
            <div
              key={k}
              className=" w-9/12 bg-colorBoton mb-5 rounded-lg flex justify-center items-center  "
            >
              <Link to={l.id.toString()}>
                <div className="flex flex-col justify-center  ">
                  <p className="mt-auto mb-auto p-2 text-yellow-500">
                    Nombre: {l.persona}
                  </p>
                  <p className="mt-auto mb-auto p-2 text-yellow-500">
                    Hora de Entrega: {l.hora} PM
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
