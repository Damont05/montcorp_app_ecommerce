import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="contentRegister">
        <div className="logoRegister">
          <img
            src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714695931/proyects/vector/icons/letra-v_1_xpjl6x.png"
            alt=""
          />
        </div>
        <div className="register">
          <h1>Regístrate</h1>
          <form action="">
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Nombre completo"
            />
            <input type="email" name="email" id="email" placeholder="Correo" />
            <input type="tel" name="tel" id="tel" placeholder="Teléfono" />
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Contraseña"
            />
            <button>Registrar</button>
          </form>
          <div className="links">
            <a href="">¿ya tienes contraseña?</a>
          </div>
          <div className="InicioRapido">
            <h2>Registro rápido</h2>
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

export default Register;
