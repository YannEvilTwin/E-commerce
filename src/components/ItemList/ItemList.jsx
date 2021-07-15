import React from "react";
import Item from "../Item/Item";

export default function ItemList ({productos}) {

    return (
        <div>
          <h1></h1>
          <p></p>
    
          {productos.map(item => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      );
}
