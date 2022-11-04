import React from "react";
import Header from "../../components/Header/Header";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import Store from "../../components/Store/Store";
import "./Home.scss";

export default function Home(){
    return(
        <div className="home">
            <Header/>
            <ShoppingCart />
            <div className="store">
                <Store width={'60%'}/>
                <ProductDetail width={'40%'}/>
            </div>
        </div>
    )
}