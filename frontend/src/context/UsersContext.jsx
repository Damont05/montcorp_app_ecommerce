import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const loggedInUserData = (data) => {
    // Guardar en cookies sin la contraseña
    Cookies.set("user", JSON.stringify(data), {
      secure: true,
      sameSite: "strict",
    });
  };

  let data = { loggedInUserData };
  return <UsersContext.Provider value={data}>{children}</UsersContext.Provider>;
};

export default UsersContextProvider;
