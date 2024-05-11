import { Box, Grid } from "@mui/material";
import "./Favorites.css";
import ProductCard from "../../common/productCard/ProductCard";

const Favorites = () => {
  return (
    <>
      <Box className="list_favorites">
        <h3>Mi Colección Personalizada</h3>
        <Grid container spacing={2} columns={16} className="content_favorites">
          <Grid item lg={3}>
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
            <ProductCard
              imgUrl="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712504621/proyects/vector/products/zapatos-casuales1-2_r83tss.jpg"
              product="zapatillas"
              price="9.0"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Favorites;
