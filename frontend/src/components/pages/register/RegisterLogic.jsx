import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import RegisterPresentation from "./RegisterPresentation.jsx";

const RegisterLogic = () => {
  const navigate = useNavigate();
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
    console.log(responseMessage);
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value ?? "",
    }));
    console.log(userData);
  };

  // manejo de los responseMessage (mensaje, color ,tiempo que se muestra)
  const handleResponseMessage = (message, color, duration = 4000) => {
    setResponseMessage({ message, color });
    setTimeout(() => {
      setResponseMessage({ message: "", color: "" });
    }, duration);
  };

  // Validar formulario
  const validateForm = () => {
    // valida que todos los inputs no esten vacios
    if (
      !userData.name ||
      !userData.lastname ||
      !userData.email ||
      !userData.password
    ) {
      handleResponseMessage("Todos los campos son obligatorios.", "red");
      return false;
    }

    // valida que el correo sea valido en su estructura (ejemplo@gmail.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      handleResponseMessage("Correo electrónico no válido.", "red");
      return false;
    }

    // carateres minimo para la contraseña
    if (userData.password.length < 6) {
      handleResponseMessage(
        "La contraseña debe tener al menos 6 caracteres.",
        "red"
      );
      return false;
    }

    return true;
  };

  // logueal al usuario despues de registrarser exitosamente
  const loginUser = (email, password) => {
    // Login user http://localhost:8080/api/auth/login [POST]
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
        const { status, message, data: token } = data;

        if (status === 200 && token) {
          const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

          // guarda el token en una cookies
          Cookies.set("token", token, {
            expires,
            secure: true,
            sameSite: "strict",
          });

          navigate("/");
        } else {
          throw new Error(message || "Error desconocido");
        }
      })
      .catch((error) => {
        handleResponseMessage(error.message || "Error de red", "red");
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
        console.log("Respuesta completa:", response); // Verificar la respuesta del servidor
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
          throw new Error(data.message || "Error desconocido");
        }
      })
      .catch((error) => {
        handleResponseMessage(error.message || "Error de red", "red");
      });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    handleResponseMessage("", ""); //limpia el estado antes de volver a usarlo

    if (validateForm()) {
      userRegister(userData);
    }
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
