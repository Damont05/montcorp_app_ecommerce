import { useContext } from "react";
import Cart from "./Cart.jsx";
import { CartContex } from "../../../context/CartContext.jsx";
const CartContainer = () => {
  const { cart, deleteById } = useContext(CartContex);
  return <Cart cart={cart} deleteById={deleteById} />;
};

export default CartContainer;
