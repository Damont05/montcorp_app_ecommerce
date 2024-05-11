import "./Navbar.css";
import * as React from "react";
import { Badge, Box, AppBar, Toolbar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../../common/cartWidget/CartWidget";
import FavoriteWidget from "../../common/favoriteWidget/FavoriteWidget";
import NotificationsWidget from "../../common/notificationsWidget/NotificationsWidget";
import { Link } from "react-router-dom";
import MenuCategoriesContainer from "../../common/menuCategories/MenuCategoriesContainer";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flesGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* ----- LOGO ----- */}
            <Typography
              variant="h6"
              component="div"
              className="logo"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">Vector</Link>
            </Typography>
            {/* ----- ICONO MENU ----- */}
            <IconButton
              edge="start"
              color="#454545"
              aria-label="menu"
              sx={{ mr: 2, display: { sx: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* ----- Search ----- */}
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              className="content_search"
            >
              <img
                src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493197/proyects/vector/icons/search_ej69qa.png"
                alt="icono de lupa"
                className="icon_search"
              ></img>
              <input type="text" name="buscar" placeholder="Buscar" />
            </Box>
            {/* ----- Menu ----- */}
            <Box>
              {/* {icono notificaciones} */}
              <IconButton>
                <NotificationsWidget />
              </IconButton>
              {/* {icono usuarios} */}
              <Link to="/login">
                <IconButton>
                  <Badge badgeContent={0} color="error">
                    <img
                      src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493200/proyects/vector/icons/user_j9mgtr.png"
                      alt="icono de usuario"
                    ></img>
                  </Badge>
                </IconButton>
              </Link>
              {/* {icono carrito/bag} */}
              <Link to="/cart">
                <IconButton>
                  <CartWidget />
                </IconButton>
              </Link>
              {/* {icono favoritos} */}
              <Link to="/favorites">
                <IconButton>
                  <FavoriteWidget />
                </IconButton>
              </Link>
            </Box>
          </Toolbar>
          <MenuCategoriesContainer />
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
