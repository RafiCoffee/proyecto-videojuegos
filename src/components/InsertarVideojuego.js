import React, { useEffect, useState } from 'react'
import { getCategorias } from '../services/getCategorias'
import { getPlataformas } from '../services/getPlataformas'
import { formHandleChecked, handleChange, handleSubmit } from '../helpers/handleHelpers'
import './css/FormularioVideojuego.css'

export const InsertarVideojuego = () => {

    const [nuevoJuego, setNuevoJuego] = useState({
        id: 0,
        nombre: "",
        descripcion: "",
        fechaLanzamiento: "",
        compañia: "",
        plataformas: [],
        categorias: [],
        precio: 0,
        portada: "",
        trailer: ""
    })

    const [categoriasOptions, setCategoriasOptions] = useState([])
    const [plataformasOptions, setPlataformasOptions] = useState([])

    useEffect(() => {
        getCategorias().then(categorias => setCategoriasOptions(categorias))
        getPlataformas().then(plataformas => setPlataformasOptions(plataformas))
    }, [])

  return (
    <div>
        <form onSubmit={handleSubmit({juego: nuevoJuego, peticion: 0})}>
            <div className='contenedorFormulario'>
                <div>
                    <div className='contenedorAtributos'>
                        <strong><label htmlFor="nombre">Nombre:</label></strong>
                        <input type="text" id="nombre" name="nombre" onChange={handleChange(nuevoJuego, setNuevoJuego)} required/>

                        <strong><label htmlFor="descripcion">Descripcion:</label></strong>
                        <input type="text" id="descripcion" name="descripcion" onChange={handleChange}/>

                        <strong><label htmlFor="fechaLanzamiento">Fecha De lanzamiento:</label></strong>
                        <input type="date" id="fechaLanzamiento" name="fechaLanzamiento" onChange={handleChange(nuevoJuego, setNuevoJuego)} required/>

                        <strong><label htmlFor="compañia">Compañia:</label></strong>
                        <input type="text" id="compañia" name="compañia" onChange={handleChange(nuevoJuego, setNuevoJuego)}/>

                        <strong><label htmlFor="precio">Precio:</label></strong>
                        <input type="number" step="0.01" id="precio" name="precio" onChange={handleChange(nuevoJuego, setNuevoJuego)} required/>

                        <strong><label htmlFor="portada">Portada:</label></strong>
                        <input type="text" id="portada" name="portada" onChange={handleChange(nuevoJuego, setNuevoJuego)}/>

                        <strong><label htmlFor="trailer">Trailer:</label></strong>
                        <input type="text" id="trailer" name="trailer" onChange={handleChange(nuevoJuego, setNuevoJuego)}/>
                    </div>

                    <div className='contenedorCheckboxes'>
                        <div id='titulos'>
                            <strong><label htmlFor="categorias">Categorias:</label></strong>
                            <strong><label htmlFor="plataformas">Plataformas:</label></strong>
                        </div>

                        <div id='checkboxes'>
                            <div className='grupoCheckbox' id='categorias' name="categorias">
                                {
                                    categoriasOptions.map(({id, categoria}) => {
                                        return <div key={id}>
                                            <input type='checkbox' id={categoria} name='categorias' onChange={formHandleChecked(nuevoJuego, setNuevoJuego)}/>
                                            <label htmlFor={categoria}>{categoria}</label>
                                        </div>
                                    })
                                }
                            </div>

                            <div className='grupoCheckbox' id='plataformas' name="plataformas">
                                {
                                    plataformasOptions.map(({id, plataforma}) => {
                                        return <div key={id}>
                                            <input type='checkbox' id={plataforma} name='plataformas' onChange={formHandleChecked(nuevoJuego, setNuevoJuego)}/>
                                            <label htmlFor={plataforma}>{plataforma}</label>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <button type="submit">Agregar Videojuego</button>
            </div>
        </form>
    </div>
  )
}
