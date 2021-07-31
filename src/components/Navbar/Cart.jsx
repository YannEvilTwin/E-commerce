import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

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
            <h3>Productos en el carrito</h3>
            <div className="container cardCarrito">
                 {cart.map(item =><ItemCart key={item.id} item={item}></ItemCart>)}
            </div>
        </div>    
        </>

    )
};

export default Cart;

