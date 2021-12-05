import React from "react";
import mas from "../assets/mas.png";
import { Link } from "react-router-dom";

const PedidosCola = () => {
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
    <>
      {pedido.map((l, i) => (
        <Link to={l.Link}>
          <div className="flex w-8/12 bg-white m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            <p className="mt-auto mb-auto pl-2 pr-2 "> Nombre: {l.persona}</p>
            <p className="mt-auto mb-auto pl-2 pr-2 ">
              Hora de Entrega: {l.hora} PM
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PedidosCola;
