import React, { useContext, useState, useEffect } from "react";
import Item from "./Item/Item";
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { ShopContext } from "./ShopContext/ShopContext";


const ItemListContainer = () => {
    const {productos} = useContext(ShopContext);   
    const {category} = useParams();
   
    return (
     <div> 
        <h2 className="text-style">Bienvenidos a Tienda Gamer</h2>
        <ItemList productos = {category ? 
                              productos.filter(item => item.categoria === category)
                            : productos}/>
     </div>
  ); 
 
};


export default ItemListContainer;