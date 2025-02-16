import { useContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import RegisterPresentation from "./RegisterPresentation.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";

const RegisterLogic = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [stateButton, setStateButton] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    color: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleStateButton = () => {
    setStateButton((prevState) => !prevState);
  };

  // escucha cambios en el evento change de los inputs y los guarda en el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value ?? "",
    }));
  };

  // manejo de los responseMessage (mensaje, color ,tiempo que se muestra)
  const handleResponseMessage = (message, color, duration = 4000) => {
    setResponseMessage({ message, color });
    setTimeout(() => {
      setResponseMessage({ message: "", color: "" });
    }, duration);
  };

  // logueal al usuario despues de registrarser exitosamente
  const loginUser = (email, password) => {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json().then((data) => {
          // Agregamos el response.ok aquí para manejar el estado correctamente
          if (!response.ok) {
            throw new Error(data.message);
          }
          return data;
        });
      })
      .then((data) => {
        const { status, message, token } = data;

        if (status === 200 && token) {
          setTimeout(() => {
            login(token);
          }, 2000);
          handleResponseMessage(message, "green");
        } else {
          handleResponseMessage(message, "red");
        }
      })
      .catch((error) => {
        handleResponseMessage(error.message, "red");
      });
  };

  // consumo de api para el registro de usuario
  const userRegister = (userData) => {
    fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errors) => {
            const errorMessage = errors.message || "Error desconocido";
            throw new Error(errorMessage);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === 201) {
          // Verifica que el código de estado sea 201
          handleResponseMessage(
            "¡Registro exitoso! Bienvenido a nuestra tienda.",
            "green"
          );

          setTimeout(() => {
            loginUser(userData.email, userData.password);
          }, 2000);
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        handleResponseMessage(error.message, "red");
      });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    handleResponseMessage("", ""); //limpia el estado antes de volver a usarlo

    userRegister(userData);
  };

  return (
    <RegisterPresentation
      userData={userData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      responseMessage={responseMessage}
      handleStateButton={handleStateButton}
    />
  );
};

export default RegisterLogic;
