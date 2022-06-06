import { Outlet } from "react-router-dom";
import NavbarCafe from "./NavbarCafe";

export const DashboardCafe = () => {
  return (
    <div>
      <NavbarCafe />
      <Outlet />
    </div>
  );
};
