import React, { useEffect }  from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./Store.scss";
import { startGetProducts, startProductSelected, startSetCart, startRemoveProductCart, startRemoveSelectedProduct } from "../../redux/actions/products";
import ImageProduct from "../ImageProduct/ImageProduct";

export default function Store(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productosReducer.productos);
    const cart = useSelector((state) => state.productosReducer.carrito) ?? [];

    const handleProductDetail = (e, id) => {
        if(e.target.checked){
            dispatch(startProductSelected({id : id}));
            dispatch(startSetCart({id : id, quantity : 1}));
        }
        else{
            dispatch(startRemoveSelectedProduct());
            dispatch(startRemoveProductCart({id : id}));
        }
    }

    useEffect(() => {
        dispatch(startGetProducts());
    },[products]);

    return(
        <div className="store-products">
            <h2>Tienda</h2>
            <hr/>
            <div className="content-images">
                {products.length > 0 ? products.map( (product, i) =>
                    <div key={i} className="product-container">
                        <input type="checkbox" id={`product${i}`} onClick={(e) => handleProductDetail(e, product.Id)}/>
                        <label htmlFor={`product${i}`}>
                            <ImageProduct src={product.RutaImagen} alt={product.Nombre} quantity={cart.filter(productSelected => productSelected.Id === product.Id).length > 0 ? cart.filter(productSelected => productSelected.Id === product.Id)[0].cantidad : 0 }/>
                        </label>
                    </div>
                ) : <></>}
            </div>
        </div>
    )
}