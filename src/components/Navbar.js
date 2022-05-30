import React, { useEffect, useState } from "react";
import menu from "../assets/menu.svg";
import Close_Icon from "../assets/close.svg";
import logo from "../assets/logoo.svg";
import redes from "../assets/redes.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const Salir = () => {
    localStorage.removeItem("usr");
    localStorage.removeItem("typeUsr");
    navigate("/");
  };

  return (
    <div className="relative z-20 blur-xl">
      <nav
        className={
          toggle
            ? "w-full h-16 bg-negroAzul bg-opacity-95 fixed z-50 top-0 blur-xl"
            : "w-full h-16 bg-negroAzul opacity-90 fixed top-0 blur-xl"
        }
      >
        <div className="w-100 h-full flex flex-wrap justify-around  content-center ">
          <div className=" bottom-100 left-0 flex justify-around items-center h-full">
            <Link to="/Dashboard">
              <h1 className="text-yellow-500 z-10 text-4xl m-auto">
                Cafe&Code
              </h1>{" "}
            </Link>
            {/* <img className="m-auto opacity-80x  " width="50" src={logo}></img> */}
          </div>
          <div></div>
          <div className=" flex flex-wrap content-center">
            {toggle ? (
              <img
                width="25px"
                className="cursor-pointer"
                onClick={handleToggle}
                src={Close_Icon}
                alt="close menu"
              />
            ) : (
              <img
                width="25px"
                className="cursor-pointer"
                onClick={handleToggle}
                src={menu}
                alt="hamburguer menu"
                z-10
              />
            )}
          </div>
          <ul
            className={
              toggle
                ? "absolute top-16 right-0 left-0 bg-negroAzul opacity-95 w-screen h-screen rounded-b z-10 flex justify-center flex-col"
                : "hidden"
            }
          >
            <li className=" cursor-pointer pt-10 pb-6  z-index text-center ">
              <Link
                to="/Dashboard"
                onClick={handleToggle}
                className=" text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9"
              >
                Home
              </Link>
            </li>
            <li className=" cursor-pointer p-6  z-index text-center">
              <Link
                to="Menu"
                onClick={handleToggle}
                className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 "
              >
                Menu
              </Link>
            </li>
            <li className=" cursor-pointer p-6  z-index text-center">
              <Link
                to="pedidos"
                onClick={handleToggle}
                className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 "
              >
                Pedidos
              </Link>
            </li>
            <li className=" cursor-pointer p-6  z-index text-center">
              <Link
                to="Perfil"
                onClick={handleToggle}
                className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 "
              >
                Mi perfil
              </Link>
            </li>
            <li className=" cursor-pointer p-6  z-index text-center">
              <button
                onClick={Salir}
                className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 "
              >
                Salir
              </button>
            </li>
            <li className=" cursor-pointer p-6  z-index text-center">
              <Link
                to="faqs"
                onClick={handleToggle}
                className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9 "
              >
                FAQS
              </Link>
            </li>
            <img src={redes} className="z-50 w-1/2 m-auto" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
