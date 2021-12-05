import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";
import PedidosCola from "../components/Pedidos_cola";
import { Link } from "react-router-dom";

const Pedidos = () => {
  const pedido = [
    {
      id: 1,
      Link: "/Pedidos/1",
      name: "pedido1",
      persona: "juan",
      hora: 10,
    },
    {
      id: 2,
      Link: "/Pedidos/2",
      name: "pedido2",
      persona: "trufa",
      hora: 10,
    },
    {
      id: 3,
      Link: "/Pedidos/3",
      name: "pedido3",
      persona: "pedro",
      hora: 10,
    },
    {
      id: 4,
      Link: "/Pedidos/4",
      name: "pedido4",
      persona: "alin",
      hora: 10,
    },
  ];
  return (
    <div className=" bg-secondary pb-20">
      <Navbar name="red" />
      <div className="w-full bg-secondary ">
        <h1 className="text-2xl bg-white text-center pt-1 pb-1 p-2">Pedidos</h1>
        <div className=" flex  justify-around">
          <div className="flex w-1/3 bg-white m-4 rounded-lg">
            <p className="mt-auto mb-auto pl-2 pr-2">Nuevo</p>
            <img src={mas} className=" w-3/12 h-4/5 m-auto" />
          </div>
          <div className="flex w-1/3 bg-white m-4 rounded-lg ">
            <p className="mt-auto mb-auto pl-2 pr-2 ">Borrar</p>
            <img src={mas} className=" w-3/12 h-3/5 m-auto" />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center">
        <div>
          {pedido.map((l, i) => (
            <Link to={l.Link}>
              <div className="flex w-8/12 bg-white m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
                <p className="mt-auto mb-auto pl-2 pr-2 ">
                  Nombre: {l.persona}
                </p>
                <p className="mt-auto mb-auto pl-2 pr-2 ">
                  Hora de Entrega: {l.hora} PM
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
