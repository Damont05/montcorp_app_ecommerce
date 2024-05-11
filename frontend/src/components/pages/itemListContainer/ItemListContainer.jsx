import * as React from "react";
import { useState, useEffect } from "react";
import { products } from "../../../data/productsMock.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { key, value } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    let upFilters = { ...filters };
    upFilters[key] = value;

    const filtersChanged = Object.keys(upFilters).some(
      (key) => upFilters[key] !== filters[key]
    );

    if (filtersChanged) {
      setFilters(upFilters);
    }

    const productsCollection = collection(db, "products");

    let consulta = productsCollection;

    if (
      Object.keys(upFilters).length > 0 &&
      Object.values(upFilters).every((val) => val !== undefined)
    ) {
      const filtersArray = Object.keys(upFilters)
        .filter((filterKey) => upFilters[filterKey] !== undefined)
        .map((filterKey) => where(filterKey, "==", upFilters[filterKey]));

      consulta = query(productsCollection, ...filtersArray);
    }

    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(newArray);
      })
      .catch((error) => {
        setError(error);
      });
  }, [key, value, filters]);

  return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
