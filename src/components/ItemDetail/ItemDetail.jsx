import React from "react";

const ItemDetail = ({ item }) => {
  return (

  <div>
      <div className="card">
          <div className="box">
            <div className="content">
              <img src={item.imagen} alt={item.nombre}/>
               <div className="card-title">
              <h3>{item.nombre}</h3>
              <h3> Precio: $ <span>{item.precio}</span></h3>
              <button className="btn">Comprar</button>
               </div>
            </div>
        </div>
      </div>
   </div>
  );
};

export default ItemDetail;

 /*  <div>
      

      <div className="content">
        <img src={item.imagen} className=""alt={item.nombre}/>
        <h3>{item.nombre}</h3>
        <h3 className="card-text">{item.precio}</h3>
        <button className="btn">Comprar</button>
      </div>
    </div> */