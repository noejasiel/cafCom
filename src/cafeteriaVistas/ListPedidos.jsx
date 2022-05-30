import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";
import PedidosCola from "../components/Pedidos_cola";
import { Link, useNavigate } from "react-router-dom";
import pedido, { getUser } from "./../data";
import { useEffect, useState } from "react";
import axios from "axios";
import { showDate } from "../components/showDate";
import { PedidosRecibidos } from "../componentsCafe/PedidosRecibidos";

export const ListPedidos = () => {
  const [pedidoos, setPedidos] = useState([]);
  const [pedidosRecicbidos, setPedidosRecibidos] = useState([]);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  //trayendo los pedidos de mi data.js
  const pedidos = pedido;

  useEffect(() => {
    getPedidos();
  }, [setPedidos]);

  const getPedidos = async () => {
    const usr = localStorage.getItem("usr");
    await axios
      .get(`http://localhost:8888/DBCafe/getPedidosCafe.php/getPedidosCafe/`)
      .then((response) => {
        console.log(response.data);
        const pedidosPendientes = response.data.filter(
          (pedido) => pedido.status !== "Entregado"
        );
        const pedidosTermi = response.data.filter(
          (pedido) => pedido.status == "Entregado"
        );
        setPedidosRecibidos(pedidosTermi);
        setPedidos(pedidosPendientes);
      });
  };
  console.log(pedidosRecicbidos);

  return (
    <div className="relative pt-16 bg-negroAzul h-screen w-full">
      {/* <Navbar name="red" /> */}
      <div className="w-full  ">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-yellow-500">
          Pedidos
        </h1>
      </div>
      <div
        className="cursor-pointer bg-green-700 text-center p-4 mt2 mb-2"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <div className="flex justify-center flex-col w-full">
            <h1 className="text-white">Pedidos entregados</h1>
            {pedidosRecicbidos.map((pedidoo) => (
              <div className=" w-9/12 bg-green-500 mb-5 rounded-lg flex justify-center items-center text-black m-auto flex-col">
                <p className="mt-auto mb-auto  ">Nombre: {pedidoo.usuario}</p>
                <p className="mt-auto mb-auto  ">Status: {pedidoo.status}</p>
                <p className="mt-auto mb-auto  ">Status: {pedidoo.pedido}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-white">lista de Entregados</h1>
          </div>
        )}
      </div>
      {/* <PedidosRecibidos pedidos={[pedidosRecicbidos]} /> */}
      <div className="w-full mt-2 bg-negroAzul  pb-30">
        <hr className="bg-white" />
        <div className="flex justify-center items-center mt-10 flex-col">
          {pedidoos.length != 0 ? (
            pedidoos.map((l, k) => (
              <div
                key={k}
                // className=" w-9/12 bg-colorBoton mb-5 rounded-lg flex justify-center items-center  "
                className={
                  l.status == "Entregado"
                    ? " w-9/12 bg-green-500 mb-5 rounded-lg flex justify-center items-center text-black"
                    : " w-9/12 bg-colorBoton mb-5 rounded-lg flex justify-center items-center text-yellow-500  "
                }
              >
                <Link to={l.no_orden.toString()}>
                  <div className="flex flex-col justify-center  ">
                    <p className="mt-auto mb-auto p-2 ">Nombre: {l.usuario}</p>
                    <p className="mt-auto mb-auto p-2 ">
                      Hora de Entrega Aproximada: {showDate(l.fecha)}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center  ">
              <p className="mt-auto mb-auto p-2 text-yellow-500 text-center ">
                NO HAY NADA QUE MOSTRAR <br /> Aun no hay pedidos
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
