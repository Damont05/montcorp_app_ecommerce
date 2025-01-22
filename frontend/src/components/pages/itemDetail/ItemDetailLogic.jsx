import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { products } from "../../../data/productsMock.js";
import { CartContex } from "../../../context/CartContext.jsx";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";
import ItemDetailPresentation from "./ItemDetailPresentation.jsx";

const ItemDetailLogic = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const productcolection = collection(db, "products");
    const refDoc = doc(productcolection, id);
    getDoc(refDoc).then((res) => {
      setProduct({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <ItemDetailPresentation
      product={product}
      counter={counter}
      setCounter={setCounter}
    />
  );
};

export default ItemDetailLogic;
