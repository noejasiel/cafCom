import React from "react";
import somos from "../assets/somos.png";

const Mision = () => {
  return (
    <div className="w-full bg-negroAzul flex  justify-center pt-6 pb-6">
      <div className="w-10/12 flex justify-around">
        <div className="w-7/12">
          <h1 className="text-white ">Mision</h1>
          <p className="text-white ">
            Somos Nombre y nos dedicamos a ahorrarte la vida ahorrandote tiempo
            en el pedido de tu comida y llevartelo a tu lugar
          </p>
        </div>
        <img src={somos} width="110" />
      </div>
    </div>
  );
};

export default Mision;
