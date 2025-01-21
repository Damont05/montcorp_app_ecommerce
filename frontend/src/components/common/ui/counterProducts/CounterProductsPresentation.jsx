import styles from "./CounterProducts.module.css";

const CounterProductsPresentation = ({
  sumar,
  restar,
  counter,
  message,
  handleAddFavorites,
  isFavorites,
}) => {
  return (
    <>
      <div>
        <div className={`${styles.containerQuantity}`}>
          <div className={`${styles.quantity}`}>
            Cantidad
            <button
              onClick={restar}
              className={`${styles.angle} fa fa-angle-left`}
            ></button>
            <span id="qt" className={`${styles.qt}`}>
              {counter}
            </span>
            <button
              onClick={sumar}
              className={`${styles.angle} fa fa-angle-right`}
            ></button>
          </div>
          <button onClick={handleAddFavorites} className="btnAddFav">
            {isFavorites ? (
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1715541369/proyects/vector/icons/heart-color_zu8hzf.png"
                alt="Favorito"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
                alt="No Favorito"
              />
            )}
          </button>
        </div>
        {message.text !== "" && (
          <p style={{ color: message.color }}>{message.text}</p>
        )}
      </div>
    </>
  );
};

export default CounterProductsPresentation;
