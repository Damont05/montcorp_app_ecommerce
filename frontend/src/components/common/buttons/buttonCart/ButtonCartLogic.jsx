import { useState } from "react";
import ButtonCartPresentation from "./ButtonCartPresentation.jsx";

const ButtonCartLogic = () => {
  const [stateCart, setStateCart] = useState(false);

  const handleEventCart = () => {
    setStateCart(!stateCart);
  };
  return (
    <ButtonCartPresentation
      stateCart={stateCart}
      handleEventCart={handleEventCart}
    />
  );
};

export default ButtonCartLogic;
