import React, { useEffect, useState } from 'react'
import { getVideojuegos } from '../services/getVideojuegos'
import { Videojuego } from './Videojuego';

export const ListaVideojuegos = ({busqueda = '', busquedaCategorias = [''], busquedaPlataformas = ['']}) => {
    const [videojuegos, setVideojuegos] = useState([]);

    useEffect(() => {
        getVideojuegos({busqueda, busquedaCategorias, busquedaPlataformas}).then(videojuegos => setVideojuegos(videojuegos))
    }, [busqueda, busquedaCategorias, busquedaPlataformas])

  return videojuegos.map(({id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer}) =>
    <Videojuego
        key={id}
        id={id}
        nombre={nombre}
        descripcion={descripcion}
        fechaLanzamiento={fechaLanzamiento}
        compañia={compañia}
        plataformas={plataformas}
        categorias={categorias}
        precio={precio}
        portada={portada}
        trailer={trailer}
    />
  )
}