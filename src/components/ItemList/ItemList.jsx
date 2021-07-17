import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { misProductos } from "../../misProductos";

console.log(misProductos);

const ItemListContainer = () => {
  const [productos, setProductos] = useState ([]);

  const getItems = () => {

    
    return new Promise  ((resolve, reject) => {
      setTimeout (() => {
        resolve(misProductos);
        reject("Error, no se pudo encontrar el producto");
      }, 3000);
    });
  }; 
  useEffect(() => {
    getItems().then ((res) => setProductos(res));
  }, []);

    return (
        <div className="container">
          <h1></h1>
          <p></p>
    
          {productos.map((item) => (
            <Item key={item.id} product={item} />
          ))}
        </div>
      );
}

export default ItemListContainer;
