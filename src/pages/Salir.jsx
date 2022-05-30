import React from "react";
import { useNavigate } from "react-router-dom";

const Salir = () => {
  const navigate = useNavigate();
  localStorage.removeItem("usr");
  return navigate("/");
};

export default Salir;
