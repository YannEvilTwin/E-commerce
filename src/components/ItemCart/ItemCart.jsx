import React, { useContext } from "react";
import CartContext from "../CartContext/CartContext";

const ItemCart = ({ item }) => {

 console.log(item);

  const {deleteItem} = useContext(CartContext);


    return  (
     
        <div className="container">         
            <div className="card">
                <div className="box">                 
                    <div className="content">
                    <img src={item.imagen} alt={item.nombre}/>
                    
                      <div className="descripcion">
                        <h3>{item.nombre}</h3>
                        <h3> Precio: $ <span>{item.precio}</span></h3>
                        <br></br>
                        <h4> {item.description}</h4>
                         <div>
                           <button onClick={() => deleteItem(item.id)} className="btnModCom">Eliminar</button>
                         </div>          
                      </div>
                    </div>
                </div>
           </div>
           
        </div>
    
    )
}

export default ItemCart;