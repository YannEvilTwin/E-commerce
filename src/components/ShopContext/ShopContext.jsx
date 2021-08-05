import { createContext, useState, useEffect } from 'react'
import { getFirestore } from '../Firebase/firebase'


export const ShopContext = createContext()
export const ShopContextComponent = ({children}) => {
    const [productos, setProducts] = useState([])
    useEffect( () => {
        async function getData() {
            const dataBase = getFirestore(); // Conexion a la base de datos
            const products = await dataBase.collection("productos").get(); // Tomar la coleccion de productos
            setProducts(products.docs.map(element => element.data())); // Encuentra la data en firebase
            console.log(products.docs.map(element => element.data()));
        }
        getData();
    }, [])
    return (
    <ShopContext.Provider value={{productos}}>
        {children}
    </ShopContext.Provider>
    )
}