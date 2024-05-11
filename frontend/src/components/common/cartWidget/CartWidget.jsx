import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContex } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContex);
  return (
    <>
      <Badge badgeContent={cart.length} color="error">
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/bag_n9fyub.png"
          alt="icono de bolsa de compras"
        ></img>
      </Badge>
    </>
  );
};

export default CartWidget;
