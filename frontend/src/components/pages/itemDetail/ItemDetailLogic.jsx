import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { products } from "../../../data/productsMock.js";
import { CartContex } from "../../../context/CartContext.jsx";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";
import ItemDetailPresentation from "./ItemDetailPresentation.jsx";

const ItemDetailLogic = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContex);

  useEffect(() => {
    const productcolection = collection(db, "products");
    const refDoc = doc(productcolection, id);
    getDoc(refDoc).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let product = { ...item, cantidad: cantidad };
    addToCart(product);
  };

  return <ItemDetailPresentation item={item} onAdd={onAdd} />;
};

export default ItemDetailLogic;
