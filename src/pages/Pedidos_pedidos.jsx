import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";
import PedidosCola from "../components/Pedidos_cola";
import mapa from "../assets/mapa.png";
import Bien from "../assets/btnBien.png"
import Mod from "../assets/Mod.png"

const Pedidos_pedidos = () => {
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
          <div className="flex w-10/12  m-4 rounded-lg flex-col relative h-2/5 mt-20 ">
            <p className=" bg-white pt-2 pbt-2 w-full mt-auto mb-auto pl-2 pr-2 text-center rounded-xl">
              Direccion de envio
            </p>
            <img
              src={mapa}
              className=" w-full  m-auto  relative top-8 pb-11"
              height="250"
            />
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-16 bg-white rounded-xl">
          <div className="flex w-8/12 bg-white m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            <p className="mt-auto mb-auto pl-2 pr-2 p-3">
              Nombre: {pedido.[0].persona}
            </p>
            <hr className="h-0.5 w-full bg-primary"/>
            <p className="mt-auto mb-auto pl-2 pr-2 p-3">
              Hora de Entrega: {(pedido.[0].hora)} PM
            </p>
          </div>
          <div className="w-full flex justify-around mb-10">
            <img src={Mod} width="90" height="100"/>
            <img src={Bien} width="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos_pedidos;
