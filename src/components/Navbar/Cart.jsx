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
        <div>
            <h3>Estas comprando:</h3>
            <div className="container cardCarrito">
                 {cart.map(item => 
                 <Item key={item.id} item={item}></Item>)}          
            </div>
            <button onClick={handleVaciarCarrito} className="botonCarrito">Vaciar Carrito</button>

        </div>   
        </>

    )


};

export default Cart;