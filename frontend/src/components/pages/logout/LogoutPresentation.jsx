import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import "./Logout.module.css";

const LogoutPresentation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      // Eliminar las cookies de sesión
      Cookies.remove("token", { secure: true, sameSite: "strict" });
      Cookies.remove("user", { secure: true, sameSite: "strict" });

      setTimeout(() => {
        // Redirigir al usuario a la página de inicio de sesión
        navigate("/login");
      }, 3000);
    };
    logout();
  }, [navigate]);

  return (
    <>
      <div
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        my="40vh"
      >
        <h4>Cerrando sesión...</h4>
      </div>
    </>
  );
};

export default LogoutPresentation;
