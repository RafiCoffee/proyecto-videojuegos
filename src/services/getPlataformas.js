const dbPlataformas = "http://192.168.1.146:3004/plataformas"

export const getPlataformas = () => {
  return fetch(dbPlataformas).then(res => res.json()).then(response => {
    const data = response
    const plataformas = data.map(plat => {
        const {id, plataforma} = plat
        return {id, plataforma}
    })

    return plataformas
  })
}