import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsAuthenticated(true);
        setUserId(decodedToken.id);
      } catch (error) {
        setMessage(error.message || "Error decodificando token");
      }
    }
  }, []);

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

  const logout = (token) => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUserId(null);
    navigate("/login");
  };

  let data = { isAuthenticated, userId, login, logout };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
