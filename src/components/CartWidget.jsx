import  React, {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext/CartContext";

const CartWidget = () => {
    
    const {cartLength} = useContext(CartContext);
  
    return (  
        <>
        <Link to="/cart">
        <i id="cartWidget" class="fab fa-opencart"></i>
        <span>{cartLength}</span>
        </Link>
        </> 
    )
};

export default CartWidget;