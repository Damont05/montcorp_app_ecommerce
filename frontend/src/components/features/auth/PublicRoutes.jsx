import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
