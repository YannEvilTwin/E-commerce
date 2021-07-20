import React from "react";

const ItemDetail = ({ item }) => {
  return (

   <div className="container">
      <div className="card">
          <div className="box">
            <div className="content">
              <img src={item.imagen} alt={item.nombre}/>
               <div className="card-title">
              <h3>{item.nombre}</h3>
              <h3> Precio: $ <span>{item.precio}</span></h3>
              <button id="btn">Comprar</button>
               </div>
            </div>
        </div>
      </div>
   </div>
  );
};

export default ItemDetail;