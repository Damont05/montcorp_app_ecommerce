import { Outlet } from "react-router-dom";
import NavbarLogic from "./navbar/NavbarLogic";
import FooterLogic from "./footer/FooterLogic";

const Layout = () => {
  return (
    <>
      <NavbarLogic />
      <Outlet />
      <FooterLogic />
    </>
  );
};

export default Layout;
