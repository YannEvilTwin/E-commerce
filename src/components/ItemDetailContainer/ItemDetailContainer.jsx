import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router";
import { misProductos } from "../../misProductos";

const ItemDetailContainer = () => {
  //id que me manda por parametros en url
  const { id } = useParams();
  //guardo todos los productos
  const [productos, setProductos] = useState(misProductos);
  //guardo el producto que busque con find
  const [producto, setProducto] = useState({});

  //funcion donde busco 1 producto
  const traerElProduct = (idParams) => {
    const buscarProducto = productos.find(
      (item) => item.id === parseInt(idParams)
    );
    setProducto(buscarProducto);
  };

  useEffect(() => {
    traerElProduct(id);
  }, []);

  return (
    <>
      <ItemDetail item={producto} />
    </>
  );
};

export default ItemDetailContainer;