import React from "react";
import Mision from "../components/Mision";
import Navbar from "../components/Navbar";
import Somos from "../components/QuienSomos";
import Vision from "../components/Vision";

const Home = () => {
  return (
    <div className=" h-full w-full">
      <div className="bg-img-home bg-cover h-full w-full">
        <Navbar />
        <div className="h-3/4 w-full flex justify-center">
          <button className=" mt-48 mb-36 text-center p-2 bg-primary  rounded-3xl">
            <h1 className="text-white pl-4 pr-4">Pide Ya</h1>
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
