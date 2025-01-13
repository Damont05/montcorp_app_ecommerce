import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig.js";
import HomePresentation from "./HomePresentation.jsx";
import useCountdownTimer from "../../../hooks/useCountdownTimer.js";

const HomeLogic = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // Configuración dinámica del tiempo restante
  const isShortTimer = true; // Cambiar dinámicamente según la lógica
  const timerConfig = isShortTimer
    ? { hours: 2, minutes: 10 } // Temporizador de 10 minutos
    : { hours: 0, minutes: 0 }; // Temporizador de 2 horas

  // Hook para el temporizador
  const timeLeft = useCountdownTimer(timerConfig);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const consulta = query(productsCollection, where("cntVendido", ">", 60));
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
  }, []);

  return <HomePresentation timeLeft={timeLeft} items={items} error={error} />;
};

export default HomeLogic;
