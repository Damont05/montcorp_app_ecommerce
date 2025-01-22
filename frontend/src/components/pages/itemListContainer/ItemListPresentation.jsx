import "./ItemList.module.css";
import { Container, Col, Row } from "react-bootstrap";
import ProductCardLogic from "../../features/products/productCard/ProductCardLogic";
import FiltersProductsLogic from "../../common/sections/filtersProducts/FiltersProductsLogic";

const ItemListPresentation = ({ items, error }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={4} md={3}>
            <FiltersProductsLogic />
          </Col>
          <Col xs={8} md={9} className="container_productos">
            <section>
              <div className="productos_lista">
                <div className="header_product">
                  <div className="ordenarFiltro">
                    <span>Ordenar por:</span>
                  </div>
                  <select name="filtroOrden" id="ordenFiltro">
                    <option value="masRelevantes">Más relevantes</option>
                    <option value="menorPrecio">Menor precio</option>
                    <option value="mayorPrecio">Mayor precio</option>
                  </select>
                </div>
                <div className="list_productos_shop">
                  <Container>
                    <Row xs={2} md={4} lg={5}>
                      {items.map(
                        ({
                          id,
                          sale,
                          imagen,
                          nombre,
                          descripcion,
                          precio,
                          desc,
                        }) => {
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
                  </Container>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemListPresentation;
