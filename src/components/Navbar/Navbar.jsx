import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./Navbar.css";

const Navbar = (props) => {

    return (
        <nav className= "">
            <h1>{props.nombreDeLaTienda}</h1>
            <ul>
                <li><Link to="">Inicio</Link></li>
                <li><Link to="/category/1">Combos</Link></li>
                <li><Link to="/category/2">Perifericos</Link></li>
                <li><Link>Contacto</Link></li>
                <li><CartWidget className="cartwidget"/></li>
              
            </ul>  
        </nav>
    );
};

export default Navbar; //siempre exportar con el nombre de la variable
