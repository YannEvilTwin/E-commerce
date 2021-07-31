import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';


 //Array de items
const itemsArray = [
    {
        id: 1,
        nombre: "Gamer Kit Redragon",
        imagen: "../images/1.png",
        precio: 8699,
        category: 1,
        stock: 10,
        description: "Un Kit pensado para cubrirlo todo, con los periféricos más famosos de Redragon. Ideal para tu ecosistema Gaming."
    },
    {
        id: 2,
        nombre: "Gamer Bluecase BG-009 ATX",
        imagen: "../images/2.png",
        precio: 12237,
        category: 2,
        stock: 10,
        description: "El gabinete Gamer Bluecase posee un diseño simple y compacto, con todo lo que necesitas para tu setup."
    },
    {
        id: 3,
        nombre: "Gamer Headset Redragon",
        imagen: "../images/3.png",
        precio: 6500,
        category: 2,
        stock: 10,
        description: "Con los Redragon no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores."
    },
    {
        id: 4,
        nombre: "Gamer Mouse 3200dpi",
        imagen: "../images/4.png",
        precio: 1850,
        category: 2,
        stock: 10,
        description: "Carcasa ergonómica. Posee un diseño estructural relajado para evitar la fatiga de la mano del mouse."
    },
   
]
const ItemListContainer = (props) => {

    console.log(props);

    const [productos, setProductos] = useState ([])

    const {id} = useParams();
    console.log(id, 'este es id de itemListContainer');
    
  //Aca van estados y funciones

    const obtenerItems = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(!!id){
                const filtrado = itemsArray.filter((item) => item.category == id);
                resolve(filtrado);
            } else {
                  resolve(itemsArray)
            }
          }, 3500);
        });

    }
           
    useEffect (() => {
        obtenerItems() .then (respuesta => setProductos (respuesta))
    },[id])


    return (
     <div> 
        <h2 className="text-style">Bienvenidos a Tienda Gamer</h2>
        <ItemList productos = {productos}/>
     </div>
  ); 
 

   //Aca ya no se puede poner nada
};


export default ItemListContainer;