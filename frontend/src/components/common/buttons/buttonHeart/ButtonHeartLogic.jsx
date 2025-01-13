import { useState } from "react";
import ButtonHeartPresentation from "./ButtonHeartPresentation.jsx";

const ButtonHeartLogic = () => {
  const [favorite, setFavorite] = useState(false);

  // Función para cambiar estado y agragar a favorito el producto
  const handleEventFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <ButtonHeartPresentation
      favorite={favorite}
      handleEventFavorite={handleEventFavorite}
    />
  );
};

export default ButtonHeartLogic;
