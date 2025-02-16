import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setLoading(false); // Cuando ya tenemos el valor de isAuthenticated, dejamos de cargar
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // O puedes retornar un spinner o algo para indicar que se está verificando
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
