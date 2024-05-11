import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [info, setInfo] = useState({
    email: "",
    phone: "",
    nombres: "",
    apellidos: "",
    pais: "",
    region: "",
    comuna: "",
    direccion: "",
    nDireccion: "",
    nCasa: "",
    opcionEnvio: "",
    opcionPago: "",
    addNota: "",
  });
  return (
    <>
      <div className="formularioEnvioPago" id="modal">
        <div className="formulario_content">
          <h4>Formulario de pago</h4>
          <form action="">
            <section className="section_contacto">
              <h5>1. Información de contacto</h5>
              <p>
                Usaremos este correo electrónico para enviarte detalles y
                actualizaciones relacionadas con tu pedido.
              </p>
              <input
                type="email"
                name="email"
                className="correo"
                placeholder="Correo electrónico"
                required
              ></input>
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono Ejem. +56 9 xxxx xxxx"
                required
              ></input>
            </section>
            <section className="section_direccion">
              <h5>2. Dirección de envío</h5>
              <p>
                Introduce la dirección a dónde quieras que se entregue tu
                pedido.
              </p>
              <div className="nombreApellidos">
                <input
                  type="text"
                  name="nombres"
                  className="nombres"
                  id="nombres"
                  placeholder="Nombres"
                  required
                ></input>
                <input
                  type="text"
                  name="apellidos"
                  className="apellidos"
                  id="apellidos"
                  placeholder="Apellidos"
                  required
                ></input>
              </div>
              <select name="pais" id="pais">
                <option value="chile">CHILE</option>
              </select>
              <select name="region" id="region">
                <option value="">ANTOFAGASTA</option>
                <option value="">ARICA Y PARINACOTA</option>
                <option value="">ATACAMA</option>
                <option value="">
                  AYSÉN DEL GRAL. CARLOS IBÁÑEZ DEL CAMPO
                </option>
                <option value="">BIOBÍO</option>
                <option value="">COQUIMBO</option>
                <option value="">LA ARAUCANÍA</option>
                <option value="">LIBERTADOR GENERAL BERNARDO O'HIGGINS</option>
                <option value="">LOS LAGOS</option>
                <option value="">LOS RÍOS</option>
                <option value="">MAGALLANES Y DE LA ANTÁRTICA CHILENA</option>
                <option value="">MAULE</option>
                <option value="">METROPOLITANA DE SANTIAGO</option>
                <option value="">ÑIBLE</option>
                <option value="">TARAPACÁ</option>
                <option value="">VALPARAISO</option>
              </select>
              <input
                type="text"
                name="comuna"
                className="comuna"
                placeholder="Comuna"
                required
              ></input>
              <input
                type="text"
                name="direccion"
                className="direccion"
                placeholder="Ingresa tu dirección"
                required
              ></input>
              <input
                type="text"
                name="nDireccion"
                className="numeroDireccion"
                placeholder="Ingresa el numero de dirección"
                required
              ></input>
              <input
                type="text"
                name="nCasa"
                className="numeroCasa"
                placeholder="Ejem. Casa 3, Dpto 101. (opcional)"
              ></input>
            </section>
            <section className="section_envio">
              <h5>3. Opciones de envío</h5>
              <fieldset>
                <legend>Selecciona como quieres recibir tu pedido</legend>

                <div className="checkEnvio">
                  <input
                    type="radio"
                    id="retiro"
                    name="opcionEnvio"
                    value="retiro"
                    defaultChecked={true}
                  ></input>
                  <label htmlFor="retiro">Retiro en tienda.</label>
                </div>

                <div className="checkEnvio">
                  <input
                    type="radio"
                    id="envio"
                    name="opcionEnvio"
                    value="envio"
                  ></input>
                  <label htmlFor="envio">Envio Nacional</label>
                </div>
              </fieldset>
            </section>
            <section className="section_pago">
              <h5>4. Opciones de pago</h5>
              <fieldset>
                <legend>Selecciona el metodo de pago</legend>

                <div className="checkPago">
                  <input
                    type="radio"
                    id="tarjeta"
                    name="opcionPago"
                    value="tarjeta"
                    defaultChecked={true}
                  ></input>
                  <label htmlFor="tarjeta">Tarjeta de débito/crédito.</label>
                </div>
                <div className="checkPago">
                  <input
                    type="radio"
                    id="transferencia"
                    name="opcionPago"
                    value="transferencia"
                  ></input>
                  <label htmlFor="transferencia">Transferencia bancaria.</label>
                </div>

                <div className="checkPago">
                  <input
                    type="radio"
                    id="mercadoPago"
                    name="opcionPago"
                    value="mercadoPago"
                  ></input>
                  <label htmlFor="mercadoPago">Mercado Pago.</label>
                </div>

                <div className="checkPago">
                  <input
                    type="radio"
                    id="contraEntrega"
                    name="opcionPago"
                    value="contraEntrega"
                  ></input>
                  <label htmlFor="contraEntrega">Contra entrega</label>
                </div>
              </fieldset>
              <div htmlFor="checknota" className="AggNota">
                <div>
                  <span>Añade una nota a tu pedido</span>
                </div>
                <textarea
                  cols="30"
                  rows="10"
                  id="textNota"
                  name="addNota"
                  placeholder="Escribe aqui la nota que desee agregar para tu pedido"
                ></textarea>
              </div>
              <div className="finalizarPago">
                <input type="checkbox" id="checkTerminosCondiciones"></input>
                <label htmlFor="checkTerminosCondiciones">
                  Al proceder con tu compra aceptas nuestros{" "}
                  <a href="">Términos y condiciones</a> y{" "}
                  <a href="">Política de privacidad</a>.
                </label>
              </div>
            </section>
            <section className="section_pagar">
              <input type="submit" value="Pagar"></input>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
