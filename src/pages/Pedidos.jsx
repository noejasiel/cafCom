import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";

const Pedidos = () => {
  return (
    <div className=" bg-secondary ">
      <Navbar name="red" />
      <div className="w-full bg-secondary ">
        <h1 className="text-2xl bg-white text-center pt-1 pb-1 p-2">Pedidos</h1>
        <div className="flex w-1/3 bg-white  ">
          <p className="mt-auto mb-auto pl-2 pr-2">Nuevo</p>
          <img src={mas} className="o" />
        </div>
        <div className="flex w-1/3 bg-white  ">
          <p className="mt-auto mb-auto pl-2 pr-2 ">Nuevo</p>
          <img src={mas} className="o" />
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
