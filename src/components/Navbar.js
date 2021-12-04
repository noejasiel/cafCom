import React, { useEffect, useState } from "react";
import menu from "../assets/menu.png";
import Close_Icon from "../assets/X.png";
import logo from "../assets/logoo.svg";
import redes from "../assets/redes.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = (color) => {
  const col = false;
  if (color == "red") {
    col = true;
  }
  console.log(color);
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // useEffect(() => {
  //   if (location.pathname !== "/") {
  //     setShowNav(true);
  //   } else {
  //     setShowNav(false);
  //   }
  // });

  return (
    <div
    // className={
    //   showNav
    //     ? // ? "w-full h-20 bg-gradient-to-l from-purple-600 to-purple-400"
    //       "w-full h-16 bg-black  m-auto"
    //     : "hidden"
    // }
    >
      <nav
        className={
          toggle ? "w-100 h-16 bg-secondary bg-opacity-95" : "w-100 h-16 "
        }
      >
        <div className="w-100 h-full flex flex-wrap justify-around  content-center">
          <div className="relative bottom-100 left-0 flex justify-around items-center h-100">
            <h1 className="text-green-50 text-2xl m-auto">caf-Com</h1>
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
              />
            )}
          </div>
          <ul
            className={
              toggle
                ? "absolute top-16 right-0 left-0 bg-secondary opacity-95 w-screen h-screen rounded-b z-10 flex justify-center flex-col"
                : "hidden"
            }
          >
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index text-center ">
              <Link
                to="/"
                className="p-2 text-red-700 font-bold border-2 rounded-2xl bg-white"
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index text-center">
              <Link to="Pedidos" className="p-2 text-white font-bold ">
                Pedidos
              </Link>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index text-center">
              <Link to="/Perfil" className="p-2 text-white font-bold ">
                Mi perfil
              </Link>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index text-center">
              <Link to="/Salir" className="p-2 text-white font-bold ">
                Salir
              </Link>
            </li>
            <li className="hover:bg-indigo-900 cursor-pointer p-6 active:bg-indigo-900 z-index text-center">
              <Link to="/Faqs" className="p-2 text-white font-bold ">
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
