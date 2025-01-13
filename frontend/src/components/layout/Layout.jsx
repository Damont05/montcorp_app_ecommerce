import { Outlet } from "react-router-dom";
import { NavbarLogic } from "./navbar";
import {FooterLogic} from "./footer";

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
