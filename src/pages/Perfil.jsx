import React from "react";
import Navbar from "../components/Navbar";
import ReturnDataUser from "../components/ReturnDataUser";
import axios from "axios";
import { useState, useEffect } from "react";

const Perfil = () => {
  
  return (
    <div className="bg-negroAzul h-screen w-full  ">
      {/* <Navbar /> */}
      <div className="text-yellow-500 flex justify-center items-center flex-col relative top-20">
        <ReturnDataUser />
      </div>
    </div>
  );
};

export default Perfil;
