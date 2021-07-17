import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="">
      <img src={item.imagen} 
      className=""
      alt={item.nombre} 
      />

      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.precio}</p>
        <button className="btn">Comprar</button>
      </div>
    </div>
  );
};

export default ItemDetail;