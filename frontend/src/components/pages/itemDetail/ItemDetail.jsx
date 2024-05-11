import { useState } from "react";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetail.css";

const ItemDetail = ({ item, onAdd }) => {
  const { id, nombre, precio, sale, descripcion, imagen, desc } = item;
  const imgProduct = imagen && Array.isArray(imagen) ? imagen.slice(0, 3) : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = imagen.length - 1;
      } else if (newIndex >= imagen.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  // validamos si el producto esta en sale para crear el elemento que indique que este esta en sale
  const newSale =
    sale == true ? (
      <span className="saleDetail">
        <p>sale</p>
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"
          alt="icono de fuego"
        />
      </span>
    ) : null;
  // validamos si el nombre del producto tiene caracteres mayor a 15 (lo recortamos)
  const newName =
    (nombre?.length || 0) > 15 ? nombre.substring(0, 14) + "..." : nombre;
  // recortamos la descripcion del producto
  const newDescription =
    (descripcion?.length || 0) > 40
      ? descripcion.substring(0, 40) + "..."
      : descripcion;
  // Validamos si existe descuento agrega un etiqueta span con los datos
  const newElementDesc = desc > 0 ? <span>{`-${desc}%`}</span> : null;
  // validamos si hay descuento mostramos el precio para darle clase subrayada
  const newPrice = desc > 0 ? <p>{precio.toFixed(3)}</p> : <br />;
  // validamos si hay algun descuento realizamos una operacion de descuento si no solo muestra el precio normal
  const newElementPriceDesc =
    desc !== undefined && precio !== undefined ? (
      desc > 0 ? (
        <p>{(precio - (precio / 100) * desc).toFixed(3)}</p>
      ) : (
        <p>{precio.toFixed(3)}</p>
      )
    ) : (
      <p>Desc o price no definidos</p>
    );

  return (
    <>
      <div className="content_producto_detalle">
        <div className="productosDetail">
          {newSale}
          <div className="productoDetallado">
            <div className="galeriaImg">
              <ul>
                <li>
                  <img
                    className="imgProductoMin"
                    src={imgProduct[0]}
                    alt=""
                  ></img>
                </li>
                <li>
                  <img
                    className="imgProductoMin"
                    id=""
                    src={imgProduct[1]}
                    alt=""
                  ></img>
                </li>
                <li>
                  <img
                    className="imgProductoMin"
                    id=""
                    src={imgProduct[2]}
                    alt=""
                  ></img>
                </li>
              </ul>
            </div>
            <div className="cuerpo">
              <div className="btnsCambiar">
                <button
                  onClick={() => {
                    handleChangeImage(-1);
                  }}
                  className="FlechaImgizquierda"
                >
                  &#8249;
                </button>
                <button
                  onClick={() => {
                    handleChangeImage(-1);
                  }}
                  className="FlechaImgDerecha"
                >
                  &#8250;
                </button>
              </div>
              <img
                className="imgProducto"
                id=""
                src={imgProduct[currentIndex]}
                alt=""
              ></img>
            </div>
            <div className="content_info">
              <div className="tituloDetail">
                <h3>
                  {newName} {newElementDesc}
                </h3>
                <p>{newDescription}</p>
                <ul>
                  <li>
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                      alt=""
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                      alt=""
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                      alt=""
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                      alt=""
                    ></img>
                  </li>
                  <li>
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella-dark_ltjptw.png"
                      alt=""
                    ></img>
                  </li>
                  <a href="#comentarios" htmlFor="comentarios">
                    hay mas de 100 comentarios.
                  </a>
                </ul>
              </div>
              <div className="precio_descuento">{newElementPriceDesc}</div>
              <div className="precio">{newPrice}</div>

              <div className="tallas">
                <div className="talla">
                  <input id="u" type="checkbox"></input>
                  <label htmlFor="u" id="TallaU">
                    U
                  </label>
                </div>
                <div className="talla">
                  <input id="s" type="checkbox"></input>
                  <label htmlFor="s" id="TallaS">
                    S
                  </label>
                </div>
                <div className="talla">
                  <input id="m" type="checkbox"></input>
                  <label htmlFor="m" id="TallaM">
                    M
                  </label>
                </div>
                <div className="talla">
                  <input id="l" type="checkbox"></input>
                  <label htmlFor="l" id="TallaL">
                    L
                  </label>
                </div>
                <div className="talla">
                  <input id="xl" type="checkbox"></input>
                  <label htmlFor="xl" id="TallaXL">
                    XL
                  </label>
                </div>
                <div className="talla">
                  <input id="xxl" type="checkbox"></input>
                  <label htmlFor="xxl" id="TallaXXL">
                    XXL
                  </label>
                </div>
              </div>
              <div className="cantidad">
                <div className="btns-cantidad">
                  <CounterContainer stock={item.stock} onAdd={onAdd} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comentarios" id="comentarios">
          <p>Comentarios</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
