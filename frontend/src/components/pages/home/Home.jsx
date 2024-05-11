import { Link } from "react-router-dom";
import "./Home.css";
import { Button, Grid, ToggleButtonGroup, Typography } from "@mui/material";

const Home = ({ greeting }) => {
  return (
    <>
      <div className="greeting">
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {/* {----- Contenedor de bienvenida -----} */}
          <Grid item xs={16} md={8}>
            {/* {----- Slogan -----} */}
            <Typography variant="h1" component="h2" className="h1Greating">
              {greeting}
            </Typography>
            {/* {----- Botón Tienda -----} */}
            <ToggleButtonGroup className="btnTienda">
              <Link to="/products">Tienda</Link>
            </ToggleButtonGroup>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
