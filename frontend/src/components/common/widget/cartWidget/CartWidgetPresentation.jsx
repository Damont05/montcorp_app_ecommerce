import { useContext } from "react";
import { CartContex } from "../../../../context/CartContext.jsx";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import styles from "./CartWidget.module.css";

const CartWidgetPresentation = () => {
  const { cart } = useContext(CartContex);
  return (
    <>
      <Link to="/cart" className={`${styles.roundedDropdownCart}`}>
        <Badge bg="transparent">
          <img
            src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/bag_n9fyub.png"
            alt="icono de bolsa de compras"
          ></img>
        </Badge>
      </Link>
    </>
  );
};

export default CartWidgetPresentation;
