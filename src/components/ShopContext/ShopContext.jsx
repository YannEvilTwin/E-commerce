import { createContext, useState, useEffect } from 'react'
import { getFirestore } from '../Firebase/firebase'


export const ShopContext = createContext()
export const ShopContextComponent = ({children}) => {
    const [productos, setProducts] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect( () => {
        async function getData() {
            const dataBase = getFirestore(); // Conexion a la base de datos
            const products = await dataBase.collection("productos").get(); // Tomar la coleccion de productos 
            setProducts(products.docs.map(element => {                     // Encuentra la data en firebase
                return {...element.data(), id:element.id}
            })); 
            setLoading(false);
        }
        getData();
    }, [])
    return (
    <ShopContext.Provider value={{productos, loading, setLoading}}>
        {children}
    </ShopContext.Provider>
    )
}