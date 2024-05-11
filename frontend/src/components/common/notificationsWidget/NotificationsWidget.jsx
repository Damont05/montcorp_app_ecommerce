import * as React from "react";
import { Badge, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./NotificationsWidget.css";

const NotificationsWidget = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Badge
        badgeContent={4}
        color="error"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          id="notificaciones"
          src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493195/proyects/vector/icons/notificacion_okgio8.png"
          alt="icono de notificaciones"
        ></img>
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="MenuNotificaciones"
      >
        <p>Notificaciones</p>

        <MenuItem onClick={handleClose} className="ListNotificaciones">
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap className="TextNotificaciones">
            Activa tu cupón de primera compra haciendo click{"hh "}
            <a href="#">Aqui.</a>
            <span>hace 3 min.</span>
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} className="ListNotificaciones">
          <ListItemIcon>
            <ChevronRightIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap className="TextNotificaciones">
            Bienvenido a vector, en los proximos minutos recibiras un cupón de
            primera compra.
            <span>hace 10 min.</span>
          </Typography>
        </MenuItem>
      </Menu>

      <div id="plegableNotificacion"></div>
    </>
  );
};

export default NotificationsWidget;
