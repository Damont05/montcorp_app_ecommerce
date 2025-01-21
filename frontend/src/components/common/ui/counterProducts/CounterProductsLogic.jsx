import { useContext, useState } from "react";
import CounterProductsPresentation from "./CounterProductsPresentation.jsx";
import { FavoritesContext } from "../../../../context/FavoritesContext.jsx";

const CounterProductsLogic = ({ product, counter, setCounter }) => {
  const { addFavorites, isFavorites } = useContext(FavoritesContext);
  const [message, setMessage] = useState({
    text: "",
    color: "",
  });
  const [stock, setStock] = useState(5);

  // Manejo de mensajes del contador
  const handleMessage = (text, color, duracion = 3000) => {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, duracion);
  };

  // suma el contador del producto
  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : handleMessage(
          `Límite de existencias: únicamente quedan ${stock} unidad(es) disponible(s).`,
          "red"
        );
  };

  // Resta el contador del producto
  const restar = () => {
    counter > 1
      ? setCounter(counter - 1)
      : handleMessage("El mínimo de compras requerido es de 1 unidad.", "red");
  };

  // Agraga o quita el producto de mis favoritos
  const handleAddFavorites = () => {
    addFavorites(product);
  };

  return (
    <CounterProductsPresentation
      sumar={sumar}
      restar={restar}
      counter={counter}
      message={message}
      handleAddFavorites={handleAddFavorites}
      isFavorites={isFavorites(product.id)}
    />
  );
};

export default CounterProductsLogic;
