import React, { createContext, useState } from 'react';

//se crea el Contexto para ser usado en cualquier componente
//se genera un export const porque lo tengo que importar cada vez que lo quiera usar
export const CartContext = createContext();

//creo mi componente que va a contener mi estado global, el cual sera utilizado en App.js
export const CartProvider = ({ children }) => {

  
    const usuario = useState(null); 
    
    const [cart, setCart] = useState ([]); //este useState se va a transformar en mi estado global

    //funciones que modificaran el cart
  
    //Agrega al carrito
    const addItem = (item) => {
        setCart([...cart, item])
    };

    const agregarAlCarrito = (item) => {
        setCart([...cart, item])
    };

     //funcion para editar la cantidad si ya se encuentra
    const editCart = (itemEditado) => {
    const editado = cart.map((item) =>
      item.id === itemEditado.id ? itemEditado : item
    );
    setCart(editado);
    };

    //ver si esta en el carrito
    const isInCart = (id) => {
    const verificar = cart.filter((item) => item.id === id);
    return verificar.length > 0;
    };

    //Vacia el carrito
    const vaciarCarrito = () => {
        setCart([])
    };

     //funcion para remover un Item del carrito
    const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    };


    //creo un objeto para ir agregando todo lo que quiera tener en mi estado global
   //puedo pasar array, objetos o funciones
    const values = {
    cart,
    setCart,
    isInCart,
    editCart,
    vaciarCarrito,
    addItem,
    deleteItem,
    agregarAlCarrito,
    };

    //retorno el context provider y en value le asigno los valores de mi estado global
   //que quiero dale a mi app
    return (
        <CartContext.Provider value = {values}>
            {usuario}
            {children}
        </CartContext.Provider>
                );
    };  
    

    //exporto mi context para poder usar en App.jsx
    export default CartContext;