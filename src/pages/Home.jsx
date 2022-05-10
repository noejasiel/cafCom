import React from "react";
import Mision from "../components/Mision";
import Navbar from "../components/Navbar";
import NavbarInicio from "../components/NavbarInicio";
import Somos from "../components/QuienSomos";
import Vision from "../components/Vision";

const Home = () => {
  const handlePedido = () => {
    alert("nuevo pedido");
  };

  return (
    <div className=" h-full w-full h-screen pb-20">
      <div className="bg-img-home bg-cover h-full w-full">
        {/* <Navbar /> */}
        <NavbarInicio />
        <div className="h-3/4 w-full flex justify-center">
          <button
            onClick={() => handlePedido()}
            className=" m-auto mb-36 text-center p-2 bg-colorBoton  rounded-3xl"
          >
            <h1 className="text-yellow-500 pl-4 pr-4 text-2xl ">Pide Ya</h1>
          </button>
        </div>
      </div>
      <Somos />
      <Mision />
      <Vision />
    </div>
  );
};

export default Home;
