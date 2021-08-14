import  React, {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext/CartContext";


const CartWidget = () => {
    
    const {cartLength} = useContext(CartContext);
  
    return (
        cartLength > 0 ? 
        <>
        <Link to="/cart">
        <i class="fab fa-opencart"></i>
        <span>{cartLength}</span>
        </Link>
        </>
        :null
    )


};

export default CartWidget;