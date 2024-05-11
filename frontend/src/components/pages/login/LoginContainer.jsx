import Login from "./Login";

import { useState, useEffect } from "react";


const LoginContainer = () => {
  
  
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:8082/api/user')
    .then((response) => {
      // console.log(">>>RESPONSE: " + response.json());
      // return response.json();

      const clonedResponse = response.clone();

      //console.log("clonedResponse: " + clonedResponse.);
    
      // Leer el cuerpo de la respuesta clonada
      return clonedResponse.json();
    })
    .then(data => {
      // Manejar los datos de la respuesta
      console.log(data);
    })

    .then((items) => {
      setItems(items)
    })
  }, [])
  
   
  return <Login />;


};

export default LoginContainer;
