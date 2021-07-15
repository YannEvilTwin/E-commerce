
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount';


//import "./archivo.css"


function App() {

  const darBienvenida = () => alert("Bienvenido a nuestra tienda!!!")
  
  return (
    <>
     <div className="App">
      <Navbar nombreDeLaTienda="TIENDA GAMER" subtitulo="" darBienvenida={darBienvenida}/>
     </div>
     <div className="centrado">
     {/*  <ItemCount  inicial = {1} stock = {10} /> */} {/* shift alt a */}
      <ItemListContainer/>
    </div>
    
    </>
  );
}



export default App;

//si o si componentes con mayuscula
/* Los componentes son funciones, (en js la función se debe ejecutar para que funcionen9, 
  en este caso, los componentes que se quieren mostrar en el DOM, que devuelven algún tag "HTML", 
  se los importa en el componente donde se los quiere utilizar, de ese modo se ejecuta
*/
