export const deleteVideojuego = (videojuegoAEliminar) => {
    const dbVideojuegos = `http://192.168.1.146:3004/videojuegos/${videojuegoAEliminar.id}`

    const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videojuegoAEliminar),
      };
    
      // Realizar la petición PUT
      return fetch(dbVideojuegos, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          console.log('Videojuego eliminado:', response);
          return response;
        })
        .catch((error) => {
          console.error('Error al eliminar videojuego:', error);
          throw error;
        });
}
