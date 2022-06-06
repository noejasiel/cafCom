import ESCOM_explanada from "./../assets/ESCOM_explanada.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const MenuCafe = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState({});
  const [banner, setBanner] = useState(false);
  const [deleteItem, setDeleteItem] = useState(false);

  //false para desactivado

  useEffect(() => {
    getUsers();
  }, []);

  // const handleDelete = () => {
  //   setDeleteItem(() => setDeleteItem(!deleteItem));
  //   setBanner(!banner);
  // };

  const btnDeleteProduct = (noProducto) => {
    // console.log(noProducto);
    // const trueFalse = areYouSure();
    // console.log(trueFalse);
    axios
      .delete(
        `http://localhost:8888/DBCafe/cafe/deleteItemMenu.php/deleteItem/${noProducto}`
      )
      .then((response) => {
        console.log(response.data);
        if (!response.data) {
          getUsers();
        }
      });
  };

  const getUsers = () => {
    axios
      .get(`http://localhost:8888/DBCafe/getMenu.php/getMenu`)
      .then((response) => {
        setProductos(() => [response.data]);
        console.log(response.data);
      });
  };

  const focusBtn = () => {
    navigate("/DashboardCafe/MenuItem");
  };

  return (
    <div className="w-full bg-negroAzul h-full pt-20">
      <h1 className="text-center text-white text-3xl">MENU</h1>
      <button
        onClick={focusBtn}
        className="text-green-500 font-bold rounded-full bg-white pt-2 pl-4 pb-2 pr-4  fixed right-8 bottom-8 hover:bg-green-500 hover:text-white"
      >
        agregar producto
      </button>
      {/* {banner ? (
        <div className="w-full fixed">
          <div className="w-full bg-red-600 h-28 flex justify-center items-center fixed top-1/2  flex-col">
            <h1 className="text-white text-3xl">
              ¿seguro que deseas Eliminar el Producto?
            </h1>
            <div className="p-4">
              <button
                onClick={() => setBanner(!banner)}
                className="pl-6 pr-6 pt-2 pb-2 bg-colorBoton text-white rounded-2xl hover:bg-white hover:text-blue-900"
              >
                no
              </button>
              <button
                onClick={() => setDeleteItem(!deleteItem)}
                className=" ml-4 pl-6 pr-6 pt-2 pb-2 bg-white text-green-500 rounded-2xl hover:bg-green-500 hover:text-white"
              >
                si
              </button>
            </div>
          </div>
        </div> */}
      {/* ) : null} */}
      <div className=" w-full flex  text-white flex-col pb-10 items-center justify-center ">
        {productos[0] ? (
          productos[0].map((producto) => (
            <div className="flex">
              <div className=" w-full flex justify-center ">
                <div className="flex flex-row">
                  <Link
                    className=" flex items-center flex-row justify-around cursor-pointer w-4/5  mt-2 mb-2 hover:bg-gray-600 p-2 rounded-2xl"
                    to={producto.no_producto}
                  >
                    <div className="w-full flex justify-around">
                      <img
                        className=" w-40"
                        src={
                          require(`./../assets/Productos/${producto.rutaImg}`)
                            .default
                        }
                      />
                    </div>
                    <div className="w-full ml-10 mr-10 flex flex-col justify-center text-center">
                      <p>
                        producto:
                        <label className="text-yellow-500">
                          {producto.nom_producto}
                        </label>
                      </p>
                      <p>
                        Descripcion:
                        <label className="text-yellow-500">
                          {producto.desc_producto}
                        </label>
                      </p>
                      <p>
                        precio:
                        <label className="text-yellow-500">
                          {producto.precio_producto}
                        </label>
                      </p>

                      <p>
                        tiempo preparacion:{" "}
                        <label className="text-yellow-500">
                          {producto.tiempo_coccion}
                        </label>{" "}
                      </p>
                    </div>
                    {/* <div className="w-full flex justify-center"></div> */}
                  </Link>
                  <div className=" flex items-center justify-center w-1/6">
                    <button
                      onClick={() => btnDeleteProduct(producto.no_producto)}
                      className="text-red-600  font-bold rounded-2xl bg-white pt-2 pl-4 pb-2 pr-4 hover:bg-red-600 hover:text-white "
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
              {/* <div className=" flex items-center justify-center w-1/5">
                <button
                  onClick={() => setBanner(!banner)}
                  className="text-red-600  font-bold rounded-2xl bg-white pt-2 pl-4 pb-2 pr-4 hover:bg-red-600 hover:text-white "
                >
                  Eliminar
                </button>
              </div> */}
            </div>
          ))
        ) : (
          <div>
            <h1 className=" pb-full text-4xl">No hay nada que mostrar</h1>
          </div>
        )}
      </div>
    </div>
  );
};
