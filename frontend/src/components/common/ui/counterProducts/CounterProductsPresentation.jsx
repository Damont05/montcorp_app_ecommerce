import styles from "./CounterProducts.module.css";

const CounterProductsPresentation = () => {
  return (
    <>
      <div className={`${styles.containerQuantity}`}>
        <div className={`${styles.quantity}`}>
          cantidad
          <span className={`${styles.angle} fa fa-angle-left`}></span>
          <span id="qt" className={`${styles.qt}`}>
            3
          </span>
          <span className={`${styles.angle} fa fa-angle-right`}></span>
        </div>
        <button
          // onClick={() => {
          //   onAddFav(idFav);
          // }}
          className="btnAddFav"
        >
          <img
            src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1715541369/proyects/vector/icons/heart-color_zu8hzf.png"
            alt="Favorito"
          />
          {/* {fav.some(
                      (product) => product.id === idFav && product.Add
                    ) ? (
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1715541369/proyects/vector/icons/heart-color_zu8hzf.png"
                        alt="Favorito"
                      />
                    ) : (
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
                        alt="No Favorito"
                      />
                    )} */}
        </button>
      </div>
    </>
  );
};

export default CounterProductsPresentation;
