import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {   
    const { cart, total } = useContext(CartContext);
    const { vaciarCarrito, cartLength } = useContext (CartContext);
    const handleVaciarCarrito = () => {
        vaciarCarrito();
    };

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
             <button onClick={()=> {vaciarCarrito()}}>Vaciar Carrito</button>
             <button id="finalizar-compra">
                 <Link to="/checkout">Finalizar Compra</Link></button>
         </div>
        </>
        : <h3>No hay productos en el carrito</h3>
    )
};

export default Cart;