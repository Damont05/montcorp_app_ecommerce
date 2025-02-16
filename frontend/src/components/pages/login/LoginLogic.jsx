import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import LoginPresentation from "./LoginPresentation.jsx";
import { AuthContext } from "../../../context/AuthContext.jsx";

const LoginLogic = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stateButton, setStateButton] = useState(false);
  const [responseMessage, setResponseMessage] = useState({
    message: "",
    color: "",
  });

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

  // Manejo de envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    handleResponseMessage("", ""); // Limpia el estado en caso que tenga un mensaje anterior
    loginUser(email, password);
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
