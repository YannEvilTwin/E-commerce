import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Item from "../Item/Item";

const Cart = () => {

    const { cart } = useContext(CartContext);
    const { vaciarCarrito } = useContext (CartContext);
    const handleVaciarCarrito = () => {
        vaciarCarrito(

        );
    };


    return (
        
        <>
        <i class="fab fa-opencart"></i>
        <div>
            Estas comprando: 
            {cart.map(item => 
            <Item key={item.id} item={item}></Item>)}

        </div>

        <button onClick={handleVaciarCarrito}>Vaciar Carrito</button>
        </>

    )


};

export default Cart;