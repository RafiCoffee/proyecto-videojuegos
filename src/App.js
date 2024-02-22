import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { PaginaVideojuegos } from './components/PaginaVideojuegos';
import { InsertarVideojuego } from './components/InsertarVideojuego';
import { EditarVideojuego } from './components/EditarVideojuego';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h4>Biblioteca Videojuegos</h4>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/videojuegos">Videojuegos</Link>
          <span>|</span>
          <Link to="/videojuegos/insert">Añadir Videojuegos</Link>
        </nav>
      </header>
      <div className='contenedorPagina'>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/videojuegos" exact element={<PaginaVideojuegos/>}/>
          <Route path="/videojuegos/insert" exact element={<InsertarVideojuego/>}/>
          <Route path="/videojuegos/update/:videojuegoId" exact element={<EditarVideojuego/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;