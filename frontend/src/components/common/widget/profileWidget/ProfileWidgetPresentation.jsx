import styles from "./ProfileWidget.module.css";
import { Badge, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileWidgetPresentation = ({ data }) => {
  const { isAuthenticated, logout, tokenCookies, itemsUser } = data;

  return (
    <>
      {isAuthenticated ? (
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic-button"
            className={`${styles.roundedDropdownUser}`}
          >
            {itemsUser?.name.slice(0, 1).toUpperCase()}
          </Dropdown.Toggle>

          <Dropdown.Menu className={`${styles.dropdownMenuUser}`}>
            <Dropdown.Item className={`${styles.profile}`} href="/profile">
              {itemsUser?.name + " " + itemsUser?.lastname}
            </Dropdown.Item>
            <Dropdown.Item className={`${styles.conf}`} href="/configuration">
              Configuración
            </Dropdown.Item>
            <Dropdown.Item
              className={`${styles.logout}`}
              onClick={() => {
                logout(tokenCookies);
              }}
            >
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
