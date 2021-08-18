import React from "react";
import "./Footer.css";

const Footer = () => {
  return (

    <div>
        <footer>
            <section className="contact-area" id="contact">
                <div className>
                    <div>
                        <div>
                            <div className="contact-content text-center">                    
                                <div class="contact-social">
                                <h3>Copyright &copy; 2021 Todos los derechos reservados.</h3>
                                    <ul>                                   
                                        <li><a className="hover-target" href=""><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a className="hover-target" href=""><i className="fab fa-instagram"></i></a></li>
                                        <li><a className="hover-target" href=""><i className="fab fa-twitter"></i></a></li>
                                        <li><a className="hover-target" href=""><i className="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>       
        </footer>
    </div>  
  );
};
export default Footer;