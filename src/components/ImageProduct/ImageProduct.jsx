import React from "react";
import Quantity from "../Quantity/Quantity";
import "./ImageProduct.scss"

export default function ImageProduct({ src, alt, quantity }){

    return(
        <div className="container-image">
            <div className="image">
                <img src={src} alt={alt}></img>
            </div>
            
            {quantity > 0 ?
                <Quantity quantity={quantity}/>
            :
            <></>}
        </div>
    )
}