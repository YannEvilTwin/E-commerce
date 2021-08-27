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
              <Navbar nombreDeLaTienda="TIENDA GAMER" />
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
      <Footer />
    </div>
  );
}

export default App;
