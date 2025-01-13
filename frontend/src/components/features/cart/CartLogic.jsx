import { useContext } from "react";
import { CartContex } from "../../../context/CartContext.jsx";
import CartPresentation from "./CartPresentation.jsx";
const CartLogic = () => {
  const { cart, deleteById } = useContext(CartContex);
  return <CartPresentation cart={cart} deleteById={deleteById} />;
};

export default CartLogic;
