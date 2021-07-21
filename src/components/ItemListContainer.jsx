import React, { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";


 //Array de items
const itemsArray = [
    {
        id: 1,
        nombre: "Gamer Kit Redragon",
        imagen: "./images/1.png",
        precio: 8699,
        category: 1,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Gamer Bluecase BG-009 ATX",
        imagen: "./images/2.png",
        precio: 12237,
        category: 2,
        stock: 10,
    },
    {
        id: 3,
        nombre: "Gamer Headset Redragon",
        imagen: "./images/3.png",
        precio: 6500,
        category: 2,
        stock: 10,
    },
    {
        id: 4,
        nombre: "Gamer Mouse 3200dpi",
        imagen: "./images/4.png",
        precio: 1850,
        category: 2,
        stock: 10,
    },
   
]
const ItemListContainer = (props) => {

    console.log(props);

    const [productos, setProductos] = useState ([])
    

  //Aca van estados y funciones

    const obtenerItems = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(itemsArray), 3500);
        });
    }
           
    useEffect (() => {
        obtenerItems() .then (respuesta => setProductos (respuesta))
    },[])
  
    return (
     <div> 
        <h2 className="text-style">Bienvenidos a Tienda Gamer</h2>
        <ItemList productos = {productos}/>
     </div>
  ); 
 

   //Aca ya no se puede poner nada
};


export default ItemListContainer;