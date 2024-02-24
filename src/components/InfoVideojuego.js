import React from 'react'
import { Link } from 'react-router-dom'
import "./css/InfoVideojuego.css"
import { handleEliminarJuego } from '../helpers/handleHelpers'

export const InfoVideojuego = ({id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer, verInfo, setVerInfo}) => {
  
    const videojuego = {
        id: id,
        nombre: nombre,
        descripcion: descripcion,
        fechaLanzamiento: fechaLanzamiento,
        compañia: compañia,
        plataformas: plataformas,
        categorias: categorias,
        precio: precio,
        portada: portada,
        trailer: trailer
    }
  
  return (
    <div>
        <h2>{nombre}</h2>
        <img src={portada} alt={nombre}/>
        <section>
                <p>Compañia: {compañia}</p>
                <p>Plataformas:</p>
                {
                    plataformas.map(plataforma => <span>| {plataforma} |</span>)
                }
                <br/>
                <p>Fecha De Lanzamiento: {fechaLanzamiento}</p>
                <p>Precio: {precio}€</p> <br/>
                <p>Categorias:</p>
                {
                    categorias.map(categoria => <span>| {categoria} |</span>)
                }
        </section>

        <p>{descripcion}</p>
        <a id="trailer" href={trailer}>Trailer de {nombre}</a>

        <div className='opcionesVideojuego'>
            <button> <Link to={`/videojuegos/update/${id}`}>Editar Videojuego</Link> </button>
            <button onClick={() => handleEliminarJuego(videojuego)}>Eliminar Videojuego</button>
            <button onClick={() => setVerInfo(!verInfo)}>Volver A La Lista</button>
        </div>
    </div>
  )
}
