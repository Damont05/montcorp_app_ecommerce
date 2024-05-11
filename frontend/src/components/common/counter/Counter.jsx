import "./Counter.css";

const Counter = ({ sumar, restar, contador, onAdd }) => {
  return (
    <>
      <div className="containerCounter">
        <div className="BtnsSumarRestar">
          <h1>Cantidad:</h1>
          <button onClick={restar}>-</button>
          <h2 className="labelCounter">{contador}</h2>
          <button onClick={sumar}>+</button>
        </div>
        <div className="btnAction">
          <button onClick={() => onAdd(contador)} className="btnAdd">
            agregar
          </button>
          <img
            src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493193/proyects/vector/icons/heart_xb3q16.png"
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default Counter;
