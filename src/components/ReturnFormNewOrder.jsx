import places from "./../guidePlaces";
import escom from "./../assets/ESCOM_explanada.jpg";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const data = [
  {
    //zonas: para zonas solo se ocupa la zona
    zona: "escom_palapas",
    edificio: 2,
    salon: 1123,
  },
];

export const ReturnFormNewOrder = () => {
  const [placeChoose, setPlaceChoose] = useState();
  const [chooseEdificioZona, setChooseEdificioZona] = useState("Edificio");
  const [pedidos, setPedidos] = useState();
  const [imputs, setImputs] = useState({});

  useEffect(() => {
    if (localStorage.getItem("carrito")) {
      let arr = localStorage.getItem("carrito").split(",");
      setPedidos(arr);
    }
  }, []);
  console.log(pedidos);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(placeChoose);
  };

  const handlePlace = (e) => {
    setPlaceChoose(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeInput = (e) => {
    setChooseEdificioZona(() => e.target.value);
    console.log(e.currentTarget.name, "desde camboi");
  };
  console.log(chooseEdificioZona);

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
            <h1>Click para ir al menu</h1>
          </Link>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <select name="select" onChange={handleChangeInput}>
          <option value="Zona">Zona</option>
          <option value="Edificio">Edificio</option>
        </select>
        {chooseEdificioZona == "Edificio" ? (
          <div>
            <div>
              <span>Edifico </span>
              <input
                type="number"
                min="1"
                max="4"
                onChange={handleChangeInput}
                name="email"
              />
            </div>
            <div>
              <span>salon </span>
              <input
                onChange={handleChangeInput}
                placeholder="salon"
                type="number"
                name="lugar"
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
                  onChange={handlePlace}
                  type="radio"
                  value={place.lugar}
                  name="lugaresEscom"
                />{" "}
                {place.lugar}
              </div>
            ))}
          </div>
        )}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
