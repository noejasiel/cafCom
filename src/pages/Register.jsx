import { Link, useNavigate } from "react-router-dom";
import { FormRegister } from "../components/FormRegister";
import bgLogin from "./../assets/bgLogin.png";
export const Register = () => {
  // const user = useContext(UserContext);
  // console.log(user);
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url(${bgLogin})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className=" w-full  bg-negroAzul bg-opacity-70"
        style={{
          backdropFilter: "blur(3px)",
        }}
      >
        <Link to="/">
          <h1 className="text-yellow-500 z-10 text-4xl  p-8">Cafe&Code</h1>
        </Link>
        <h1 className="text-white z-10 text-4xl m-auto  text-center">
          Registrate
        </h1>
        <FormRegister />
      </div>
    </div>
  );
};
