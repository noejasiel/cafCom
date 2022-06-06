import { useState } from "react";
import { useEffect } from "react";
import slide from "./../assets/slide.jpg";
import slide2 from "./../assets/slide2.jpg";
import slide3 from "./../assets/slide3.jpg";
import slide4 from "./../assets/slide4.jpg";
import slide5 from "./../assets/slide5.jpg";

const featuredImages = [slide, slide2, slide3, slide4, slide5];
let count = 0;
export const Slider = () => {
  const [indexElement, setIndexElement] = useState(0);

  useEffect(() => {
    startSlider();
  }, []);
  const handlePedido = () => {
    alert("nuevo pedido");
  };

  const startSlider = () => {
    setInterval(() => {
      nextPic();
    }, 9000);
  };

  const previousPic = () => {
    const productsLength = featuredImages.length;
    count = (indexElement + productsLength - 1) % productsLength;
    setIndexElement(count);
  };
  const nextPic = () => {
    count = (count + 1) % featuredImages.length;
    setIndexElement(count);
  };

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="w-full relative select-none">
        <div className="absolute top-3/4  w-full flex justify-center">
          <button
            onClick={() => handlePedido()}
            className="  text-center p-2 bg-colorBoton  rounded-3xl"
          >
            <h1 className="text-yellow-500 pl-4 pr-4 text-2xl ">Pide Ya</h1>
          </button>
        </div>
        <img
          width="100%"
          height="300px"
          src={featuredImages[indexElement]}
          alt=""
        />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button onClick={previousPic} className="text-white text-4xl">
            {"<"}
          </button>
          <button onClick={nextPic} className="text-white text-4xl">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};
