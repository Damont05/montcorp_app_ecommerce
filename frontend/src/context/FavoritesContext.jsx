import { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, SetFavorites] = useState([]);

  const addFavorites = (product) => {
    SetFavorites((prev) =>
      prev.some((fav) => fav.id === product.id)
        ? prev.filter((fav) => fav.id !== product.id)
        : [...prev, product]
    );
  };

  const isFavorites = (productId) => {
    return favorites.some((fav) => fav.id === productId);
  };

  let data = { favorites, addFavorites, isFavorites };
  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
