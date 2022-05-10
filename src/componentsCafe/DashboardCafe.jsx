import { Outlet } from "react-router-dom";
import NavbarCafe from "./NavbarCafe";

export const DashboardCafe = () => {
  return (
    <div>
      <NavbarCafe />
      <h1>yo soy Dashboard de Cafeteria y soy ruta privada</h1>
      <Outlet/>
    </div>
  );
};
