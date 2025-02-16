import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated !== undefined) {
      setLoading(false); // Cuando ya tenemos el valor de isAuthenticated, dejamos de cargar
    }
  }, [isAuthenticated]);

  if (loading) {
    return <div>Loading...</div>; // O un spinner
  }

  // Si ya está autenticado, redirige al home
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
