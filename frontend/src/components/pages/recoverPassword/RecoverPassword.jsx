import styles from "./RecoverPassword.module.css";
import { Form, Button } from "react-bootstrap";

const RecoverPassword = ({ data }) => {
  const { required, handleRequired } = data;
  return (
    <>
      {required === true ? (
        <div className={styles.container}>
          <div className={styles.parent}>
            <div className={styles.content}>
              <div className={` row ${styles.cardContainer}`}>
                {/* Panel Derecho */}
                <div className={` ${styles.rightPanel}`}>
                  <div className={styles.logo_login}>
                    <div className={styles.content_logo}>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
                        alt="x"
                      />
                    </div>
                  </div>
                  {/* Contenido del formulario */}
                  <div className="text-center">
                    <h2 className={styles.welcomeText}>¡Recupera tu cuenta!</h2>
                    <p>Por favor, crea tu nueva contraseña</p>
                  </div>

                  <Form>
                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        id="newPasswordInput"
                        type="password"
                        name="newPassword"
                        className={styles.customInputField}
                        placeholder=""
                        autoComplete="off"
                      />
                      <label
                        htmlFor="newPasswordInput"
                        className={styles.customFloatingLabel}
                      >
                        Nueva contraseña
                      </label>
                    </Form.Group>

                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        id="repeatPasswordInput"
                        type="password"
                        name="repeatPassword"
                        className={styles.customInputField}
                        placeholder=""
                        autoComplete="off"
                      />
                      <label
                        htmlFor="repeatPasswordInput"
                        className={styles.customFloatingLabel}
                      >
                        Repetir contraseña
                      </label>
                    </Form.Group>

                    {/* {responseMessage.message !== "" && (
                     <p
                       style={{ backgroundColor: responseMessage.color }}
                       className={`${styles.responseMessage}`}
                     >
                       {responseMessage.message}
                     </p>
                   )} */}

                    <Button
                      type="submit"
                      onClick={handleRequired}
                      className={`w-100 mt-3 ${styles.loginButton}`}
                    >
                      Cambiar contraseña
                    </Button>

                    {/* {responseMessage.message === "" ? (
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
                   )} */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.parent}>
            <div className={styles.content}>
              <div className={` row ${styles.cardContainer}`}>
                {/* Panel Derecho */}
                <div className={` ${styles.rightPanel}`}>
                  <div className={styles.logo_login}>
                    <div className={styles.content_logo}>
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
                        alt="x"
                      />
                    </div>
                  </div>
                  {/* Contenido del formulario */}
                  <div className="text-center">
                    <h2 className={styles.welcomeText}>¡Recupera tu cuenta!</h2>
                    <p>
                      Por favor, ingrese su correo. Recibirá un email en su
                      bandeja de entrada.
                    </p>
                  </div>

                  <Form>
                    <Form.Group className={styles.customFormGroup}>
                      <Form.Control
                        id="emailInput"
                        type="email"
                        name="email"
                        className={`${styles.customInputField}`}
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

                    {/* {responseMessage.message !== "" && (
                    <p
                      style={{ backgroundColor: responseMessage.color }}
                      className={`${styles.responseMessage}`}
                    >
                      {responseMessage.message}
                    </p>
                  )} */}

                    <Button
                      type="submit"
                      onClick={handleRequired}
                      className={`w-100 mt-3 ${styles.loginButton}`}
                    >
                      Recuperar
                    </Button>

                    {/* {responseMessage.message === "" ? (
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
                  )} */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecoverPassword;
