import { useEffect, useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({stock, initial = 1, onAdd}) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : "maximo en stock";
  };

  const restar = () => {
    contador > 1
      ? setContador(contador - 1)
      : "no puedes comprar menos de 1 producto";
  };

  let objectProps = {
    sumar,
    restar,
    contador,
    onAdd,
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
