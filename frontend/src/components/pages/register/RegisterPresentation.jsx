import { Link } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import styles from "./Register.module.css";

const RegisterPresentation = ({
  userData,
  handleSubmit,
  handleChange,
  responseMessage,
  handleStateButton,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={`row ${styles.cardContainer}`}>
              {/* Panel Izquierdo */}
              <div
                className={`col-12 col-md-6 ${styles.leftPanel} d-none d-md-flex`}
              >
                <div className={styles.leftContent}>
                  <h1 className={styles.title}>
                    Tu cuenta te abre las puertas a un mundo de compras simples
                    y rápidas.
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
                  <Form.Group className={styles.customFormGroup}>
                    <Form.Control
                      id="nameInput" // Asegura que el input tenga un ID único
                      type="text"
                      name="name"
                      className={styles.customInputField}
                      value={userData.name}
                      onChange={handleChange}
                      placeholder=""
                      autoComplete="off"
                    />
                    <label
                      htmlFor="nameInput"
                      className={styles.customFloatingLabel}
                    >
                      Nombres
                    </label>
                  </Form.Group>

                  <Form.Group className={styles.customFormGroup}>
                    {/* Apellidos */}
                    <Form.Control
                      id="lastNameInput"
                      type="text"
                      name="lastname"
                      className={styles.customInputField}
                      value={userData.lastname}
                      onChange={handleChange}
                      placeholder=""
                      autoComplete="off"
                    />
                    <label
                      htmlFor="lastNameInput"
                      className={styles.customFloatingLabel}
                    >
                      Apellidos
                    </label>
                  </Form.Group>
                  <Form.Group className={styles.customFormGroup}>
                    {/* Correo */}
                    <Form.Control
                      id="emailInput"
                      type="email"
                      name="email"
                      className={styles.customInputField}
                      value={userData.email}
                      onChange={handleChange}
                      placeholder=""
                      autoComplete="off"
                    />
                    <label
                      htmlFor="emailInput"
                      className={styles.customFloatingLabel}
                    >
                      Correo electrónico
                    </label>
                  </Form.Group>
                  <Form.Group className={styles.customFormGroup}>
                    {/* Contraseña */}
                    <Form.Control
                      id="passwordInput"
                      type="password"
                      name="password"
                      className={styles.customInputField}
                      value={userData.password}
                      onChange={handleChange}
                      placeholder=""
                      autoComplete="off"
                    />
                    <label
                      htmlFor="passwordInput"
                      className={styles.customFloatingLabel}
                    >
                      Contraseña
                    </label>
                  </Form.Group>

                  {responseMessage.message !== "" && (
                    <p
                      style={{ backgroundColor: responseMessage.color }}
                      className={`${styles.responseMessage}`}
                    >
                      {responseMessage.message}
                    </p>
                  )}

                  {responseMessage.message === "" ? (
                    <Button
                      onClick={handleStateButton}
                      type="submit"
                      className={`w-100 mt-3 ${styles.registerButton}`}
                    >
                      Registrar
                    </Button>
                  ) : (
                    <Button
                      onClick={handleStateButton}
                      type="submit"
                      className={`w-100 mt-3 ${styles.registerButton}`}
                    >
                      <Spinner animation="border" size="sm" />
                    </Button>
                  )}
                </Form>

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
        </div>
      </div>
    </>
  );
};

export default RegisterPresentation;
