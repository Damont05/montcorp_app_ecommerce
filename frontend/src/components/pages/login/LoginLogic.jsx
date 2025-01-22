import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {  useState } from "react";
import LoginPresentation from "./LoginPresentation.jsx";

const LoginLogic = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stateButton, setStateButton] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    color: "",
  });

  // Valida que los inputs no esten vacios y la estructura del correo sea correcto
  const validateForm = () => {
    if (!email || !password) {
      handleResponseMessage("Todos los campos son obligatorios.", "red");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      handleResponseMessage("Correo electrónico no válido.", "red");
      return false;
    }
  };

  // Cambia el estado para validad si el button muestra texto o un spinner
  const handleStateButton = () => {
    setStateButton((prevState) => !prevState);
  };

  // Asignacion de mensaje y duracion en la que se muestra
  const handleResponseMessage = (message, color, duracion = 4000) => {
    setResponseMessage({ message, color });
    setTimeout(() => {
      setResponseMessage({ message: "", color: "" });
    }, duracion);
  };

  // Consumo de api para autenticar el usuario
  const loginUser = (email, password) => {
    // Login user http://localhost:8080/api/auth/login [POST]
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errors) => {
            throw new Error(errors.error);
          });
        }
        return response.json();
      })
      .then((data) => {
        const { status, message, token } = data;

        if (status === 200 && token) {
          // Guardar token en una cookie
          Cookies.set("token", token, {
            secure: true,
            sameSite: "strict",
          });

          // Redireccionar al dashboard de productos
          navigate("/");
        } else {
          throw new Error(message || "Error desconocido");
        }
      })
      .catch((error) => {
        handleResponseMessage(error.message || "Error de red", "red");
      });
  };

  // Manejo de envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    handleResponseMessage("", ""); // Limpia el estado en caso que tenga un mensaje anterior
    loginUser(email, password);
    if (validateForm()) {
    }
  };

  return (
    <LoginPresentation
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      responseMessage={responseMessage}
      handleSubmit={handleSubmit}
      handleStateButton={handleStateButton}
    />
  );
};

export default LoginLogic;
