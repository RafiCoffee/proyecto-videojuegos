const dbVideojuegos = "http://192.168.1.146:3004/videojuegos"

export const getVideojuegos = () => {
  return fetch(dbVideojuegos).then(res => res.json()).then(response => {
    const data = response
    const videojuegos = data.map(videojuego => {
        const {id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer} = videojuego
        return {id, nombre, descripcion, fechaLanzamiento, compañia, plataformas, categorias, precio, portada, trailer}
    })
    return videojuegos
  })
}
