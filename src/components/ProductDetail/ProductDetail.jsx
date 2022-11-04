import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { startAddSelectedProduct, startDiscountSelectedProduct } from "../../redux/actions/products";
import ImageProduct from "../ImageProduct/ImageProduct";
import "./ProductDetail.scss"

export default function ProductDetail({ propWindowSize, propProduct }){
    const dispatch = useDispatch();
    const reduxProduct = useSelector((state) => state.productosReducer.productoSeleccionado);
    const product = propProduct || reduxProduct;
    const cart = useSelector((state) => state.productosReducer.carrito) ?? [];
    
    const getWindowSize = _ => {
        const {innerWidth} = window;
        return innerWidth;
    }
    
    const [windowSize, setWindowSize] = useState(propWindowSize || getWindowSize())
    const addQuantity = id => {
        dispatch(startAddSelectedProduct({id : id}));
    };

    const discountQuantity = id => {
        dispatch(startDiscountSelectedProduct({id : id}));
    };

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    return(
            <div className="product-detail">
                <h2>Detalle del producto</h2>
                <hr/>
                {product != null 
                ? 
                    <div className="product-selected">
                        <div className="product-selected-img">
                            <ImageProduct src={product.RutaImagen} alt={product.Nombre} quantity={cart.filter(productSelected => productSelected.Id === product.Id).length > 0 ? cart.filter(productSelected => productSelected.Id === product.Id)[0].cantidad : 0 }/>
                        </div>
                        <br></br>
                        <div className="product-selected-general">
                            <div className="product-selected-info">
                                <h3>{product.Nombre}&nbsp;&nbsp;<label>${product.Precio}</label></h3>
                            </div>
                            <div className="product-selected-add-subtract">
                                <img src="/icons/minus.png" onClick={() => discountQuantity(product.Id)} alt="Restar"></img>
                                <img src="/icons/plus.png" onClick={() => addQuantity(product.Id)} alt="Sumar"></img>
                            </div>
                        </div>
                        <hr/>
                            {product.Descripcion}
                        <hr/>
                    </div>
                :
                    <p>Por favor seleccione un producto de la parte { windowSize <= 900 ? "de arriba" : "izquierda" } para ver su detalle y asignar mas</p>
                }
            </div>
    )
}