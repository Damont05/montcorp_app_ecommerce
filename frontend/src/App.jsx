import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkModeProvider from "./context/DarkMode.jsx";
import ProductsContextProvider from "./context/ProductsContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import FavoritesContextProvider from "./context/FavoritesContext.jsx";
import Layout from "./components/layout/Layout.jsx";
import { HomeLogic } from "./components/pages/home";
import { ItemDetailLogic } from "./components/pages/itemDetail";
import { ItemListLogic } from "./components/pages/itemListContainer";
import { CartLogic } from "./components/features/cart";
import { FavoritesLogic } from "./components/features/favorites";
import { CheckoutLogic } from "./components/features/checkout";
import { ProfileLogic } from "./components/pages/profile";
import { ConfigurationLogic } from "./components/pages/configuration";
import { NotFoundLogic } from "./components/pages/notFound";
import { LoginLogic } from "./components/pages/login";
import { LogoutLogic } from "./components/pages/logout";
import { RegisterLogic } from "./components/pages/register";

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
