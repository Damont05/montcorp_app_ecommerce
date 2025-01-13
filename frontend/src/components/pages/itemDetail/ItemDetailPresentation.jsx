import { Col, Row } from "react-bootstrap";
import styles from "./ItemDetail.module.css";
import CounterProductsLogic from "../../common/ui/counterProducts/CounterProductsLogic.jsx";
import SizesPreoductsLogic from "../../common/ui/sizesProducts/SizesPreoductsLogic.jsx";
import StarReviewLogic from "../../common/ui/starReview/StarReviewLogic.jsx";

const ItemDetailPresentation = () => {
  return (
    <>
      <div className={`${styles.product}`}>
        <div className={`${styles.main}`}>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <div className={`${styles.left}`}>
                <div className={`${styles.header}`}>
                  <h1>Nombre</h1>
                  <h2>Proveedor</h2>
                  <h3>$32.000</h3>
                  <img
                    className={styles.imgProducto}
                    src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
                    alt=""
                  />
                </div>
              </div>
            </Col>
            <Col sm={12} md={7} lg={7}>
              <div className={`${styles.right}`}>
                {/* descripción */}
                <p>
                  Designer Karim Rashid continues to put his signature spin on
                  all genres of design through various collaborations with
                  top-notch companies. Another one to add to the win column is
                  his work with Italian manufacturer Chateau d’Ax.
                </p>
                <p>
                  en stock. <a href="">Adquirir garantía extendida</a>
                </p>

                {/* elemento de review */}
                <StarReviewLogic />

                {/* elemento de tallas */}
                <SizesPreoductsLogic />

                {/* elemento cantidad */}
                <CounterProductsLogic />
              </div>
            </Col>
          </Row>
        </div>
        <div className={`${styles.footer}`}>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className={`${styles.left}`}>
                <p id="price" className={`${styles.total}`}>
                  Total: $960.00
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={`${styles.right}`}>
                <button className={`${styles.buttonAdd}`}>Agregar</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className={styles.content_producto_detalle}>
        <div className={styles.productosDetail}>
          <div className={styles.productoDetallado}>
            <div className={styles.cuerpo}>
              <div className={styles.btnsCambiar}>
                <button className={styles.FlechaImgizquierda}>&#8249;</button>
                <button className={styles.FlechaImgDerecha}>&#8250;</button>
              </div>
             
            </div>

            <div className={styles.content_info}>
              <div className={styles.tituloDetail}>
                <h3>nombre (elemento de descuento)</h3>
                <p>Description</p>
                <ul>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <img
                        src={
                          i < 4
                            ? "https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella_gzzpo3.png"
                            : "https://res.cloudinary.com/dqngvzxqy/image/upload/v1714691137/proyects/vector/icons/estrella-dark_ltjptw.png"
                        }
                        alt=""
                      />
                    </li>
                  ))}
                  <a href="#comentarios">hay más de 100 comentarios.</a>
                </ul>
              </div>
              <div className={styles.precio_descuento}>precio descuento</div>
              <div className={styles.precio}>precio</div>

              <div className={styles.tallas}>
                {["U", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <div key={size} className={styles.talla}>
                    <input id={size} type="checkbox" />
                    <label htmlFor={size}>{size}</label>
                  </div>
                ))}
              </div>
              <div className={styles.cantidad}>
                <CounterContainer />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.comentarios} id="comentarios">
          <p>Comentarios</p>
        </div>
      </div> */}
    </>
  );
};

export default ItemDetailPresentation;
