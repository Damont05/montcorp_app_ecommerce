import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, deleteById }) => {
  return (
    <>
      <div className="mi_bolsa">
        <h2>Mi bolsa de compras personalizada</h2>
        <div className="content_productos" id="content_productos">
          <div className="productosCart">
            {cart.length > 0 ? (
              cart.map((product) => (
                <Link
                  to={`/itemDetail/${product.id}`}
                  key={product.id}
                  className="grid"
                >
                  <span className="sale">
                    <p>Sale</p>
                    <img src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1712493190/proyects/vector/icons/fire_lni6ih.png"></img>
                  </span>
                  <div className="cuerpo">
                    <img src={product.imagen[0]} alt=""></img>
                  </div>
                  <div className="content_info">
                    <div className="titulo">
                      <h3>{product.nombre}</h3>
                      <p>{product.descripcion}</p>
                    </div>
                    <div className="cantidad">
                      <p>Cantidad: {product.cantidad}</p>
                    </div>
                    <div className="talla">
                      <p>Talla: m</p>
                    </div>
                    <div className="precio_descuento">
                      <p>{product.precio}</p>
                    </div>
                  </div>
                  <div className="actionProduct">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteById(product.id);
                      }}
                    >
                      <img
                        src="https://res.cloudinary.com/dqngvzxqy/image/upload/v1713452676/proyects/vector/icons/delete_bawi7y.png"
                        className="btnEliminar"
                        alt="Eliminar producto"
                      ></img>
                    </button>
                  </div>
                </Link>
              ))
            ) : (
              <h1 className="CartCero">
                No tienes ningún producto agregado al carrito.
              </h1>
            )}
          </div>
          {cart.length > 0 ? (
            <div className="total">
              <div className="headerDetalle">
                <h4>Detalle de la compra</h4>
                <div>Tienes 3 productos agregados a la bolsa</div>
              </div>
              <div className="detalle">
                <h5 id="subtotal">Sub-total: </h5>
                <h6 id="iva">IVA (19%): </h6>
                <p id="total">
                  Total: <span></span>
                </p>
                <Link to={"/checkout"} className="btnCheckout">
                  Ir a pagar
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Cart;
