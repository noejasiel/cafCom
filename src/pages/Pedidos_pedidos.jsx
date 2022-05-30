import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { showDate } from "../components/showDate";

const Pedidos_pedidos = () => {
  const parametro = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [pedidos, setPedidos] = useState();
  const [doYouSaySerious, setDoYouSaySerious] = useState(false);

  //llamaos a una funcion donde estan los datos de las personas, simulando la bse

  console.log(parametro.numero);

  const cancelOrder = async () => {
    await axios
      .delete(
        `http://localhost:8888/DBCafe/deleteUser.php/user/${parametro.numero}/delete`
      )
      .then((response) => {
        console.log(response.data);
        navigate("/Dashboard/Pedidos");
      });
  };

  const allOk = () => {
    navigate("/Dashboard/Pedidos");
  };

  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   upDateUser();
  // }, [user]);

  const getUser = () => {
    axios
      .get(
        `http://localhost:8888/DBCafe/getUserPedido.php/getPedidos/${parametro.numero}`
      )
      .then((response) => {
        console.log(response.data[0]);
        setUser(response.data[0]);
      });
  };
  console.log(user);

  const areYouSure = () => {
    setDoYouSaySerious(!doYouSaySerious);
  };

  // const upDateUser = () => {
  //   setPedidos(pedido.split(","));
  //   console.log(pedido);
  // };

  return (
    <div className=" bg-negroAzul pb-20 relative pt-16">
      <div className="w-full  ">
        <h1 className="text-4xl  text-center pt-4 pb-1 p-2 text-white">
          Tu pedido
        </h1>
        <div className=" flex  justify-around">
          {doYouSaySerious ? (
            <div className="flex flex-col justify-center fixed top-40 p-10 bg-colorBoton z-10 opacity-99 text-white">
              <p className="mt-auto mb-auto p-2  text-white">
                Estas seguro, si cancelas se te cobrara en tu proximo pedido
              </p>
              <div className="flex justify-around">
                <button
                  className="pt-2 pb-2 pl-8 pr-8  bg-colorLetras rounded-lg text-white"
                  onClick={cancelOrder}
                >
                  Si
                </button>
                <button
                  className=" p-2 bg-red-700 rounded-lg text-white"
                  onClick={() => setDoYouSaySerious(!doYouSaySerious)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : null}

          <div className="flex w-10/12  m-4 rounded-lg flex-col relative h-2/5 mt-10 ">
            <p className=" text-2xl pt-2 pbt-2 w-full mt-auto mb-auto pl-2 pr-2 text-center rounded-xl text-white">
              Lugar de envio :
              {user.edificio != 0 ? (
                <div>
                  {" "}
                  <h1> edificio : {user.edificio}</h1>{" "}
                  <h1> salon : {user.salon}</h1>{" "}
                </div>
              ) : (
                <h1> la zona donde se enviara sera: {user.zona}</h1>
              )}
            </p>
            {/* <img
              src={mapa}
              className=" w-full  m-auto  relative top-8 pb-11  rounded-3xl"
              height="250"
            /> */}
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <div className="flex w-11/12 justify-center flex-col items-center relative mt-8 bg-white rounded-xl opacity-90">
          <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
            <p className="mt-auto mb-auto pl-2 pr-2 p-3">
              Nombre: <span className="text-red-600"> {user.usuario}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3 ">
              Status :<span className="text-red-600"> {user.status}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
              contenido del pedido:
              <span className="text-red-600 "> {user.pedido}</span>
            </p>
            <hr className="h-0.5 w-full bg-primary" />
            <p className="mt-auto mb-auto pl-2 pr-2 p-3 text-center">
              se estima que el repartidor legue a:
              <span className="text-red-600 "> {showDate(user.fecha)}</span>
            </p>
          </div>
          <div className="w-full flex justify-around mb-10">
            <button
              onClick={areYouSure}
              className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-9 pb-2 pr-9"
            >
              Cancelar Orden
            </button>
            <button
              onClick={allOk}
              className="text-yellow-500 font-bold rounded-2xl bg-colorBoton pt-2 pl-5 pb-2 pr-5"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos_pedidos;
