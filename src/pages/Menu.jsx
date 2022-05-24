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
    console.log(e.currentTarget.childNodes[1].innerHTML);
    setProductosCarrito([
      ...productosCarrito,
      e.currentTarget.childNodes[1].innerHTML,
    ]);
  };

  const handleDeleteProduct = (producto) => {
    const itemPostionItem = productosCarrito.indexOf(producto);
    setProductosCarrito(productosCarrito.filter((item) => item !== producto));

    console.log(productosCarrito, "es lo que contiene productos");
  };

  return (
    <div className="w-full bg-negroAzul h-full">
      <h1 className="text-center text-white text-3xl">
        {carritoTF ? "Carrito de Compras" : "MENU"}
      </h1>
      <div className="cursor-pointer" onClick={() => setCarritoTF(!carritoTF)}>
        <label className="text-white">
          {carritoTF ? (
            <div className=" w-full flex justify-around m-3">
              <h1>ocultar carrito</h1>
              {
                productosCarrito.length != 0 ? <Link to="/Dashboard/Ordenar">
                <h2>Ordenar</h2>
              </Link> : null
              }
              
            </div>
          ) : (
            "Ver Carrito"
          )}
        </label>
        <img width="10%" src={carrito} />
      </div>
      {carritoTF
        ? productosCarrito.map((producto) => (
            <div className="w-full flex p-5 items-center justify-around">
              <img width="15%" src={ESCOM_explanada} />
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
        {productos[0] ? (
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
        )}
      </div>
    </div>
  );
};
