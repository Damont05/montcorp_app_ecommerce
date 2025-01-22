import { Col, Row } from "react-bootstrap";
import styles from "./ItemDetail.module.css";
import CounterProductsLogic from "../../common/ui/counterProducts/CounterProductsLogic.jsx";
import SizesPreoductsLogic from "../../common/ui/sizesProducts/SizesPreoductsLogic.jsx";
import StarReviewLogic from "../../common/ui/starReview/StarReviewLogic.jsx";

const ItemDetailPresentation = ({ product, counter, setCounter }) => {
  return (
    <>
      {product.id ? (
        <div className={`${styles.product}`}>
          <div className={`${styles.main}`}>
            <Row>
              <Col sm={12} md={5} lg={5}>
                <div className={`${styles.left}`}>
                  <div className={`${styles.header}`}>
                    <h1>{product.nombre}</h1>
                    <h2>Proveedor</h2>
                    <h3>$ {product.precio}</h3>
                    <img
                      className={styles.imgProducto}
                      src={product.imagen[0]}
                      alt=""
                    />
                  </div>
                </div>
              </Col>
              <Col sm={12} md={7} lg={7}>
                <div className={`${styles.right}`}>
                  {/* descripción */}
                  <p>{product.descripcion}</p>
                  <p>
                    en stock. <a href="">Adquirir garantía extendida</a>
                  </p>

                  {/* elemento de review */}
                  <StarReviewLogic />

                  {/* elemento de tallas */}
                  <SizesPreoductsLogic />

                  {/* elemento cantidad */}
                  <CounterProductsLogic
                    product={product}
                    counter={counter}
                    setCounter={setCounter}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className={`${styles.footer}`}>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <div className={`${styles.left}`}>
                  <p id="price" className={`${styles.total}`}>
                    Total:{" "}
                    {counter > 1 ? counter * product.precio : product.precio}
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
      ) : (
        <p>no hay productos agragar skeleton</p>
      )}
    </>
  );
};

export default ItemDetailPresentation;
