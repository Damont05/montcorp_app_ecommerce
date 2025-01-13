import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterPresentation from "./RegisterPresentation.jsx";

const RegisterLogic = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleRegister = (formData) => {
    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errors) => {
            console.log(errors.error);
            throw new Error(errors.error);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.ok === true) {
          setResponseMessage("Registration successful!");
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          throw new Error("Error desconocido");
        }
      })
      .catch((error) => {
        setResponseMessage(error.message || "Error de red");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponseMessage(""); // Limpiar errores anteriores
    handleRegister(formData);
  };

  return (
    <RegisterPresentation
      formData={formData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      responseMessage={responseMessage}
    />
  );
};

export default RegisterLogic;
