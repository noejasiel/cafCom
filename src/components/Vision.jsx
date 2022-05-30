import React from "react";
import somos from "../assets/somos.png";

const Vision = () => {
  return (
    <div className="w-full bg-blue-700 flex  justify-center pt-6 pb-6">
      <div className="w-10/12 flex justify-around">
        <img src={somos} width="110" />
        <div className="w-7/12">
          <h1 className="text-white ">Mision</h1>
          <p className="text-white ">
            Nos proyectamos como una aplicación que, a futuro, pueda reunir más
            cafeterías dentro de la zona de Zacatenco para brindar servicio de
            la comunidad politécnica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
