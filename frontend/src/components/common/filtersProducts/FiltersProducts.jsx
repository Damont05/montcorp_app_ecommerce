import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./FiltersProducts.css";

const FiltersProducts = () => {
  return (
    <>
      <Grid className="grid_content-product">
        <section className="content_filtros">
          <div className="filtros">
            <h2>Filtros</h2>
            <div className="container_categorias">
              <h3>
                Categoría<span>-</span>
              </h3>
              <div className="content_categorias">
                <div className="categoria">
                  <Link to="/filtros/genero/unisex">Ropa unisex</Link>
                </div>
                <div className="categoria">
                  <Link to="/filtros/genero/hombre">Ropa de hombre</Link>
                </div>
                <div className="categoria">
                  <Link to="/filtros/genero/mujer">Ropa de mujer</Link>
                </div>
                <div className="categoria">
                  <Link to="/filtros/genero/nino">Ropa de niños</Link>
                </div>
              </div>
            </div>
            <div className="container_ajustes">
              <h3>
                Tipo De Ajuste<span>-</span>
              </h3>
              <div className="content-ajustes">
                <div className="ajuste">
                  <Link to="/filtros/tags/">Regular</Link>
                </div>
                <div className="ajuste">
                  <Link to="/filtros/tags/">Oversized</Link>
                </div>
                <div className="ajuste">
                  <Link to="/filtros/tags/">Suelto</Link>
                </div>
                <div className="ajuste">
                  <Link to="/filtros/tags/">Ajustado</Link>
                </div>
              </div>
            </div>
            <div className="container_estilo">
              <h3>
                Estilo<span>-</span>
              </h3>
              <div className="content-estilo">
                <div className="estilo">
                  <Link to="/filtros/tags/">Casual</Link>
                </div>
                <div className="estilo">
                  <Link to="/filtros/tags/">Calle</Link>
                </div>
                <div className="estilo">
                  <Link to="/filtros/tags/">Trabajo</Link>
                </div>
                <div className="estilo">
                  <Link to="/filtros/tags/">Fiesta</Link>
                </div>
                <div className="estilo">
                  <Link to="/filtros/tags/">Bohemio</Link>
                </div>
              </div>
            </div>
            <div className="container_tallas">
              <h3>
                Tallas<span>-</span>
              </h3>
              <div className="content-tallas">
                <div className="talla">
                  <Link to="/filtros/talla/u">U</Link>
                </div>
                <div className="talla">
                  <Link to="/filtros/talla/s">S</Link>
                </div>
                <div className="talla">
                  <Link to="/filtros/talla/m">M</Link>
                </div>
                <div className="talla">
                  <Link to="/filtros/talla/l">L</Link>
                </div>
                <div className="talla">
                  <Link to="/filtros/talla/xl">XL</Link>
                </div>
                <div className="talla">
                  <Link to="/filtros/talla/xxl">XXL</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Grid>
    </>
  );
};

export default FiltersProducts;
