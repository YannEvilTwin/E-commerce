import React, { useContext, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router";
import { ShopContext } from "../ShopContext/ShopContext.jsx";
import Spinner from "../Spinner/Spinner.jsx";

const ItemDetailContainer = () => {
  //id que me manda por parametros en url
  const { id } = useParams();
  //guardo todos los productos
  const {productos} = useContext(ShopContext);
  //guardo el producto que busque con find
  const [producto, setProducto] = useState(null);
  const [loading , setLoading] = useState(false);

  //funcion donde busco 1 producto
  const traerElProduct = (idParams) => {
    const buscarProducto = productos.find(
      (item) => item.id === idParams
    );
    setProducto(buscarProducto);
    console.log(buscarProducto);
  };

  useEffect(() => {
    traerElProduct(id);
  }, [id]);
  
  return (

    loading ? <Spinner /> :

    <>
    {  
      producto  
      ? <ItemDetail item={producto} /> 
       
      :<Spinner />
      ? productos.map((item) => {
        if (item.id === id) {
          setProducto(item);
        }
        return item;
      })
      : <Spinner />
    }
    </>
  )
   
  
};

export default ItemDetailContainer;

/* `Cargando ${id}` */