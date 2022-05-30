import { Outlet } from "react-router-dom";
import NavbarRepa from "../ComponentsRepa/NavbarRepa";

export const DashboardRepa = () => {
  return (
    <div>
      <NavbarRepa />
      <h1>yo soy Dashboard de Repartidor y soy ruta privada</h1>
      <Outlet />
    </div>
  );
};
