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
import NotFoundLogic from "./components/pages/notFound/NotFoundLogic.jsx";
import ProfileLogic from "./components/pages/profile/ProfileLogic.jsx";
import CartLogic from "./components/features/cart/CartLogic.jsx";
import CheckoutLogic from "./components/features/checkout/CheckoutLogic.jsx";
import FavoritesLogic from "./components/features/favorites/FavoritesLogic.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import ProtectedRoutes from "./components/features/auth/ProtectedRoutes.jsx";
import PublicRoutes from "./components/features/auth/PublicRoutes.jsx";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <AuthContextProvider>
          <ProductsContextProvider>
            <FavoritesContextProvider>
              <CartContextProvider>
                <Routes>
                  {/* Rutas renderizadas sin el NavBar */}
                  <Route element={<PublicRoutes />}>
                    <Route path="/login" element={<LoginLogic />} />
                    <Route path="/register" element={<RegisterLogic />} />
                  </Route>
                  <Route element={<Layout />}>
                    {/* Rutas Públicas */}
                    <Route path="*" element={<NotFoundLogic />} />
                    <Route path="/" element={<HomeLogic />} />

                    <Route path="/products" element={<ItemListLogic />} />
                    <Route path="/cart" element={<CartLogic />} />
                    <Route path="/favorites" element={<FavoritesLogic />} />
                    <Route
                      path="/itemDetail/:id"
                      element={<ItemDetailLogic />}
                    />
                    <Route
                      path="/filtros/:key/:value"
                      element={<ItemListLogic />}
                    />

                    {/* Rutas Protegidas */}
                    <Route element={<ProtectedRoutes />}>
                      <Route path="/profile" element={<ProfileLogic />} />
                      <Route path="/checkout" element={<CheckoutLogic />} />
                      <Route
                        path="/configuration"
                        element={<ConfigurationLogic />}
                      />
                    </Route>
                  </Route>
                </Routes>
              </CartContextProvider>
            </FavoritesContextProvider>
          </ProductsContextProvider>
        </AuthContextProvider>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
