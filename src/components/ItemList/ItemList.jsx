import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { misProductos } from "../../misProductos";
import ItemCart from "../ItemCart/ItemCart";

console.log(misProductos);
  
  const ItemList = ({productos}) => {
    return (
        <div className="container">
          {productos.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      );
  }


export default ItemList;



