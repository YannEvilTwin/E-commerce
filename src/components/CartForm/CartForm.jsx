import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { database } from "../Firebase/firebase";
import firebase from "firebase/app";
import "./CartForm.css";

const CartForm = () => {
    
    const { cart, total } = useContext(CartContext);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const tomarDatos = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const ventas = database.collection("ventas");
        const productos = database.collection("productos");

        const compra = {
            buyer: user,
            items: cart,
            date: new Date().toString(),
            total: total
           
      };

      ventas
      .add(compra)
      .then((refDoc) => {
        cart.map((item) => {
          const decrement = item.cantidad;
          productos.doc(item.id.toString()).update({
            stock: firebase.firestore.FieldValue.increment(-decrement)
          });
        });
        console.log(refDoc.id);
      });
    };

  return (
   <div> 
        <form onSubmit={handleSubmit}>
            <h2>Datos de la compra</h2>
                <div className="cartForm">
                    <label>
                        <input name="email" type="email" onChange={tomarDatos} placeholder="Correo electrónico"/>
                    </label> 
                    <br></br>
                    <br></br>
                    <label>
                        <input name="phone" type="phone" onChange={tomarDatos} placeholder="Teléfono"/>
                    </label>
                    <br></br>
                    <br></br>
                    <label>
                        <input name="name" type="name" onChange={tomarDatos} placeholder="Nombre y Apellido"/>
                    </label>
                    <br></br>
                    <br></br>
                </div>
            
            <div><button type="submit">Comprar</button></div> 
        </form> 
              
    </div> 
 );
}

export default CartForm;


  /*   const createOrder = (email, phone, name) => {
        
        const order = {buyer: { email, phone, name }, item: cart, total: total}  
        const database = getFirestore(); 
        database.collection('orders').add(order);
       } */

