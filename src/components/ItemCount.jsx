import React, { useState } from 'react'

const ItemCount = ({inicial, stock}) => {
   const[contador, setContador] = useState(inicial)

   const handleClick = () => {
      if(contador < stock){
         setContador(contador + 1)
      } 
   }

   const handleClickResta = () => {
      if(contador > inicial){
         setContador(contador - 1)
      } 
   }
   
    return (
       <div className="centrado">
          <button className="button fas fa-chevron-circle-left" onClick = {handleClickResta}>
           
          </button>
            <p>{contador}</p>
          <button className = "button fas fa-chevron-circle-right" onClick = {handleClick}>
            
          </button>
       </div>
    )
}

export default ItemCount;

