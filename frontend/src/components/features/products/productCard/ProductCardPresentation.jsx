import { React, useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

const ProductCardPresentation = ({ data }) => {
  const { id, sale, imgUrl, product, description, price, desc } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = imgUrl.length - 1;
      } else if (newIndex >= imgUrl.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  // validamos si el producto esta en sale para crear el elemento que indique que este esta en sale
  const newSale =
    sale == true ? (
      <span className={`${styles.sale}`}>
        <p>sale</p>
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"
          alt="icono de fuego"
        />
      </span>
    ) : null;
  // validamos si el nombre del producto tiene caracteres mayor a 15 (lo recortamos)
  const newName =
    product?.length > 15 ? product.substring(0, 14) + "..." : product;
  // recortamos la descripcion del producto
  const newDescription =
    (description?.length || 0) > 40
      ? description.substring(0, 40) + "..."
      : description;
  // validamos si hay descuento mostramos el precio para darle clase subrayada
  const newPrice = desc > 0 ? <p>{price.toFixed(3)}</p> : <br />;
  // Validamos si existe descuento agrega un etiqueta span con los datos
  const newElementDesc = desc > 0 ? <span>{`-${desc}%`}</span> : null;
  // validamos si hay algun descuento realizamos una operacion de descuento si no solo muestra el precio normal
  const newElementPriceDesc =
    desc > 0 ? (
      <p>{(price - (price / 100) * desc).toFixed(3)}</p>
    ) : (
      <p>{price?.toFixed(3)}</p>
    );

  return (
    <>
      <div className={`${styles.productos}`} id="productos">
        <Link to={`/itemDetail/${id}`}>
          {newSale}
          <div className={`${styles.cuerpo}`}>
            <div className={`${styles.btnsCambiar}`}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleChangeImage(-1);
                }}
                className={`${styles.FlechaImgizquierda}`}
              >
                &#8249;
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleChangeImage(-1);
                }}
                className={`${styles.FlechaImgDerecha}`}
              >
                &#8250;
              </button>
            </div>
            <img id={`img_${id}`} src={imgUrl[currentIndex]} alt=""></img>
          </div>
          <div className={`${styles.titulo}`}>
            <h3>{newName}</h3>
            <p>{newDescription}</p>
          </div>
          <div className={`${styles.precio_descuento}`}>
            {newElementPriceDesc}
            {newElementDesc}
          </div>
          <div className={`${styles.precio}`}>{newPrice}</div>
        </Link>
      </div>
    </>
  );
};

export default ProductCardPresentation;
