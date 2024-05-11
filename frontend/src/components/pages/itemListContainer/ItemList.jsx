import { Box, Grid } from "@mui/material";
import "./ItemList.css";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import FiltersProductsContainer from "../../common/filtersProducts/FiltersProductsContainer.jsx";
import { Link } from "react-router-dom";

const ItemList = ({ items, error }) => {
  return (
    <>
      <Grid container spacing={2} columns={16} className="containerShop">
        <Grid item xs={3}>
          <FiltersProductsContainer />
        </Grid>
        <Grid item xs={13} className="container_productos">
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
              <Box className="list_productos_shop">
                <Grid
                  container
                  spacing={2}
                  columns={16}
                  className="content_producto"
                >
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
                        <Grid item lg={3} key={id}>
                          <ProductCard
                            id={id}
                            sale={sale}
                            imgUrl={imagen}
                            product={nombre}
                            description={descripcion}
                            price={precio}
                            desc={desc}
                          />
                        </Grid>
                      );
                    }
                  )}
                  {error && <h2>{error.message}</h2>}
                </Grid>
              </Box>
            </div>
          </section>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemList;
