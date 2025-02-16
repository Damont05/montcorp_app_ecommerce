import styles from "./Navbar.module.css";
import { InputGroup, Form, Navbar, Nav } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import Cookies from "js-cookie";
import MenuCategoriesLogic from "../../common/sections/menuCategories/MenuCategoriesLogic";
import CartWidgetLogic from "../../common/widget/cartWidget/CartWidgetLogic";
import FavoriteWidgetLogic from "../../common/widget/favoriteWidget/FavoriteWidgetLogic";
import NotificationsWidgetLogic from "../../common/widget/notificationsWidget/NotificationsWidgetLogic";
import ProfileWidgetLogic from "../../common/widget/profileWidget/ProfileWidgetLogic";

const WidgetWrapper = ({ children }) => (
  <div className="d-flex align-items-center mx-2">{children}</div>
);

const NavbarPresentation = ({ data }) => {
  const {
    search,
    focused,
    setFocused,
    handleSearch,
    handleSubmit,
    responseMessage,
  } = data;
  return (
    <>
      <Navbar
        onLoad={handleSubmit}
        expand="lg"
        className={`py-3 ${styles.navBarBody}`}
      >
        {/* LOGO */}
        <Navbar.Brand href="/" className={styles.navbarLogo}>
          <p>Vector</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto d-flex align-items-center">
            {/* Search */}
            <div
              className={`${styles.searchContainer} d-flex align-items-center ${
                focused ? "focused" : ""
              }`}
            >
              <InputGroup className={styles.searchInputGroup}>
                <Form.Control
                  id="buscar"
                  name="buscar"
                  type="text"
                  placeholder="Buscar"
                  aria-label="Buscar productos o categorías"
                  className={styles.searchInput}
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                />
                <InputGroup.Text className={styles.searchIcon}>
                  <FaSearch onClick={() => handleSearch(search)} />
                </InputGroup.Text>
              </InputGroup>
            </div>

            {/* Widgets */}
            <Nav className="d-flex align-items-center mx-5">
              <WidgetWrapper>
                <NotificationsWidgetLogic />
              </WidgetWrapper>
              <WidgetWrapper>
                <CartWidgetLogic />
              </WidgetWrapper>
              <WidgetWrapper>
                <FavoriteWidgetLogic />
              </WidgetWrapper>
              <WidgetWrapper>
                <ProfileWidgetLogic />
              </WidgetWrapper>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MenuCategoriesLogic />
    </>
  );
};

export default NavbarPresentation;
