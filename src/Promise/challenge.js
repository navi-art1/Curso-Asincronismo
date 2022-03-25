const fetchData = require('../Utils/fetchData')
const API =  'https://rickandmortyapi.com/api/character/';

// ahora una vez requerido, vamos a empezar a pedir las peticiones a la API

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API} ${data.results[0].id}`)
    })
    .then(data =>{
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error)
