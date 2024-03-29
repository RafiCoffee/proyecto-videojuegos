const dbVideojuegos = "http://192.168.1.146:3004/videojuegos"

export const postVideojuego = (nuevoVideojuego) => {
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoVideojuego),
      };
    
      // Realizar la petición POST
      return fetch(dbVideojuegos, requestOptions)
        .then((res) => res.json())
        .then((response) => {
          console.log('Videojuego añadido:', response);
          return response;
        })
        .catch((error) => {
          console.error('Error al añadir videojuego:', error);
          throw error;
        });
    };