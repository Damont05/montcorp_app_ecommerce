import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="containerFooter">
          <p>
            <span>Regístrate gratis</span>
            <Link to={"/register"} className="linkRegister">
              Regístrate!
            </Link>
          </p>
        </div>
        <div className="copyright">
          <p>
            <span>© 2023 Copyright: </span>
            <Link className="linkCorp">MontCorp.</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
