import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import LoginPresentation from "./LoginPresentation.jsx";

const LoginLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    fetch("http://localhost:8080/auth/login", {
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
        if (data.ok === true) {
          const { user, token } = data.userLogin;
          // Limitar la expiración del token a 15 minutos
          const expires = new Date(new Date().getTime() + 15 * 60 * 1000);
          // Guardar token en una cookie
          Cookies.set("token", token, {
            expires,
            secure: true,
            sameSite: "strict",
          });
          // Guardar datos del usuario en cookie
          Cookies.set(
            "user",
            JSON.stringify({
              id: user.id,
              name: user.name,
              email: user.email,
              phone: user.phone,
              address: user.address,
            }),
            { expires: 7, secure: true, sameSite: "strict" }
          );
          navigate("/"); // Redireccionar al inicio después de iniciar sesión y guardar los datos
        } else {
          throw new Error("Error desconocido");
        }
      })
      .catch((error) => {
        setError(error.message || "Error de red");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Limpiar errores anteriores
    handleLogin(email, password);
  };

  return (
    <LoginPresentation
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error} // Pasar el estado de error al componente Login
      handleSubmit={handleSubmit}
    />
  );
};

export default LoginLogic;
