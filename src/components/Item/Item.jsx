import React from "react";

const Item = ({ item }) => {
    return  (
     <> 
        <div>
            <div className="card">
                <div className="box">
                    <div className="content">
                    <img src={item.imagen} alt={item.nombre}/>
                    <div className="card-title">
                    <h3>{item.nombre}</h3>
                    <h3> Precio: $ <span>{item.precio}</span></h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </>
    )
}

export default Item;