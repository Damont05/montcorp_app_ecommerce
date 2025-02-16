import { useContext, useEffect, useState } from "react";
import NavbarPresentation from "./NavbarPresentation";
import { ProductsContext } from "../../../context/ProductsContext";
import { AuthContext } from "../../../context/AuthContext";
import Cookies from "js-cookie";
import { UsersContext } from "../../../context/UsersContext";

const NavbarLogic = () => {
  const [search, setSearch] = useState("");
  const [focused, setFocused] = useState(false);
  const { userId } = useContext(AuthContext);
  const { loggedInUserData } = useContext(UsersContext);
  const { setFilteredProduct } = useContext(ProductsContext);
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    color: "",
  });
  const tokenCookies = Cookies.get("token");

  const handleResponseMessage = (message, color, duracion = 4000) => {
    setResponseMessage({ message, color });
    setTimeout(() => {
      setResponseMessage({ message: "", color: "" });
    }, duracion);
  };

  const userProfileData = (userId, token) => {
    fetch(`http://localhost:8080/api/user/get/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Incluir el token en el encabezado
      },
    })
      .then((response) => {
        // Guardar una copia de response.ok antes de procesar el JSON
        return response.json().then((data) => {
          if (!response.ok) {
            throw new Error(data.message || "Error en la solicitud");
          }
          return data; // Retornamos los datos en caso de éxito
        });
      })
      .then((dat) => {
        const { status, message, data } = dat;
        const { password, ...userWithoutPassword } = data[0];

        if (status === 200) {
          setTimeout(() => {
            loggedInUserData(userWithoutPassword);
          }, 2000);

          handleResponseMessage(message, "green");
        } else {
          handleResponseMessage(message, "red");
        }
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
        handleResponseMessage(error.message, "red");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleResponseMessage("", ""); // Limpia el estado en caso que tenga un mensaje anterior
    userProfileData(userId, tokenCookies);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    if (search !== "") {
      setFilteredProduct({ key: "name", value: search });
    } else {
      setFilteredProduct({ key: "", value: "" });
    }
  }, [search]);

  let data = {
    search,
    focused,
    setFocused,
    handleSearch,
    handleSubmit,
    responseMessage,
  };
  return <NavbarPresentation data={data} />;
};

export default NavbarLogic;
