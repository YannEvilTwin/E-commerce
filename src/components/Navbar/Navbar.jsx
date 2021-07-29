import React from "react";
import Cart from "../Navbar/Cart";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const Navbar = (props) => {

console.log(props);

    return (
        <nav>
            <h1>{props.nombreDeLaTienda}</h1>   
            <ul>
                <li><Link to="">Inicio</Link></li>
                <li><Link to="/category/1">Combos</Link></li>
                <li><Link to="/category/2">Perifericos</Link></li>
                <li><Link>Contacto</Link></li>
                <li><CartWidget/></li>
              
            </ul>
        </nav>
    );
};

export default Navbar; //siempre exportar con el nombre de la variable

//<button onClick={props.darBienvenida}>Saludame</button>

//<h2>{props.subtitulo}</h2>

//<i class="fab fa-opencart"></i>
//  <li><Cart/></li>