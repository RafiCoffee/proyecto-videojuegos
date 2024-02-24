import React, { useState } from 'react'
import './css/Videojuego.css'
import { InfoVideojuego } from './InfoVideojuego'

export const Videojuego = ({id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer}) => {

    const [verInfo, setVerInfo] = useState(false)

  return (
    <div id={id} className='contenedorVideojuego' onClick={() => setVerInfo(!verInfo)}>
        <input type='checkbox' id='botonModal' checked={verInfo}/>
        <div className='contenedorModal'>
            <div className='contenidoModal'>
                <InfoVideojuego id={id} nombre={nombre} fechaLanzamiento={fechaLanzamiento} compañia={compañia} plataformas={plataformas} categorias={categorias} precio={precio} portada={portada} trailer={trailer} verInfo={verInfo} setVerInfo={setVerInfo}/>
            </div>
        </div>

        <h2>{nombre}</h2>

        <img src={portada} alt={nombre}/>

        {
            descripcion.length > 100
            ? <p>{descripcion.substring(0, 101)}...</p>
            : <p>{descripcion}</p>
        }
    </div>
  )
}
