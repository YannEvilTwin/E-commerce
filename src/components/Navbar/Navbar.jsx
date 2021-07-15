import React from "react";
import Cart from "../Navbar/Cart";

const Navbar = (props) => {

console.log(props);

    return (
        <nav>
            <h1>{props.nombreDeLaTienda}</h1>   
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
                <li><Cart/></li>
            </ul>
        </nav>
    );
};

export default Navbar; //siempre exportar con el nombre de la variable

//<button onClick={props.darBienvenida}>Saludame</button>

//<h2>{props.subtitulo}</h2>

//<i class="fab fa-opencart"></i>