import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavbarInicio = () => {
  return (
    <div className="relative z-20 blur-xl">
      <nav className="w-full h-16 bg-negroAzul opacity-90 fixed top-0 blur-xl">
        <div className="w-full bottom-100 left-0 flex justify-evenly items-center h-full">
          <Link to="/" className="w-1/2 text-center">
            <h1 className="text-yellow-500 z-10 text-4xl m-auto">Cafe&Code</h1>
          </Link>

          <div className=" w-1/2 flex justify-around text-white">
            <button className="bg-colorBoton p-2 rounded-xl">
              <Link to="/login">Iniciar Sesion</Link>
            </button>
            <button className="bg-colorBoton p-2 rounded-xl ">
              <Link to="/register">Registrarse</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarInicio;
