import { Fragment, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import changeUser, { setUsr, setAuth } from "../user";

const data = {
  usr: "loco",
  pass: "loquito",
};

export const FormLogin = () => {
  const [warning, setWarning] = useState(true);

  const passRef = useRef();
  const usrRef = useRef();
  const valueUsr = "";

  const navigate = useNavigate();
  // //obtuve el valor del imput para enviarlo al server
  const [inputs, setInputs] = useState({});

  console.log(changeUser, inputs.usr);

 
  const handleChangeInput = (e) => {
    setWarning(true);
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSendLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8888/DBCafe/select.php/user/login", inputs)
      .then((response) => {
        console.log(response.data);
        //ya que si hay un mensaje es un mensaje de error 404
        if (!response.data) {
          setWarning(false);
          setUsr(inputs.usr);
          localStorage.setItem("usr", inputs.usr);
          navigate("/Dashboard", { replace: true });
        } else {
          setWarning(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(inputs);
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
            onChange={handleChangeInput}
            name="usr"
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
            onChange={handleChangeInput}
            name="pass"
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
      <div className="w-full text-center">
        <Link to="/register ">
          <p className="text-white">Registrate</p>
        </Link>
      </div>
    </Fragment>
  );
};
