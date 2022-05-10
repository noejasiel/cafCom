import { useState } from "react";
import { useEffect } from "react";
import places from "./../guidePlaces";

export const ReturnPlaces = () => {
  const index = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
  };

  // className={
  //   togleAnswer[place.id] && togleAnswer[place.id] == place.id
  //     ? " mb-10"
  //     : "mb-10 opacity-10"
  // }

  const [togleAnswer, setTogleAnswer] = useState(index);
  const [imgActive, setImgActive] = useState();

  const handleTogle = (imgId) => {
    setTogleAnswer({ ...togleAnswer, [imgId]: !togleAnswer[imgId] });
    setImgActive(imgId);
  };
  // hacer algo parecido a faqs si le das click a uno desaparecen todos XD
  return (
    <div className="w-full grid grid-cols-1 gap-2">
      {places.map((place, k) => (
        // si existe esa valor entonces un atributo del objeto esta en true
        <button key={k} onClick={() => handleTogle(place.id)}>
          <div
            className={
              imgActive == place.id
                ? " mb-7 pt-2 pb-2 flex flex-row justify-center w-full hover:bg-colorBoton rounded-2xl opacity-100"
                : " mb-7 pt-2 pb-2 flex flex-row justify-center w-full hover:bg-colorBoton rounded-2xl opacity-10"
            }
          >
            <img width="40%" className="m-auto rounded-xl" src={place.url} />
            <div className="m-auto flex flex-col ">
              <p className="text-yellow-500 text-left">{place.lugar}</p>
              <p className="text-yellow-500 text-left">
                tiempo llegada aprox: 7min
              </p>
            </div>
            {/* //como invertimos el objeto a true, tenemos que inversir y decir el
            unico //que no existe */}
            {/* {!togleAnswer[place.id] ? (
              <p className="text-white">"holaaaa soy texto de prueba"</p>
            ) : null} */}
          </div>
        </button>
      ))}
    </div>
  );
};
