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
               <ItemCount 
               initial={item.stock > 0 ? 1 : 0} 
               contador={contador} 
               setContador={setContador} 
               stock={item.stock} />
               <button 
               disabled={item.stock <= 0 ? true : false || contador <= 0}
               onClick={agregarAlCarrito} className="btn">Agregar al carrito
               </button>
               <br></br>
               <br></br>
               <h4>Stock: {item.stock > 0 ? `Stock: ${item.stock}` : "No disponible" }</h4>
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