import places from "./../guidePlaces";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { set } from "express/lib/application";

const data = [
  {
    //zonas: para zonas solo se ocupa la zona
    zona: "escom_palapas",
    edificio: 2,
    salon: 1123,
  },
];

export const ReturnFormNewOrder = () => {
  const [chooseEdificioZona, setChooseEdificioZona] = useState(true);
  const [pedidos, setPedidos] = useState();
  const [inputs, setInputs] = useState({});
  const [precio, setPrecio] = useState();
  const user = localStorage.getItem("usr");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("carrito") && localStorage.getItem("precio")) {
      let arr = localStorage.getItem("carrito").split(",");
      let price = localStorage.getItem("precio").split(",");
      let total = 0;
      price.forEach((precio) => {
        total += parseInt(precio);
      });
      setPedidos(arr);
      setPrecio(total);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios
      .post("http://localhost:8888/DBCafe/ordenar.php/ordenar", inputs)
      .then((response) => {
        localStorage.removeItem("carrito");
        navigate("/Dashboard/Pedidos", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSelectZone = (e) => {
    setChooseEdificioZona(!chooseEdificioZona);
  };

  const handleChangeInput = (e) => {
    console.log(precio, "desdeaui");

    //aqui estaran mis inputs para mandarlos a mi post
    const hoy = new Date();
    let hora = hoy.getHours() + ":" + hoy.getMinutes();
    hora = hora.split(":");
    setInputs({
      ...inputs,
      ["pedidos"]: pedidos.toString(),
      ["usr"]: user,
      ["hr"]: hora[0],
      ["min"]: hora[1],
      [e.target.name]: e.target.value,
      ["total"]: precio,
    });
  };
  console.log(chooseEdificioZona, "desde  mi opcion", inputs);

  return (
    <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
      {pedidos ? (
        <>
          <Link to="/Dashboard/Menu">
            <h2 className="text-2xl">Tus pedidos</h2>
          </Link>
          <ol className="mb-8">
            {pedidos.map((pedido) => (
              <li>{pedido}</li>
            ))}
          </ol>
        </>
      ) : (
        <div>
          <Link to="/Dashboard/Menu">
            <h1 className="text-yellow-500 text-center mt-8">
              Aun no tienes tienes Articulos
            </h1>
            <h1 className="text-yellow-500 text-center mb-8">
              Click para ir al menu
            </h1>
          </Link>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <select
          className="text-red-700 m-5 w-40 border-4 "
          name="select"
          onChange={handleSelectZone}
        >
          <option value="Zona">Zona</option>
          <option value="Edificio">Edificio</option>
        </select>
        {!chooseEdificioZona ? (
          <div>
            <div>
              <span className="text-yellow-500 text-xl ">
                {" "}
                Edifico: {"    "}
              </span>
              <input
                type="number"
                className="border-2  rounded-xl m-4"
                placeholder="Selecciona edificio"
                onChange={handleChangeInput}
                name="edificio"
              />
            </div>
            <div>
              <span className="text-yellow-500 text-xl">Salon: </span>
              <input
                onChange={handleChangeInput}
                className="border-2  rounded-xl m-4"
                placeholder="salon"
                type="number"
                name="salon"
              />
            </div>
          </div>
        ) : (
          <div>
            {places.map((place) => (
              <div className="cursor-pointer">
                <input
                  key={place.id}
                  //por alguna manera me funciona asi y no () =>
                  onChange={handleChangeInput}
                  type="radio"
                  value={place.lugar}
                  name="lugaresEscom"
                />{" "}
                {place.lugar}
              </div>
            ))}
          </div>
        )}
        <hr className="bg-red-600 font-bold"></hr>
        <div>
          <span className="p-4 text-red-600 text-2xl">
            Deja una nota a la cafeteria{" "}
          </span>
          <textarea
            className="border-2 border-red-700 "
            onChange={handleChangeInput}
            placeholder="deja una nota"
            type="text"
            name="nota"
          />
        </div>
        <div className="flex justify-around mt-8">
          <button className=" p-2 bg-red-700 rounded-lg text-white">
            Cancelar
          </button>
          <input
            className=" p-2 bg-colorLetras rounded-lg text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};
