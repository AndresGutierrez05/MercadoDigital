import React from "react";
import "./Quantity.scss";

export default function Quantity({ quantity }){

    return(
        <div className="quantity">
            <div className="quantity-value"><span>{quantity}</span></div>
        </div>
    )
}