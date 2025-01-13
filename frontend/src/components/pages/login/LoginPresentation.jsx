import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";

const LoginPresentation = ({
  email,
  setEmail,
  password,
  setPassword,
  error,
  handleSubmit,
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
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
                alt=""
              />
              <h1>Vector</h1>
            </div>
            {/* Contenido del formulario */}
            <div className="text-center">
              <h2 className={styles.welcomeText}>¡Bienvenido de nuevo!</h2>
              <p>Por favor, inicie sesión en su cuenta.</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mt-4" controlId="formEmail">
                <Form.FloatingLabel label="Correo electrónico">
                  <Form.Control
                    type="email"
                    name="email"
                    className={styles.inputField}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.FloatingLabel>
              </Form.Group>

              <Form.Group className="mt-4" controlId="formPassword">
                <Form.FloatingLabel label="Contraseña">
                  <Form.Control
                    type="password"
                    name="password"
                    className={styles.inputField}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.FloatingLabel>
              </Form.Group>

              <div className="text-end mt-2">
                <a href="#" className={styles.forgotPassword}>
                  ¿Has olvidado tu contraseña?
                </a>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button className={`w-100 mt-3 ${styles.loginButton}`}>
                Iniciar sesión
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
                ¿No tienes una cuenta?
                <Link className={styles.signupLink} to={"/register"}>
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPresentation;
