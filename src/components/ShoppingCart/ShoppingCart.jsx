import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Quantity from "../Quantity/Quantity";
import "./ShoppingCart.scss";

export default function ShoppingCart({ propCart }){
    const [ showShoppingCart, setShowShoppingCart ] = useState(false);
    const reduxCart = useSelector((state) => state.productosReducer.carrito) ?? [];
    const cart = propCart || reduxCart;
    const totalPrice = cart.map(product => product.Precio * product.cantidad).reduce((a, b) => a + b, 0) ?? 0;

    const handleShowShoppingCart = (show) => {
        setShowShoppingCart(show != null ? show : !showShoppingCart);
    }

    return(
        <div className="cart-container">
            <div className="cart-container-right">
                <div className="cart-button" onClick={cart.length > 0 ? () => handleShowShoppingCart(!showShoppingCart) : null}  onMouseEnter={cart.length > 0 ? handleShowShoppingCart : null}>
                    <div className="cart-button-img">
                        <img src="/icons/cart.png" alt="carrito"></img>
                    </div>
                    <div>
                        <p className="totalPrice">${totalPrice}</p>
                    </div>
                </div>
                <div className="cart-summary" style={{ display : cart.length > 0 && showShoppingCart ? "inline" : "none"}} onMouseLeave={() => handleShowShoppingCart(false)}>
                    <h2>Carrito</h2>
                    <hr/>
                    <div className="cart-summary-products">
                        {cart.map((product, i) =>
                            <div key={i}>
                                <div className="cart-summary-product">
                                    <Quantity quantity={product.cantidad}/>
                                    <img src={product.RutaImagen} alt={product.Nombre}></img>
                                </div>
                                <hr/>
                            </div>
                        )}
                    </div>
                    <div className="cart-total">
                        <div>
                            <form action="https://checkout.wompi.co/p/" method="GET">
                                <input type="hidden" name="public-key" value="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH" />
                                <input type="hidden" name="currency" value="COP" />
                                <input type="hidden" name="amount-in-cents" value={`${totalPrice}00`} />
                                <input type="hidden" name="reference" value="4XMPGKWWPKWQ" />
                                <input type="hidden" name="signature-integrity" value="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5" />
                                <button type="submit">Paga con <strong>Wompi</strong></button>
                            </form>
                        </div>
                        <h3>Total : ${totalPrice}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
} 