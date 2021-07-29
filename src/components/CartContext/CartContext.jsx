import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const usuario = useState(null);

    const [cart, setCart] = useState ([]);

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    };
    const vaciarCarrito = () => {
        setCart([])
    };
    return (
        <CartContext.Provider value = {{cart, agregarAlCarrito, vaciarCarrito}}>
            {usuario}
            {children}
        </CartContext.Provider>
                );
};  
    
    export default CartContext;