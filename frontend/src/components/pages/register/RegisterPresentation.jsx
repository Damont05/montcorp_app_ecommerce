import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "./Register.module.css";

const RegisterPresentation = ({
  formData,
  handleSubmit,
  handleChange,
  responseMessage,
}) => {
  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.container}`}
      >
        <div className={`row ${styles.cardContainer}`}>
          {/* Panel Izquierdo */}
          <div className={`col-12 col-md-6 ${styles.leftPanel}`}>
            <div className={styles.leftContent}>
              <h1 className={styles.title}>
                Tu cuenta te abre las puertas a un mundo de compras simples y
                rápidas.
              </h1>
              <p className={styles.subtitle}>
                Seguridad y comodidad en cada compra.
              </p>
            </div>
          </div>

          {/* Panel Derecho */}
          <div className={`col-12 col-md-6 ${styles.rightPanel}`}>
            <div className={styles.logoRegister}>
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
                alt=""
              />
              <h1>Vector</h1>
            </div>
            {/* Contenido del formulario */}
            <div className="text-center">
              <h2 className={styles.welcomeText}>
                ¡Estás a un paso de comenzar!
              </h2>
              <p>Por favor, ingrese su informacion para continuar.</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mt-4">
                {/* Nombre */}
                <Form.FloatingLabel label="Nombres">
                  <Form.Control
                    type="text"
                    name="name"
                    className={styles.inputField}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group className="mt-4">
                {/* Apellidos */}
                <Form.FloatingLabel label="Apellidos">
                  <Form.Control
                    type="text"
                    name="last_name"
                    className={styles.inputField}
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group className="mt-4">
                {/* Correo */}
                <Form.FloatingLabel label="Correo electrónico">
                  <Form.Control
                    type="email"
                    name="email"
                    className={styles.inputField}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.FloatingLabel>
              </Form.Group>
              <Form.Group className="mt-4">
                {/* Contraseña */}
                <Form.FloatingLabel label="Contraseña">
                  <Form.Control
                    type="password"
                    name="password"
                    className={styles.inputField}
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.FloatingLabel>
              </Form.Group>

              {responseMessage && (
                <p style={{ color: "red" }}>{responseMessage}</p>
              )}
              <Button className={`w-100 mt-3 ${styles.registerButton}`}>
                Registrar
              </Button>
            </Form>

            {/* <div className="text-center mt-4">
              <p>O inicie sesión con</p>
              <div className="d-flex justify-content-center gap-2">
                <Button variant="light" className={styles.socialButton}>
                  Google
                </Button>
                <Button variant="light" className={styles.socialButton}>
                  Facebook
                  
                </Button>
              </div>
            </div> */}

            <div className="text-center mt-3">
              <p>
                ¿Ya tienes una cuenta?
                <Link className={styles.signupLink} to={"/login"}>
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPresentation;
