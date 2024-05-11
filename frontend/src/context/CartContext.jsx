import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContex = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const messageError = (msj) => {
      Swal.fire({
        icon: "error",
        title: "¡Vaya!",
        text: msj,
        showConfirmButton: false,
        timer: 3500,
      });
    };
    const message = (msj) => {
      Swal.fire({
        icon: "success",
        title: "¡Genial!",
        text: msj,
        showConfirmButton: false,
        timer: 3500,
      });
    };
    const validateProductCart = cart.some((item) => item.id === product.id);
    validateProductCart
      ? messageError(
          "El producto que intentas agregar ya esta disponible en tu carrito"
        )
      : (setCart([...cart, product]),
        message("El producto agregado correctamente al carrito"));
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  let data = { cart, addToCart, deleteById };
  return <CartContex.Provider value={data}> {children} </CartContex.Provider>;
};

export default CartContextProvider;
