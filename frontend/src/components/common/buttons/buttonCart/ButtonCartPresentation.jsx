import styles from "./ButtonCart.module.css";
import { BsHandbag, BsHandbagFill } from "react-icons/bs";

const ButtonCartPresentation = ({ stateCart, handleEventCart }) => {
  return (
    <>
      {stateCart == true ? (
        <button
          onClick={() => handleEventCart()}
          className={`${styles.cardBtn} ${styles.activated}`}
        >
          <BsHandbagFill />
        </button>
      ) : (
        <button
          onClick={() => handleEventCart()}
          className={`${styles.cardBtn} `}
        >
          <BsHandbag />
        </button>
      )}
    </>
  );
};

export default ButtonCartPresentation;
