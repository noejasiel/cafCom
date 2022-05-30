import ESCOM_explanada from "./../assets/ESCOM_explanada.jpg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import carrito from "./../assets/carros.png";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [productos, setProductos] = useState({});
  const [productosCarrito, setProductosCarrito] = useState([]);

  //false para desactivado
  const [carritoTF, setCarritoTF] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", productosCarrito);
    console.log("me ejecuto");
  }, [productosCarrito]);

  const getUsers = () => {
    axios
      .get(`http://localhost:8888/DBCafe/getMenu.php/getMenu`)
      .then((response) => {
        setProductos(() => [response.data]);
        console.log(response.data);
      });
  };

  const addToCart = (e) => {
    console.log(e.currentTarget.childNodes[0].childNodes[2].innerHTML);
    console.log(e.currentTarget.childNodes[1].innerHTML);
    setProductosCarrito([
      ...productosCarrito,
      e.currentTarget.childNodes[0].childNodes[2].innerHTML,
    ]);
  };

  // const addToCart = (e) => {
  //   console.log(e.currentTarget.childNodes[0].childNodes[2].innerHTML);
  //   console.log(e.currentTarget.childNodes[1].innerHTML);
  //   setProductosCarrito([
  //     ...productosCarrito,
  //     e.currentTarget.childNodes[1].innerHTML,
  //   ]);
  // };
  const handleDeleteProduct = (producto) => {
    setProductosCarrito(productosCarrito.filter((item) => item !== producto));
  };

  return (
    <div className="w-full bg-negroAzul h-full pt-20">
      <h1 className="text-center text-white text-3xl">
        {carritoTF ? "Carrito de Compras" : "MENU"}
      </h1>
      <div className="cursor-pointer" onClick={() => setCarritoTF(!carritoTF)}>
        <label className="text-white">
          {carritoTF ? (
            <div className=" w-full flex justify-around m-3">
              <button className="pt-2 pb-2 pl-8 pr-8  bg-colorBoton rounded-lg text-white">
                Ocultar Carrito
              </button>
              {productosCarrito.length != 0 ? (
                <Link to="/Dashboard/Ordenar">
                  <button className="pt-2 pb-2 pl-8 pr-8  bg-colorLetras rounded-lg text-white">
                    Ordenar
                  </button>
                </Link>
              ) : null}
            </div>
          ) : (
            "Ver Carrito"
          )}
        </label>
        <img width="10%" src={carrito} />
      </div>
      {carritoTF
        ? productosCarrito.map((producto) => (
            <div className="w-4/5 m-auto rounded-2xl mt-2 flex p-5 items-center justify-around bg-gray-900 opacity-80 ">
              <img width="10%" src={ESCOM_explanada} />
              <p className="text-white ml-6 ">Producto: {producto}</p>
              <button
                className=" text-white "
                onClick={() => handleDeleteProduct(producto)}
              >
                Eliminar
              </button>
            </div>
          ))
        : null}

      <div className="flex  text-white  flex-col pb-10">
        {/* {productos[0] ? (
          productos[0].map((producto) => (
            <div
              className="flex items-center flex-col cursor-pointer"
              onClick={addToCart}
            >
              <img width="35%" src={ESCOM_explanada} />
              <label>{producto.nom_producto}</label>
            </div>
          ))
        ) : (
          <div>
            <h1>No hay nada que mostrar</h1>
          </div>
        )} */}
        {productos[0] ? (
          productos[0].map((producto) => (
            <Link to={producto.no_producto}>
              <div
                className="flex items-center flex-row cursor-pointer w-3/4 m-auto mt-4 mb-4 hover:bg-gray-600 p-2 rounded-2xl"
                //¡ onClick={addToCart}
              >
                <img width="35%" src={ESCOM_explanada} />
                <div className="flex flex-col ml-12" onClick={addToCart}>
                  <p>
                    producto:{" "}
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
                    precio:{" "}
                    <label className="text-yellow-500">
                      {producto.precio_producto}
                    </label>{" "}
                  </p>
                  <p>
                    tiempo preparacion:{" "}
                    <label className="text-yellow-500">
                      {producto.tiempo_coccion}
                    </label>{" "}
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>
            <h1>No hay nada que mostrar</h1>
          </div>
        )}
      </div>
    </div>
  );
};
