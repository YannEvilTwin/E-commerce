import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {

  const [contador, setContador] = useState(1);
  const [finished, setFinished] = useState(false);
  const handleState = () => setFinished(!finished);
  const {agregarAlCarrito} = useContext(CartContext);
  const handleAgregar = () => agregarAlCarrito({...item, cantidad: contador});

  return (

   <div className="container">
      <div className="card">
          <div className="box">
            <div className="content">
              <img src={item.imagen} alt={item.nombre}/>
               <div>
              <h3>{item.nombre}</h3>
              <h3> Precio: $ <span>{item.precio}</span></h3>
              {!finished ? (
                <>
                 <ItemCount
                 initial={1}
                 contador={contador}
                 setContador={setContador}
                 stock={item.stock}
                 />  
                 <button onClick={handleAgregar} className="btn">Agregar al carrito</button>
                 <h3> Productos agregados {contador}</h3>
                </>
              ) : (
                <>
                <Link to="/cart" onClick={handleState}>
                  <button onClick={handleState}>Finalizar Compra</button>
                
                <button onClick={handleState}>Modificar Compra</button>
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