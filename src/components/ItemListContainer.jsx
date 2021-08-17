import React, { useContext } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { ShopContext } from "./ShopContext/ShopContext";
import Spinner from "./Spinner/Spinner";


const ItemListContainer = () => {
    const {productos, loading} = useContext(ShopContext);   
    const {category} = useParams();
    
    return (
      loading ? <Spinner /> :
     
     <div> 
        <h2 className="text-style">Bienvenidos a Tienda Gamer</h2>
        <ItemList productos = {category ?                               
                              productos.filter(item => item.categoria == category)
                            : productos}/>                        
     </div>    
  ); 
 
};


export default ItemListContainer;