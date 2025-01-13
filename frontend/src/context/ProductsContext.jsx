import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState({
    key: "",
    value: "",
  });
  const [message, setMessage] = useState({
    title: "",
    type: "",
    text: "",
  });

  const currentDate = new Date();
  const [dateTime, setDateTime] = useState(
    currentDate.toLocaleDateString() + " " + currentDate.toLocaleTimeString()
  );

  let data = {
    product,
    setProduct,
    filteredProduct,
    setFilteredProduct,
    message,
    setMessage,
    dateTime,
  };
  return (
    <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
