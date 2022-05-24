import { useNavigate } from "react-router-dom";
import { FormLogin } from "../components/FormLogin";
import bgLogin from "./../assets/bgLogin.png";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
export const Login = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${bgLogin})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className=" w-full h-screen bg-negroAzul bg-opacity-70"
        style={{
          backdropFilter: "blur(3px)",
        }}
      >
        <h1 className="text-yellow-500 z-10 text-4xl  p-8">Cafe&Code</h1>
        <h1 className="text-white z-10 text-4xl m-auto mt-10 text-center">
          Iniciar Sesion
        </h1>
        <FormLogin />
      </div>
    </div>
  );
};
