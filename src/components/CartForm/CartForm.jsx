import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";
import { database } from "../Firebase/firebase";
import firebase from "firebase/app";
import Swal from 'sweetalert2'
import { useHistory, Link } from "react-router-dom";
import "./CartForm.css";

const CartForm = () => {

    let history = useHistory();   
    const { cart, total, setCart, vaciarCarrito } = useContext(CartContext);
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
        
        Swal.fire(
            '¡Compra realizada!',
            '',
            'success'
          )
          .then(() => {
        setCart([])
        history.push("/");  
      })});  
    };

  return (
   <div>
       <form onSubmit={handleSubmit}>
           <h2 className="centrado">Datos de la compra</h2>
           <div className="cartForm">
               <label>
                   <input name="email" type="email" onChange={tomarDatos} placeholder="Correo electrónico" />
               </label>
               <br></br>
               <br></br>
               <label>
                   <input name="phone" type="phone" onChange={tomarDatos} placeholder="Teléfono" />
               </label>
               <br></br>
               <br></br>
               <label>
                   <input name="name" type="name" onChange={tomarDatos} placeholder="Nombre y Apellido" />
               </label>
               <br></br>
               <br></br>
           </div>
           <div className="confirmacion">
               <div>
                   <button type="submit">Confirmar<br></br>compra</button>
               </div>
           </div>
       </form>

       <div id="botonForm1">
           <Link to="/"><button type="submit">Continuar<br></br>compra</button></Link>
       </div>
       <div id="botonForm2"><button onClick={vaciarCarrito}type="submit">Cancelar<br></br>compra</button></div>


   </div>
 );
}

export default CartForm;