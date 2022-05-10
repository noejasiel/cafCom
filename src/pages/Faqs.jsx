import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { CardFaqs } from "../components/CardFaqs";

const Faqs = () => {
  return (
    <div className="bg-negroAzul h-screen w-full pb-20">
      {/* <Navbar /> */}
      <div className="w-full text-yellow-500 flex justify-center items-center flex-col relative top-20">
        <h1 className="text-yellow-500 text-5xl text-center">
          Preguntas Frecuentes
        </h1>
        <CardFaqs />
      </div>
    </div>
  );
};

export default Faqs;
