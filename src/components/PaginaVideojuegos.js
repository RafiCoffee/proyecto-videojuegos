import React, { useState, useEffect } from 'react'
import { ListaVideojuegos } from './ListaVideojuegos'
import { getCategorias } from '../services/getCategorias'
import { getPlataformas } from '../services/getPlataformas'
import './css/PaginaVideojuegos.css'
import { CheckboxGroup } from './CheckboxGroup'

export const PaginaVideojuegos = () => {

    const [busqueda, setBusqueda] = useState('')
    const [busquedaCategorias, setBusquedaCategorias] = useState([])
    const [busquedaPlataformas, setBusquedaPlataformas] = useState([])

    const [categoriasOptions, setCategoriasOptions] = useState([])
    const [plataformasOptions, setPlataformasOptions] = useState([])

    useEffect(() => {
        getCategorias().then(categorias => setCategoriasOptions(categorias))
        getPlataformas().then(plataformas => setPlataformasOptions(plataformas))

    }, [categoriasOptions, plataformasOptions])

  return (
    <div className='contenedorPaginaVideojuegos'>
        <label htmlFor="categorias">Categorias:</label>
        <div className='grupoCheckbox' id='categorias' name="categorias">
            {
                categoriasOptions.map(({id, categoria}) => {
                    return <CheckboxGroup id={id} attr={categoria} busquedaAttr={busquedaCategorias} setBusquedaAttr={setBusquedaCategorias}/>
                })
            }
        </div> <br/>
        <label htmlFor="plataformas">Plataformas:</label>
        <div className='grupoCheckbox' id='plataformas' name="plataformas">
            {
                plataformasOptions.map(({id, plataforma}) => {
                    return <CheckboxGroup id={id} attr={plataforma} busquedaAttr={busquedaPlataformas} setBusquedaAttr={setBusquedaPlataformas}/>
                })
            }
        </div> <br/>
        <label htmlFor='buscarNombre'>Buscar Por Nombre: </label>
        <input  type='text' defaultValue='' onChange={v => setBusqueda(v.target.value)}/>
        <ListaVideojuegos busqueda={busqueda} busquedaCategorias={busquedaCategorias} busquedaPlataformas={busquedaPlataformas}/>
    </div>
  )
}
