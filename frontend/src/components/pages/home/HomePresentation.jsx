// import { ProductCardLogic } from "../../features/products/productCard.jsx";
import styles from "./Home.module.css";
import { Row, Col } from "react-bootstrap";
import ButtonHeartLogic from "../../common/buttons/buttonHeart/ButtonHeartLogic.jsx";
import ButtonCartLogic from "../../common/buttons/buttonCart/ButtonCartLogic.jsx";
import { useEffect, useState } from "react";

const HomePresentation = ({ timeLeft, items, error }) => {
  return (
    <>
      <div className={`${styles.content_card}`}>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className={`${styles.cardCount}`}>
              <h1>Oferta</h1>
              <div
                style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}
              >
                <h2>Cuenta regresiva:</h2>
                <div style={{ fontSize: "2rem", fontWeight: "bold" }}></div>
              </div>
              <div className={`${styles.count}`}>
                <div className={`${styles.titles}`}>
                  <p>H</p>
                  <p>M</p>
                  <p>S</p>
                </div>
                <div className={`${styles.body}`}>
                  <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
                  <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
                  <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
                </div>
              </div>
              <p style={{ marginTop: "10px" }}>
                ¡Aprovecha antes de que se acabe el tiempo!
              </p>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className={`${styles.cardSale}`}>
              <div className={`${styles.cardProduct}`}>
                <img
                  className={`${styles.cardImg}`}
                  src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1734531546/proyects/vector/products/productsHome/malvestida-DMl5gG0yWWY-unsplash_nwdivh.jpg"
                  alt="Card image"
                />
                <div className={`${styles.cardImgOverlay} `}>
                  <div className={`${styles.cardTitle} `}>
                    Zapatillas Nike Air Max 90
                  </div>
                  <p className={`${styles.cardText} `}>$129.990</p>
                  <div className={`${styles.cardButtons} `}>
                    <ButtonHeartLogic />
                    <ButtonCartLogic />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className={`${styles.list_products}`}>
        {/* <Container>
          <Row xs={2} md={4} lg={6}>
            {items?.map(
              ({ id, sale, imagen, nombre, descripcion, precio, desc }) => {
                return (
                  <Col key={id}>
                    <ProductCardLogic
                      id={id}
                      sale={sale}
                      imgUrl={imagen}
                      product={nombre}
                      description={descripcion}
                      price={precio}
                      desc={desc}
                    />
                  </Col>
                );
              }
            )}
            {error && <h2>{error.message}</h2>}
          </Row>
        </Container> */}
      </div>
    </>
  );
};

export default HomePresentation;
