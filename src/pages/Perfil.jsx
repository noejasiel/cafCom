import React from "react";
import Navbar from "../components/Navbar";
import user from "../assets/user.png";
import ReturnDataUser from "../components/ReturnDataUser";

const Perfil = () => {
  return (
    <div className="bg-negroAzul h-screen w-full  ">
      <Navbar />
      <div className="text-yellow-500 flex justify-center items-center flex-col relative top-20">
        <ReturnDataUser />
      </div>
    </div>
  );
};

export default Perfil;
