import { Badge } from "@mui/material";

const FavoriteWidget = () => {
  const valorBadgeFavorite = 3;
  return (
    <>
      <Badge badgeContent={3} color="error">
        <img
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
          alt="icono de favoritos"
        ></img>
      </Badge>
    </>
  );
};

export default FavoriteWidget;
