import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import NotFound from "./components/pages/notFound/NotFound";
import CartContainer from "./components/pages/cart/CartContainer";
import LoginContainer from "./components/pages/login/LoginContainer";
import FavoritesContainer from "./components/pages/favorites/FavoritesContainer";
import ItemListMostSoldContainer from "./components/pages/itemListMostSold/ItemListMostSoldContainer";
import CartContextProvider from "./context/CartContext";
import Checkout from "./components/pages/checkout/Checkout";
import { RegisterContainer } from "./components/pages/register/RegisterContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListMostSoldContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="/favorites" element={<FavoritesContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/filtros/:key/:value"
              element={<ItemListContainer />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
