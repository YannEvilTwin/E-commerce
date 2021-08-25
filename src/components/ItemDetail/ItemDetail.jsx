import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import  ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {

  //destructuro mi objeto y traigo lo que necesite de mi estado global
  //utilizo useContext y entre parentesis le paso el contexto del cual quiero traer mi data
  const {cart, addItem, isInCart, editCart } = useContext(CartContext);
  
  const [finished, setFinished] = useState(false);
  const handleState = () => setFinished(!finished);

  //Estado del contador
  const [contador, setContador] = useState(1);
  console.log(cart);

  const agregarAlCarrito = () => {
    if (isInCart(item?.id)) { 
      console.log("ya esta en carrito");
      editCart({ ...item, cantidad: contador });
    } else {
      addItem({ ...item, cantidad: contador });
    }
  };

  return (

   <div className="container">
     <div className="card">
       <div className="box">
         <div className="content">
           <img src={item.imagen} alt={item.nombre} />
           <div>
             <h3>{item.nombre}</h3>
             <h3> Precio: $ <span>{item.precio}</span></h3>
             {!finished ? (
             <>
               <ItemCount initial={1} contador={contador} setContador={setContador} stock={item.stock} />
               <button onClick={agregarAlCarrito} className="btn">Agregar al carrito</button>
               <br></br>
               <br></br>
               <h4>En stock: {item.stock}</h4>
             </>
             ) : (
             <>
               <Link to="/cart" onClick={handleState}>
               <button onClick={handleState}>Finalizar Compra</button>
               </Link>
             </>
             )}
           </div>
         </div>
       </div>
     </div>
   </div>
  );
};

export default ItemDetail;