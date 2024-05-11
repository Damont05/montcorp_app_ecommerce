import * as React from "react";
import { useState, useEffect } from "react";
import ItemListMostSold from "./ItemListMostSold.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";

const ItemListMostSoldContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const consulta = query(productsCollection, where("cntVendido", ">", 60));
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray)
    }).catch((error) => {
      setError(error)
    });
  }, []);

  return <ItemListMostSold items={items} error={error} />;
};

export default ItemListMostSoldContainer;
