import places from "./../guidePlaces";
import escom from "./../assets/ESCOM_explanada.jpg";
import { useRef } from "react";
import { useState } from "react";

export const ReturnFormNewOrder = () => {
  const lugarRef = useRef();
  const [placeChoose, setPlaceChoose] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(placeChoose);
  };

  const handlePlace = (e) => {
    setPlaceChoose(e.target.value);
  };

  return (
    <div className="flex w-8/12 bg-white  m-4 rounded-lg justify-center flex-col items-center pt-2 pb-2 pl-2 pr-2">
      <form onSubmit={handleSubmit}>
        <div>
          <span>nombre </span>
          <input placeholder="name" name="name" />
        </div>
        <div>
          <span>nombre </span>
          <input placeholder="name" name="number" />
        </div>
        <div>
          <span>nombre </span>
          <input placeholder="name" name="email" />
        </div>
        <div>
          <span>nombre </span>
          <input placeholder="name" name="lugar" />
        </div>
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
