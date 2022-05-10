import React from "react";
import { Outlet } from "react-router-dom";
import NavbarCafe from "../componentsCafe/NavbarCafe";
import ReturnDataCafe from "../componentsCafe/ReturnDataCafe";

const PerfilCafeteria = () => {
  return (
    <div className="bg-negroAzul h-screen w-full  ">
      <div className="text-yellow-500 flex justify-center items-center flex-col relative top-20">
        <ReturnDataCafe />
      </div>
    </div>
  );
};

export default PerfilCafeteria;
