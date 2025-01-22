import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeProvider from "./context/DarkMode.jsx";
import ProductsContextProvider from "./context/ProductsContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import FavoritesContextProvider from "./context/FavoritesContext.jsx";
import Layout from "./components/layout/Layout.jsx";
import LoginLogic from "./components/pages/login/LoginLogic.jsx";
import RegisterLogic from "./components/pages/register/RegisterLogic.jsx";
import ConfigurationLogic from "./components/pages/configuration/ConfigurationLogic.jsx";
import HomeLogic from "./components/pages/home/HomeLogic.jsx";
import ItemDetailLogic from "./components/pages/itemDetail/ItemDetailLogic.jsx";
import ItemListLogic from "./components/pages/itemListContainer/ItemListLogic.jsx";
import LogoutLogic from "./components/pages/logout/LogoutLogic.jsx";
import NotFoundLogic from "./components/pages/notFound/NotFoundLogic.jsx";
import ProfileLogic from "./components/pages/profile/ProfileLogic.jsx";
import CartLogic from "./components/features/cart/CartLogic.jsx";
import CheckoutLogic from "./components/features/checkout/CheckoutLogic.jsx";
import FavoritesLogic from "./components/features/favorites/FavoritesLogic.jsx";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <ProductsContextProvider>
          <FavoritesContextProvider>
            <CartContextProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<HomeLogic />} />
                  <Route path="/itemDetail/:id" element={<ItemDetailLogic />} />
                  <Route path="/products" element={<ItemListLogic />} />

                  <Route path="/cart" element={<CartLogic />} />
                  <Route path="/favorites" element={<FavoritesLogic />} />
                  <Route path="/checkout" element={<CheckoutLogic />} />
                  <Route
                    path="/filtros/:key/:value"
                    element={<ItemListLogic />}
                  />
                  <Route path="/profile" element={<ProfileLogic />} />
                  <Route
                    path="/configuration"
                    element={<ConfigurationLogic />}
                  />
                  <Route path="*" element={<NotFoundLogic />} />
                </Route>
                <Route path="/login" element={<LoginLogic />} />
                <Route path="/logout" element={<LogoutLogic />} />
                <Route path="/register" element={<RegisterLogic />} />
              </Routes>
            </CartContextProvider>
          </FavoritesContextProvider>
        </ProductsContextProvider>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
