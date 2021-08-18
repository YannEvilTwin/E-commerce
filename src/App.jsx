import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';
import { ShopContextComponent } from "./components/ShopContext/ShopContext";
import CartForm from './components/CartForm/CartForm';
import Footer from "./components/Footer/Footer";
import './App.css';


function App() {


  return (
    <div>
    <ShopContextComponent>
      <CartProvider>
        <BrowserRouter>
        <div className="App">
          <Navbar nombreDeLaTienda="TIENDA GAMER"/>
        </div>
        <div className="centrado">
        </div>

        <Switch>
          <Route exact path="/" component={ItemListContainer}></Route>
          <Route path="/category/:category" component={ItemListContainer}></Route>
          <Route path="/Item/:id" component={ItemDetailContainer}></Route>
          <Route exact path="/cart" component={Cart}> 
          <Cart></Cart>
          </Route>
          <Route exact path="/checkout" component={CartForm}></Route>     
        </Switch>
        </BrowserRouter>
      </CartProvider>
    </ShopContextComponent>
    <Footer/>
    </div>
  );
}

export default App;

//si o si componentes con mayuscula
/* Los componentes son funciones, (en js la función se debe ejecutar para que funcionen9, 
  en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", 
  se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
*/
