import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { misProductos } from "../../misProductos";

console.log(misProductos);

const ItemList = () => {
  const [productos, setProductos] = useState ([]);

    return (
        <div className="container">
          <h1></h1>
          <p></p>
    
          {productos.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      );

  
}

export default ItemList;
