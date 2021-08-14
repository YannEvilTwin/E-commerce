import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    
    
    const { cart } = useContext(CartContext);
    const { vaciarCarrito, cartLength } = useContext (CartContext);
    const handleVaciarCarrito = () => {
        vaciarCarrito(

        );
    };

    const total = cart.reduce((acc, {cantidad, precio}) => {
        return acc = acc + (precio * cantidad)
    }, 0);

    return (
        cartLength > 0 ? 
        <>
         <div>
            <h3 className="carrito">Productos en el carrito</h3>
            <div className="container cardCarrito">
                 {cart.map(item =><ItemCart key={item.id} item={item}></ItemCart>)}
            </div>
        </div>
        <h3>Total: {total}</h3>
        <div> 
            <button onClick={vaciarCarrito} className="">Vaciar Carrito</button>
        </div>     
        </>
        : <h3 className="textoCentrado">No hay productos en el carrito</h3>
    )
};

export default Cart;

