import places from "./../guidePlaces";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";

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
  const user = localStorage.getItem("usr");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      let arr = localStorage.getItem("carrito").split(",");
      setPedidos(arr);
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
    });
  };
  console.log(chooseEdificioZona, "desde  mi opcion");

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
        <select name="select" onChange={handleSelectZone}>
          <option value="Zona">Zona</option>
          <option value="Edificio">Edificio</option>
        </select>
        {!chooseEdificioZona ? (
          <div>
            <div>
              <span>Edifico </span>
              <input
                type="number"
                onChange={handleChangeInput}
                name="edificio"
              />
            </div>
            <div>
              <span>salon </span>
              <input
                onChange={handleChangeInput}
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
