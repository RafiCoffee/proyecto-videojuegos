import logo from './logo.svg';
import './App.css';
import { ListaVideojuegos } from './components/ListaVideojuegos';
import { Videojuego } from './components/Videojuego';

function App() {

  const {id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer} = {
    id: 0,
    nombre: "The Legend Of Zelda: Ocarina Of Time",
    descripcion: "Link se embarca en un periplo de leyenda a través del tiempo para detener a Ganondorf, el rey de los ladrones Gerudo, que busca la Triforce: una reliquia sagrada que otorga poder ilimitado a su poseedor.",
    fechaLanzamiento: "21/11/1998",
    compañia: "Nintendo",
    plataformas: ["Nintendo 64", "Nintendo 3DS"],
    categorias: ["Accion", "Aventura", "Puzzles"],
    precio: 39.99,
    portada: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_TheLegendofZeldaOcarinaofTime3D_image1600w.jpg",
    trailer: "https://www.youtube.com/watch?v=Jfg6RfClZJg&ab_channel=NintendoofAmerica"
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        <ListaVideojuegos/>
      </section>
    </div>
  );
}

export default App;