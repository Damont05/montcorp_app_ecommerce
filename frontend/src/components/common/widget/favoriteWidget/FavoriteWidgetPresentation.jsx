import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import styles from "./FavoriteWidget.module.css";

const FavoriteWidgetPresentation = () => {
  const valorBadgeFavorite = 3;
  return (
    <>
      <Link to="/favorites" className={`${styles.roundedDropdownFavorite}`}>
        <Badge bg="transparent">
          <img
            src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
            alt="icono de favoritos"
          ></img>
        </Badge>
      </Link>
    </>
  );
};

export default FavoriteWidgetPresentation;
