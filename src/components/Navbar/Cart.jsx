import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import Item from "../Item/Item";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const [name, setName] =useState(''); 
    const [email, setEmail] =useState(''); 
    const [phone, setPhone] =useState(''); 
    
    const { cart } = useContext(CartContext);
    const { vaciarCarrito, cartLength, createOrder} = useContext (CartContext);
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
            <input type="email" onImput={(e) => {setEmail(e.target.value)}} placeholder="email"/>
            <input type="tel" onImput={(e) => {setPhone(e.target.value)}} placeholder="phone"/>
            <input type="text" onImput={(e) => {setName(e.target.value)}} placeholder="name"/>

        </div>
        <div> 
            <button onClick={() => {vaciarCarrito()}}>Vaciar Carrito</button>
            <button onClick={() => {createOrder(name, email, phone)}}>Comprar</button>
            
        </div>     
        </>
        : <h3 className="textoCentrado">No hay productos en el carrito</h3>
    )
};

export default Cart;

