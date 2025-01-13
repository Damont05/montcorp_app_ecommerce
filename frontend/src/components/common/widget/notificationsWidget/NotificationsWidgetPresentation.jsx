import { Dropdown } from "react-bootstrap";
import styles from "./NotificationsWidget.module.css";
import Badge from "react-bootstrap/Badge";

const NotificationsWidgetPresentation = () => {
  let textNotification1 =
    "Activa tu cupón de primera compra haciendo click aqui.";
  let textNotification2 =
    " Bienvenido a vector, en los proximos minutos recibiras un cupón de primera compra.";
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          as="div"
          id="dropdown-autoclose-true"
          className={`${styles.roundedDropdownNotification}`}
        >
          <Badge bg="transparent">
            <span className={`${styles.badgePosition} bg-danger`}>99+</span>
            <img
              id="notificaciones"
              src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493195/proyects/vector/icons/notificacion_okgio8.png"
              alt="icono de notificaciones"
            ></img>
          </Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu className={`${styles.dropdownMenuNotification}`}>
          <Dropdown.Header className={`${styles.dropdownHeader}`}>
            Notificaciones
          </Dropdown.Header>
          <Dropdown.Item href="#" className={`${styles.dropdownItem}`}>
            <h1>
              {textNotification1 + "."}
              <span>hace 3 min.</span>
            </h1>
          </Dropdown.Item>
          <Dropdown.Item href="#" className={`${styles.dropdownItem}`}>
            <h1>
              {textNotification2 + "."}
              <span>hace 10 min.</span>
            </h1>
          </Dropdown.Item>
          <Dropdown.Item href="#" className={`${styles.seeMore}`}>
            ver mas
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default NotificationsWidgetPresentation;
