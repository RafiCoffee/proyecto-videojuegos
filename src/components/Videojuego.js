import React from 'react'
import './css/Videojuego.css'

export const Videojuego = ({id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer}) => {


  return (
    <div id={id} className='contenedorVideojuego'>
        <div>
            <h4>{nombre}</h4>
            <span>Compañia: {compañia}</span>
            <img src={portada} alt={nombre}/>
            <section>
                {
                    plataformas.map(plataforma => <span>- {plataforma} -</span>)
                }
            </section>
        </div>

        <span>Fecha De Lanzamiento: {fechaLanzamiento}</span>
        <span>Precio: {precio}</span> <br/>
        <p>{descripcion}</p> <br/>
        <section>
            {
                categorias.map(categoria => <span>- {categoria} -</span>)
            }
        </section>
        <a href={trailer}>Trailer de {nombre}</a>
    </div>
  )
}
