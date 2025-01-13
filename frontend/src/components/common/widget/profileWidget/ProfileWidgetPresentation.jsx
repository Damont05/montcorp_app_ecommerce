import { Badge, Dropdown } from "react-bootstrap";
import styles from "./ProfileWidget.module.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const ProfileWidgetPresentation = ({}) => {
  const userDataString = Cookies.get("user");
  let userData = "";
  if (userDataString) {
    userData = JSON.parse(userDataString);
  } else {
    console.log("No se encontraron datos de usuario");
  }
  return (
    <>
      {userDataString ? (
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic-button"
            className={`${styles.roundedDropdownUser}`}
          >
            {userData.name.slice(0, 1).toUpperCase()}
          </Dropdown.Toggle>

          <Dropdown.Menu className={`${styles.dropdownMenuUser}`}>
            <Dropdown.Item className={`${styles.profile}`} href="/profile">
              {userData.name}
            </Dropdown.Item>
            <Dropdown.Item className={`${styles.conf}`} href="/configuration">
              Configuración
            </Dropdown.Item>
            <Dropdown.Item className={`${styles.logout}`} href="/logout">
              Cerrar sesión
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Link to="/login" className={`${styles.roundedDropdownUser}`}>
          <Badge bg="transparent">
            <img
              src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493200/proyects/vector/icons/user_j9mgtr.png"
              alt="icono de usuario"
            ></img>
          </Badge>
        </Link>
      )}
    </>
  );
};

export default ProfileWidgetPresentation;
