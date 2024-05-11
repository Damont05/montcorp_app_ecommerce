import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="contentLogin">
        <div className="logoLogin">
          <img
            src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
            alt=""
          />
        </div>
        <div className="login">
          <h1>Login</h1>
          <form action="">
            <input type="email" name="user" id="user" placeholder="correo" />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="contraseña"
            />
            <button>Login</button>
          </form>
          <div className="links">
            <a href="">¿olvistaste tu contraseña?</a>
            <Link to={"/register"}>¿Aun no tienes cuenta?</Link>
          </div>
          <div className="InicioRapido">
            <h2>Inicio rápido</h2>
            <div className="btnLoginApi">
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714694706/proyects/vector/icons/google_r5ozfn.png"
                  alt=""
                ></img>
              </a>
              <a href="#">
                <img
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714694705/proyects/vector/icons/facebook_r3hjt7.png"
                  alt=""
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
