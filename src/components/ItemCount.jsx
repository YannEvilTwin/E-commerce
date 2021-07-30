import React, { useState } from 'react'


const ItemCount = ({ initial, stock, contador, setContador }) => {
   
   const handleClick = () => {
      if(contador < stock){
         setContador(contador + 1)
      } 
   }

   const handleClickResta = () => {
      if(contador > initial){
         setContador(contador - 1)
      } 
   }
   
    return (
       <div className="centrado">
          <button className="btn-contador" onClick = {handleClickResta}>
           -
          </button>
            <p>{contador}</p>
          <button className="btn-contador" onClick = {handleClick}>
           +
          </button>
       </div>
    )
}

export default ItemCount;

