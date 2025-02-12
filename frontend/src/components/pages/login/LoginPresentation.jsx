import { Link } from "react-router-dom";
import { Form, FloatingLabel, Button, Spinner } from "react-bootstrap";
import styles from "./Login.module.css";

const LoginPresentation = ({
  email,
  setEmail,
  password,
  setPassword,
  responseMessage,
  handleSubmit,
  handleStateButton,
}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={` row ${styles.cardContainer}`}>
              {/* Panel Izquierdo */}
              <div
                className={`col-12 col-md-6 ${styles.leftPanel} d-none d-md-flex`}
              >
                <div className={styles.leftContent}>
                  <h1 className={styles.title}>
                    Comprar en línea nunca fue tan fácil y rápido.
                  </h1>
                  <p className={styles.subtitle}>
                    En vector simplificamos tu experiencia de compra en línea.
                  </p>
                </div>
              </div>
              {/* Panel Derecho */}
              <div className={`col-12 col-md-6 ${styles.rightPanel}`}>
                <div className={styles.logo_login}>
                  <div className={styles.content_logo}>
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
                      alt=""
                    />
                    <h1>Vector</h1>
                  </div>
                </div>
                {/* Contenido del formulario */}
                <div className="text-center">
                  <h2 className={styles.welcomeText}>¡Bienvenido de nuevo!</h2>
                  <p>Por favor, inicie sesión con su cuenta.</p>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className={styles.customFormGroup}
                    controlId="formEmail"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      className={`${styles.customInputField}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder=""
                      autoComplete="off"
                    />
                    <label className={styles.customFloatingLabel}>
                      Correo electrónico
                    </label>
                  </Form.Group>

                  <Form.Group
                    className={styles.customFormGroup}
                    controlId="formPassword"
                  >
                    <Form.Control
                      type="password"
                      name="password"
                      className={styles.customInputField}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder=""
                      autoComplete="off"
                    />
                    <label className={styles.customFloatingLabel}>
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
                      className={`w-100 mt-3 ${styles.loginButton}`}
                    >
                      Iniciar sesión
                    </Button>
                  ) : (
                    <Button
                      onClick={handleStateButton}
                      type="submit"
                      className={`w-100 mt-3 ${styles.loginButton}`}
                    >
                      <Spinner animation="border" size="sm" />
                    </Button>
                  )}
                </Form>

                <div className="text-center mt-2">
                  <a href="#" className={styles.forgotPassword}>
                    ¿Has olvidado tu contraseña?
                  </a>
                </div>

                <div className="text-center mt-3">
                  <p>
                    ¿No tienes una cuenta?
                    <Link className={styles.signupLink} to={"/register"}>
                      Regístrate
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

export default LoginPresentation;
