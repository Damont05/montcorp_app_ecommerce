import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (token) => {
    Cookies.set("token", token, {
      secure: true,
      sameSite: "strict",
    });
    setIsAuthenticated(true);
    navigate("/");
  };

  const logout = (token) => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  let data = { isAuthenticated, login, logout };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
