import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const data = {
  usr: "loco",
  pass: "loquito",
};

export const FormLogin = (props) => {
  const [warning, setWarning] = useState(true);
  const passRef = useRef();
  const usrRef = useRef();
  const navigate = useNavigate();
  // //obtuve el valor del imput para enviarlo al server
  const [inputs, setInputs] = useState({});


  const handleSendLogin = (event) => {
    event.preventDefault();
    const name = passRef;
    const value = useRef;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(passRef.current.value);
    // console.log(usrRef.current.value);
    // if (
    //   usrRef.current.value == data.usr &&
    //   passRef.current.value == data.pass
    // ) {
    //   navigate("/Dashboard");
    // } else {
    //   setWarning(false);
    // }
    axios
      .post("http://localhost:8888/app/insert.php/user/save", inputs)
      .then((response) => {
        console.log(response);
        navigate("/");
      });

    if (passRef.current.value != null || usrRef.current.value != null) {
      setWarning(false);
    }
  };

  return (
    <Fragment>
      <form className="m-10   rounded-3xl bg-white bg-opacity-40  shadow-2xl shadow-black relative">
        <div className=" pb-1 p-5  flex items-center flex-col">
          <span className="text-gray-800 text-xl">Ingresa Usuario</span>
          <br />
          <input
            ref={usrRef}
            className="rounded-lg"
            placeholder="ingresa usuario"
            onChange={() => setWarning(true)}
          />
        </div>
        <br />
        <div className="p-5 pt-1 flex items-center flex-col">
          <span className="text-gray-800 text-xl">Ingresa Contraseña</span>
          <br />
          <input
            ref={passRef}
            className="rounded-lg"
            placeholder="ingresa Contraseña"
            onChange={() => setWarning(true)}
          />
          {warning ? null : (
            <p className="text-red-700 mt-10">! Credenciales incorrectas ¡</p>
          )}
        </div>
        <div className="pl-5 pr-5 pb-5 pt-1 flex items-center flex-col relative top-10">
          <button
            onClick={handleSendLogin}
            className="bg-colorBoton shadow-lg  p-2 pr-8 pl-8 rounded-xl text-white"
          >
            Enviar
          </button>
        </div>
      </form>
      <div className="w-full text-center">
        <Link to="/recuperarPass ">
          <p className="text-white">Olvidaste Contraseña?</p>
        </Link>
      </div>
    </Fragment>
  );
};
