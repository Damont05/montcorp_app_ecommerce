import { Box } from "@mui/material";
import "./MenuCategories.css";
import { Link } from "react-router-dom";

const MenuCategories = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }} className="categorias">
        <Link to="/products">Todos</Link>
        <Link to="/filtros/categoria/camisas">Camisas</Link>
        <Link to="/filtros/categoria/calzado">Zapatos</Link>
        <Link to="/filtros/categoria/vestidos">Vestidos</Link>
        <Link to="/filtros/categoria/shorts">Shorts</Link>
        <Link to="/filtros/categoria/calcetines">Calcetines</Link>
        <Link to="/filtros/categoria/accesorios">Accesorios</Link>
        <Link to="/filtros/categoria/pantalones">pantalones</Link>
        <Link to="/filtros/categoria/chaquetas">Chaquetas</Link>
        <Link to="/filtros/categoria/ropadeportiva">Ropa Deportiva</Link>
        <Link to="/filtros/categoria/blusas">Blusas</Link>
        <Link to="/filtros/categoria/blazer">Blazer</Link>
        <Link to="/filtros/categoria/ropadedormir">Ropa para dormir</Link>
      </Box>
    </>
  );
};

export default MenuCategories;
