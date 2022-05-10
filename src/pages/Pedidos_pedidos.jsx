import React from "react";
import Navbar from "../components/Navbar";
import mas from "../assets/mas.png";
import PedidosCola from "../components/Pedidos_cola";
import mapa from "../assets/ESCOM_explanada.jpg";
import Bien from "../assets/btnBien.svg";
import Mod from "../assets/Mod.png";
import { useNavigate, useParams } from "react-router-dom";
import pedido, { getUser } from "./../data";

const Pedidos_pedidos = () => {
  const parametro = useParams();
  const navigate = useNavigate();

  //llamaos a una funcion donde estan los datos de las personas, simulando la bse
  const data = getUser(parametro.numero);
  console.log(data.pedido.pedido);

  const modDatos = () => {
    alert("modificar");
  };

  const allOk = () => {
    navigate("/Dashboard/Pedidos");
  };

  return (
    <div className=" bg-negroAzul pb-20 relative pt-16">
      {/* <Navbar name="red" /> */}
      <div className="w-full  ">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-white">
          Tu pedido
        </h1>
        <div className=" flex  justify-around">
          <div className="flex w-10/12  m-4 rounded-lg flex-col relative h-2/5 mt-10 ">
            <p className=" text-2xl pt-2 pbt-2 w-full mt-auto mb-auto pl-2 pr-2 text-center rounded-xl text-white">
              Lugar de envio
            </p>
            <img
              src={mapa}
              className=" w-full  m-auto  relative top-8 pb-11  rounded-3xl"
              height="250"
            />
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-8 bg-white rounded-xl opacity-90">
          <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            <p className="mt-auto mb-auto pl-2 pr-2 p-3">
              Nombre: <span className="text-red-600"> {data.persona}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3 ">
              Lugar de entrega:
              <span className="text-red-600"> {data.direccion}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3">
              contenido del pedido:
              <span className="text-red-600"> {data.pedido.pedido}</span>
            </p>
          </div>
          <div className="w-full flex justify-around mb-10">
            <button onClick={() => modDatos()}>
              <img src={Mod} width="90" height="100" />
            </button>
            <button onClick={() => allOk()}>
              <img src={Bien} width="50" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos_pedidos;
