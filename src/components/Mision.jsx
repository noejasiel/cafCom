import React from "react";
import somos from "../assets/somos.png";

const Mision = () => {
  return (
    <div className="w-full bg-blue-800 flex  justify-center pt-6 pb-6">
      <div className="w-10/12 flex justify-around">
        <div className="w-7/12">
          <h1 className="text-white ">Mision</h1>
          <p className="text-white ">
            Nuestra aplicación busca posicionarse como una nueva alternativa de
            servicios de entrega de comida en un primer enfoque sirviendo
            productos de la cafetería escolar.
          </p>
        </div>
        <img src={somos} width="110" />
      </div>
    </div>
  );
};

export default Mision;
