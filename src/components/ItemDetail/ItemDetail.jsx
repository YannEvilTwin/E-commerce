import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {

  const [contador, setContador] = useState(1);

  const [finished, setFinished] = useState(false);

  const handleState = () => setFinished(!finished);


  return (

   <div className="container">
      <div className="card">
          <div className="box">
            <div className="content">
              <img src={item.imagen} alt={item.nombre}/>
               <div className="card-title">
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
                 <button onClick={handleState} className="btn">Comprar</button>
                </>
              ) : (
                <>
                <Link to="/cart" onClick={handleState}>
                  <button onClick={handleState}>Finalizar Compra</button>
                </Link>
                <button onClick={handleState}>Modificar Compra</button>
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