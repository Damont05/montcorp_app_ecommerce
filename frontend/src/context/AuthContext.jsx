import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsAuthenticated(true); // Establecer isAuthenticated a true después de decodificar el token
        setUserId(decodedToken.id);
      } catch (error) {
        setIsAuthenticated(false); // Si el token no es válido, mantenerlo en false
        setUserId(null);
      }
    } else {
      setIsAuthenticated(false); // Si no hay token, considerarlo como no autenticado
    }
  }, [isAuthenticated]);

  const login = (token) => {
    Cookies.set("token", token, {
      secure: true,
      sameSite: "strict",
    });
    const decodedToken = jwtDecode(token);
    setIsAuthenticated(true);
    setUserId(decodedToken.id);
    navigate("/");
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    setIsAuthenticated(false);
    setUserId(null);
    navigate("/login");
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras verificamos la autenticación
  }

  let data = { isAuthenticated, userId, login, logout };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
