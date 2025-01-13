
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import styles from "./ButtonHeart.module.css";

const ButtonHeartPresentation = ({ favorite, handleEventFavorite }) => {
  return (
    <>
      {favorite == true ? (
        <button
          onClick={() => handleEventFavorite()}
          className={`${styles.cardBtn} ${styles.activated}`}
        >
          <IoMdHeart />
        </button>
      ) : (
        <button
          onClick={() => handleEventFavorite()}
          className={`${styles.cardBtn} `}
        >
          <IoMdHeartEmpty />
        </button>
      )}
    </>
  );
};

export default ButtonHeartPresentation;
