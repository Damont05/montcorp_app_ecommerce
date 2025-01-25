import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  //   Si no esta autenticado redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  //   Si esta autenticado redirige a las rutas protegidas
  return <Outlet />;
};

export default ProtectedRoutes;
