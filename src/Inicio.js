import logo from './pikachu.png';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
function Inicio() {
  return (
    <BrowserRouter>
        <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <a
            className="App-link"
            href='/home'
            rel="noopener noreferrer"
            >

          Pokédex
          </a>
        </header>
       </div>    
       </BrowserRouter>    

  );
}

export default Inicio;