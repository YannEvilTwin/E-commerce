
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Navbar/Cart';


//import "./archivo.css"


function App() {
 
  return (

  <CartProvider>
    <BrowserRouter>
     <div className="App">
      <Navbar nombreDeLaTienda="TIENDA GAMER"/>
     </div>
     <div className="centrado">
    {/*  {<ItemCount  inicial = {1} stock = {10} />} */} {/* shift alt a */}
      {/* <ItemListContainer/> */}
      {/* <ItemDetailContainer/> */}
    </div>

    <Switch>
      <Route exact path="/" component={ItemListContainer}></Route>
      <Route path="/category/:id" component={ItemListContainer}></Route>
      <Route path="/Item/:id" component={ItemDetailContainer}></Route>
      <Route exact path="/cart" component={Cart}>
        <Cart></Cart>
      </Route>
    </Switch>
    </BrowserRouter>
  </CartProvider>
   

  );
}



export default App;

//si o si componentes con mayuscula
/* Los componentes son funciones, (en js la función se debe ejecutar para que funcionen9, 
  en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", 
  se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
*/
