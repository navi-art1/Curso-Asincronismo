const fetchData = require('../Utils/fetchData');
// si algo no se va a mover ni va a cambiar su nombre se establece en mayusculas
const API =  'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) =>{
    try {
        // creamos un await de la funcion y colocamos el parametro de la api
        const data = await fetchData(url_api);
        const character = await fetchData(`${API} ${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    }catch(error){
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After')